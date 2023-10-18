import ModalBackdrop from '../ModalBackdrop'
import Button from '../Button'
import { updatePreviewImage } from '@/services/api'
import { useState } from 'react'
import toast from 'react-hot-toast'
import useCarsStore from '@/hooks/useCarsStore'

const selectedClass = 'border-2 border-green-500'

export default function ChangePreviewCar ({ car, setCar }) {
  const { reFetch } = useCarsStore()
  const [selectedImage, setSelectedImage] = useState(car.preview)
  const [loading, setLoading] = useState(false)

  const isValidImage = selectedImage !== car.preview

  const handleChangePreview = () => {
    if (!isValidImage) return toast.error('La imagen seleccionada ya es la previsualización')

    setLoading(true)
    updatePreviewImage(car.id, selectedImage)
      .then(() => {
        toast.success('Imagen de previsualización cambiada')
        reFetch()
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error al cambiar la imagen de previsualización')
      })
      .finally(() => {
        setCar(null)
        setLoading(false)
      })
  }

  return (
    <ModalBackdrop open>
      <h2 className='text-center text-xl opacity-75 mb-6'>Selecciona una imagen de previsualización</h2>
      <section className='grid grid-rows-3 grid-flow-col overflow-x-auto p-1 gap-2 md:place-content-center'>
        {car.image.map((image, index) => (
          <img onClick={() => setSelectedImage(image)} key={index} className={`w-44 max-w-fit select-none max-h-44 rounded ${selectedImage === image && selectedClass} h-auto object-contain`} src={image} alt={car.name} />
        ))}
      </section>
      <div className='flex mt-5 gap-2 justify-center items-center'>
        <Button loading={loading} type='submit' disabled={!isValidImage || loading} onClick={handleChangePreview} className='bg-green-500 disabled:bg-green-900 hover:bg-green-700 font-bold py-3 px-6 w-1/3 self-center'>
          Cambiar
        </Button>
        <Button onClick={() => setCar(null)} className='bg-red-500 hover:bg-red-700 font-bold w-1/3 py-3 px-6'>
          Cerrar
        </Button>
      </div>
    </ModalBackdrop>
  )
}
