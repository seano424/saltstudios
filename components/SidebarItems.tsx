'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface SidebarItemProps {
  name: string
  icon: React.ReactNode
  items: {
    name: string
    href: string
  }[]
}

export default function SidebarItems({
  name,
  icon,
  items,
}: SidebarItemProps) {
  const pathname = usePathname()

  const [isOpen, setOpen] = useState(true)

  return (
    <div>
      <button
        onClick={() =>
          setOpen((prevState) => !prevState)
        }
        className={clsx(
          'mb-3 flex w-full items-center gap-1 rounded px-4 py-3 font-medium text-slate-700 transition-colors duration-200 hover:bg-gray-50 hover:text-slate-900 focus:bg-gray-50 dark:text-theme-soft-peach dark:hover:bg-sky-500 dark:focus:bg-sky-500 lg:leading-6',
          isOpen
            ? 'bg-blue-50/50 text-sky-500 dark:bg-sky-400'
            : 'font-medium'
        )}
      >
        {icon === 'page' && (
          <svg
            className='rounded border bg-white p-1 text-purple-400'
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
        )}
        {icon === 'elements' && (
          <svg
            className='borer rounded  bg-white p-1 text-sky-400'
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
            <path
              d='M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm1 6h-14v9a1 1 0 0 0 .883 .993l.117 .007h12a1 1 0 0 0 .993 -.883l.007 -.117v-9z'
              stroke-width='0'
              fill='currentColor'
            ></path>
          </svg>
        )}
        {icon === 'page-examples' && (
          <svg
            className='rounded border bg-white p-1 text-fuchsia-400'
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
            <path d='M4 4h6v8h-6z'></path>
            <path d='M4 16h6v4h-6z'></path>
            <path d='M14 12h6v8h-6z'></path>
            <path d='M14 4h6v4h-6z'></path>
          </svg>
        )}
        <span>{name}</span>
      </button>

      {isOpen &&
        items.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={clsx(
              'my-2 flex items-center justify-between rounded px-5 py-1 transition-colors duration-200 ease-in-out hover:bg-blue-50/50 focus:bg-blue-50/50 dark:hover:bg-sky-500 dark:focus:bg-sky-500',
              pathname === href
                ? 'bg-blue-50/50 text-sky-500 dark:bg-sky-400/10 dark:text-sky-400'
                : 'text-slate-700 hover:text-slate-900 dark:text-white'
            )}
          >
            {name}
          </Link>
        ))}
    </div>
  )
}
