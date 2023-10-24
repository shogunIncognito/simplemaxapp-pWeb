'use client'
import Button from '@/components/Button'
import CarsI from '@/components/Cars_i'
import Input from '@/components/Input'
import useCarsStore from '@/hooks/useCarsStore'
import Spinner from '@/components/Spinner'
import { LuSearch } from 'react-icons/lu'
import { useState } from 'react'

// setBuscar(setBuscar(false))

export default function page () {
  const { cars, loading } = useCarsStore()
  const [bus, setBus] = useState('')
  const [buscar, setBuscar] = useState('')

  const InputChange = (e) => {
    setBus(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setBuscar(bus)
  }

  // carros filtrados en español
  const filteredCars = cars.filter((car) => {
    const datoString = `${car.brand} ${car.line} ${car.model} ${car.color}`
    return datoString.toLowerCase().includes(buscar.toLowerCase())
  })

  return (
    <>
      {/* <div className='w-full h-[60vh] bg-slate-700'>
        HolaPA
      </div> */}
      <section className='image-cars flex flex-col justify-center text-center w-full max-lg:h-[70vh] lg:h-[70vh] h-[35vh] bg-center bg-cover bg-fixed'>
        <h1 className='text-white text-3xl font-bold'>NUESTROS  AUTOS</h1>
      </section>
      <section className='w-full bg-transparent max-[1920px]:top-[64px] min-[2560px]:top-[91px] flex justify-center sticky'>
        <div className='flex z-20 w-[97%] justify-center bg-blue-300 p-4 shadow-xl rounded-b-lg'>
          <form className='flex rounded-md overflow-hidden bg-transparent max-md:w-full md:w-[50%]' onSubmit={onSubmit}>
            <Input className='max-md:text-xs h-full bg-white text-gray-700 w-[90%] border-solid rounded-none' placeholder='Buscar por marca, linea, año y color' value={bus} onChange={InputChange} type='text' />
            <Button className='w-[10%] border-solid h-full rounded-none grid place-content-center'><LuSearch size={15} /> </Button>
          </form>
        </div>
      </section>

      <section className='p-5'>
        {loading
          ? <Spinner color='text-blue-400' className='m-4 my-40' />
          : <CarsI result={filteredCars} />}
      </section>

    </>

  )
}
