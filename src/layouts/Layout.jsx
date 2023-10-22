'use client'

import { usePathname } from 'next/navigation'
import NoNavigationLayout from './NoNavigationLayout'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import PanelLayout from './PanelLayout'
import useCarsStore from '@/hooks/useCarsStore'
import { useEffect } from 'react'
import useSessionStore from '@/hooks/useSessionStore'
import NavBarResponsive from '@/components/NavBarResponsive'

export default function Layout ({ children }) {
  const { reFetch } = useCarsStore()
  const { setSession } = useSessionStore()
  // al iniciar la app, se cargan los autos en el store y se guarda
  // la sesión del admin en el store
  useEffect(() => {
    setSession(JSON.parse(window.localStorage.getItem('session')))
    reFetch()
  }, [])

  const path = usePathname()

  if (['/login'].includes(path)) {
    return (
      <NoNavigationLayout>
        {children}
      </NoNavigationLayout>
    )
  }

  if (path.startsWith('/panel')) {
    return (
      <PanelLayout>
        {children}
      </PanelLayout>
    )
  }

  return (
    <>
      <NavBar />
      <NavBarResponsive />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
