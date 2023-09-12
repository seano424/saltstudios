'use client'

import {
  useState,
  useEffect,
  useRef,
} from 'react'

import FocusTrap from 'focus-trap-react'

export default function SearchModal() {
  const [isModalOpen, setIsModalOpen] =
    useState(false)
  const modalRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (event: any) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }

      if (event.key === 'k' && event.metaKey) {
        setIsModalOpen((prevState) => !prevState)
      }
      if (!modalRef.current) {
        return
      }
      if (
        !modalRef.current.contains(event.target)
      ) {
        setIsModalOpen(false)
      }
    }

    document.addEventListener(
      'keydown',
      handler,
      true
    )

    document.addEventListener(
      'click',
      handler,
      true
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handler
      )

      document.removeEventListener(
        'click',
        handler
      )
    }
  }, [])

  return (
    <>
      <div className='pointer-events-auto relative bg-white dark:bg-slate-900'>
        <button
          onClick={() =>
            setIsModalOpen(
              (prevState) => !prevState
            )
          }
          type='button'
          className='dark:highlight-white/5 hidden w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 lg:flex'
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
          <span className='ml-auto flex-none pl-3 text-xs font-semibold'>
            ⌘K
          </span>
        </button>
      </div>
      {isModalOpen && (
        <FocusTrap>
          <div className='fixed inset-0 z-50 flex justify-center bg-gray-400/50 pt-40 filter backdrop-blur-sm'>
            <div
              ref={modalRef}
              className='h-72 w-5/6 rounded-xl bg-white py-5 lg:w-1/2'
            >
              <div className='flex items-center justify-between border-b border-gray-100 px-5 pb-3'>
                <div className='flex items-center gap-2'>
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
                    <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0'></path>
                    <path d='M21 21l-6 -6'></path>
                  </svg>
                  <input
                    autoFocus
                    className='w-full focus:outline-none'
                    placeholder='Search documentation'
                    type='text'
                  />
                </div>
                <button
                  onClick={() =>
                    setIsModalOpen(false)
                  }
                  className='rounded-md border border-gray-100 p-3 text-[10px] shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-50'
                >
                  ESC
                </button>
              </div>
            </div>
          </div>
        </FocusTrap>
      )}
    </>
  )
}
