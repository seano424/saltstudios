import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
})

export default function Navbar() {
  return (
    <nav className='fixed inset-x-0 z-50 flex h-32 bg-white'>
      <div className='relative flex h-full w-80 flex-shrink-0 items-center border-8'>
        <Link
          className='flex items-center'
          href='/dashboard'
        >
          <Image
            src={'/images/logo.svg'}
            alt='Logo'
            height={100}
            width={100}
          />
          <span
            className={clsx(
              leagueSpartan.className,
              'text-3xl font-black text-gray-900'
            )}
          >
            Salt Studios
          </span>
        </Link>
      </div>
      <div className='h-full w-full border-8 border-purple-700'></div>
    </nav>
  )
}
