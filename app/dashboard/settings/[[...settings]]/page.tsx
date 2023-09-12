'use client'

import clsx from 'clsx'
import { UserProfile } from '@clerk/nextjs'
import { useState } from 'react'

export default function page() {
  const [active, setActive] = useState<
    | 'Overview'
    | 'Account Settings'
    | 'Payment Method'
  >('Account Settings')

  return (
    <div className='flex flex-col items-center justify-center gap-4 lg:items-start lg:px-5'>
      <div className='flex items-center gap-5'>
        <button
          onClick={() => setActive('Overview')}
          className={clsx(
            'rounded bg-white px-4 py-2',
            active === 'Overview' && 'bg-gray-200'
          )}
        >
          Overview
        </button>
        <button
          onClick={() =>
            setActive('Account Settings')
          }
          className={clsx(
            'rounded bg-white px-4 py-2',
            active === 'Account Settings' &&
              'bg-gray-200'
          )}
        >
          Account Settings
        </button>
        <button
          onClick={() =>
            setActive('Payment Method')
          }
          className={clsx(
            'rounded bg-white px-4 py-2',
            active === 'Payment Method' &&
              'bg-gray-200'
          )}
        >
          Payment Method
        </button>
      </div>
      {active === 'Overview' && (
        <div className='h-[400px] w-2/3 rounded-2xl bg-white shadow-2xl'></div>
      )}
      {active === 'Account Settings' && (
        <UserProfile />
      )}
      {active === 'Payment Method' && (
        <div className='h-[400px] w-2/3 rounded-2xl bg-white shadow-2xl'></div>
      )}
    </div>
  )
}
