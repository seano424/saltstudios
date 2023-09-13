'use client'

import { useModalStore } from '@/store/zustand'

export default function SearchModal() {
  const { isModalOpen, toggleModalOpen } =
    useModalStore()
  return (
    <button
      onClick={() => toggleModalOpen(isModalOpen)}
      type='button'
      className='dark:highlight-white/5 pointer-events-auto relative hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 lg:flex'
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
      Quick search...
      <span className='ml-auto flex-none pl-8 text-xs font-semibold'>
        ⌘K
      </span>
    </button>
  )
}
