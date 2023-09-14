import { components } from '@/lib/database'
import SidebarItems from '@/components/SidebarItems'

export default function Sidebar() {
  return (
    <div className='container fixed bottom-0 left-0 top-64 hidden w-80 flex-col gap-2 overflow-scroll from-theme-orange/80 lg:flex'>
      <div className='flex flex-col gap-2'>
        {components.map((items) => (
          <SidebarItems {...items} />
        ))}
      </div>
    </div>
  )
}
