'use client'

// import { signOut } from "next-auth/react";
import { toast } from 'sonner'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar } from '@/components/ui/avatar'
import DarkModeModal from '@/components/notespali-ui/DarkModeModal'

// import { SafeUser } from "@/types";
// import { Session } from "next-auth";
import { LogOut, Settings, User, User2, UserPlus } from 'lucide-react'
import { useState } from 'react'
import ReferAFriend from '../ReferAFriend'

export const NavbarUserDropdown = ({}) => {
  const [openReferAFriend, setOpenReferAFriend] = useState(false)
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
      <DropdownMenuContent className="absolute -right-4 w-56">
        <DropdownMenuLabel className="flex items-center gap-4 font-medium">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer font-medium capitalize text-zinc-600 flex items-center gap-4">
          {/* {session.user.name} */}
          <User2 className="w-4 h-4" />
          Miroz
        </DropdownMenuItem>

        {/* refer a friend */}
        <DropdownMenuItem
          onClick={() => setOpenReferAFriend(true)}
          className="cursor-pointer font-medium capitalize text-zinc-600 flex items-center gap-4"
        >
          {/* {session.user.name} */}
          <UserPlus className="w-4 h-4" />
          Refer a friend
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer font-medium capitalize text-zinc-600 flex items-center gap-4">
            <UserPlus className=" h-4 w-4" />
            <span>Dark Mode</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DarkModeModal />
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuItem
          className="cursor-pointer font-medium capitalize text-zinc-600 flex items-center gap-4"
          onClick={logoutHandler}
        >
          <Settings className="w-4 h-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer font-medium capitalize flex items-center gap-4"
          onClick={logoutHandler}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>

      <ReferAFriend
        open={openReferAFriend}
        onOpenChange={setOpenReferAFriend}
      />
    </DropdownMenu>
  )
}
