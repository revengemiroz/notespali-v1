'use client'

import { Button } from '@/components/ui/button'
import { Check, CloudMoon, Sun } from 'lucide-react'
import React from 'react'

function Pricing({
  buttonText = '',
  type = 'Basic',
  pricing = 'Free',
  selected = false,
  onClick = () => {},
  ...props
}) {
  return (
    <div
      className={`px-12 border rounded-lg flex items-center justify-center bg-muted/60 shadow-sm ${
        selected && 'border-2 shadow-lg border-black'
      }`}
      {...props}
    >
      <div className="flex flex-col  py-6">
        <div className="flex flex-col w-full space-y-1.5 gap-4 items-center justify-center">
          <h3 className="w-full flex flex-row justify-between whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
            {type}
            {type == 'Pro' ? (
              <Sun className="w-6 h-6 text-muted-foreground" />
            ) : (
              <CloudMoon className="w-6 h-6 text-muted-foreground" />
            )}
          </h3>
          <p className="font-bold text-4xl w-full ">
            {type == 'Pro' ? (
              <>
                <span>{pricing} </span>
                <span className="font-semibold text-muted-foreground text-sm">
                  NPR
                </span>{' '}
                <span className="font-medium text-muted-foreground text-xs">
                  per month
                </span>
                <span className="text-xs block font-medium text-muted-foreground/100">
                  Cheaper than a plate of momo
                </span>
              </>
            ) : (
              <span>{pricing}</span>
            )}
          </p>

          <div className="text-xs text-muted-foreground w-full">
            {type == 'Pro' && (
              <div className="flex justify-start items-center gap-2">
                <Check className="w-3 h-3" />
                <span>Use AI to summarize your notes</span>
              </div>
            )}
            <div className="flex justify-start items-center gap-2">
              <Check className="w-3 h-3" />
              <span>Download notes</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <Check className="w-3 h-3" />
              <span>Bookmark notes</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <Check className="w-3 h-3" />
              <span>Full access to the features</span>
            </div>
            <div className="flex justify-start items-center gap-2">
              <Check className="w-3 h-3" />
              <span>Share them with your friends</span>
            </div>
          </div>

          <Button className="w-full" onClick={onClick}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
