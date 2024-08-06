/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VfNAKRAOTQl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { z } from 'zod'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const verifySchema = z
  .object({
    email: z.string().email({ message: 'Please enter a valid email' }),
    OTP: z.string().min(6, { message: 'Please enter a valid OTP' }),
  })
  .refine((data) => data.OTP.length === 6, {
    message: 'Please enter a valid OTP',
    path: ['OTP'],
  })

function VerifyEmail({ newEmail }: { newEmail: string }) {
  const router = useRouter()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: '',
    },
  })

  const { mutate: resendEmail } = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      return json
    },
    onSuccess: async (data) => {
      console.log({ data })
      if (data.error) {
        toast.error(data.message)
        return
      } else {
        toast.success(data.message)
      }
    },
    onError: () => {
      toast.error('Email verification failed')
    },
  })
  const { mutate } = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      return json
    },
    onSuccess: async (data) => {
      console.log({ data })
      if (data.error) {
        toast.error(data.message)
        return
      } else {
        toast.success(data.message)
        router.push('/dashboard')
      }
    },
    onError: () => {
      toast.error('Email verification failed')
    },
  })

  const onResend = () => {
    resendEmail({ email: newEmail })
  }

  const onSubmit = async (data: any) => {
    console.log({ data })
    const body = {
      email: newEmail,
      token: data.otp,
    }

    try {
      await mutate(body)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              <Controller
                control={control}
                name="otp"
                rules={{ validate: (value) => value.length === 6 }}
                render={({ field, fieldState }) => (
                  <InputOTP
                    {...field}
                    autoFocus
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
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Verify
            </Button>
            <p className="text-sm text-muted-foreground">
              Didn&apos;t receive the code?{' '}
              <button
                onClick={() => {
                  onResend()
                }}
                type="button"
                className="font-medium text-primary hover:underline"
              >
                Resend
              </button>
            </p>
          </div>
        </div>
      </div>
    </form>
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
