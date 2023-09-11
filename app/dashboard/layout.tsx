import Navbar from './components/Navbar'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='flex min-h-screen flex-col scroll-smooth'>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />

      <div className='fixed left-0 top-32 h-40 w-80 overflow-scroll border-8 border-purple-300'></div>
      <div className='fixed bottom-0 left-0 top-72 w-80 overflow-scroll border-8 border-yellow-300'>
        <div className='h-[1800px] bg-pink-300'></div>
      </div>
      <main className='relative top-32 ml-80 min-h-screen border-8 border-green-300'>
        {children}
      </main>
    </section>
  )
}
