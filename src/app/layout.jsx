import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Farmacia',
  description: 'Tienda de medicamentos'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
