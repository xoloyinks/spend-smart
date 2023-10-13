import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpendSmart',
  description: 'A budget app to help you keep track of your expenses.',
}

export default function RootLayout({
  children,
}: React.PropsWithChildren)  {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
