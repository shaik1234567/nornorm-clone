import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-geist-sans',
  display: 'swap', // Add this for better performance
})

export const metadata: Metadata = {
  title: 'NORNORM - Office Furniture Subscription Service',
  description: "Don't buy your office furniture, subscribe to it. Join 1200+ businesses across 17 markets.",
  keywords: ['office furniture', 'furniture subscription', 'circular economy', 'sustainable furniture'],
  authors: [{ name: 'NORNORM' }],
  openGraph: {
    title: 'NORNORM - Office Furniture Subscription',
    description: "Don't buy your office furniture, subscribe to it.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}
