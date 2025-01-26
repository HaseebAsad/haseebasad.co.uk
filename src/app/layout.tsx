import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './blog/syntax-highlighting.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Haseeb Asad',
  description: 'Haseeb and his quant posts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {/* Add top padding to account for fixed navbar */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}