'use client'

import clsx from 'clsx'
import {
  useEffect,
  useState,
  useRef,
} from 'react'

import { useTheme } from 'next-themes'

export default function DarkModeButton() {
  const [showDarkModeMenu, setShowDarkModeMenu] =
    useState(false)
  const dropdownRef =
    useRef<HTMLInputElement>(null)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // if (
    //   localStorage.theme === 'dark' ||
    //   (!('theme' in localStorage) &&
    //     window.matchMedia(
    //       '(prefers-color-scheme: dark)'
    //     ).matches)
    // ) {
    //   document.documentElement.classList.add(
    //     'dark'
    //   )
    // } else {
    //   document.documentElement.classList.remove(
    //     'dark'
    //   )
    // }

    const handler = (event: any) => {
      if (!dropdownRef.current) {
        return
      }
      if (
        !dropdownRef.current.contains(
          event.target
        )
      ) {
        setShowDarkModeMenu(false)
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
    string: 'light' | 'dark' | 'system'
  ) => {
    if (string === 'light') {
      setTheme('light')
    }
    if (string === 'dark') {
      setTheme('dark')
    }
    if (string === 'system') {
      setTheme('system')
    }
  }

  return (
    <div ref={dropdownRef}>
      <button
        className='flex'
        onClick={() =>
          setShowDarkModeMenu(
            (prevState) => !prevState
          )
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-brightness-down'
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
          <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
          <path d='M12 5l0 .01'></path>
          <path d='M17 7l0 .01'></path>
          <path d='M19 12l0 .01'></path>
          <path d='M17 17l0 .01'></path>
          <path d='M12 19l0 .01'></path>
          <path d='M7 17l0 .01'></path>
          <path d='M5 12l0 .01'></path>
          <path d='M7 7l0 .01'></path>
        </svg>
      </button>

      {showDarkModeMenu && (
        <div className='dark:bg-theme-dark absolute right-5 mt-4 flex w-40 flex-col items-start justify-start rounded-xl rounded-b-xl border bg-white'>
          <button
            onClick={() => handleClick('light')}
            className={clsx(
              'flex w-full items-center gap-3 px-3 py-2 dark:hover:bg-sky-400/50 dark:focus:bg-sky-400',
              theme === 'light'
                ? 'bg-blue-50/50 dark:bg-blue-50/10'
                : ''
            )}
          >
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
              <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
              <path d='M12 5l0 .01'></path>
              <path d='M17 7l0 .01'></path>
              <path d='M19 12l0 .01'></path>
              <path d='M17 17l0 .01'></path>
              <path d='M12 19l0 .01'></path>
              <path d='M7 17l0 .01'></path>
              <path d='M5 12l0 .01'></path>
              <path d='M7 7l0 .01'></path>
            </svg>
            Light
          </button>
          <button
            onClick={() => handleClick('dark')}
            className={clsx(
              'flex w-full items-center gap-3 px-3 py-2 dark:hover:bg-sky-400/50 dark:focus:bg-sky-400',
              theme === 'dark'
                ? 'bg-blue-50/50 dark:bg-sky-400'
                : ''
            )}
          >
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
              <path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'></path>
              <path d='M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2'></path>
              <path d='M19 11h2m-1 -1v2'></path>
            </svg>
            Dark
          </button>
          <button
            onClick={() => handleClick('system')}
            className={clsx(
              'flex w-full items-center gap-3 px-3 py-2 dark:hover:bg-sky-400/50 dark:focus:bg-sky-400',
              theme === 'system'
                ? 'bg-blue-50/50 dark:bg-blue-50/10'
                : ''
            )}
          >
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
              <path d='M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z'></path>
              <path d='M7 20h10'></path>
              <path d='M9 16v4'></path>
              <path d='M15 16v4'></path>
            </svg>
            System
          </button>
        </div>
      )}
    </div>
  )
}
