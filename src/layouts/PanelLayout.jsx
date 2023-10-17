import sideImage from '@/assets/maxautoslogoblanco.png'
import useDisclosure from '@/hooks/useDisclosure'
import useSessionStore from '@/hooks/useSessionStore'
import { CloseIcon, MenuIcon, UserIcon } from '@/libs/Icons'
import { FiArrowLeft } from 'react-icons/fi'
import { AiFillHome } from 'react-icons/ai'
import { FaCarAlt } from 'react-icons/fa'
import { BiSolidUser } from 'react-icons/bi'
import { RiLogoutBoxRLine as RxExit } from 'react-icons/ri'
import { deleteCookie, getCookie } from 'cookies-next'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import UserSettings from '@/components/panel/UserSettings'

export default function PanelLayout ({ children }) {
  const { open, handleOpen, handleClose } = useDisclosure()
  const { session, setSession } = useSessionStore()
  const router = useRouter()
  const path = usePathname()

  const closeSession = () => {
    window.localStorage.removeItem('session')
    deleteCookie('auth-token')
    setSession(null)
    router.push('/login')

    toast('Sesión cerrada', {
      icon: '👋'
    })
  }

  useEffect(() => {
    if (!getCookie('auth-token')) {
      router.push('/login')
    }
  }, [path])

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
          <Image src={sideImage} width={170} height='auto' priority alt='sideimage' className='pointer-events-none select-none m-auto my-0 mb-10 object-cover h-auto' />

          <div className='flex items-center gap-2 p-4 shadow-md mb-5 bg-neutral-900 w-full'>
            <UserIcon className='w-10 bg-white rounded-full' />
            <h2 className='opacity-80 capitalize'>{session?.name || 'Cargando...'}</h2>
            <UserSettings />
          </div>

          <nav className='flex flex-col'>
            <Link className='p-4 px-6 hover:bg-gray-900 text-white flex gap-2 items-center transition-color' href='/'>
              <FiArrowLeft size={28} className='opacity-75 ' />
              <p className=''>Volver a pagina inicial</p>
            </Link>
            <Link onClick={handleClose} className={`p-4 px-6 hover:bg-gray-900 text-white flex gap-2 items-center transition-colors ${path === '/panel' ? 'bg-gray-700' : ''}`} href='/panel'>
              <AiFillHome size={28} className='opacity-75' />
              <p className=''>Inicio</p>
            </Link>
            <Link onClick={handleClose} className={`p-4 px-6 hover:bg-gray-900 text-white flex gap-2 items-center transition-colors ${path === '/panel/cars' ? 'bg-gray-700' : ''}`} href='/panel/cars'>
              <FaCarAlt size={28} className='opacity-75' />
              <p className=''>Autos</p>
            </Link>
            <Link onClick={handleClose} className={`p-4 px-6 hover:bg-gray-900 text-white flex gap-2 items-center transition-colors ${path === '/panel/users' ? 'bg-gray-700' : ''}`} href='/panel/users'>
              <BiSolidUser size={28} className='opacity-75' />
              <p className=''>Usuarios</p>
            </Link>
            <button onClick={closeSession} className='p-4 px-6 flex items-center gap-2 hover:bg-red-700/80 transition-colors'>
              <RxExit size={28} className='opacity-75' />
              <p className=''>Cerrar sesión</p>
            </button>
          </nav>

          <div className='min-h-fit absolute pointer-events-none bottom-5 self-center'>
            <p className='text-center text-xs opacity-50'>Max<span className='text-blue-500'>Autos</span></p>
          </div>
        </aside>
      )}

      {/* Desktop Layout */}
      <aside className='w-1/6 hidden relative md:flex md:flex-col h-screen shadow-xl text-white'>

        <Image src={sideImage} width={140} height='auto' priority alt='sideimage' className='pointer-events-none select-none m-auto h-auto my-5 object-cover' />

        <div className='flex items-center gap-2 p-4 shadow-md mb-5 bg-neutral-900 w-full'>
          <UserIcon className='w-10 bg-white rounded-full' />
          <h2 className='opacity-80 capitalize'>{session?.name || 'Cargando...'}</h2>
          <UserSettings />
        </div>

        <nav className='flex flex-col'>

          <Link className='p-4 px-6 lg:p-4 md:p-3 hover:bg-gray-900 text-white flex gap-2 items-center transition-color' href='/'>
            <FiArrowLeft size={20} className='opacity-75 ' />
            <p className=''>Volver a pagina inicial</p>
          </Link>
          <Link className={`p-4 px-6 lg:p-4 md:p-3 hover:bg-gray-900 text-white flex gap-2 items-center transition-colors ${path === '/panel' ? 'bg-neutral-900/60' : ''}`} href='/panel'>
            <AiFillHome size={20} className='opacity-75' />
            <p className=''>Inicio</p>
          </Link>
          <Link className={`p-4 px-6 lg:p-4 md:p-3 hover:bg-gray-900 text-white flex gap-2 items-center transition-colors ${path === '/panel/cars' ? 'bg-neutral-900/60' : ''}`} href='/panel/cars'>
            <FaCarAlt size={20} className='opacity-75' />
            <p className=''>Autos</p>
          </Link>
          <Link className={`p-4 px-6 lg:p-4 md:p-3 hover:bg-gray-900 text-white flex gap-2 items-center transition-colors ${path === '/panel/users' ? 'bg-neutral-900/60' : ''}`} href='/panel/users'>
            <BiSolidUser size={20} className='opacity-75' />
            <p className=''>Usuarios</p>
          </Link>
          <button onClick={closeSession} className='p-4 px-6 lg:p-4 md:p-3 flex items-center gap-2 hover:bg-red-700/80 transition-colors'>
            <RxExit size={20} className='opacity-75' />
            <p className=''>Cerrar sesión</p>
          </button>

        </nav>

        <div className='min-h-fit absolute pointer-events-none bottom-5 self-center'>
          <p className='text-center text-xs opacity-50'>Max<span className='text-blue-500'>Autos</span></p>
        </div>
      </aside>

      <section className='md:w-10/12 w-full h-full overflow-hidden bg-neutral-800 text-white'>
        {children}
      </section>
    </main>
  )
}
