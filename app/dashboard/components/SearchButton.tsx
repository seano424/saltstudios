'use client'

import { useModalStore } from '@/store/zustand'

export default function SearchModal() {
  const { isModalOpen, toggleModalOpen } =
    useModalStore()
  return (
    <button
      onClick={() => toggleModalOpen(isModalOpen)}
      type='button'
      className='dark:highlight-white/5 pointer-events-auto relative w-full items-center rounded-md pl-2 text-sm leading-6 text-slate-400 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 lg:flex lg:py-1.5 lg:pr-3 lg:shadow-sm lg:ring-1'
    >
      <svg
        width='24'
        height='24'
        fill='none'
        aria-hidden='true'
        className='mr-3 flex-none'
      >
        <path
          d='m19 19-3.5-3.5'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
        <circle
          cx='11'
          cy='11'
          r='6'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></circle>
      </svg>
      <span className='hidden lg:flex'>
        Quick search...
      </span>
      <span className='ml-auto hidden flex-none pl-8 text-xs font-semibold lg:flex'>
        ⌘K
      </span>
    </button>
  )
}
