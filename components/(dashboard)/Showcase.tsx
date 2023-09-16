'use client'

import { useState } from 'react'
import ResizableIframe from './ResizableIframe'
import clsx from 'clsx'
import {
  SignUpButton,
  SignedOut,
  useAuth,
} from '@clerk/nextjs'

interface ShowcaseProps {
  sections: {
    name: string
    href: string
    publicComponent: boolean
  }[]
  name: string
}

export default function Showcase({
  sections,
  name = 'Hero Sections!',
}: ShowcaseProps) {
  const [activeTab, setActiveTab] = useState<
    'preview' | 'code'
  >('preview')

  const { isSignedIn } = useAuth()

  return (
    <div className='mx-auto flex w-[600px] flex-col gap-10 xl:w-[800px] 2xl:w-[1200px]'>
      <h4 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
        {name}
      </h4>

      {sections.map(
        ({ name, href, publicComponent }) => (
          <div key={href}>
            <div className='mb-3 flex items-center justify-between'>
              <h5>{name}</h5>
              {publicComponent ||
                (isSignedIn &&
                  !publicComponent && (
                    <div className='flex rounded-lg bg-gray-100 p-1'>
                      <button
                        className={clsx(
                          'flex items-center gap-1 rounded-lg px-3 py-1',
                          activeTab ===
                            'preview' &&
                            'bg-white'
                        )}
                        onClick={() =>
                          setActiveTab('preview')
                        }
                      >
                        <svg
                          className={clsx(
                            activeTab ===
                              'preview'
                              ? 'text-blue-500'
                              : 'text-gray-400'
                          )}
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
                          <path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0'></path>
                          <path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6'></path>
                        </svg>
                        Preview
                      </button>
                      <button
                        className={clsx(
                          'flex items-center gap-1 rounded-lg px-3 py-1',
                          activeTab === 'code' &&
                            'bg-white'
                        )}
                        onClick={() =>
                          setActiveTab('code')
                        }
                      >
                        <svg
                          className={clsx(
                            activeTab === 'code'
                              ? 'text-blue-500'
                              : 'text-gray-400'
                          )}
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
                          <path d='M7 8l-4 4l4 4'></path>
                          <path d='M17 8l4 4l-4 4'></path>
                          <path d='M14 4l-4 16'></path>
                        </svg>
                        Code
                      </button>
                    </div>
                  ))}
              {!isSignedIn &&
                !publicComponent && (
                  <SignedOut>
                    <SignUpButton mode='modal'>
                      <button>Get Access</button>
                    </SignUpButton>
                  </SignedOut>
                )}
            </div>
            {activeTab === 'preview' && (
              <ResizableIframe src={href} />
            )}
          </div>
        )
      )}
    </div>
  )
}
