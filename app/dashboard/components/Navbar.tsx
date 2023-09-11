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
    <nav className='fixed inset-x-0 z-50 flex h-32 bg-white'>
      <div className='container relative flex h-full w-80 flex-shrink-0 items-center border-8'>
        <Link
          className='flex items-center'
          href='/dashboard'
        >
          <Image
            src={'/images/logo.svg'}
            alt='Logo'
            height={100}
            width={100}
          />
          <span
            className={clsx(
              leagueSpartan.className,
              'ml-2 text-2xl font-bold uppercase tracking-tighter text-gray-900'
            )}
          >
            salt studios. design
          </span>
        </Link>
      </div>
      <div className='container flex h-full w-full items-center border-8 border-purple-700'>
        {/* <Link
          className='rounded bg-gray-50 px-3 py-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-100'
          href='/'
        >
          Login
        </Link> */}

        <SignUpButton mode='modal'>
          <button>Sign up</button>
        </SignUpButton>
        
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  )
}
