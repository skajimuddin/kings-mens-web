import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kings Mens - Premium Fashion',
  description: 'Kings Mens - Premium quality and timeless design in men\'s fashion',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
