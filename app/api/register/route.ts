import { db } from '../../../lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import * as bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { sendEmail } from '../send-email/sendEmail'
import { error } from 'console'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // extract parameters
    const { email, fullName, password, confirmPassword } = body

    // check if email fullname password and confirm password non-empty
    if (!email || !fullName || !password || !confirmPassword) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
    }

    // check if password is atleast 5 characters long and confirm password matches
    if (password.length < 5) {
      return NextResponse.json(
        { message: 'Password must be at least 5 characters long' },
        {
          status: 400,
        }
      )
    }

    // check if password and confirm password match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: 'Password and confirm Password did not match', error: true },
        {
          status: 400,
        }
      )
    }

    // check if email already exists in the database
    const userExist = await db.user.findUnique({
      where: {
        email,
      },
    })

    // if user already exists return error message and status code 400
    if (userExist) {
      return NextResponse.json(
        { message: 'User with this email already exist', error: true },
        {
          status: 400,
        }
      )
    }

    // hash the password before saving it to the database
    // saltRounds is a parameter that affects the time it takes to compute the hash,
    // higher the value, more time it takes. Here we use 12 as a standard value.
    // The higher the value, the more secure the hash, but the slower it is to compute.

    // hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 12)

    // generate a verification token for the user
    const uuid = uuidv4()
    const verificationCode = uuid.replace(/[^a-zA-Z0-9]/g, '').substring(0, 6)
    const hashCode = await bcrypt.hash(verificationCode, 12) // hash the verificationCode

    //create 6 digit alphanumeric code

    // create a new user in the database with hashed password
    const user = await db.user.create({
      data: {
        email,
        fullName,
        isEmailVerified: false,
        password: hashedPassword,
        verificationRequest: {
          create: {
            identifier: 'email',
            token: hashCode,
            expires: new Date(Date.now() + 3600000), // 1 hour
          },
        },
      },
    })

    if (user) {
      // send verification email
      const result = await sendEmail(email, verificationCode)

      if (result && result.data) {
        return NextResponse.json(
          {
            message: 'User created successfully and verification email sent',
            user,
            error: false,
          },
          { status: 201 }
        )
      }

      if (result && result.error) {
        // log the error in the console for debugging purposes
        return NextResponse.json(
          { message: 'Error sending email', error: true },
          { status: 400 }
        )
      }
    }

    // remove the user from the database
  } catch (err) {
    // log the error in the console for debugging purposes
    console.log('[REGISTER ERROR]', err)
    return new NextResponse('internal error', { status: 400 })
  }
}
