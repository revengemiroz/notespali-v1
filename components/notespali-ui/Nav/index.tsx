'use client'

import React, { useState } from 'react'

import { NavbarUserDropdown } from './user-profile-dropdown'
import { Button } from '@/components/ui/button'

import ContactUsForm from '@/components/notespali-ui/ContactUsForm'
import { useRouter } from 'next/navigation'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  return (
    <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <input
        type="search"
        placeholder="Search..."
        className="px-3 border py-1 rounded-md placeholder:text-sm"
      />
      <div className="flex items-center gap-4">
        <Button
          className="text-[11px] h-auto py-2 px-3 rounded-full"
          size={'sm'}
          onClick={() => router.push('/add-notes')}
        >
          Add Notes
        </Button>
        <Button
          className="text-[11px] h-auto py-2 px-3 rounded-full"
          variant={'outline'}
          size={'sm'}
          onClick={() => setIsOpen(true)}
        >
          Contact Us
        </Button>
        <NavbarUserDropdown />
      </div>
      <ContactUsForm
        setIsShareModalOpen={setIsOpen}
        isShareModalOpen={isOpen}
      />
    </header>
  )
}

export default Nav
