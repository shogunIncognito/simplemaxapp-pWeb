'use client'

import { deleteCar as deleteCarApi } from '@/services/api'
import Button from '../Button'
import ModalBackdrop from '../ModalBackdrop'
import useCarsStore from '@/hooks/useCarsStore'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { deleteCarsImages } from '@/services/firebase'
import { deleteCarCodes } from '@/utils/statusCodes'

export default function DeleteCar ({ carToDelete, setCarToDelete }) {
  const { deleteCar } = useCarsStore()
  const [loading, setLoading] = useState(false)

  const handleDeleteCar = () => {
    setLoading(true)

    Promise.all([deleteCarsImages(carToDelete.image), deleteCarApi(carToDelete.id)])
      .then(() => {
        deleteCar(carToDelete.id)
        toast.success('Auto eliminado')
        handleDispatch()
      })
      .catch(err => toast.error(deleteCarCodes[err.response?.status] || 'Error al eliminar auto'))
      .finally(() => setLoading(false))
  }

  const handleDispatch = () => setCarToDelete('SET_CAR_TO_DELETE', null)

  return (
    <ModalBackdrop open>
      <h2 className='text-2xl text-black dark:text-white m-auto mb-4'>¿Eliminar auto?</h2>
      <p className='text-black dark:text-white text-lg mb-2'>El auto <span className='text-red-400'>{carToDelete.brand} {carToDelete.line}</span> sera eliminado</p>
      <div className='flex gap-2 justify-center mx-10 mt-3'>
        <Button
          loading={loading}
          onClick={handleDeleteCar}
          className='w-1/2 p-2 px-3 bg-[#D6BCFA] hover:bg-purple-600/40 text-black font-semibold'
        >
          Eliminar
        </Button>
        <Button
          onClick={() => handleDispatch()}
          className='w-1/2 p-2 px-3'
        >
          Cancelar
        </Button>
      </div>
    </ModalBackdrop>
  )
}
