import { UserProfile } from '@clerk/nextjs'

export default function page() {
  return (
    <div className='flex p-5'>
      <UserProfile />
    </div>
  )
}
