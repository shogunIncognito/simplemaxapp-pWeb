import './globals.css'
import 'animate.css'
import { Inter } from 'next/font/google'
import Layout from '@/layouts/Layout'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MaxAutos',
  description: 'Pagina de MaxAutos'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Toaster />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
