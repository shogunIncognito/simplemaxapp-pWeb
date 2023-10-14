'use client'

import { useState } from 'react'
import { createCar, updateCar } from '@/services/api'
import useCarsStore from '@/hooks/useCarsStore'
import { objectHasEmptyValues } from '@/utils/functions'
import toast from 'react-hot-toast'
import { uploadCarImage } from '@/services/firebase'
import CarForm from './CarForm'
import Button from '../Button'
import useDisclosure from '@/hooks/useDisclosure'
import ModalBackdrop from '../ModalBackdrop'

const carInitialValues = {
  brandId: '',
  fuel: 'corriente',
  transmission: 'manual',
  type: 'automovil',
  owners: '',
  kilometers: '',
  price: '',
  model: '',
  line: '',
  plate: '',
  description: '',
  color: '',
  cc: '1.0'
}

export default function CreateCar () {
  const { open, handleClose, handleOpen } = useDisclosure()
  const [loading, setLoading] = useState(false)
  const { addCar, brands } = useCarsStore()
  const [values, setValues] = useState(carInitialValues)
  const [images, setImages] = useState({
    image: null,
    previewImage: null
  })

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

  const handleUpdateImage = async (carId) => {
    const imgUrl = await uploadCarImage(images.image, carId)
    return imgUrl
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { description, ...restOfForm } = values

    if (!images.image) return toast.error('Debe agregar una imagen')
    if (objectHasEmptyValues(restOfForm)) return toast.error('Todos los campos son obligatorios')

    try {
      setLoading(true)
      const newCar = await createCar({ ...restOfForm, description })
      const uploadedCarImage = await handleUpdateImage(newCar.id)
      const carWithImage = await updateCar(newCar.id, { image: uploadedCarImage })

      setImages({
        image: null,
        previewImage: null
      })

      addCar(carWithImage)
      toast.success('Auto agregado')
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    } finally {
      setLoading(false)
      e.target.reset()
      setValues(carInitialValues)
    }
  }

  return (
    <>
      <Button onClick={handleOpen} className='bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded'>
        Agregar auto
      </Button>

      <ModalBackdrop open={open}>
        <h2 className='text-2xl font-bold opacity-80 mb-3'>Agregar auto</h2>
        <CarForm
          setValues={setValues}
          values={values}
          handleImage={handleImage}
          handleSubmit={handleSubmit}
          loading={loading}
          images={images}
          brands={brands}
          handleClose={handleClose}
        >
          Agregar
        </CarForm>
      </ModalBackdrop>
    </>
  )
}
