'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SidebarNavbar() {
  const pathname = usePathname()

  return (
    <div className='container fixed left-0 top-36 hidden h-36 w-80 flex-col justify-center gap-1 overflow-scroll lg:flex'>
      <Link
        href={'/dashboard'}
        className={clsx(
          'flex items-center gap-1 rounded px-4 py-3 transition-colors duration-200 ease-in-out hover:bg-gray-50 focus:bg-gray-50 dark:hover:bg-blue-700 dark:focus:bg-blue-700 dark:text-theme-soft-peach',
          pathname === '/dashboard'
            ? 'bg-gray-50 font-bold'
            : 'font-medium'
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
          <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z'></path>
          <path d='M10 4l4 16'></path>
          <path d='M12 12l-8 2'></path>
        </svg>
        <span>Dashboard</span>
      </Link>
      <Link
        href={'/dashboard/saved-components'}
        className={clsx(
          'dark flex items-center gap-1 rounded px-4 py-3 transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 dark:hover:bg-blue-700 dark:focus:bg-blue-700 dark:text-theme-soft-peach',
          pathname ===
            '/dashboard/saved-components'
            ? 'bg-gray-50 font-bold'
            : 'font-medium'
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
          <path d='M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z'></path>
          <path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2'></path>
          <path d='M12 12l0 .01'></path>
          <path d='M3 13a20 20 0 0 0 18 0'></path>
        </svg>
        <span>Saved Components</span>
      </Link>
    </div>
  )
}
