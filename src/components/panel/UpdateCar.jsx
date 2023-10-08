'use client'

import ModalBackdrop from '../ModalBackdrop'
import { useState } from 'react'
import { updateCar } from '@/services/api'
import useCarsStore from '@/hooks/useCarsStore'
import toast from 'react-hot-toast'
import { objectHasEmptyValues } from '@/utils/functions'
import { uploadCarImage } from '@/services/firebase'
import CarForm from './CarForm'

export default function UpdateCar ({ selectedCar, setSelectedCar }) {
  const { reFetch, brands } = useCarsStore()
  const [values, setValues] = useState(selectedCar)
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState({
    image: null,
    previewImage: selectedCar.image
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // el id no se actualiza
    const { description, id, brand, ...restOfValues } = values

    if (!values.image) return toast.error('Debe agregar una imagen')
    if (objectHasEmptyValues(restOfValues)) return toast.error('Todos los campos son obligatorios')

    try {
      setLoading(true)

      const image = images.image ? await handleUpdateImage(selectedCar.id) : images.previewImage

      await updateCar(selectedCar.id, { ...restOfValues, description, image })

      reFetch()
      setSelectedCar(null)
      toast.success('Auto actualizado')
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleImage = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setImages(prev => ({ ...prev, image: file }))

    // eslint-disable-next-line no-undef
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImages(prev => ({ ...prev, previewImage: reader.result }))
    }
  }

  const handleUpdateImage = async (carId) => await uploadCarImage(images.image, carId)
  const handleClose = () => setSelectedCar(null)

  return (
    <>
      <ModalBackdrop>
        <h2 className='text-2xl font-bold opacity-80 mb-3'>Actualizar auto</h2>
        <CarForm
          setValues={setValues}
          handleImage={handleImage}
          handleSubmit={handleSubmit}
          values={values}
          loading={loading}
          images={images}
          brands={brands}
          handleClose={handleClose}
        >
          Actualizar
        </CarForm>
      </ModalBackdrop>
    </>
  )
}
