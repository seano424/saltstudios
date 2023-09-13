'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const components = [
  {
    name: 'Buttons',
    href: '/dashboard/components/buttons',
  },
  {
    name: 'Headers',
    href: '/dashboard/components/headers',
  },
  {
    name: 'Hero Sections',
    href: '/dashboard/components/hero-sections',
  },
  {
    name: 'Services',
    href: '/dashboard/components/services',
  },
  {
    name: 'Side By Sides',
    href: '/dashboard/components/side-by-sides',
  },
  {
    name: 'Content Flair',
    href: '/dashboard/components/content-flair',
  },
  {
    name: 'Meet Our Team',
    href: '/dashboard/components/meet-our-team',
  },
  {
    name: 'Steps',
    href: '/dashboard/components/steps',
  },
  {
    name: 'Stats',
    href: '/dashboard/components/stats',
  },
  {
    name: 'Pricing',
    href: '/dashboard/components/pricing',
  },
  {
    name: 'Blog',
    href: '/dashboard/components/blog',
  },
  {
    name: 'Newsletters',
    href: '/dashboard/components/newsletters',
  },
  {
    name: 'CTAs',
    href: '/dashboard/components/ctas',
  },
  {
    name: 'Footers',
    href: '/dashboard/components/footers',
  },
  {
    name: 'FAQs',
    href: '/dashboard/components/faqs',
  },
  {
    name: 'Forms & Contact',
    href: '/dashboard/components/forms-and-contact',
  },
  {
    name: 'Testimonials',
    href: '/dashboard/components/testimonials',
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <div className='container fixed bottom-0 left-0 top-72 hidden w-80 flex-col gap-2 overflow-scroll from-theme-orange/80 lg:flex'>
      <h4 className='mt-3 text-lg uppercase text-slate-700 dark:text-theme-soft-peach'>
        Components Catalog
      </h4>
      <div className='flex flex-col gap-2'>
        {components.map(({ href, name }) => (
          <Link
            key={name}
            href={href}
            className={clsx(
              'flex items-center justify-between rounded px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-blue-700 dark:focus:bg-blue-700',
              pathname === href
                ? 'bg-gray-100 font-bold text-slate-900 dark:bg-blue-700 dark:text-theme-soft-peach'
                : 'text-slate-700 dark:text-white'
            )}
          >
            {name}
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
              <path d='M3 12l3 0'></path>
              <path d='M12 3l0 3'></path>
              <path d='M7.8 7.8l-2.2 -2.2'></path>
              <path d='M16.2 7.8l2.2 -2.2'></path>
              <path d='M7.8 16.2l-2.2 2.2'></path>
              <path d='M12 12l9 3l-4 2l-2 4l-3 -9'></path>
            </svg>
          </Link>
        ))}
      </div>
    </div>
  )
}
