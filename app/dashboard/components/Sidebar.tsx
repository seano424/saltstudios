import { components } from '@/lib/database'
import SidebarItems from '@/components/SidebarItems'

export default function Sidebar() {
  return (
    <div className='container fixed bottom-0 left-0 top-36 hidden w-80 flex-col gap-2 overflow-scroll from-theme-orange/80 lg:flex'>
      <div className='flex flex-col gap-2'>
        {components.map((items) => (
          <SidebarItems {...items} />
        ))}
      </div>
    </div>
  )
}

{
  /* <Link
  key={name}
  href={href}
  className={clsx(
    'flex items-center justify-between rounded px-3 py-1 transition-colors duration-200 ease-in-out hover:bg-blue-50/50 focus:bg-blue-50/50 dark:hover:bg-sky-500 dark:focus:bg-sky-500 lg:text-sm',
    pathname === href
      ? 'bg-blue-50/50 font-bold text-sky-500 dark:bg-sky-400/10 dark:text-sky-400'
      : 'text-slate-700 dark:text-white'
  )}
>
  {name}
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
    <path d='M3 12l3 0'></path>
    <path d='M12 3l0 3'></path>
    <path d='M7.8 7.8l-2.2 -2.2'></path>
    <path d='M16.2 7.8l2.2 -2.2'></path>
    <path d='M7.8 16.2l-2.2 2.2'></path>
    <path d='M12 12l9 3l-4 2l-2 4l-3 -9'></path>
  </svg>
</Link> */
}
