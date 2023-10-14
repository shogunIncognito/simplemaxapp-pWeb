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

  // carros filtrados en español 👍
  const filteredCars = cars.filter((car) => {
    const datoString = `${car.brand} ${car.line} ${car.model} ${car.color}`
    return datoString.toLowerCase().includes(buscar.toLowerCase())
  })

  return (
    <>
      <section className='flex top-20 sticky w-full justify-center bg-blue-300 p-3 shadow-xl'>
        <form className='flex rounded-md overflow-hidden bg-transparent w-[50%]' onSubmit={onSubmit}>
          <Input className='h-full bg-white text-gray-700 w-[90%] border-solid rounded-none' placeholder='Buscar por marca, linea, año y color' value={bus} onChange={InputChange} type='text' />
          <Button className='w-[10%] border-solid h-full rounded-none grid place-content-center'><LuSearch size={15} /> </Button>
        </form>
      </section>
      <section className='image-cars flex flex-col justify-center text-center w-full lg:h-[45vh] h-[35vh] bg-center bg-cover bg-fixed'>
        <h1 className='text-white text-3xl font-bold'>NUESTROS  AUTOS</h1>
      </section>

      <section>
        {loading
          ? <Spinner color='text-blue-400' className='m-4' />
          : <CarsI result={filteredCars} />}
      </section>
    </>

  )
}
