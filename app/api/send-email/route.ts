import { db } from '../../../lib/prisma'
import EmailTemplate from '../../../components/notespali-ui/EmailTemplate'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { email, verificationLink } = body
    console.log({ email, verificationLink })

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: 'Hello world',
      react: EmailTemplate(),
    })

    console.log({ data, error })

    if (error) {
      return NextResponse.json(
        {
          message: 'Error sending verification email',
          error: true,
        },
        { status: 400 }
      )
    }

    return Response.json(
      {
        message: 'Verification email sent successfully',
        error: false,
        data: data,
      },
      { status: 201 }
    )

    // remove the user from the database
    return NextResponse.json(
      { message: 'Verification Email sent', error: false },
      { status: 201 }
    )
  } catch (err) {
    // log the error in the console for debugging purposes
    console.log('[REGISTER ERROR]', err)
    return new NextResponse('internal error', { status: 400 })
  }
}
