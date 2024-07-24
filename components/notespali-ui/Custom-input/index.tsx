'use client'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export const CustomInput = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handlePassword = () => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
    }
  }

  //FIXME: focus gone after eye button click should It should be fixed

  return (
    <div className=" relative ">
      <Input {...props} type={showPassword ? 'text' : 'password'} />
      <div className="absolute right-4 top-[50%]    translate-y-[-50%] text-muted-foreground">
        <Eye
          onClick={handlePassword}
          className={cn('h-4 w-4 cursor-pointer', !showPassword && 'hidden')}
        />
        <EyeOff
          onClick={handlePassword}
          className={cn('h-4 w-4 cursor-pointer', showPassword && 'hidden')}
        />
      </div>
    </div>
  )
}
