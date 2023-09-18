'use client'

import Image from 'next/image'
import CreateCar from '@/components/panel/CreateCar'
import { useState } from 'react'
import UpdateCar from '@/components/panel/UpdateCar'
import { tableHeaders } from '@/helpers/inputs'
import DeleteCar from '@/components/panel/DeleteCar'
import useCarsStore from '@/hooks/useCarsStore'

export default function page () {
  const { cars, loading } = useCarsStore()
  const [selectedCar, setSelectedCar] = useState(null)
  const [carToDelete, setCarToDelete] = useState(null)

  return (
    <section className='bg-neutral-800 w-full h-full p-5'>
      <div className='my-4 flex-col'>
        <CreateCar />
      </div>
      <div className='relative overflow-auto max-h-[88vh]'>
        <table className='w-full max-w-full overflow-x-auto text-sm text-center text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} scope='col' className='px-6 py-3'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>

            {loading && (
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td colSpan='9' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Cargando...
                </td>
              </tr>
            )}

            {cars.map(car => (
              <tr key={car.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {car.id}
                </th>
                <td className='capitalize px-6 py-4'>
                  {car.brand}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.model}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.year}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.kilometers} km
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.color}
                </td>
                <td className='capitalize px-6 py-4'>
                  $ {Math.round(car.price).toLocaleString()}
                </td>
                <td className='px-6 py-4 h-full'>
                  <Image src={car.image} alt='carro' width={120} height={150} className='rounded-lg m-auto w-auto h-auto min-w-[160px] object-cover ring-2 min-h-[160px] max-w-[160px] max-h-[160px]' />
                </td>
                <td className='px-6 py-4 h-full m-auto'>
                  <button onClick={() => setSelectedCar(car)} className='transition-colors w-full mb-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                    Editar
                  </button>
                  <button onClick={() => setCarToDelete(car)} className='transition-colors w-full mt-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedCar && <UpdateCar selectedCar={selectedCar} setSelectedCar={setSelectedCar} />}
      {carToDelete && <DeleteCar carToDelete={carToDelete} setCarToDelete={setCarToDelete} />}
    </section>
  )
}
