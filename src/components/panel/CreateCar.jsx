'use client'

import { useState } from 'react'
import { createCar, updateCar } from '@/services/api'
import useCarsStore from '@/hooks/useCarsStore'
import { objectHasEmptyValues } from '@/utils/functions'
import toast from 'react-hot-toast'
import { uploadCarsImages } from '@/services/firebase'
import CarForm from './CarForm'
import Button from '../Button'
import useDisclosure from '@/hooks/useDisclosure'
import ModalBackdrop from '../ModalBackdrop'
import { createCarCodes } from '@/utils/statusCodes'

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
  const [images, setImages] = useState([])

  const handleImage = (e) => {
    const files = Array.from(e.target.files)
    // imágenes que se van a subir

    const mapedFiles = files.map((file) => {
      const url = URL.createObjectURL(file)
      return { url, file }
    })

    // imagenes que se van a mostrar como preview
    const newUrls = [...images, ...mapedFiles]
    setImages(newUrls)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { description, ...restOfForm } = values

    if (!images) return toast.error('Debe agregar una imagen')
    if (objectHasEmptyValues(restOfForm)) return toast.error('Todos los campos son obligatorios')

    const urlsToUpload = images.map(image => image.file)

    try {
      setLoading(true)
      const newCar = await createCar({ ...restOfForm, description })
      const uploadedCarImage = await uploadCarsImages(urlsToUpload, newCar.plate)
      const carWithImages = await updateCar(newCar.id, { image: uploadedCarImage.join(',') })

      setImages([])

      addCar(carWithImages)
      toast.success('Auto agregado')
    } catch (error) {
      toast.error(createCarCodes[error.response.status] || 'Error al agregar auto')
      console.log(error)
    } finally {
      setLoading(false)
      e.target.reset()
      setValues(carInitialValues)
    }
  }

  const handleDeleteImage = async (imageToDel) => {
    const newImages = images.filter(image => image.url !== imageToDel.url)
    setImages(newImages)
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
          handleDeleteImage={handleDeleteImage}
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
