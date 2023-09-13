import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { League_Spartan } from 'next/font/google'

import Toolbar from './Toolbar'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
})

export default function Navbar() {
  return (
    <nav className='fixed inset-x-0 z-40 flex h-36 bg-white dark:bg-black dark:text-white'>
      <div className='container relative flex h-full w-80 flex-shrink-0 items-center'>
        <Link
          className='flex items-center justify-center gap-2'
          href='/dashboard'
        >
          <Image
            src={'/images/logo.svg'}
            alt='Logo'
            height={75}
            width={75}
          />
          <span
            className={clsx(
              leagueSpartan.className,
              'ml-2 text-3xl font-black uppercase tracking-tighter text-black dark:text-theme-soft-peach'
            )}
          >
            salt studios. design
          </span>
        </Link>
      </div>
      <Toolbar />
    </nav>
  )
}
