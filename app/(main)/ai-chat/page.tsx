'use client'

import React, { useState } from 'react'
import ChatComponent from '@/components/notespali-ui/ChatComponent'
import ContactUsForm from '@/components/notespali-ui/ContactUsForm'
import { Button } from '@/components/ui/button'

import PdfViewer from '@/components/notespali-ui/PdfViewer'

function AiChat() {
  return (
    <main className="flex flex-1 flex-col gap-4">
      {/* <h1 className="text-lg font-semibold md:text-2xl">AI Chat</h1> */}
      <div className="border bg-muted/40 rounded-md h-full flex ">
        <div className="flex-1 p-2 max-w-[50%] overflow-hidden">
          <div className="bg-white h-full flex justify-center items-center font-semibold border rounded-md">
            {/* <PdfViewer /> */}
            {/* PDF */}
          </div>
        </div>
        <div className="flex-1 p-2 w-[50%]">
          <ChatComponent />
        </div>
      </div>
    </main>
  )
}

export default AiChat
