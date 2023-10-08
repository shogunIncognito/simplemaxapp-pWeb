'use client'

import { useRouter } from 'next/navigation'

export default function page () {
  const router = useRouter()
  return (
    <section className='flex flex-col md:m-10 w-full justify-center items-center'>
      <h2 className='text-3xl font-bold'>Administrar</h2>
      <div className='flex gap-2 my-8 flex-col md:flex-row'>
        <article onClick={() => router.push('/panel/cars')} className='cursor-pointer relative transition-all shadow-md rounded w-64 h-44'>
          <div className='hover:bg-black/70 shadow-md transition-all z-10 p-3 w-full h-full flex justify-center items-center rounded-md bg-black/60 absolute top-0'>
            <h2 className='text-2xl opacity-80 font-bold text-center'>Carros</h2>
          </div>
          <img src='https://www.elcarrocolombiano.com/wp-content/uploads/2022/12/20221212-JEEP-GRAND-CHEROKEE-L-2023-COLOMBIA-PRECIO-FICHA-TECNICA-SUV-7-PASAJEROS-01.jpg' width={44} height={44} className='w-full rounded-md h-full top-0 object-cover pointer-events-none' />
        </article>

        <article onClick={() => router.push('/panel/users')} className='cursor-pointer relative transition-all shadow-md rounded w-64 h-44'>
          <div className='hover:bg-black/70 shadow-md transition-all z-10 p-3 w-full h-full flex justify-center items-center rounded-md bg-black/60 absolute top-0'>
            <h2 className='text-2xl opacity-80 font-bold text-center'>Usuarios</h2>
          </div>
          <img src='https://www.ikusi.com/mx/wp-content/uploads/sites/2/2022/06/ikusi_ikusi_image_283.jpeg' width={44} height={44} className='w-full rounded-md h-full top-0 object-cover pointer-events-none' />
        </article>
      </div>
    </section>
  )
}
