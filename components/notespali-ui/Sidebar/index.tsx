'use client'

import React from 'react'
import Link from 'next/link'

import Upgrade from '@/components/notespali-ui/Upgrade'

import {
  Book,
  Notebook,
  Home,
  LineChart,
  Package,
  Users,
  PlusCircleIcon,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Badge } from '@/components/ui/badge'

function Sidebar() {
  const url = usePathname()
  console.log({ url })

  return (
    <div className="bg-muted/40 flex flex-col border-r md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
          <a className="font-semibold flex gap-2 items-center">
            <Notebook />
            <span>Notes Pali</span>
          </a>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href={'/dashboard'}
              className={`flex items-center gap-3 rounded-lg ${
                url == '/dashboard'
                  ? 'bg-muted text-primary'
                  : 'text-muted-foreground'
              } px-3 py-2 transition-all hover:text-primary`}
            >
              <Book className="h-4 w-4" />
              Notes
            </Link>

            <Link
              href="/bookmarks"
              className={`flex items-center justify-between gap-3 rounded-lg ${
                url == '/bookmarks'
                  ? 'bg-muted text-primary'
                  : 'text-muted-foreground'
              } px-3 py-2 transition-all hover:text-primary`}
            >
              <div className="flex justify-between items-center w-fit gap-3">
                <Package className="h-4 w-4" />
                <span>Bookmarks</span>
              </div>
              <Badge>6</Badge>
            </Link>

            <Link
              href="/ai-chat"
              className={`flex items-center justify-between gap-3 rounded-lg ${
                url == '/ai-chat'
                  ? 'bg-muted text-primary'
                  : 'text-muted-foreground'
              } px-3 py-2 transition-all hover:text-primary`}
            >
              <div className="flex justify-between items-center w-fit gap-3">
                <Users className="h-4 w-4" />
                <span>AI Chat</span>
              </div>
              <Badge className="text-xs font-medium">Premium</Badge>
            </Link>

            <Link
              href="/analytics"
              className={`flex items-center gap-3 rounded-lg ${
                url == '/analytics'
                  ? 'bg-muted text-primary'
                  : 'text-muted-foreground'
              } px-3 py-2 transition-all hover:text-primary`}
            >
              <LineChart className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              href="/add-notes"
              className={`flex items-center gap-3 rounded-lg ${
                url == '/add-notes'
                  ? 'bg-muted text-primary'
                  : 'text-muted-foreground'
              } px-3 py-2 transition-all hover:text-primary`}
            >
              <PlusCircleIcon className="h-4 w-4" />
              Add Notes
            </Link>
          </nav>
        </div>

        <div className="p-4 min-h-24">
          <Upgrade />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
