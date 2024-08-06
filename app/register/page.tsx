'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { z } from 'zod'
import { CheckIcon, Loader2, X } from 'lucide-react'

import { CustomInput } from '@/components/notespali-ui/Custom-input'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'

import { registerFormSchema } from '@/zodSchema'

import { LoadingSpinner } from '@/components/notespali-ui/OverlaySpinner'

function Register() {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const {
    mutate: registerUser,
    isPending,
    isSuccess,
  } = useMutation({
    mutationKey: ['user-register'],
    // enable manual refetch on error to prevent automatic refetching
    mutationFn: async (data: z.infer<typeof registerFormSchema>) => {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      return json
    },
    onSuccess: async (data, i) => {
      console.log({ data }, i)
      if (data.error) {
        toastError(data.message)
      } else {
        await router.push(`/verify/${data?.user?.email}`)
        toastSuccess(data.message)
        form.reset()
      }
    },
    onError: (data) => {
      console.log({ data })
      toastError(data.message)
    },
  })

  //function to render successfully registered toast
  const toastSuccess = (message: string) => {
    toast('', {
      action: (
        <div className="w-full flex justify-start items-center">
          <div className="w-5 h-5 mr-2 bg-black flex justify-center items-center rounded-full">
            <CheckIcon className=" w-3 h-3 font-bold  " color="white" />
          </div>
          <span className="first-letter:capitalize font-medium">{message}</span>
        </div>
      ),
    })
  }

  // function to render error toast
  const toastError = (message: string) => {
    toast('', {
      action: (
        <div className="w-full flex justify-start items-center">
          <div className="min-w-5 min-h-5 mr-2 bg-black flex justify-center items-center rounded-full">
            {/*put error icon */}

            <X className=" w-3 h-3 font-bold  " color="white" />
          </div>
          <span className="first-letter:capitalize font-medium">{message}</span>
        </div>
      ),
    })
  }

  const onSubmit = async (data: z.infer<typeof registerFormSchema>) => {
    try {
      await registerUser(data)
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="min-h-screen flex justify-center items-center"
      >
        {/* show spinner if pending or success */}
        {isPending ? <LoadingSpinner /> : null}

        <div className="flex w-full max-w-[420px] flex-col gap-8  p-8 md:max-w-[420px]">
          <main className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-2xl text-center font-semibold">
                Create your account
              </h1>

              <h3 className="text-xs text-gray-500 w-full flex flex-row items-center justify-center">
                <p>Already have an account ?</p>&nbsp;
                <Link href={'/signin'} className="text-blue-700 font-semibold">
                  Sign In
                </Link>
              </h3>
            </div>

            <div className="jusify-center flex flex-col items-center gap-4">
              {/* fullname field */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        {...field}
                        autoFocus
                        placeholder="Full Name"
                        type="text"
                      />
                    </FormControl>
                    {form.formState.errors.fullName && (
                      <p className="text-xs font-medium text-red-600">
                        {form.formState.errors.fullName.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              {/* email field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input {...field} placeholder="Email" type="email" />
                    </FormControl>
                    {form.formState.errors.email && (
                      <p className="text-xs font-medium text-red-600">
                        {form.formState.errors.email?.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              {/* password field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <CustomInput
                        {...field}
                        placeholder="Password"
                        type="password"
                      />
                    </FormControl>
                    {form.formState.errors.password && (
                      <p className="text-xs font-medium text-red-600">
                        {form.formState.errors.password.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
              {/* confirm password field */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <CustomInput
                        {...field}
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </FormControl>
                    {form.formState.errors.confirmPassword && (
                      <p className="text-xs font-medium text-red-600">
                        {form.formState.errors.confirmPassword.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />

              <div className="w-full flex flex-col gap-3">
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    'Register'
                  )}
                </Button>
              </div>
            </div>
          </main>
        </div>
      </form>
    </Form>
  )
}

export default Register
