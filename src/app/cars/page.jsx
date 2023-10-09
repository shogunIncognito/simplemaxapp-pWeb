'use client'
import CarsI from '@/components/Cars_i'
import useCarsStore from '@/hooks/useCarsStore'
import { useState } from 'react'

// setBuscar(setBuscar(false))

export default function page () {
  const { cars, loading } = useCarsStore()
  const [Bus, setBus] = useState('')
  const [Buscar, setBuscar] = useState('')

  const InputChange = (e) => {
    setBus(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setBuscar(Bus)
  }

  let iterador = []
  if (Buscar === '') {
    iterador = cars
  } else {
    iterador = cars.filter((date) =>
      date.brand.toLowerCase().includes(Buscar.toLowerCase())
    )
    console.log(iterador)
  }

  return (
    <>
      <section className='flex w-full justify-center bg-blue-300 p-3'>
        <form onSubmit={onSubmit} action=''>
          <input placeholder='Buscar' value={Bus} onChange={InputChange} type='text' />
          <button type='submit'>Enviar</button>
        </form>
      </section>
      <section>
        {loading
          ? <h2>Cargando</h2>
          : <CarsI result={iterador} />}
      </section>
    </>

  )
}
