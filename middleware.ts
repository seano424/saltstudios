import { authMiddleware } from '@clerk/nextjs'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    '/',
    '/components',
    '/components/(.*)',
    '/dashboard',
    '/dashboard/templates',
    '/dashboard/components',
    '/dashboard/components/(.*)',
  ],
})

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',
    '/(api|trpc)(.*)',
    '/dashboard/settings',
    '/dashboard/settings/[[...settings]]',
  ],
}
