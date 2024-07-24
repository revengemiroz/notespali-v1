'use client'

import React from 'react'

import { Button } from '@/components/ui/button'
import HomePageNav from '@/components/notespali-ui/HomePageNav'
import Pricing from '@/components/notespali-ui/Pricing'

import { useRouter } from 'next/navigation'

function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <div className="">
        <HomePageNav />
      </div>

      <div className="flex flex-1 min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="font-bold text-5xl max-w-[600px] text-center">
            Study for your finals with Confidence
          </h1>

          <p className="max-w-[800px] text-center text-sm text-gray-500">
            Our CV builder tool ensures you create a polished and professional
            resume. With easy-to-use templates and real-time previews, your
            perfect CV is just a few clicks away.
          </p>

          <Button onClick={() => router.push('/signin')}>Get Started</Button>
        </div>
      </div>

      <div className="mx-auto flex justify-center my-12 flex-row gap-12">
        <Pricing
          onClick={() => {
            router.push('/signin')
          }}
          type="Basic"
          buttonText="Try for free"
        />
        <Pricing
          onClick={() => router.push('/signin')}
          type="Pro"
          pricing="50"
          selected
          buttonText="Upgrade to pro"
        />
      </div>
    </div>
  )
}

export default Home
