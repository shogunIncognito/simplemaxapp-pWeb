'use client'

import { CarIcon, HomeIcon, LoginIcon, MaxAutosIcon } from '@/libs/Icons'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const scrollClasses = ['p-6']

export default function NavBar () {
  const nav = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (nav.current != null) {
        if (window.scrollY > 90) {
          nav.current.classList.add(...scrollClasses)
        } else {
          nav.current.classList.remove(...scrollClasses)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <header ref={nav} className='bg-slate-50 top-0 sticky duration-300 ease-in-out transition-all shadow-xl z-50 p-4 flex w-full items-center'>
      <Link href='/' className='absolute'>
        <MaxAutosIcon />
      </Link>
      <nav className='m-auto w-full flex justify-center items-center'>
        <ul className='flex justify-center items-center'>
          <li>
            <a className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent hover:border-black rounded' href='#'>
              <HomeIcon />
              Inicio
            </a>
          </li>
          <li>
            <a className='transition-all items-center gap-2 flex px-4 py-2 border-2 border-transparent hover:border-black rounded' href='#'>
              <CarIcon />
              Nuestros Autos
            </a>
          </li>
        </ul>
      </nav>
      <Link href='/login' className='absolute right-0'>
        <LoginIcon />
      </Link>
    </header>
  )
}
