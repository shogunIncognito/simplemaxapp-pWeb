import { deleteCar as deleteCarApi } from '@/services/api'
import Button from '../Button'
import ModalBackdrop from '../ModalBackdrop'
import useCarsStore from '@/hooks/useCarsStore'

export default function DeleteCar ({ carToDelete, setCarToDelete }) {
  const { deleteCar } = useCarsStore()

  const handleDeleteCar = () => {
    deleteCarApi(carToDelete.id)
      .then(() => {
        deleteCar(carToDelete.id)
        setCarToDelete(null)
      })
      .catch(err => console.log(err))
  }

  return (
    <ModalBackdrop>
      <div className='animate__animated animate__zoomIn flex z-50 flex-col bg-slate-700 p-8 rounded'>
        <h2 className='text-2xl text-white m-auto mb-4'>¿Eliminar auto?</h2>
        <p className='text-white text-lg'>El auto {carToDelete.brand} {carToDelete.model} sera eliminado</p>
        <div className='flex gap-2 mt-3'>
          <Button
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
      </div>
    </ModalBackdrop>
  )
}
