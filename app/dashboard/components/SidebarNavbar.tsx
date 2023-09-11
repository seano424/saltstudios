'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SidebarNavbar() {
  const pathname = usePathname()

  return (
    <div className='container fixed left-0 top-32 flex h-40 w-80 flex-col justify-center gap-1 overflow-scroll border-8 border-purple-300'>
      <Link
        href={'/dashboard'}
        className={clsx(
          'flex items-center gap-1 rounded px-4 py-3',
          pathname === '/dashboard' &&
            'bg-gray-50'
        )}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
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
        <span className='font-medium'>
          Dashboard
        </span>
      </Link>
      <Link
        href={'/dashboard'}
        className={clsx(
          'flex items-center gap-1 rounded px-4 py-3',
          pathname === '/dashboard/folders' &&
            'bg-gray-50'
        )}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          stroke-width='2'
          stroke='currentColor'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          stroke='none'
          <path d='M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z'></path>
          <path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2'></path>
          <path d='M12 12l0 .01'></path>
          <path d='M3 13a20 20 0 0 0 18 0'></path>
        </svg>
        <span className='font-medium'>
          Saved Components
        </span>
      </Link>
    </div>
  )
}
