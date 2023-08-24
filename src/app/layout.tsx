import './globals.css'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { Inter, Oxygen } from 'next/font/google'
import Header from '@/components/layout/header'
import AppCartProvider from '@/components/shop/cartProvider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })
const oxygen  = Oxygen({weight: ["300", "400", "700"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Bags',
  description: 'Bags ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(oxygen.className, "min-h-screen flex flex-col")}>
        <AppCartProvider>
          <Toaster/>
        <Header/>
        <main className='flex-grow'>
          {children}
        </main>
        </AppCartProvider>
      </body>
    </html>
  )
}
