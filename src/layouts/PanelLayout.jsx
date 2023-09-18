import sideImage from '@/assets/maxautoslogoblanco.png'
import { deleteCookie, getCookie } from 'cookies-next'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function PanelLayout ({ children }) {
  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    const token = getCookie('token')
    if (token?.split('-').length !== 5) {
      deleteCookie('token')
      router.push('/login')
    }
  }, [])

  return (
    <main className='flex h-screen w-screen'>
      <aside className='w-1/6 h-screen shadow-xl bg-slate-800 text-white'>
        <Link href='/'>
          <Image src={sideImage} width={200} height={200} alt='sideimage' className='m-auto h-auto w-auto my-0 object-cover' />
        </Link>
        <nav className='flex flex-col'>
          <Link className='p-4 px-6 hover:bg-gray-900 transition-color' href='/'>Volver a pagina inicial</Link>
          <Link className={`p-4 px-6 hover:bg-gray-900 transition-colors ${path === '/panel' ? 'bg-gray-700' : ''}`} href='#'>Autos</Link>
          <Link className={`p-4 px-6 hover:bg-gray-900 transition-colors ${path === '/usuarios' ? 'bg-gray-700' : ''}`} href='#'>Usuarios</Link>
        </nav>
      </aside>
      <section className='w-10/12 bg-slate-50'>
        {children}
      </section>
    </main>
  )
}
