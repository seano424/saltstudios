'use client'

import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { League_Spartan } from 'next/font/google'
import {
  UserButton,
  SignUpButton,
  SignedOut,
  SignedIn,
  useUser,
} from '@clerk/nextjs'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
})

export default function Navbar() {
  const { user } = useUser()

  return (
    <nav className='fixed inset-x-0 z-50 flex h-36 bg-white'>
      <div className='container relative flex h-full w-80 flex-shrink-0 items-center'>
        <Link
          className='flex items-center justify-center gap-2'
          href='/dashboard'
        >
          <Image
            src={'/images/logo.svg'}
            alt='Logo'
            height={75}
            width={75}
          />
          <span
            className={clsx(
              leagueSpartan.className,
              'ml-2 text-3xl font-black uppercase tracking-tighter text-black'
            )}
          >
            salt studios. design
          </span>
        </Link>
      </div>
      <div className='container flex h-full w-full items-center'>
        <SignedOut>
          <SignUpButton mode='modal'>
            <button className='rounded px-3 py-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-50'>
              Login
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <div className='flex w-full items-center justify-end'>
            <button className='flex items-center gap-2'>
              {user?.imageUrl && (
                <Image
                  src={user.imageUrl}
                  alt='Profile'
                  height={50}
                  width={50}
                  className='rounded-full'
                />
              )}
              <span>{user?.fullName}</span>
            </button>
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}
