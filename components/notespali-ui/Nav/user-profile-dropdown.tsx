'use client'

// import { signOut } from "next-auth/react";
import { toast } from 'sonner'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// import { SafeUser } from "@/types";
// import { Session } from "next-auth";
import { LogOut, Settings, User, User2 } from 'lucide-react'

export const NavbarUserDropdown = ({}) => {
  const logoutHandler = async () => {
    try {
      //   await signOut();

      toast.success('Logout successfull')
    } catch (error: any) {
      toast.error('Error')
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer border bg-white/100 p-2 flex items-center justify-center">
          <User className="w-6 h-6" />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-4 w-44">
        <DropdownMenuLabel className="flex items-center gap-4 font-medium">
          <Settings className="w-4 h-4" />
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="font-medium capitalize text-zinc-600 flex items-center gap-4">
          {/* {session.user.name} */}
          <User2 className="w-4 h-4" />
          Miroz
        </DropdownMenuItem>
        <DropdownMenuItem
          className="font-medium capitalize text-zinc-600 flex items-center gap-4"
          onClick={logoutHandler}
        >
          <Settings className="w-4 h-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          className="font-bold capitalize flex items-center gap-4 text-rose-500"
          onClick={logoutHandler}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
