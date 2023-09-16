'use client'

import clsx from 'clsx'
import { Resizable } from 'react-resizable'
import { useState, useEffect } from 'react'

interface Props {
  src?: string
}

export default function ResizableIframe({
  src = '/dashboard/components/buttons',
}: Props) {
  const [state, setState] = useState({
    width: 1200,
    height: 800,
  })

  const [maxConstraints, setMaxConstraints] =
    useState<[width: number, height: number]>([
      1100, 1100,
    ])

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (window.innerWidth < 1200) {
        setState({
          width: 600,
          height: window.innerHeight,
        })
        setMaxConstraints([600, 600])
      } else if (window.innerWidth < 1600) {
        setState({
          width: 800,
          height: window.innerHeight,
        })
        setMaxConstraints([800, 800])
      } else {
        setState({
          width: 1200,
          height: window.innerHeight,
        })
        setMaxConstraints([1200, 1200])
      }
    }

    window.addEventListener(
      'resize',
      handleResize
    )

    handleResize()

    return () =>
      window.removeEventListener(
        'resize',
        handleResize
      )
  }, [])

  const [isResizing, setIsResizing] =
    useState(false)

  const onResize = (e: any, { size }: any) => {
    setState({
      width: size.width,
      height: size.height,
    })
  }
  return (
    <Resizable
      maxConstraints={maxConstraints}
      height={state.height}
      width={state.width}
      onResize={onResize}
      onResizeStart={() => setIsResizing(true)}
      onResizeStop={() => setIsResizing(false)}
    >
      <div className='relative h-[800px]'>
        <div
          className={clsx(
            'absolute inset-0',
            isResizing ? 'z-10' : 'z-0'
          )}
        ></div>
        <iframe
          style={{
            width: state.width + 'px',
          }}
          className='relative h-full overflow-hidden rounded-lg ring-1 ring-slate-900/10'
          sandbox='allow-scripts allow-same-origin'
          src={src}
        ></iframe>
      </div>
    </Resizable>
  )
}
