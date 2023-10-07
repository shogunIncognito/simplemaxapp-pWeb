import Carrusel from '@/components/Carrusel'
import Button from '../components/Button'
import Tarjetas from '@/components/Tarjetas'
import img from '../assets/maxHero1.jpg'
import Link from 'next/link'
import './globals.css'

export default function Home () {
  return (
    <>
      {/* Contenido principal de la pagina inicial '/' */}
      <section className='h-[95dvh] max-h-[95dvh] overflow-hidden bg-black/60 relative flex items-center justify-center text-white'>
        <div className='w-full h-72 flex flex-col items-center justify-center gap-3 mb-20 p-10 rounded'>
          <h1 className='text-5xl font-bold text-center'>Max <span className='text-blue-500'>Autos</span> </h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.</p>
          <Button className='bg-transparent border-2 border-white hover:bg-white hover:text-black mt-5'>Ver recientes</Button>
        </div>
        <video muted loop autoPlay playsInline className='-z-10 object-cover top-0 w-full h-screen absolute' src='https://cdn.pixabay.com/vimeo/304735769/calle-19627.mp4?width=1280&hash=84c8347627305ec3a01dbe5618ecde30d4c8ec6e' />
      </section>

      <section className='w-full text-center pb-5'>
        <h1 className='font-mono font-bold my-5'>NUESTRAS MARCAS</h1>
        <Carrusel />
      </section>

      <section className='w-full h-screen flex'>
        <div className='w-[50%] flex items-center justify-center bg-gradient-to-l from-white to-blue-400'>
          <div className='flex flex-col text-center justify-center items-center p-8'>
            <h2 className='text-5xl font-bold text-center m-3'>Max <span className='text-blue-500'>Autos</span> </h2>
            <p className='m-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita sunt ducimus aspernatur
              quam eius vitae at libero iste, minus accusamus sequi nihil incidunt nostrum atque quaerat,
              dignissimos saepe fuga!
            </p>
            <div>
              <Link className='border-2 border-black border-solid p-2 text-black w-[25%] m-3 rounded-md hover:bg-blue-400' href='/QuienesSomos'>
                VER MAS
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
