import { Resend } from 'resend'

import EmailTemplate from '@/components/notespali-ui/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(email: string, verificationCode: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: 'Verification Code',
      react: EmailTemplate({ verificationCode, email }),
    })
    return { data, error }
  } catch (err) {
    // log the error in the console for debugging purposes
    console.log('[SEND EMAIL ERROR]', err)
  }
}
