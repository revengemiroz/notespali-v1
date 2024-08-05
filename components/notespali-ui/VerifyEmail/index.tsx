/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VfNAKRAOTQl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from '@/components/ui/input'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { Button } from '@/components/ui/button'

function VerifyEmail() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div className="space-y-2">
          <MailOpenIcon className="mx-auto h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Verify your email
          </h1>
          <p className="text-muted-foreground">
            We've sent a verification code to your email address. Please enter
            the code below to confirm your identity.
          </p>
        </div>
        <div className="space-y-4">
          <div className="w-full">
            <InputOTP
              className="w-full"
              maxLength={6}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
            >
              <InputOTPGroup className="w-full">
                <InputOTPSlot
                  index={0}
                  className="w-full h-12 uppercase font-bold"
                />
                <InputOTPSlot
                  index={1}
                  className="w-full h-12 uppercase font-bold"
                />
                <InputOTPSlot
                  index={2}
                  className="w-full h-12 uppercase font-bold"
                />
                <InputOTPSlot
                  index={3}
                  className="w-full h-12 uppercase font-bold"
                />
                <InputOTPSlot
                  index={4}
                  className="w-full h-12 uppercase font-bold"
                />
                <InputOTPSlot
                  index={5}
                  className="w-full h-12 uppercase font-bold"
                />
              </InputOTPGroup>
            </InputOTP>
            {/* {Array.from({ length: 6 }).map((_, i) => (
              <Input
                key={i}
                type="text"
                maxLength={1}
                className="h-12 w-full rounded-md border border-input bg-background px-3 text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            ))} */}
          </div>
          <Button className="w-full">Verify</Button>
          <p className="text-sm text-muted-foreground">
            Didn&apos;t receive the code?{' '}
            <button
              type="button"
              className="font-medium text-primary hover:underline"
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail

function MailOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  )
}
