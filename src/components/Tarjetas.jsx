'use client'
import { AiFillHome } from 'react-icons/ai'
import { motion } from 'framer-motion'

export default function Tarjetas () {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className='relative min-w-[20%] h-[250px] p-3 flex flex-col items-center justify-center hover:scale-105 transition-[1.5]'
      >
        <img className='-z-0 object-cover w-full h-full absolute' src='https://hubspot.contentools.com/api/v1/media/162524/download/' />
        <AiFillHome className='z-10' size={40} />
        <h1 className='z-10'>Holaaaaaaaaa</h1>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className='relative min-w-[20%] h-[250px] p-3 flex flex-col items-center justify-center hover:scale-105 transition-[1.5]'
      >
        <img className='-z-0 object-cover w-full h-full absolute' src='https://hubspot.contentools.com/api/v1/media/162524/download/' />
        <AiFillHome className='z-20' size={40} />
        <h1 className='z-10'>Holaaaaaaaaa</h1>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className='relative min-w-[20%] h-[250px] p-3 flex flex-col items-center justify-center hover:scale-105 transition-[1.5]'
      >
        <img className='-z-0 object-cover w-full h-full absolute' src='https://hubspot.contentools.com/api/v1/media/162524/download/' />
        <AiFillHome className='z-10' size={40} />
        <h1 className='z-10'>Holaaaaaaaaa</h1>
      </motion.div>
    </>
  )
}
