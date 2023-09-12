import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { League_Spartan } from 'next/font/google'
import {
  UserButton,
  SignUpButton,
} from '@clerk/nextjs'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
})

export default function Navbar() {
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
        <SignUpButton mode='modal'>
          <button className='rounded px-3 py-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-50'>
            Login
          </button>
        </SignUpButton>

        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  )
}
