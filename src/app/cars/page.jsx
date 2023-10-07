'use client'
import CarsI from '@/components/Cars_i'
import useCarsStore from '@/hooks/useCarsStore'

export default function page () {
  const { cars, loading } = useCarsStore()

  console.log(cars)

  return (
    <section>
      {loading
        ? <h2>Cargando</h2>
        : <CarsI />}
    </section>
  )
}
