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

import { useSettingsStore } from '@/store/zustand'

export default function ToolbarProfileButton() {
  const { user } = useUser()
  const { setActiveTab } = useSettingsStore()
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

    document.addEventListener(
      'focus',
      handler,
      true
    )
    return () => {
      document.removeEventListener(
        'click',
        handler
      )
      document.removeEventListener(
        'focus',
        handler
      )
    }
  }, [])

  const handleClick = (
    string:
      | 'Account Settings'
      | 'Overview'
      | 'Payment Info'
      | ''
  ) => {
    if (string !== '') {
      setActiveTab(string)
      localStorage.setItem('activeTab', string)
    }
    setShowProfileMenu(false)
  }

  return (
    <div ref={dropdownRef} className='relative'>
      <button
        className={clsx(
          'flex items-center gap-2 rounded-t-xl px-4 py-1',
          showProfileMenu &&
            'bg-gray-50 dark:bg-black'
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
              className='w-[50px]] h-[50px] rounded-full object-cover'
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
        <div className='absolute flex w-full flex-col justify-start gap-3 rounded-b-xl bg-white px-3 pb-10 pt-5 dark:bg-black'>
          <Link
            onClick={() =>
              handleClick('Overview')
            }
            className='rounded px-3 py-1 ring-0 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-blue-700 dark:focus:bg-blue-700'
            href='/dashboard/settings'
          >
            Overview
          </Link>
          <Link
            onClick={() =>
              handleClick('Account Settings')
            }
            className='rounded px-3 py-1 ring-0 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-blue-700 dark:focus:bg-blue-700'
            href='/dashboard/settings'
          >
            Account Settings
          </Link>
          <Link
            onClick={() =>
              handleClick('Payment Info')
            }
            className='rounded px-3 py-1 ring-0 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-blue-700 dark:focus:bg-blue-700'
            href='/dashboard/settings'
          >
            Payment Info
          </Link>
          <Link
            onClick={() => handleClick('')}
            className='rounded px-3 py-1 ring-0 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-blue-700 dark:focus:bg-blue-700'
            href='/dashboard/settings'
          >
            Pricing
          </Link>
          <SignOutButton>
            <button className='hover:bg-theme-orange-light focus:bg-theme-orange-light flex justify-start rounded bg-red-400 px-3 py-1 text-white transition-colors duration-200 ease-in-out'>
              Logout
            </button>
          </SignOutButton>
        </div>
      )}
    </div>
  )
}
