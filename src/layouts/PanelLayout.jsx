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
    <main className='flex-col max-w-full max-h-screen md:flex-row flex h-screen w-full bg-[#171923]'>
      {/* Mobile Layout */}
      <section className='overflow-hidden md:hidden flex flex-col w-full h-full text-white'>
        <header className='relative min-h-[8%] h-[8%] text-white bg-[#171923] border-b justify-between items-center border-gray-600/60 flex w-full'>
          <div onClick={handleOpen} className='ml-3 z-20'>
            <MenuIcon className='w-8 border rounded-lg border-gray-700/70' />
          </div>
          <h2 className='text-center absolute w-full m-auto mt-0 text-2xl -z-0 font-bold'>Max<span className='text-blue-500'>Autos</span></h2>
          <div className='flex items-center gap-2 mr-3 shadow-md z-20'>
            <UserIcon className='w-10 bg-white rounded-full' />
            <UserSettings />
          </div>
        </header>

        {children}
      </section>

      <aside
        style={{
          transform: `translateX(-${open ? 0 : 200}%)`,
          zIndex: '200'
        }}
        className='top-0 md:hidden transition-all duration-500 w-full flex flex-col absolute z-50
        h-screen shadow-xl bg-[#171923] text-white'
      >
        <CloseIcon onClick={handleClose} className='w-12 m-2 self-end cursor-pointer' />
        <Image src={sideImage} width={140} height='auto' priority alt='sideimage' className='pointer-events-none select-none m-auto my-0 mb-2 object-cover h-auto' />

        <nav className='flex flex-col p-4'>
          <Link className='p-4 px-6 rounded-md hover:bg-gray-900 text-white flex gap-2 items-center transition-color' href='/'>
            <FiArrowLeft size={28} className='opacity-75 ' />
            <p className=''>Volver a pagina inicial</p>
          </Link>
          <Link onClick={handleClose} className={`p-4 px-6 rounded-md hover:bg-gray-900 text-white flex gap-2 items-center transition-colors ${path === '/panel' ? 'bg-gray-700' : ''}`} href='/panel'>
            <AiFillHome size={28} className='opacity-75' />
            <p className=''>Inicio</p>
          </Link>
          <Link onClick={handleClose} className={`p-4 px-6 rounded-md hover:bg-gray-900 text-white flex gap-2 items-center transition-colors ${path === '/panel/cars' ? 'bg-gray-700' : ''}`} href='/panel/cars'>
            <FaCarAlt size={28} className='opacity-75' />
            <p className=''>Autos</p>
          </Link>
          <Link onClick={handleClose} className={`p-4 px-6 hover:bg-gray-900 text-white flex gap-2 items-center transition-colors ${path === '/panel/users' ? 'bg-gray-700' : ''}`} href='/panel/users'>
            <BiSolidUser size={28} className='opacity-75' />
            <p className=''>Usuarios</p>
          </Link>
          <button onClick={closeSession} className='p-4 px-6 rounded-md flex items-center gap-2 hover:bg-red-700/80 transition-colors'>
            <RxExit size={28} className='opacity-75' />
            <p className=''>Cerrar sesión</p>
          </button>
        </nav>

        <div className='min-h-fit absolute pointer-events-none bottom-5 self-center'>
          <p className='text-center text-xs opacity-50'>Max<span className='text-blue-500'>Autos</span></p>
        </div>
      </aside>

      {/* Desktop Layout */}
      <aside className='lg:w-1/6 border-gray-200/10 border-r-2 bg-[#171923] md:w-1/3 hidden relative md:flex md:flex-col h-screen px-3 shadow-xl text-white'>

        <Image src={sideImage} width={140} height='auto' priority alt='sideimage' className='pointer-events-none select-none m-auto h-auto my-8 object-cover' />

        <nav className='flex flex-col gap-2'>

          <Link className='p-4 px-6 rounded-md lg:p-4 md:p-3 hover:bg-[#0987A0] text-white flex gap-2 items-center transition-color' href='/'>
            <FiArrowLeft size={20} className='opacity-75 ' />
            <p className=''>Volver a pagina inicial</p>
          </Link>
          <Link className={`p-4 px-6 rounded-md lg:p-4 md:p-3 hover:bg-[#0987A0] text-white flex gap-2 items-center transition-colors ${path === '/panel' ? 'bg-sky-700/60' : ''}`} href='/panel'>
            <AiFillHome size={20} className='opacity-75' />
            <p className=''>Inicio</p>
          </Link>
          <Link className={`p-4 px-6 rounded-md lg:p-4 md:p-3 hover:bg-[#0987A0] text-white flex gap-2 items-center transition-colors ${path === '/panel/cars' ? 'bg-sky-700/60' : ''}`} href='/panel/cars'>
            <FaCarAlt size={20} className='opacity-75' />
            <p className=''>Autos</p>
          </Link>
          <Link className={`p-4 px-6 rounded-md lg:p-4 md:p-3 hover:bg-[#0987A0] text-white flex gap-2 items-center transition-colors ${path === '/panel/users' ? 'bg-sky-700/60' : ''}`} href='/panel/users'>
            <BiSolidUser size={20} className='opacity-75' />
            <p className=''>Usuarios</p>
          </Link>
          <button onClick={closeSession} className='p-4 px-6 lg:p-4 md:p-3 rounded-md flex items-center gap-2 hover:bg-red-700/80 transition-colors'>
            <RxExit size={20} className='opacity-75' />
            <p className=''>Cerrar sesión</p>
          </button>

        </nav>

        <div className='min-h-fit absolute pointer-events-none bottom-5 self-center'>
          <p className='text-center text-xs opacity-50'>Max<span className='text-blue-500'>Autos</span></p>
        </div>
      </aside>

      <section className='md:flex flex-col w-full hidden h-auto overflow-hidden text-white'>
        <header className='border-b-2 h-min border-gray-200/10 flex items-center gap-3 capitalize p-4 bg-[#171923] justify-end'>
          <UserIcon className='w-10 bg-white rounded-full' />
          <h2 className='opacity-80 capitalize'>{session?.name || 'Cargando...'}</h2>
          <UserSettings />
        </header>

        {children}
      </section>
    </main>
  )
}
