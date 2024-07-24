/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mKoyO2QvmYv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'sonner'

import { AlertDeleteNote } from '@/components/notespali-ui/AlertDeleteNote'
import { Badge } from '@/components/ui/badge'

import DialogShareModal from '@/components/notespali-ui/DialogShareModal'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'

export default function Component() {
  const [open, setOpen] = useState(false)
  const [alertDeleteNoteOpen, setAlertDeleteNoteOpen] = useState(false)

  return (
    <Card className=" shadow-sm">
      <CardHeader>
        <CardTitle>Old is Gold Physics</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative group">
          <Link href="#" download prefetch={false}>
            <Image
              src="https://www.notespali.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F852d62ab-d65e-43f1-a2d8-b297db35189b-rj9st2.jpg&w=1920&q=75"
              alt="Notes"
              layout="responsive"
              width={150}
              height={200}
              className="w-full h-full object-cover border rounded-md"
              style={{ height: '100%', maxHeight: '300px' }}
            />
            <div className="absolute rounded-md inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() =>
                        toast(
                          <div className="flex items-center gap-2 w-full">
                            <div className="p-1 rounded-full bg-black">
                              <DownloadIcon
                                className="h-3 w-3 text-white"
                                strokeWidth={'8'}
                              />
                            </div>
                            <span className="text-black text-md font-semibold">
                              Download started
                            </span>
                          </div>
                        )
                      }
                      size="icon"
                      className="bg-transparent hover:bg-muted/30"
                    >
                      <span className="sr-only">Download</span>
                      <DownloadIcon className="h-5 w-5 text-white" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Download</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => {
                        setOpen(true)
                      }}
                      variant="ghost"
                      size="icon"
                      className="bg-transparent hover:bg-muted/30"
                    >
                      <span className="sr-only">Share</span>
                      <ShareIcon className="h-5 w-5 text-white" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Share</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => setAlertDeleteNoteOpen(true)}
                      variant="ghost"
                      size="icon"
                      className="bg-transparent hover:bg-muted/30"
                    >
                      <span className="sr-only">Delete</span>
                      <Trash2Icon className="h-5 w-5 text-white" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Delete</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() =>
                        toast(
                          <div className="flex items-center gap-2 w-full">
                            <div className="p-1 rounded-full bg-black">
                              <BookmarkIcon
                                className="h-3 w-3 text-white"
                                strokeWidth={'8'}
                              />
                            </div>
                            <span className="text-black text-md font-semibold">
                              Note bookmarked
                            </span>
                          </div>
                        )
                      }
                      variant="ghost"
                      size="icon"
                      className="bg-transparent hover:bg-muted/30"
                    >
                      <span className="sr-only">Bookmark</span>
                      <BookmarkIcon className="h-5 w-5 text-white" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Bookmark</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Link>
        </div>

        <div className="flex gap-2">
          <Badge className="border-2" variant="secondary">
            2024 Grade XII
          </Badge>
          <Badge variant="secondary">Physics</Badge>
        </div>
      </CardContent>

      <DialogShareModal isShareModalOpen={open} setIsShareModalOpen={setOpen} />
      <AlertDeleteNote
        open={alertDeleteNoteOpen}
        setOpen={setAlertDeleteNoteOpen}
      />
    </Card>
  )
}

function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}

function Trash2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  )
}
