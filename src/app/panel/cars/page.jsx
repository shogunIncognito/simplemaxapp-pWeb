'use client'

import Image from 'next/image'
import CreateCar from '@/components/panel/CreateCar'
import { useEffect, useState } from 'react'
import UpdateCar from '@/components/panel/UpdateCar'
import { tableHeaders } from '@/helpers/data'
import DeleteCar from '@/components/panel/DeleteCar'
import useCarsStore from '@/hooks/useCarsStore'
import AddBrand from '@/components/panel/Brands'
import Button from '@/components/Button'
import Spinner from '@/components/Spinner'
import CarFilter from '@/components/panel/CarFilter'
import { deleteCar } from '@/services/api'
import toast from 'react-hot-toast'
import ChangePreviewCar from '@/components/panel/ChangePreviewCar'
import { deleteCarsImages } from '@/services/firebase'

export default function page () {
  const { cars, reFetch, loading } = useCarsStore()
  const [selectedCar, setSelectedCar] = useState(null)
  const [carToDelete, setCarToDelete] = useState(null)
  const [filteredCars, setFilteredCars] = useState([])
  const [carsSelected, setCarsSelected] = useState([])
  const [carPreviewToChange, setCarPreviewToChange] = useState(null)

  useEffect(() => {
    setFilteredCars(cars)
  }, [cars])

  if (loading) return <Spinner />

  const addCarToList = (car) => {
    carsSelected.find(carSel => carSel.id === car.id)
      ? setCarsSelected(prev => prev.filter(carSel => carSel.id !== car.id))
      : setCarsSelected(prev => [...prev, car])
  }

  const deleteSelectedCars = async () => {
    const carsImages = carsSelected.reduce((acc, curr) => [...acc, ...curr.image], [])

    try {
      await deleteCar(carsSelected)
      await deleteCarsImages(carsImages)

      toast.success('Autos eliminados')
      reFetch()
    } catch (error) {
      toast.error('Error al eliminar los autos')
    } finally {
      setCarsSelected([])
    }

    deleteCar(carsSelected)
      .then(async () => {
        await deleteCarsImages(carsImages)
        setCarsSelected([])
        toast.success('Autos eliminados')
        reFetch()
      })
      .catch(() => {
        toast.error('Error al eliminar los autos')
      })
      .finally(() => {
        setCarsSelected([])
      })
  }

  return (
    <section className='w-full dark:bg-inherit bg-slate-200/60 flex-1 max-h-full'>

      <div className='gap-3 p-5 flex-col border-b-2 border-gray-300/40 md:flex-row flex items-start '>
        <h2 className='dark:text-white text-black md:hidden font-bold opacity-75 text-3xl text-center'>Autos</h2>
        <div className='gap-2 flex'>
          <CreateCar />
          <AddBrand />
        </div>
        <CarFilter cars={cars} setCars={setFilteredCars} />

        {carsSelected.length > 0 && (
          <Button disabled={carsSelected.length === 0} className='animate__animated animate__fadeIn animate__faster bg-red-500 hover:bg-red-700 font-bold py-2 px-4' onClick={deleteSelectedCars}>
            Eliminar seleccionados
          </Button>
        )}
      </div>
      <div className='relative flex-1 w-full max-h-[70%] lg:max-h-[76%] xl:max-h-[80%] overflow-auto'>
        <table className='w-full overflow-auto text-sm text-center text-gray-400'>
          <thead className='text-xs sticky dark:bg-[#171923] bg-slate-300/70 z-20 top-0 uppercase border-b border-green-800/90 text-gray-400'>
            <tr>
              <th scope='col' className='px-6' />

              {tableHeaders.map((header, index) => (
                <th key={index} scope='col' className='px-6 py-3'>
                  {header.label}
                </th>
              ))}

            </tr>
          </thead>
          <tbody>

            {cars.length === 0 && !loading && (
              <tr className='border-b border-green-800/90'>
                <td colSpan='11' className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                  No hay autos
                </td>
              </tr>
            )}

            {filteredCars.length === 0 && !loading && (
              <tr className='border-b border-green-800/90'>
                <td colSpan='11' className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                  No hay autos que coincidan con el filtro
                </td>
              </tr>
            )}

            {filteredCars.map(car => (
              <tr key={car.id} className='bg-transparent border-b border-green-800/90'>
                <th scope='row' className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                  <input onClick={() => addCarToList(car)} type='checkbox' className='form-checkbox h-4 w-4 text-gray-500' />
                </th>
                <th scope='row' className='px-6 py-4 font-medium whitespace-nowrap text-white'>
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
                  <div className='cursor-pointer flex justify-center items-center relative group'>
                    <Image src={car.preview || car.image[0]} priority alt='carro' width={170} height={170} className='rounded-lg object-cover cursor-pointer w-auto h-auto ring-2 max-w-[160px] max-h-[160px]' />
                    <div onClick={() => setCarPreviewToChange(car)} className='absolute top-0 w-full h-full bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 max-w-[160px] max-h-[160px] transition-all duration-300'>
                      <span className='text-white font-bold'>
                        Cambiar imagen
                      </span>
                    </div>
                  </div>
                </td>
                <td className='px-6 py-4 h-full m-auto'>
                  <Button onClick={() => setSelectedCar(car)} className='w-full mb-1 bg-[#59da86] font-semibold text-black/70 hover:bg-green-600'>
                    Editar
                  </Button>
                  <Button onClick={() => setCarToDelete(car)} className='w-full mt-1 bg-[#FBD38D] hover:bg-yellow-400/70 font-semibold text-black/70 py-2 px-4'>
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
      {carPreviewToChange && <ChangePreviewCar car={carPreviewToChange} setCar={setCarPreviewToChange} />}
    </section>
  )
}
