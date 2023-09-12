'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
  SignUpButton,
  SignedOut,
  SignedIn,
  useUser,
} from '@clerk/nextjs'

export default function Toolbar() {
  const { user } = useUser()
  return (
    <div className='container flex h-full w-full items-center'>
      <div className='flex w-full items-center justify-between'>
        {/* Left Side */}
        <div>
          <SignedOut>
            <SignUpButton mode='modal'>
              <button className='rounded px-3 py-2 text-sm transition-colors duration-300 ease-in-out hover:bg-gray-50'>
                Login
              </button>
            </SignUpButton>
          </SignedOut>
          <div className='pointer-events-auto relative bg-white dark:bg-slate-900'>
            <button
              type='button'
              className='dark:highlight-white/5 hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 lg:flex'
            >
              <svg
                width='24'
                height='24'
                fill='none'
                aria-hidden='true'
                className='mr-3 flex-none'
              >
                <path
                  d='m19 19-3.5-3.5'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <circle
                  cx='11'
                  cy='11'
                  r='6'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></circle>
              </svg>
              Quick search...
              <span className='ml-auto flex-none pl-3 text-xs font-semibold'>
                ⌘K
              </span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className='hidden items-center gap-6 lg:flex'>
          <SignedIn>
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
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path
                  stroke='none'
                  d='M0 0h24v24H0z'
                  fill='none'
                ></path>
                <path d='M6 9l6 6l6 -6'></path>
              </svg>
            </button>
          </SignedIn>
          <Link href='/components'>
            Components
          </Link>
          <Link href='/dashboard/templates'>
            Templates
          </Link>
          <Link href='/dashboard/docs'>Docs</Link>
          <Link
            className='text-[#FF0096]'
            href='/dashboard'
          >
            Go Pro
          </Link>
        </div>
      </div>
    </div>
  )
}
