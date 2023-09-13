import {
  SignUpButton,
  SignedOut,
  SignedIn,
} from '@clerk/nextjs'
import Link from 'next/link'

import ToolbarProfileButton from './ToolbarProfileButton'
import SearchButton from './SearchButton'
import DarkModeButton from './DarkModeButton'

export default function Toolbar() {
  return (
    <>
      <div className='container flex h-full w-full items-center'>
        <div className=' flex w-full items-center justify-between'>
          {/* Left Side */}
          <div className='flex items-center gap-3'>
            <SignedOut>
              <SignUpButton mode='modal'>
                <button className='rounded bg-gray-100 px-3 py-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-50'>
                  Login
                </button>
              </SignUpButton>
            </SignedOut>
            <SearchButton />
          </div>

          {/* Right Side */}
          <div className='hidden items-center gap-6 lg:flex'>
            <SignedIn>
              <ToolbarProfileButton />
            </SignedIn>
            <Link href='/components'>
              Components
            </Link>
            <Link href='/dashboard/templates'>
              Templates
            </Link>
            <Link href='/dashboard/docs'>
              Docs
            </Link>
            <Link
              className='text-theme-pink dark:text-sky-400'
              href='/dashboard'
            >
              Go Pro
            </Link>

            <DarkModeButton />
          </div>
        </div>
      </div>
    </>
  )
}
