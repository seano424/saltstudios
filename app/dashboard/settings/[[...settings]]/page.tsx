'use client'

import clsx from 'clsx'
import { useEffect } from 'react'
import { UserProfile } from '@clerk/nextjs'
import { useSettingsStore } from '@/store/zustand'

export default function page() {
  const { activeTab, setActiveTab } =
    useSettingsStore()

  return (
    <div className='flex flex-col items-center justify-center gap-4 lg:items-start lg:px-5'>
      <div className='flex items-center gap-5'>
        <button
          onClick={() => setActiveTab('Overview')}
          className={clsx(
            'rounded px-4 py-2',
            activeTab === 'Overview'
              ? 'bg-gray-200'
              : 'bg-white'
          )}
        >
          Overview
        </button>
        <button
          onClick={() =>
            setActiveTab('Account Settings')
          }
          className={clsx(
            'rounded px-4 py-2',
            activeTab === 'Account Settings'
              ? 'bg-gray-200'
              : 'bg-white'
          )}
        >
          Account Settings
        </button>
        <button
          onClick={() =>
            setActiveTab('Payment Info')
          }
          className={clsx(
            'rounded px-4 py-2',
            activeTab === 'Payment Info'
              ? 'bg-gray-200'
              : 'bg-white'
          )}
        >
          Payment Info
        </button>
      </div>
      {activeTab === 'Overview' && (
        <div className='h-[400px] w-2/3 rounded-2xl bg-white shadow-2xl'></div>
      )}
      {activeTab === 'Account Settings' && (
        <UserProfile />
      )}
      {activeTab === 'Payment Info' && (
        <div className='h-[400px] w-2/3 rounded-2xl bg-white shadow-2xl'></div>
      )}
    </div>
  )
}
