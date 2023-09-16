'use client'

import { Resizable } from 'react-resizable'
import { useState } from 'react'

export default function Dashboard() {
  const [state, setState] = useState({
    width: 800,
    height: 800,
  })

  const onResize = (e: any, { size }: any) => {
    setState({
      width: size.width,
      height: size.height,
    })
  }

  return (
    <div className='relative flex flex-col items-center justify-center'>
      I am the dashboard page!
      <Resizable
        height={state.height}
        width={state.width}
        onResize={onResize}
        className='border'
      >
        <div
          style={{
            width: state.width + 'px',
          }}
          className='h-[600px] w-[600px] border'
        >
          <iframe
            className='w-full h-full'
            src='/dashboard/components/buttons'
          ></iframe>
        </div>
      </Resizable>
    </div>
  )
}
