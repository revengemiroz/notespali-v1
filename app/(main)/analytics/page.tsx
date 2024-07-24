import React from 'react'

import { ReactHookFormDemo } from '@/components/notespali-ui/ImageUpload'

function Analytics() {
  return (
    <main className="flex flex-1 flex-col gap-4">
      <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      <div className="border rounded-md h-full flex items-center justify-center">
        <h3 className="text-lg font-medium">
          <ReactHookFormDemo />
        </h3>
      </div>
    </main>
  )
}

export default Analytics
