import Carrusel from '@/components/Carrusel'
import Button from '../components/Button'
import Tarjetas from '@/components/Tarjetas'
import img from '../assets/maxHero1.jpg'
import { AiOutlineEye } from 'react-icons/ai'
import Link from 'next/link'
import './globals.css'

export default function Home () {
  return (
    <>
      {/* Contenido principal de la pagina inicial '/' */}
      <section className='h-[95dvh] max-h-[95dvh] overflow-hidden bg-black/60 relative flex items-center justify-center text-white'>
        <div className='w-full h-72 flex flex-col items-center justify-center gap-3 mb-20 p-10 rounded'>
          <h1 className='text-5xl font-bold text-center'>Max <span className='text-blue-500'>Autos</span> </h1>
          <p className='text-center text-xl italic bg-gradient-to-tr from-red-500 p-1 rounded-md'>Usados que dan confianza.</p>
          <Button className='bg-transparent border-2 border-white hover:bg-white hover:text-black mt-5'>Ver recientes</Button>
        </div>
        <video muted loop autoPlay playsInline className='-z-10 object-cover top-0 w-full h-screen absolute' src='/videomaxapptest.mp4' />
      </section>

      <section className='w-full text-center pb-5'>
        <h1 className='font-mono font-bold my-5'>NUESTRAS MARCAS</h1>
        <Carrusel />
      </section>

      <section className='w-full h-screen flex'>
        <div className='w-[50%] flex items-center justify-center bg-gradient-to-l from-white to-blue-400'>
          <div className='flex flex-col text-center justify-center items-center p-8'>
            <h2 className='text-5xl font-bold text-center m-5'>Max <span className='text-blue-500'>Autos</span> </h2>
            <p className='m-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita sunt ducimus aspernatur
              quam eius vitae at libero iste, minus accusamus sequi nihil incidunt nostrum atque quaerat,
              dignissimos saepe fuga!
            </p>
            <div className=''>
              <Link className='grid place-content-center border-2 border-blue-500 border-solid px-10 py-2 text-black w-[25%] m-5 rounded hover:bg-blue-400 hover:text-white' href='/QuienesSomos'>
                <p><AiOutlineEye className='text-blue-500 hover:text-white' size={22} /></p>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[50%] h-full bg-blue-500'>
          <img className='w-full h-full object-cover bg-gradient-to-t from-black to-white' src={img.src} alt='' />
        </div>
      </section>

      <section className='w-full text-center bg-white p-10 '>
        <h2 className='font-mono font-bold text-lg'>SERVICIOS DE MAX AUTOS</h2>
        <Tarjetas />
      </section>

      {/* Contenido principal de la pagina inicial '/' */}
    </>
  )
}
