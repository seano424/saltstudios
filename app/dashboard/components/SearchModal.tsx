'use client'

import { useRef, useEffect } from 'react'
import FocusTrap from 'focus-trap-react'
import { useModalStore } from '@/store/zustand'

export default function Modal() {
  const {
    isModalOpen,
    setIsModalOpen,
    toggleModalOpen,
  } = useModalStore()

  const modalRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (event: any) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }

      if (event.key === 'k' && event.metaKey) {
        toggleModalOpen(isModalOpen)
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
      {isModalOpen && (
        <FocusTrap>
          <div className='dark:bg-theme-dark/90 fixed inset-0 z-50 flex justify-center bg-gray-400/50 pt-40 filter backdrop-blur-sm'>
            <div
              ref={modalRef}
              className='dark:bg-theme-dark h-72 w-5/6 rounded-xl bg-white py-5 dark:border-2 dark:border-theme-soft-peach lg:w-1/2'
            >
              <div className='flex items-center justify-between gap-4 border-b border-gray-100 px-5 pb-3 dark:border-theme-soft-peach'>
                <div className='flex flex-1 items-center gap-2'>
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
                    className='dark:bg-theme-dark w-full rounded focus:outline-none dark:text-theme-soft-peach dark:placeholder:text-theme-soft-peach'
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
