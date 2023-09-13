import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Salt Studios Design',
  description: 'Salt Studios Web Design',
  icons: [
    {
      rel: 'icon',
      url: '/images/favicon.ico',
    },
  ],
}

const devMode =
  process.env.NODE_ENV === 'development'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={clsx(
            inter.className,
            'dark:bg-black',
            devMode && 'debug-screens'
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
