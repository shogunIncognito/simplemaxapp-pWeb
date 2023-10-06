'use client'

import { useEffect, useState } from 'react'
import { createCar, updateCar } from '@/services/api'
import useCarsStore from '@/hooks/useCarsStore'
import { objectHasEmptyValues } from '@/utils/functions'
import toast from 'react-hot-toast'
import { uploadCarImage } from '@/services/firebase'
import CarForm from './CarForm'
import Button from '../Button'
import useDisclosure from '@/hooks/useDisclosure'
import ModalBackdrop from '../ModalBackdrop'

export default function CreateCar () {
  const { open, handleClose, handleOpen } = useDisclosure()
  const [loading, setLoading] = useState(false)
  const { addCar, brands } = useCarsStore()
  const [images, setImages] = useState({
    image: null,
    previewImage: null
  })
  const [values, setValues] = useState({
    brandId: brands[0]?.id,
    fuel: 'corriente',
    transmission: 'manual',
    type: 'automovil',
    model: '',
    year: '',
    description: '',
    cylinder: '1.0'
  })

  useEffect(() => {
    setValues(prev => ({ ...prev, brandId: brands[0]?.id }))
  }, [brands])

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
      toast.success('vehículo agregado')
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    } finally {
      setLoading(false)
      e.target.reset()
    }
  }

  return (
    <>
      <Button onClick={handleOpen} className='bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded'>
        Agregar vehículo
      </Button>

      {open && (
        <ModalBackdrop>
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
            Agregar vehículo
          </CarForm>
        </ModalBackdrop>
      )}
    </>
  )
}
