import React from 'react'

import { CustomInput } from '@/components/notespali-ui/Custom-input'
import { Button } from '@/components/ui/button'
import { Cloud } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'

function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center">
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
            <div className="w-full">
              <Input placeholder="Full Name" type="email" />
            </div>
            <div className="w-full">
              <Input placeholder="Email" type="email" />
            </div>
            <div className="w-full">
              <CustomInput placeholder="Password" type="password" />
            </div>
            <div className="w-full">
              <CustomInput placeholder="Confirm Password" type="password" />
            </div>

            <div className="w-full flex flex-col gap-3">
              <Button className="w-full">Register</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Register
