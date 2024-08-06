'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import VerifyEmail from '@/components/notespali-ui/VerifyEmail'

function page() {
  const path = usePathname()
  const newEmail = path.replace('/verify/', '')

  return <VerifyEmail newEmail={newEmail} />
}

export default page
