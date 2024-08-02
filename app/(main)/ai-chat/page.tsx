'use client'

import React, { useState } from 'react'
import ChatComponent from '@/components/notespali-ui/ChatComponent'
// import ContactUsForm from '@/components/notespali-ui/ContactUsForm'
// import { Button } from '@/components/ui/button'

// import PdfViewer from '@/components/notespali-ui/PdfViewer'
import PdfRenderer from '@/components/notespali-ui/PDFRender'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
// import { loadPDFIntoPinecone } from '@/lib/pinecone'

function AiChat() {
  // const { mutate } = useMutation({
  //   mutationFn: async (url: { url: string }) => {
  //     const response = await axios.post('/api/message', {
  //       file_url: url,
  //     })
  //     return response.data
  //   },
  // })

  return (
    // <main className="flex flex-1 flex-col gap-4">
    //   {/* <h1 className="text-lg font-semibold md:text-2xl">AI Chat</h1> */}
    //   <div className="border bg-muted/40 rounded-md h-full flex ">
    //     <div className="flex-1 p-2 max-w-[50%] overflow-hidden">
    //       <div className="bg-white h-full flex justify-center items-center font-semibold border rounded-md">
    //         {/* <PdfViewer /> */}
    //         {/* PDF */}
    //       </div>
    //     </div>
    //     <div className="flex-1 p-2 w-[50%]">
    //       <ChatComponent />
    //     </div>
    //   </div>
    // </main>
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 pr-6 xl:flex">
          <div className="h-full flex-1 xl:flex-1 rounded-md overflow-hidden shadow-xl">
            {/* Main area */}
            <PdfRenderer
              url={
                'https://utfs.io/f/61a8c571-729c-48dc-a328-45f6cfbf9f5d-2gj.pdf'
              }
            />
          </div>
        </div>
        {/* <button onClick={() => loadPDFIntoPinecone('a')}>Upload</button> */}

        <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          {/* <ChatWrapper isSubscribed={plan.isSubscribed} fileId={file.id} /> */}
          <ChatComponent />
        </div>
      </div>
    </div>
  )
}

export default AiChat
