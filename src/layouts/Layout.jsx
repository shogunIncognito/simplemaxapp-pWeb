'use client'

import { usePathname } from 'next/navigation'
import NoNavigationLayout from './NoNavigationLayout'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PanelLayout from './PanelLayout'
import useCarsStore from '@/hooks/useCarsStore'
import { useEffect } from 'react'

export default function Layout ({ children }) {
  const { fetchCars } = useCarsStore()
  // al iniciar la app, se cargan los autos en el store
  useEffect(() => {
    fetchCars()
  }, [])

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
