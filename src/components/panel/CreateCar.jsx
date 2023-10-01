'use client'

import { useState } from 'react'
import Button from '../Button'
import ModalBackdrop from '../ModalBackdrop'
import { carInputs } from '@/helpers/inputs'
import useDisclosure from '@/hooks/useDisclosure'
import Image from 'next/image'
import { createCar } from '@/services/api'
import useCarsStore from '@/hooks/useCarsStore'
import { objectHasEmptyValues } from '@/utils/functions'
import toast from 'react-hot-toast'
import Input from '../Input'

export default function CreateCar () {
  const { open, handleClose, handleOpen } = useDisclosure()
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const { addCar, brands } = useCarsStore()

  const handleSubmit = (e) => {
    e.preventDefault()

    const { description, ...restOfForm } = Object.fromEntries(new FormData(e.target))

    console.log(restOfForm)
    if (!image) return toast.error('Debe agregar una imagen')
    if (objectHasEmptyValues(restOfForm)) return toast.error('Todos los campos son obligatorios')

    setLoading(true)
    createCar({ ...restOfForm, description, image })
      .then(car => {
        handleClose()
        setImage(null)
        addCar(car)
        toast.success('Auto agregado')
      })
      .catch(err => {
        toast.error(err.message)
        console.log(err)
      })
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

  return (
    <>
      <Button onClick={handleOpen} className='bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded'>
        Agregar auto
      </Button>

      {open && (
        <ModalBackdrop>
          <h2 className='text-2xl text-white mb-10'>Crear auto</h2>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-3'>
              {/* propiedad value del input es mientras el desarrollo de la app, quitar cuando se termine */}

              <div className='flex flex-col gap-1'>
                <label className='text-white'>Marca</label>
                <select name='brandId' id='brandId' className='h-full text-gray-600 font-medium px-2 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300'>
                  {brands.map(brand => (
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                  ))}
                </select>
              </div>
              {
                carInputs.map((input, index) => (
                  <div key={index} className='flex flex-col gap-1'>
                    <label className='text-white'>{input.placeholder}</label>
                    <Input value={input.value} required={input.name !== 'description'} className='p-2' type={input.type} name={input.name} placeholder={input.placeholder} />
                  </div>
                ))
              }
            </div>
            <div className='flex flex-col md:flex-row gap-3 w-full items-center mt-5 justify-center'>
              <label className='text-white bg-gray-800 p-2 rounded'>
                Agregar imagen
                <input hidden type='file' onChange={handleImage} accept='image/*' />
              </label>
              {image && <Image className='self-center rounded h-auto w-auto min-w-[150px] object-cover min-h-[150px] max-w-[120px] max-h-[120px]' alt='carImage' src={image} width={120} height={120} />}
            </div>
            <div className='flex gap-2 max-w-full items-center justify-center'>
              <Button disabled={loading} type='submit' className='mt-7 w-40 disabled:bg-opacity-70 disabled:cursor-not-allowed'>{loading ? '...' : 'Agregar'}</Button>
              <Button onClick={handleClose} className='mt-7 w-40 bg-red-500 hover:bg-red-700'>Cerrar</Button>
            </div>
          </form>
        </ModalBackdrop>
      )}

    </>
  )
}
