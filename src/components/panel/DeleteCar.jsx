'use client'

import { deleteCar as deleteCarApi } from '@/services/api'
import Button from '../Button'
import ModalBackdrop from '../ModalBackdrop'
import useCarsStore from '@/hooks/useCarsStore'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { deleteCarImage } from '@/services/firebase'
import { deleteCarCodes } from '@/utils/statusCodes'

export default function DeleteCar ({ carToDelete, setCarToDelete }) {
  const { deleteCar } = useCarsStore()
  const [loading, setLoading] = useState(false)

  const handleDeleteCar = () => {
    setLoading(true)

    Promise.all([deleteCarImage(carToDelete.id), deleteCarApi(carToDelete.id)])
      .then(() => {
        deleteCar(carToDelete.id)
        toast.success('Auto eliminado')
        setCarToDelete(null)
      })
      .catch(err => toast.error(deleteCarCodes[err.response.status] || 'Error al eliminar auto'))
      .finally(() => setLoading(false))
  }

  return (
    <ModalBackdrop open className='md:w-1/4'>
      <h2 className='text-2xl text-white m-auto mb-4'>¿Eliminar auto?</h2>
      <p className='text-white text-lg'>El auto <span className='text-red-400'>{carToDelete.brand} {carToDelete.line}</span> sera eliminado</p>
      <div className='flex gap-2 mt-3'>
        <Button
          loading={loading}
          onClick={handleDeleteCar}
          className='w-full bg-red-500 hover:bg-red-700 font-bold'
        >
          Eliminar
        </Button>
        <Button
          onClick={() => setCarToDelete(null)}
          className='w-full'
        >
          Cancelar
        </Button>
      </div>
    </ModalBackdrop>
  )
}
