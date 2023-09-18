'use client'

import './globals.css'
import 'animate.css'
import { Inter } from 'next/font/google'
import Layout from '@/layouts/Layout'
import useCarsStore from '@/hooks/useCarsStore'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MaxAutos',
  description: 'Pagina de MaxAutos'
}

export default function RootLayout ({ children }) {
  const { fetchCars } = useCarsStore()
  // al iniciar la app, se cargan los autos en el store
  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
