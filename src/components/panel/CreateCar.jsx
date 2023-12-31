'use client'

import { useState } from 'react'
import { createCar, updateCar } from '@/services/api'
import useCarsStore from '@/hooks/useCarsStore'
import { objectHasEmptyValues, validateFormValues } from '@/utils/functions'
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

// testing values
// const carInitialValues = {
//   brandId: '4',
//   fuel: 'corriente',
//   transmission: 'manual',
//   type: 'automovil',
//   owners: '2',
//   kilometers: '25000',
//   price: '35000000',
//   model: '2022',
//   line: 'captiva sport',
//   plate: 'xhg345',
//   description: 'pelo',
//   color: 'rojo',
//   cc: '1.4'
// }

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

    const { description, preview, ...restOfForm } = values

    if (images.length === 0) return toast.error('Debe agregar una imagen')
    if (objectHasEmptyValues(restOfForm)) return toast.error('Todos los campos son obligatorios')

    const isValidForm = validateFormValues(restOfForm)
    if (!isValidForm.valid) return toast.error(isValidForm.message)

    const urlsToUpload = images.map(image => image.file)

    try {
      setLoading(true)
      const newCar = await createCar({ ...restOfForm, description })
      const uploadedCarImage = await uploadCarsImages(urlsToUpload, newCar.plate)
      const carWithImages = await updateCar(newCar.id, { image: uploadedCarImage.join('&&&') })

      setImages([])
      addCar({ ...carWithImages, image: uploadedCarImage })

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
      <Button onClick={handleOpen} className='bg-[#4ebe75] font-semibold text-black/70 hover:bg-green-600 py-2 px-4 rounded'>
        Crear auto
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
