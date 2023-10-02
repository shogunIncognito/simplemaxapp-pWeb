'use client'
import Button from '../components/Button'
import kia from '../assets/pngwing.com.png'
import { motion } from 'framer-motion'
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

      <motion.div id='slider-conteiner' className='w-[80%] overflow-x-hidden border-2 border-solid border-black'> {/* slider-conteiner */}
        <motion.div className='flex cursor-grab' drag='x' dragConstraints={{ right: 0, left: -2560 }}> {/* slider */}
          <motion.div className='my-0 mx-auto min-w-[30rem] h-[380px] p-3 hover:border-2 hover:border-solid hover:border-blue-700'>
            <img className='h-full w-full pointer-events-none' src={kia.src} />{/* item */}
          </motion.div>
          <motion.div className='my-0 mx-auto min-w-[30rem] h-[25rem] p-3 hover:border-2 hover:border-solid hover:border-blue-700'>
            <img className='h-full w-full pointer-events-none' src={kia.src} />
          </motion.div>
          <motion.div className='my-0 mx-auto min-w-[30rem] h-[25rem] p-3 hover:border-2 hover:border-solid hover:border-blue-700'>
            <img className='h-full w-full pointer-events-none' src={kia.src} />
          </motion.div>
          <motion.div className='my-0 mx-auto min-w-[30rem] h-[25rem] p-3 hover:border-2 hover:border-solid hover:border-blue-700'>
            <img className='h-full w-full pointer-events-none' src={kia.src} />
          </motion.div>
          <motion.div className='my-0 mx-auto min-w-[30rem] h-[25rem] p-3 hover:border-2 hover:border-solid hover:border-blue-700'>
            <img className='h-full w-full pointer-events-none' src={kia.src} />
          </motion.div>
          <motion.div className='my-0 mx-auto min-w-[30rem] h-[25rem] p-3 hover:border-2 hover:border-solid hover:border-blue-700'>
            <img className='h-full w-full pointer-events-none' src={kia.src} />
          </motion.div>
          <motion.div className='my-0 mx-auto min-w-[30rem] h-[25rem] p-3 hover:border-2 hover:border-solid hover:border-blue-700'>
            <img className='h-full w-full pointer-events-none' src={kia.src} />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Contenido principal de la pagina inicial '/' */}
    </>
  )
}
