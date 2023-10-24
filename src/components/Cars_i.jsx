'use client'
// import maxautos from '../assets/maxautosicon.png'
import Link from 'next/link'

export default function CarsI ({ result }) {
  return (
    <div className='h-full my-14 grid 2xl:grid-cols-4 min-[2560px]:grid-cols-5 md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-6 p-5'>
      {result.map((car) => (
        <div key={car.id} className='max-w-sm h-[400px] m-auto mt-0 flex flex-col overflow-hidden border-2 border-blue-400 rounded-md'>
          <div className='w-full h-[260px] bg-white p-4 overflow-hidden border-2 rounded border-blue-100'>
            <img className='object-cover bg-center w-full h-full outline-2 outline outline-blue-400' src={car.preview || car.image[0]} alt={car.model} />
          </div>
          <hr />
          <div className='h-[140px] flex flex-col bg-blue-100'>
            <div className='flex'>
              <p className='w-[50%] bg-gray-500 p-1 text-center text-blue-100'>{car.line}</p>
              <p className='w-[50%] bg-blue-400 p-1 text-center'>$ {Math.round(car.price).toLocaleString()}</p>
            </div>
            <div className='flex w-full h-full'>
              <div className='flex flex-col items-center justify-center w-[50%] h-full'>
                <h1 className='text-center'>{car.brand} {car.line} {car.model}</h1>
                <h3>KLM: {car.kilometers}</h3>
              </div>
              <div className='flex w-[50%] h-full items-center justify-center p-2'>
                <Link href={`/cars/${car.id}`} className='border-2 border-blue-400 rounded p-1 bg-blue-400 text-white hover:bg-blue-500 transition-colors hover:text-white hover:border-blue-500 text-center'>MAS INFORMACION</Link>
              </div>
            </div>
          </div>
        </div>
      )
      )}
    </div>
  )
}
