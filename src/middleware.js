import { NextResponse } from 'next/server'

export function middleware (request) {
  const token = request.cookies.get('auth-token')?.value
  const isValidToken = token?.split('-').length === 5
  const path = request.nextUrl.pathname
  const redirect = path => NextResponse.redirect(new URL(path, request.url))

  if (!isValidToken && path === '/login') return NextResponse.next()
  if (isValidToken && path === '/login') return redirect('/panel')
  if (!isValidToken && path.startsWith('/panel')) return redirect('/login')

  NextResponse.next()
}

export const config = {
  matcher: ['/login', '/panel/:path*']
}
