import Link from 'next/link'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SidebarNavbar from './components/SidebarNavbar'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex min-h-screen flex-col scroll-smooth'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />
      <SidebarNavbar />
      <Sidebar />
      {/* max-width: calc(100vw - 5rem); */}
      {/* "w-[calc(100%+2rem)]"" */}
      <main className='relative top-36 min-h-screen bg-gray-50  lg:ml-80'>
        <div className='container'>
          {children}
        </div>
      </main>
    </section>
  )
}
