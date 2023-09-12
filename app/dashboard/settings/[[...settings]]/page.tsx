import { UserProfile } from '@clerk/nextjs'

export default function page() {
  return (
    <div className='flex items-center justify-center py-5 lg:justify-start lg:px-5'>
      <UserProfile />
    </div>
  )
}
