import { db } from '../../../lib/prisma'
import EmailTemplate from '../../../components/notespali-ui/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { sendEmail } from './sendEmail'
import { v4 as uuidv4 } from 'uuid'
import * as bcrypt from 'bcryptjs'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { email } = body

    console.log({ email })

    if (!email) {
      return NextResponse.json(
        {
          message: 'Missing fields',
          error: true,
        },
        { status: 400 }
      )
    }

    // Additional input validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          message: 'Invalid email format',
          error: true,
        },
        { status: 400 }
      )
    }

    // check if email exist in the backend for verification
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
      include: {
        verificationRequest: true,
      },
    })

    console.log({ user })

    if (!user) {
      return NextResponse.json(
        {
          message: 'Email not found',
          error: true,
        },
        { status: 400 }
      )
    }

    // send verification email
    if (user && !user?.isEmailVerified) {
      const uuid = uuidv4()
      const verificationCode = uuid.replace(/[^a-zA-Z0-9]/g, '').substring(0, 6)
      const hashCode = await bcrypt.hash(verificationCode, 12) // hash the verificationCode

      console.log({ email }, { verificationCode })
      const result = await sendEmail(email, verificationCode)

      if (result && result?.error) {
        return NextResponse.json(
          {
            message: 'Error sending verification email',
            error: true,
          },
          { status: 400 }
        )
      }

      if (user.verificationRequest) {
        await db.verificationRequest.update({
          where: {
            id: user.verificationRequest.id,
          },
          data: {
            token: hashCode,
            expires: new Date(Date.now() + 3600000), // 1 hour
          },
        })
      } else {
        await db.verificationRequest.create({
          data: {
            userId: user.id,
            identifier: 'email',
            token: hashCode,
            expires: new Date(Date.now() + 3600000), // 1 hour
          },
        })
      }

      return Response.json(
        {
          message: 'Verification email sent successfully',
          error: false,
          data: result?.data,
        },
        { status: 201 }
      )
    }

    if (user && user?.isEmailVerified) {
      return NextResponse.json(
        {
          message: 'Email already verified',
          error: true,
        },
        { status: 400 }
      )
    }
  } catch (err) {
    // log the error in the console for debugging purposes
    console.log('[RESEND EMAIL ERROR]', err)
    return new NextResponse('internal error', { status: 400 })
  }
}
