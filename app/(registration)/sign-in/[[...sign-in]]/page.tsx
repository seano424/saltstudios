import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='grid bg-theme-soft-peach lg:grid-cols-2'>
      <div className='relative flex flex-col items-center justify-center gap-10 py-20 lg:py-0'>
        <Image
          priority
          className='relative z-50 rounded-full bg-white'
          src='/images/logo.svg'
          alt='Logo'
          width={175}
          height={175}
        />
        <div className='min-h-[540px]'>
          <SignIn />
        </div>
      </div>
      <div className='relative hidden min-h-screen lg:flex'>
        <Image
          priority
          src={
            '/images/christina-deravedisian-2-unsplash.jpg'
          }
          alt='Christina Deravedisian on Unsplash'
          layout='fill'
        />
      </div>
    </div>
  )
}
