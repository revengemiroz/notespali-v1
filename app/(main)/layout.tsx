import Nav from '@/components/notespali-ui/Nav'
import Sidebar from '@/components/notespali-ui/Sidebar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notespali',
  description: 'Study notes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <main className="grid w-full min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <Nav />
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </main>
    </div>
  )
}
