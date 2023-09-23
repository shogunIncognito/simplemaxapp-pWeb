'use client'

import { carInputs } from '@/helpers/inputs'
import ModalBackdrop from '../ModalBackdrop'
import Image from 'next/image'
import Button from '../Button'
import { useState } from 'react'
import { updateCar } from '@/services/api'
import useCarsStore from '@/hooks/useCarsStore'
import toast from 'react-hot-toast'
import { objectHasEmptyValues } from '@/utils/functions'
import Input from '../Input'

export default function UpdateCar ({ selectedCar, setSelectedCar }) {
  const [image, setImage] = useState(selectedCar.image)
  const [values, setValues] = useState(selectedCar)
  const [loading, setLoading] = useState(false)
  const { fetchCars } = useCarsStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    if (!image) return toast.error('Debe agregar una imagen')
    if (objectHasEmptyValues(data)) return toast.error('Todos los campos son obligatorios')

    setLoading(true)
    updateCar(selectedCar.id, { ...data, image })
      .then(() => {
        fetchCars()
        setSelectedCar(null)
        toast.success('Auto actualizado')
      })
      .catch(err => toast.error(err.message))
      .finally(() => setLoading(false))
  }

  const handleImage = (e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new global.FileReader()

      reader.onloadend = () => {
        setImage(reader.result)
      }

      reader.readAsDataURL(file)
    }
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <ModalBackdrop>
      <h2 className='text-2xl text-white mb-10'>Crear auto</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-3'>
          {/* propiedad value del input es mientras el desarrollo de la app, quitar cuando se termine */}
          {
              carInputs.map((input, index) => (
                <Input onChange={handleChange} value={values[input.name]} key={index} required className='transition-all duration-300 ring-2 focus:ring-blue-600 hover:ring-blue-400 outline-none p-2 rounded' type={input.type} name={input.name} placeholder={input.placeholder} />
              ))
            }
        </div>
        <div className='flex gap-2 w-full items-center mt-5 justify-center'>
          <label className='text-white bg-gray-800 p-2 rounded'>
            Agregar imagen
            <input hidden type='file' onChange={handleImage} accept='image/*' />
          </label>
          {image && <Image className='self-center rounded h-auto w-auto min-w-[150px] object-cover min-h-[150px] max-w-[120px] max-h-[120px]' alt='carImage' src={image} width={120} height={120} />}
        </div>
        <div className='flex gap-2 max-w-full justify-center items-center'>
          <Button disabled={loading} type='submit' className='mt-7 w-40 bg-green-500 hover:bg-green-700 disabled:bg-opacity-70 disabled:cursor-not-allowed'>{loading ? '...' : 'Actualizar'}</Button>
          <Button onClick={() => setSelectedCar(null)} className='mt-7 w-40 bg-red-500 hover:bg-red-700'>Cancelar</Button>
        </div>
      </form>
    </ModalBackdrop>
  )
}
