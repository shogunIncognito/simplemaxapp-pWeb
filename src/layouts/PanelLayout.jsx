import sideImage from '@/assets/maxautoslogoblanco.png'
import { panelLinks } from '@/helpers/inputs'
import useDisclosure from '@/hooks/useDisclosure'
import { CloseIcon, MenuIcon } from '@/libs/Icons'
import { deleteCookie, getCookie } from 'cookies-next'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function PanelLayout ({ children }) {
  const { open, handleOpen, handleClose } = useDisclosure()
  const router = useRouter()
  const path = usePathname()

  const closeSession = () => {
    deleteCookie('token')
    router.replace('/login')
    toast('Sesión cerrada', {
      icon: '👋'
    })
  }

  useEffect(() => {
    const token = getCookie('token')
    if (token?.split('-').length !== 5) {
      closeSession()
    }
  }, [])

  return (
    <main className='md:flex h-screen w-full bg-slate-800'>
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
            {
              panelLinks.map((link, index) => (
                <Link onClick={handleClose} key={index} className={`p-4 px-6 hover:bg-gray-900 transition-colors ${path === link.href ? 'bg-gray-700' : ''}`} href={link.href}>{link.text}</Link>
              ))
            }
            <p onClick={closeSession} className='p-4 px-6 cursor-pointer hover:bg-gray-900 transition-colors'>Cerrar sesión</p>
          </nav>
        </aside>
      )}

      {/* Desktop Layout */}
      <aside className='w-1/6 hidden md:block h-screen shadow-xl text-white'>
        <Image src={sideImage} width={170} height={200} alt='sideimage' className='m-auto h-auto my-0 object-cover' />
        <nav className='flex flex-col'>
          <Link className='p-4 px-6 hover:bg-gray-900 transition-color' href='/'>Volver a pagina inicial</Link>
          {
            panelLinks.map((link, index) => (
              <Link key={index} className={`p-4 px-6 hover:bg-gray-900 transition-colors ${path === link.href ? 'bg-gray-700' : ''}`} href={link.href}>{link.text}</Link>
            ))
          }
          <p onClick={closeSession} className='p-4 px-6 h cursor-pointer hover:bg-red-700/80 transition-colors'>Cerrar sesión</p>
        </nav>
      </aside>

      <section className='md:w-10/12 w-full md:h-full h-[92%] overflow-hidden bg-neutral-800 text-white'>
        {children}
      </section>
    </main>
  )
}
