'use client'

import { motion } from 'framer-motion'
import { brandsCarrousel } from '@/helpers/data'

export default function Carrusel () {
  return (
    <>
      <motion.div id='slider-conteiner' className='my-5 w-full overflow-hidden h-[170px]'> {/* slider-conteiner */}
        <motion.div className='flex cursor-grab hola mt-3' drag='x' dragConstraints={{ right: 0, left: -2000 }}> {/* slider */}
          {
            brandsCarrousel.map((item, index) => (
              <motion.div
                key={index}
                className='relative min-w-[200px] h-[150px] p-3 hover:border-2 group hover:border-solid hover:border-black flex items-center justify-center hover:scale-110 transition-[1.5]'
              >
                <img className={`${item.width} ${item.height} pointer-events-none`} src={item.urlimg} />{/* item */}
                <img className='-z-10 object-cover w-full h-full opacity-80 absolute invisible group-hover:visible' src={item.imgUrl} />
              </motion.div>
            ))
          }
          {
            brandsCarrousel.map((item, index) => (
              <motion.div
                key={index}
                className='relative min-w-[200px] h-[150px] p-3 hover:border-2 group hover:border-solid hover:border-black flex items-center justify-center hover:scale-110 transition-[1.5]'
              >
                <img className={`${item.width} ${item.height} pointer-events-none`} src={item.urlimg} />{/* item */}
                <img className='-z-10 object-cover w-full h-full opacity-80 absolute invisible group-hover:visible' src={item.imgUrl} />
              </motion.div>
            ))
          }
        </motion.div>
      </motion.div>
    </>
  )
}
