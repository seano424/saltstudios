import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from './providers'

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
      <html lang='en' suppressHydrationWarning>
        <body
          className={clsx(
            inter.className,
            'dark:bg-theme-dark',
            devMode && 'debug-screens'
          )}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
