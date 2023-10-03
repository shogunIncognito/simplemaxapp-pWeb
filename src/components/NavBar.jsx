import { LoginIcon, MaxAutosIcon } from '@/libs/Icons'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { FaCarAlt } from 'react-icons/fa'

export default function NavBar () {
  return (
    <header className='bg-slate-50 shadow-xl flex-col md:flex-row top-0 sticky duration-300 ease-in-out transition-all z-50 p-4 flex w-full items-center'>
      <Link href='/' className='md:absolute'>
        <MaxAutosIcon />
      </Link>
      <nav className='m-auto w-full flex justify-center items-center'>
        <ul className='flex justify-center items-center'>
          <li>
            <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent hover:border-black rounded' href='/'>
              <AiFillHome size={30} />
              Inicio
            </Link>
          </li>
          <li>
            <Link className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent hover:border-black rounded' href='/cars'>
              <FaCarAlt size={30} />
              Nuestros Autos
            </Link>
          </li>
        </ul>
      </nav>
      <Link href='/login' className='absolute right-0'>
        <LoginIcon className='mr-4' />
      </Link>
    </header>
  )
}
