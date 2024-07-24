'use client'

import React, { useState } from 'react'

import PricingDialog from '@/components/notespali-ui/PricingDialog'

function Upgrade() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white border h-full flex flex-col gap-3 p-4 justify-center rounded-md">
      <p className="font-semibold text-2xl">Buy me Momo</p>
      <p className="font-normal text-muted-foreground text-xs">
        Unlock all features and get unlimited access to our support team.
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary rounded-md text-white font-semibold py-2 px-4"
      >
        Upgrade
      </button>

      <PricingDialog isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>
  )
}

export default Upgrade
