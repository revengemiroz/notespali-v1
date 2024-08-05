import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import Pricing from '@/components/notespali-ui/Pricing'
import { Smile } from 'lucide-react'

function PricingDialog({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="pt-8">
        <p className="flex gap-4 items-center font-semibold text-xl">
          Buy me MoMo
        </p>
        <Pricing
          className="px-6 bg-muted-foreground/10 border rounded-md"
          onClick={() => {}}
          type="Pro"
          pricing="50"
          buttonText="Upgrade to pro"
        />
      </DialogContent>
    </Dialog>
  )
}

export default PricingDialog
