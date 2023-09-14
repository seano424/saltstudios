import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { League_Spartan } from 'next/font/google'
import Toolbar from '@/components/(dashboard)/Toolbar'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
})

export default function Navbar() {
  return (
    <nav className='supports-backdrop-blur:bg-white/60 fixed inset-x-0 z-40 flex h-28 bg-white/80 filter backdrop-blur dark:border-slate-50/[0.06] dark:bg-transparent dark:text-theme-soft-peach lg:border-b lg:border-slate-900/10'>
      <div className='relative flex h-full flex-shrink-0 items-center pl-5 lg:container lg:w-80'>
        <Link
          className='flex items-center justify-center gap-2'
          href='/dashboard'
        >
          <Image
            priority
            className='rounded-full dark:bg-white'
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
