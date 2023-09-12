'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  useState,
  useRef,
  useEffect,
} from 'react'

import {
  useUser,
  SignOutButton,
} from '@clerk/nextjs'
import clsx from 'clsx'

export default function ToolbarProfileButton() {
  const { user } = useUser()
  const [showProfileMenu, setShowProfileMenu] =
    useState(false)
  const dropdownRef =
    useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (event: any) => {
      if (!dropdownRef.current) {
        return
      }
      if (
        !dropdownRef.current.contains(
          event.target
        )
      ) {
        setShowProfileMenu(false)
      }
    }
    // the key is using the `true` option
    // `true` will enable the `capture` phase of event handling by browser
    document.addEventListener(
      'click',
      handler,
      true
    )
    return () => {
      document.removeEventListener(
        'click',
        handler
      )
    }
  }, [])

  return (
    <div ref={dropdownRef} className='relative'>
      <button
        className={clsx(
          'flex items-center gap-2 rounded-t-xl px-4 py-1',
          showProfileMenu && 'bg-gray-50'
        )}
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
        <div className='absolute flex w-full flex-col justify-start gap-3 rounded-b-xl bg-white px-3 pb-10 pt-5'>
          <Link
            className='rounded px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100'
            href='/dashboard/settings'
          >
            Profile
          </Link>
          <Link
            className='rounded px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100'
            href='/dashboard/settings'
          >
            Settings
          </Link>
          <Link
            className='rounded px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100'
            href='/dashboard/settings'
          >
            Pricing
          </Link>
          <Link
            className='rounded px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100'
            href='/dashboard/settings'
          >
            Payment Info
          </Link>

          <SignOutButton>
            <button className='flex justify-start rounded px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100'>
              Logout
            </button>
          </SignOutButton>
        </div>
      )}
    </div>
  )
}
