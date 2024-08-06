import { db } from '../../../lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import * as bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // extract parameters
    const { email, token } = body
    console.log({ body })

    // compare token with hashed token in database
    const user = await db.user.findUnique({
      where: {
        email,
      },
      include: {
        verificationRequest: true,
      },
    })

    console.log({ user }, user?.verificationRequest)

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email to verify', error: true },
        { status: 400 }
      )
    }

    // find the latest token from the array
    // check if token is valid
    const isValidToken = await bcrypt.compare(
      token,
      user.verificationRequest?.token ?? ''
    )

    if (
      !isValidToken ||
      new Date().getTime() > (user.verificationRequest?.expires?.getTime() ?? 0)
    ) {
      return NextResponse.json(
        { message: 'Invalid token', error: true },
        { status: 400 }
      )
    }

    // update the user in the database
    if (isValidToken) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          isEmailVerified: true,
        },
      })
    }

    // remove the user from the database
    return NextResponse.json(
      { message: 'Email verification completed' },
      { status: 201 }
    )
  } catch (err) {
    // log the error in the console for debugging purposes
    console.log('[VERIFY EMAIL ERROR]', err)
    return new NextResponse('internal error', { status: 400 })
  }
}
