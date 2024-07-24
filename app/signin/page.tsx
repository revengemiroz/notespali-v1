import React from 'react'

import { CustomInput } from '@/components/notespali-ui/Custom-input'
import { Button } from '@/components/ui/button'
import { Cloud } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

function SignIn() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex w-full max-w-[420px] flex-col gap-8  p-8 md:max-w-[420px]">
        <main className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl text-center font-semibold">
              Sign in to your account
            </h1>

            <h3 className="text-xs text-gray-500 w-full flex flex-row items-center justify-center">
              <p>Don&apos;t have an account ?</p>&nbsp;
              <Link href={'/register'} className="text-blue-700 font-semibold">
                Register
              </Link>
            </h3>
          </div>

          <div className="jusify-center flex flex-col items-center gap-4">
            <div className="w-full">
              <Input placeholder="Email" type="email" />
            </div>
            <div className="w-full">
              <CustomInput placeholder="Password" type="password" />
            </div>

            <div className="w-full flex flex-col gap-3">
              <Button className="w-full">Log In</Button>
              <Button
                className="w-full flex flex-row gap-3 items-center justify-center"
                variant="outline"
              >
                <Cloud />
                <span>Login with Google</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default SignIn
