'use client'
import Button from '@/components/Button'
import CarsI from '@/components/Cars_i'
import Input from '@/components/Input'
import useCarsStore from '@/hooks/useCarsStore'
import Spinner from '@/components/Spinner'
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
    const datoString = `${car.brand} ${car.line} ${car.model}`
    return datoString.toLowerCase().includes(buscar.toLowerCase())
  })

  return (
    <>
      <section className='flex w-full justify-center bg-blue-300 p-3'>
        <form onSubmit={onSubmit}>
          <Input placeholder='Buscar' value={bus} onChange={InputChange} type='text' />
          <Button>Enviar</Button>
        </form>
      </section>
      <section>
        {loading
          ? <Spinner color='text-blue-400' className='m-4' />
          : <CarsI result={filteredCars} />}
      </section>
    </>

  )
}
