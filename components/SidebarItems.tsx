import clsx from 'clsx'

interface SidebarItemProps {
  name: string
  icon: React.ReactNode
  items: {
    name: string
    href: string
  }[]
}

export default function SidebarItems({
  name,
  icon,
  items,
}: SidebarItemProps) {
  return (
    <div>
      <button
        className={clsx(
          'flex items-center gap-1 rounded px-4 py-3 transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 dark:text-theme-soft-peach dark:hover:bg-sky-500 dark:focus:bg-sky-500'
          // pathname === '/dashboard'
          //   ? 'bg-blue-50/50 font-bold text-sky-500 dark:bg-sky-400'
          //   : 'font-medium'
        )}
      >
        {icon === 'page' && (
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
            <path d='M20 20h.01'></path>
            <path d='M4 20h.01'></path>
            <path d='M8 20h.01'></path>
            <path d='M12 20h.01'></path>
            <path d='M16 20h.01'></path>
            <path d='M20 4h.01'></path>
            <path d='M4 4h.01'></path>
            <path d='M8 4h.01'></path>
            <path d='M12 4h.01'></path>
            <path d='M16 4l0 .01'></path>
            <path d='M4 8m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z'></path>
          </svg>
        )}
        {icon === 'elements' && (
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
            <path
              d='M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm1 6h-14v9a1 1 0 0 0 .883 .993l.117 .007h12a1 1 0 0 0 .993 -.883l.007 -.117v-9z'
              stroke-width='0'
              fill='currentColor'
            ></path>
          </svg>
        )}
        {icon === 'page-examples' && (
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
            <path d='M4 4h6v8h-6z'></path>
            <path d='M4 16h6v4h-6z'></path>
            <path d='M14 12h6v8h-6z'></path>
            <path d='M14 4h6v4h-6z'></path>
          </svg>
        )}
        <span>{name}</span>
      </button>
    </div>
  )
}
