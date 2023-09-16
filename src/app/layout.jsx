import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/layouts/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MaxAutos',
  description: 'Pagina de MaxAutos'
}

export default function RootLayout ({ children }) {
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
