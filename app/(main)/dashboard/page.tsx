import Image from 'next/image'

import Sidebar from '@/components/notespali-ui/Sidebar'
import Nav from '@/components/notespali-ui/Nav'
import NotesCard from '@/components/notespali-ui/NotesCard'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-4">
      <h1 className="text-lg font-semibold md:text-2xl">Notes</h1>
      <div className="bg-muted/40 border rounded-md h-full flex ">
        <div className="grid grid-cols-4 gap-4 p-4 ">
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
        </div>
      </div>
    </main>
  )
}
