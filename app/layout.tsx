import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import { Toaster } from '@/components/ui/sonner'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

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
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
