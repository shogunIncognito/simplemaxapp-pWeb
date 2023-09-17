import sideImage from '@/assets/maxautosicon.png'
import { deleteCookie, getCookie } from 'cookies-next'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function PanelLayout ({ children }) {
  const router = useRouter()

  useEffect(() => {
    const token = getCookie('token')
    if (token?.split('-').length !== 5) {
      deleteCookie('token')
      router.push('/login')
    }
  }, [])

  return (
    <main className='flex'>
      <aside className='w-1/3'>
        <Image src={sideImage} width={150} height={150} alt='sideimage' className='object-cover' />
        <nav>
          <ul>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Inicio</a></li>
          </ul>
        </nav>
      </aside>
      <section className='w-2/3'>
        {children}
      </section>
    </main>
  )
}
