import { v4 as uuidv4 } from 'uuid'
import { db } from '@/lib/prisma'
// generate verification token
export function generateVerificationToken(length = 32) {
  const token = uuidv4()
  const expires = new Date().getTime() + 1000 * 60 * 60 * 1 // 1 hr timeout

  // check existing tokens
  const existingToken = getVerificationTokenByEmail(token)
  if (existingToken) {
    return generateVerificationToken(length)
  }

  // check if the token is valid
  return { token, expires }
}

// get verification token by email
export function getVerificationTokenByEmail(email: string) {
  try {
    const verificationToken = db.verificationRequest.findFirst({
      where: { email: email },
    })
  } catch (error) {}
}
