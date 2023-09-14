import {
  SignUpButton,
  SignedOut,
  SignedIn,
} from '@clerk/nextjs'
import Link from 'next/link'

import ToolbarProfileButton from '@/components/(dashboard)/ToolbarProfileButton'
import SearchButton from '@/components/(dashboard)/SearchButton'
import DarkModeButton from '@/components/(dashboard)/DarkModeButton'

export default function Toolbar() {
  return (
    <>
      <div className='flex h-full w-full items-center lg:container'>
        <div className='flex w-full items-center justify-end lg:justify-between'>
          {/* Left Side */}
          <div className='mr-5 flex items-center gap-3 lg:mr-0'>
            <SignedOut>
              <SignUpButton mode='modal'>
                <button className='rounded bg-gray-100 px-3 py-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-50 dark:bg-sky-400 dark:font-semibold dark:text-theme-soft-peach'>
                  Login
                </button>
              </SignUpButton>
            </SignedOut>
            <SearchButton />
            <span className='lg:hidden'>
              <DarkModeButton />
            </span>
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
