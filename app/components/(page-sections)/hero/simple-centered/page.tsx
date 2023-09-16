import Link from 'next/link'

export default function SimpleCentered() {
  return (
    <div className='relative flex min-h-screen'>
      {/* Place Navbar Here */}
      <div
        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-theme-orange to-theme-pink opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>

      <div className='mx-auto flex max-w-2xl flex-col items-center justify-center gap-5 py-32 text-center sm:py-48 lg:py-56'>
        <Link
          href='/'
          className='flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm text-gray-500 hover:border-gray-300 hover:text-gray-900'
        >
          Announcing our next round of funding.
          <span className='text-primary-500'>
            Read more
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
            <path d='M5 12l14 0'></path>
            <path d='M15 16l4 -4'></path>
            <path d='M15 8l4 4'></path>
          </svg>
        </Link>

        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl'>
          Data to enrich your online business
        </h1>

        <p className='text-xl text-gray-600'>
          Anim aute id magna aliqua ad ad non
          deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat
          veniam occaecat fugiat aliqua.
        </p>

        <div className='flex gap-3'>
          <Link
            href='/'
            className='bg-primary-600 hover:bg-primary-700 inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white shadow-sm'
          >
            Get started
          </Link>

          <Link
            href='/'
            className='inline-flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-200'
          >
            Live demo
          </Link>
        </div>
      </div>
    </div>
  )
}
