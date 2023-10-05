'use client'
import { AiFillHome } from 'react-icons/ai'
import { motion } from 'framer-motion'

export default function Tarjetas () {
  return (
    <>
      <div className='flex w-full mt-[35px] justify-around -z-10'>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='relative min-w-[30%] h-[250px] p-3 flex items-end justify-center hover:scale-105 transition-[1.5]'
        >
          <img className='-z-0 object-cover w-full h-full absolute' src='https://www.ikusi.com/mx/wp-content/uploads/sites/2/2022/06/ikusi_ikusi_image_283.jpeg' />
          <div className='z-10 w-full text-center'>
            <AiFillHome className='z-10 block mx-auto text-white' size={40} />
            <p className='z-10 block bottom-0 text-white'>VENTA DE AUTOS DE <br /> CALIDAD</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='relative min-w-[30%] h-[250px] p-3 flex items-end justify-center hover:scale-105 transition-[1.5]'
        >
          <img className='-z-0 object-cover w-full h-full absolute' src='https://www.mercedes-benz.com.co/mercedes/site/artic/20230725/imag/foto_0000000420230725172508/cards1.jpeg' />
          <div className='z-10 w-full text-center'>
            <AiFillHome className='z-10 block mx-auto text-white' size={40} />
            <p className='z-10 block bottom-0 text-white'>COMPRAMOS TUS AUTOS AL <br /> MEJOR PRECIO</p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className='relative min-w-[30%] h-[250px] p-3 flex items-end justify-center hover:scale-105 transition-[1.5]'
        >
          <img className='-z-0 object-cover w-full h-full absolute' src='https://hubspot.contentools.com/api/v1/media/162524/download/' />
          <div className='z-10 w-full text-center'>
            <AiFillHome className='z-10 block mx-auto text-white' size={40} />
            <p className='z-10 block bottom-0 text-white'>ACESORAMIENTO</p>
          </div>
        </motion.div>
      </div>

    </>
  )
}
