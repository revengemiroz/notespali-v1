import React from 'react'

import NotesCard from '@/components/notespali-ui/NotesCard'

function bookmarks() {
  return (
    <main className="flex flex-1 flex-col gap-4">
      <h1 className="text-lg font-semibold md:text-2xl">Bookmarks</h1>
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

export default bookmarks
