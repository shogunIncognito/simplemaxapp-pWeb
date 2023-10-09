'use client'

import Image from 'next/image'
import CreateCar from '@/components/panel/CreateCar'
import { useState } from 'react'
import UpdateCar from '@/components/panel/UpdateCar'
import { tableHeaders } from '@/helpers/data'
import DeleteCar from '@/components/panel/DeleteCar'
import useCarsStore from '@/hooks/useCarsStore'
import AddBrand from '@/components/panel/Brands'
import Button from '@/components/Button'
import Link from 'next/link'
import Spinner from '@/components/Spinner'
import CarFilter from '@/components/panel/CarFilter'

export default function page () {
  const { cars, loading } = useCarsStore()
  const [selectedCar, setSelectedCar] = useState(null)
  const [carToDelete, setCarToDelete] = useState(null)

  if (loading) return <Spinner />

  return (
    <section className='bg-neutral-800 w-full h-full p-5'>
      <h2 className='text-white md:hidden font-bold opacity-75 text-3xl text-center'>Autos</h2>

      <div className='my-4 gap-3 flex-col md:flex-row flex items-start '>
        <div className='gap-2 flex '>
          <CreateCar />
          <AddBrand />
        </div>
        <CarFilter />
      </div>

      <div className='relative overflow-auto max-h-[90%] md:max-h-[88vh]'>
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
            {cars.length === 0 && !loading && (
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td colSpan='9' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  No hay autos
                </td>
              </tr>
            )}

            {cars.map(car => (
              <tr key={car.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {car.id}
                </th>
                <td className='capitalize px-6 py-4'>
                  {car.plate}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.brand}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.model}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.line}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.kilometers} km
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.cc}
                </td>
                <td className='capitalize px-6 py-4'>
                  {car.color}
                </td>
                <td className='capitalize px-6 py-4'>
                  $ {Math.round(car.price).toLocaleString()}
                </td>
                <td className='px-6 py-4'>
                  <Link href={car.image} target='_blank' rel='noreferrer'>
                    <Image src={car.image} priority alt='carro' width={170} height={170} className='rounded-lg object-cover cursor-pointer m-auto w-auto h-auto ring-2 max-w-[160px] max-h-[160px]' />
                  </Link>
                </td>
                <td className='px-6 py-4 h-full m-auto'>
                  <Button onClick={() => setSelectedCar(car)} className='w-full mb-1 bg-green-500 hover:bg-green-700 font-bold '>
                    Editar
                  </Button>
                  <Button onClick={() => setCarToDelete(car)} className='w-full mt-1 bg-red-500 hover:bg-red-700 font-bold py-2 px-4'>
                    Eliminar
                  </Button>
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
