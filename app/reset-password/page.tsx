'use client'
import React from 'react'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { toast } from 'sonner'

import EmailVerified from '@/components/notespali-ui/EmailVerified'
import VerificationEmailTemplate from '@/components/notespali-ui/VerificationEmailTemplate'
import VerifyEmail from '@/components/notespali-ui/VerifyEmail'

function ResetPassword() {
  const resetPasswordlinkService = () => {
    return toast('Reset Email Sent')
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background py-12 px-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <Link href="#" className="flex justify-center" prefetch={false}>
            <MountainIcon className="h-12 w-12" />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              required
              placeholder="Email address"
              className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
            />
          </div>
          <div>
            <Button
              onClick={() => {
                resetPasswordlinkService()
              }}
              className="flex w-full justify-center rounded-md bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </div>
    // <EmailVerified />
    // <VerificationEmailTemplate />
    // <VerifyEmail />
  )
}

export default ResetPassword

function MountainIcon(props: React.SVGAttributes<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
