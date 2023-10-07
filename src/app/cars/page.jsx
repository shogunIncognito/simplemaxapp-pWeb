'use client'

import useCarsStore from '@/hooks/useCarsStore'

export default function page () {
  const { cars, loading } = useCarsStore()

  console.log(cars)

  return (
    <section>
      {loading
        ? <h2>Cargando</h2>
        : <div className='pl-3 h-full grid grid-cols-3 gap-4 m-5'>
          {cars.map((i) => (
            <div key={i.id} className='max-w-sm h-[600px] flex flex-col overflow-hidden border-2 rounded-md'>
              <div className='w-full h-300'>
                <img className='object-cover w-full h-full' src={i.image} alt='' />
              </div>
              <div className='h-full flex flex-col justify-center items-center bg-blue-100'>
                <div className='flex'>
                  <p className='w-[50%] bg-red-400 p-1'>{i.model}</p>
                  <p className='w-[50%] bg-orange-700 p-1'>{i.price}</p>
                </div>
                <h1>HOAL</h1>
              </div>
            </div>
          )
          )}
        </div>}
    </section>
  )
}
