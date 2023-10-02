'use client'

import useCarsStore from '@/hooks/useCarsStore'

export default function page () {
  const { cars, loading } = useCarsStore()

  return (
    <section>
      <h2>Lista autos</h2>
      {loading
        ? <h2>Cargando</h2>
        : (
            cars.map(car => (
              <h2 key={car.id}>{car.model}</h2>
            ))
          )}
    </section>
  )
}
