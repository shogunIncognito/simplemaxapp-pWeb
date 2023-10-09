'use client'
import maxautos from '../assets/maxautosicon.png'
import Link from 'next/link'

export default function CarsI ({ result }) {
  console.log(result)
  return (
    <>
      <div className='h-full grid 2xl:grid-cols-4 xl:grid-cols-3 grid-cols-1 gap-6 p-5'>
        {result.map((car) => (
          <div key={car.id} className='max-w-sm h-[500px] m-auto mt-0 flex flex-col overflow-hidden border-2 border-blue-400 rounded-md'>
            <div className='w-full h-[284px] bg-blue-400 p-4 overflow-hidden border-2 rounded'>
              <img className='object-cover w-full h-full' src={car.image} alt='' />
            </div>
            <div className='w-full h-[62px] flex items-center justify-center bg-blue-400 p-3'>
              <img className='w-14 h-12' src={maxautos.src} alt='' />
            </div>
            <hr />
            <div className='h-[154px] flex flex-col bg-blue-100'>
              <div className='flex'>
                <p className='w-[50%] bg-gray-500 p-1 text-center'>{car.line}</p>
                <p className='w-[50%] bg-blue-400 p-1 text-center'>$ {Math.round(car.price).toLocaleString()}</p>
              </div>
              <div className='flex w-full h-full'>
                <div className='flex flex-col items-center justify-center w-[50%] h-full'>
                  <h1 className='text-center'>{car.brand} {car.line} {car.model}</h1>
                  <h3>KLM: {car.kilometers}</h3>

                </div>
                <div className='flex w-[50%] h-full items-center justify-center p-2'>
                  <Link href='/' className='border-2 border-blue-400 rounded p-1 bg-blue-400 text-blue-100 hover:bg-blue-100 hover:text-blue-400 text-center'>MAS INFORMACION</Link>
                </div>
              </div>
            </div>
          </div>
        )
        )}
      </div>
    </>
  )
}
