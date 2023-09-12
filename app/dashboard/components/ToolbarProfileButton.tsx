'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import {
  useUser,
  SignOutButton,
} from '@clerk/nextjs'
import clsx from 'clsx'

export default function ToolbarProfileButton() {
  const { user } = useUser()
  const [showProfileMenu, setShowProfileMenu] =
    useState(false)

  return (
    <div className='relative'>
      <button
        className={clsx(
          'flex items-center gap-2 rounded-t-xl px-4 py-1',
          showProfileMenu && 'bg-gray-50'
        )}
        onFocus={() => setShowProfileMenu(true)}
        onClick={() =>
          setShowProfileMenu(
            (prevState) => !prevState
          )
        }
      >
        <div className='relative h-[50px] w-[50px]'>
          {user?.imageUrl && (
            <Image
              src={user.imageUrl}
              alt='Profile'
              height={50}
              width={50}
              className='rounded-full'
            />
          )}
          <div className='absolute inset-0 rounded-full'></div>
        </div>
        <span className='min-w-[100px]'>
          {user?.fullName}
        </span>
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

      {showProfileMenu && (
        <div className='absolute flex w-full flex-col justify-start gap-3 rounded-b-xl bg-white px-4 pb-10 pt-5'>
          <Link href='/'>Profile</Link>
          <Link href='/'>Settings</Link>
          <Link href='/'>Pricing</Link>
          <Link href='/'>Payment Info</Link>

          <SignOutButton>
            <button className='flex justify-start'>
              Logout
            </button>
          </SignOutButton>
        </div>
      )}
    </div>
  )
}
