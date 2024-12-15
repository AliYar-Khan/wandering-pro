import type { Metadata } from 'next'
import { josefinSans } from './font'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wandering Pro',
  description:
    'Pakistan’s first community for building Products, Projects, and Portfolios. Join our Discord for mentorship, project support, and collaboration to grow your career!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${josefinSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
