import { NextResponse } from 'next/server'

export function middleware (request) {
  const token = request.cookies.get('token')?.value
  const path = request.nextUrl.pathname
  const redirect = path => NextResponse.redirect(new URL(path, request.url))

  if (!token && path === '/login') return NextResponse.next()
  if (token && path === '/login') return redirect('/panel')
  if (!token && path === '/panel') return redirect('/login')

  NextResponse.next()
}

export const config = {
  matcher: ['/login', '/panel']
}
