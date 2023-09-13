import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SidebarNavbar from './components/SidebarNavbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex min-h-screen flex-col scroll-smooth'>
      <Navbar />
      <SidebarNavbar />
      <Sidebar />
      <main className='relative top-36 min-h-screen bg-gray-50 dark:bg-black dark:text-theme-soft-peach lg:ml-80'>
        <div className='container py-5'>
          {children}
        </div>
      </main>
    </section>
  )
}
