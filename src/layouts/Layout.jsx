'use client'

import { usePathname } from 'next/navigation'
import NoNavigationLayout from './NoNavigationLayout'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PanelLayout from './PanelLayout'

export default function Layout ({ children }) {
  const path = usePathname()

  if (['/login'].includes(path)) {
    return (
      <NoNavigationLayout>
        {children}
      </NoNavigationLayout>
    )
  }

  if (path === '/panel') {
    return (
      <PanelLayout>
        {children}
      </PanelLayout>
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
