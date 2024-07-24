import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { SendHorizontal } from 'lucide-react'
import React from 'react'

function ChatComponent() {
  return (
    <div className="border flex flex-col bg-white h-full rounded-md">
      <div className="flex flex-1 justify-between items-center p-4">
        <ScrollArea className="h-[calc(100% - 200px] h-full w-full flex justify-start gap-4 flex-col">
          <LeftChatComponent />
          <RightChatComponent />
          <RightChatComponent />
          <LeftChatComponent />
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

function LeftChatComponent() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[65%] space-y-2">
        <div className="rounded-lg bg-black text-white p-3 text-sm">
          Hey, how's it going? I wanted to follow up on the design changes we
          discussed earlier.
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
          Hey, how's it going? I wanted to follow up on the design changes we
          discussed earlier.
        </div>
      </div>
    </div>
  )
}

export default ChatComponent
