import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function HomePageNav() {
  // in next js write a button to navigate to the login page

  // in next js write a button to navigate to the sign up page

  return (
    <div className="py-4 px-8 flex justify-between gap-12">
      <div className="text-2xl font-semibold flex items-center">
        <span className="text-blue-600">N</span>
        <span>otesPali</span>
      </div>

      <div className="flex flex-1 items-center justify-center gap-12 text-sm">
        <Link href={'/#'}>
          <span className="cursor-pointer font-medium">Features</span>
        </Link>
        <Link href={'/#'}>
          <span className="cursor-pointer font-medium">Pricing</span>
        </Link>
        <Link href={'/#'}>
          <span className="cursor-pointer font-medium">Blog</span>
        </Link>
      </div>

      <Link href="/signin">
        <Button>Log In</Button>
      </Link>
    </div>
  )
}

export default HomePageNav
