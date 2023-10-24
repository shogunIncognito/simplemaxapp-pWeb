'use client'
// import MenuResponsive from './MenuResponsive'
import { RiMenu4Line, RiTeamFill } from 'react-icons/ri'
import { ImCancelCircle } from 'react-icons/im'
import iconresponsive from '@/assets/maxautosicon.png'
import Link from 'next/link'
import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { GrUserAdmin } from 'react-icons/gr'
import { FaCarAlt } from 'react-icons/fa'

export default function NavBarResponsive () {
  const [Boton, setBoton] = useState(false)
  console.log(Boton)

  return (
    <>
      <div className='w-full h-16 bg-transparent max-lg:flex
       lg:hidden justify-center absolute'
      >
        <header className='w-[97%] h-16 bg-white flex items-center justify-between fixed z-[100] px-2 shadow-lg rounded-b-xl'>
          <button onClick={() => setBoton(!Boton)} className=''>
            <RiMenu4Line size={35} />
          </button>
          <img className='w-12 h-10 md:w-14 md:h-12' src={iconresponsive.src} alt='' />
          <Link href='/login'>
            <GrUserAdmin className='hover:scale-110 duration-200' size={35} />
          </Link>

        </header>
      </div>

      <div
        style={{
          transform: `translateX(-${Boton ? 0 : 200}%)`,
          zIndex: '100'
        }}
        className='w-[75%] h-[95vh] bg-blue-200 transition-transform duration-300 top-0 fixed rounded-b-md flex flex-col items-center justify-between z-[106] shadow-xl p-4'
      >
        <div className='w-full h-32 flex flex-col justify-center items-center top-0 p-2'>
          <img className='w-24 h-20 my-3' src={iconresponsive.src} alt='' />
          <hr className='w-full text-black' />
        </div>
        <div className='w-full flex flex-col items-center'>
          <div className='flex w-[80%] items-center justify-center p-2 hover:bg-blue-300 rounded-md'>
            <Link className='flex w-full h-full justify-center my-4 items-center' href='/'>
              <AiFillHome size={30} />
              <p className='flex items-center ml-3'>Inicio</p>
            </Link>
          </div>
          <div className='flex w-[80%] items-center justify-center p-2 hover:bg-blue-300 rounded-md'>
            <Link className='flex w-full h-full justify-center my-4 items-center' href='/cars'>
              <FaCarAlt size={30} />
              <p className='flex items-center ml-3'>Inventario</p>
            </Link>
          </div>
          <div className='flex w-[80%] items-center justify-center p-2 hover:bg-blue-300 rounded-md'>
            <Link className='flex w-full h-full justify-center my-4 items-center' href='/QuienesSomos'>
              <RiTeamFill size={30} />
              <p className='flex items-center ml-3'>Nosotros</p>
            </Link>
          </div>
        </div>
        <div className='w-full h-20 flex justify-center items-center bottom-0 p-2'>
          <button onClick={() => setBoton(!Boton)}>
            <ImCancelCircle size={35} />
          </button>
        </div>
      </div>
    </>

  )
}
