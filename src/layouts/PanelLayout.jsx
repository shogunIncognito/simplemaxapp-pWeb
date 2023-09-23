import sideImage from '@/assets/maxautoslogoblanco.png'
import useDisclosure from '@/hooks/useDisclosure'
import { CloseIcon, MenuIcon } from '@/libs/Icons'
import { deleteCookie, getCookie } from 'cookies-next'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function PanelLayout ({ children }) {
  const { open, handleOpen, handleClose } = useDisclosure()
  const router = useRouter()
  const path = usePathname()

  const closeSession = () => {
    deleteCookie('token')
    router.push('/login')
  }

  useEffect(() => {
    const token = getCookie('token')
    if (token?.split('-').length !== 5) {
      closeSession()
    }
  }, [])

  return (
    <main className='md:flex h-screen w-full'>
      {/* Mobile Layout */}
      <header className='relative h-[8%] md:hidden text-white bg-slate-800 flex justify-center items-center w-full'>
        <div onClick={handleOpen} className='absolute left-0'>
          <MenuIcon className='w-12 ml-2' />
        </div>
        <h2 className='text-center text-2xl font-bold'>Max<span className='text-blue-500'>Autos</span></h2>
      </header>

      {open && (
        <aside className='top-0 md:hidden animate__animated animate__slideInLeft w-full flex flex-col absolute z-20 h-screen shadow-xl bg-slate-800 text-white'>
          <CloseIcon onClick={handleClose} className='w-12 m-2 self-end cursor-pointer' />
          <Image src={sideImage} width={180} alt='sideimage' className='m-auto my-0 object-cover h-auto' />
          <nav className='flex flex-col'>
            <Link className='p-4 px-6 hover:bg-gray-900 transition-color' href='/'>Volver a pagina inicial</Link>
            <Link className={`p-4 px-6 hover:bg-gray-900 transition-colors ${path === '/panel' ? 'bg-gray-700' : ''}`} href='/panel'>Autos</Link>
            <Link className={`p-4 px-6 hover:bg-gray-900 transition-colors ${path === '/usuarios' ? 'bg-gray-700' : ''}`} href='#'>Usuarios</Link>
            <Link onClick={closeSession} className='p-4 px-6 hover:bg-gray-900 transition-colors' href='#'>Cerrar sesión</Link>
          </nav>
        </aside>
      )}

      {/* Desktop Layout */}
      <aside className='w-1/6 hidden md:block h-screen shadow-xl bg-slate-800 text-white'>
        <Image src={sideImage} width={170} height={200} alt='sideimage' className='m-auto h-auto my-0 object-cover' />
        <nav className='flex flex-col'>
          <Link className='p-4 px-6 hover:bg-gray-900 transition-color' href='/'>Volver a pagina inicial</Link>
          <Link className={`p-4 px-6 hover:bg-gray-900 transition-colors ${path === '/panel' ? 'bg-gray-700' : ''}`} href='#'>Autos</Link>
          <Link className={`p-4 px-6 hover:bg-gray-900 transition-colors ${path === '/usuarios' ? 'bg-gray-700' : ''}`} href='#'>Usuarios</Link>
          <Link onClick={closeSession} className='p-4 px-6 hover:bg-red-700/80 transition-colors' href='#'>Cerrar sesión</Link>
        </nav>
      </aside>

      <section className='md:w-10/12 w-full md:h-full h-[92%] bg-slate-50'>
        {children}
      </section>
    </main>
  )
}
