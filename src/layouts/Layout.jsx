'use client'

import { usePathname } from 'next/navigation'
import NoNavigationLayout from './NoNavigationLayout'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Layout ({ children }) {
  const path = usePathname()

  if (path === '/login') {
    return (
      <NoNavigationLayout>
        {children}
      </NoNavigationLayout>
    )
  }

  return (
    <>
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
