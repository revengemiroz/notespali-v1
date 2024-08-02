'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { useMutation } from '@tanstack/react-query'
import { generateText, streamText } from 'ai'
import { SendHorizontal } from 'lucide-react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { toast } from 'sonner'
import { openai } from '@ai-sdk/openai'
// import { openai, jsonObjectPrompt } from 'modelfusion'

function ChatComponent({ mutate }: any) {
  const [message, setMessage] = React.useState('')
  const { mutate: sendMessage } = useMutation({
    mutationFn: async ({ message }: { message: string }) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({
          message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      return response.body
    },
    onMutate: async ({ message }: { message: string }) => {
      console.log({ message })
      // mutate(message)
    },
    onSuccess: async (stream) => {
      if (!stream) {
        return toast('Failed to load stream')
      }

      const reader = stream.getReader()
      const decoder = new TextDecoder('utf-8')
      let done = false

      // accumulated response
      let accResponse = ''

      while (true) {
        const { value, done: doneReading } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)

        setMessage((prev) => prev + chunk)
      }
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  console.log({ message })

  const addMessage = ({ message }: { message: string }) =>
    sendMessage({ message })

  return (
    <div className="border flex flex-col bg-white h-full rounded-md">
      <div className="flex flex-1 justify-between items-center p-4">
        <ScrollArea className="h-[calc(100% - 200px] h-full w-full flex justify-start gap-4 flex-col">
          <LeftChatComponent message={message} />
          <RightChatComponent />
          <RightChatComponent />
          <LeftChatComponent message={message} />
        </ScrollArea>
      </div>

      <div className="border-t bg-card px-4 py-3">
        <div className="relative">
          <Textarea
            autoFocus
            placeholder="Type your message..."
            className="pr-16 resize-none"
          />
          <Button
            onClick={() =>
              addMessage({ message: 'how long does miroz has work experience' })
            }
            type="submit"
            size="icon"
            className="absolute right-2 top-4 p-4 w-fit flex gap-2 items-center justify-center"
          >
            <SendHorizontal className="w-4 h-4" />
            <span className="text-sm font-base">Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function LeftChatComponent({ message: data }: { message: string }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[65%] space-y-2">
        <div className="rounded-lg bg-black text-white p-3 text-sm">
          Hey, how&apos;s it going? I wanted to follow up on the design changes
          we discussed earlier.
        </div>
      </div>
    </div>
  )
}

function RightChatComponent() {
  return (
    <div className="flex justify-end">
      <div className="max-w-[65%] space-y-2">
        <div className="rounded-lg bg-muted-foreground/10  p-3 text-sm">
          Hey, how&apos;s it going? I wanted to follow up on the design changes
          we discussed earlier.
        </div>
      </div>
    </div>
  )
}

export default ChatComponent
