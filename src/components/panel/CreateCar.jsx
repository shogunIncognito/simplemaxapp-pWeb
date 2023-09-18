'use client'

import { useState } from 'react'
import Button from '../Button'
import ModalBackdrop from '../ModalBackdrop'
import { carInputs } from '@/helpers/inputs'
import useDisclosure from '@/hooks/useDisclosure'
import Image from 'next/image'
import { createCar } from '@/services/api'
import useCarsStore from '@/hooks/useCarsStore'

export default function CreateCar () {
  const { open, handleClose, handleOpen } = useDisclosure()
  const [image, setImage] = useState(null)
  const { addCar } = useCarsStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    createCar({ ...data, image })
      .then(car => {
        handleClose()
        setImage(null)
        addCar(car)
      })
      .catch(err => console.log(err))
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
      <button onClick={handleOpen} className='transition-colors bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
        Agregar
      </button>
      {open && (
        <ModalBackdrop>
          <div className='animate__animated animate__zoomIn w-2/5 flex z-50 flex-col bg-slate-700 p-8 rounded'>
            <h2 className='text-2xl text-white mb-10'>Crear auto</h2>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-2 gap-3'>
                {/* propiedad value del input es mientras el desarrollo de la app, quitar cuando se termine */}
                {
                  carInputs.map((input, index) => (
                    <div key={index} className='flex flex-col gap-1'>
                      <label className='text-white'>{input.placeholder}</label>
                      <input value={input.value} required className='transition-all duration-300 ring-2 focus:ring-blue-600 hover:ring-blue-400 outline-none p-2 rounded' type={input.type} name={input.name} placeholder={input.placeholder} />
                    </div>
                  ))
                }
                {/* agregar required al input de las imágenes  */}
              </div>
              <div className='flex gap-2 w-full items-center mt-5 justify-center'>
                <label className='text-white bg-gray-800 p-2 rounded'>
                  Agregar imagen
                  <input hidden type='file' onChange={handleImage} accept='image/*' />
                </label>
                {image && <Image className='self-center rounded h-auto w-auto min-w-[150px] object-cover min-h-[150px] max-w-[120px] max-h-[120px]' alt='carImage' src={image} width={120} height={120} />}
              </div>
              <div className='flex gap-2 max-w-full items-center justify-center'>
                <Button type='submit' className='mt-7 w-40'>Agregar</Button>
                <Button onClick={handleClose} className='mt-7 w-40 bg-red-500 hover:bg-red-700'>Cancelar</Button>
              </div>
            </form>
          </div>
        </ModalBackdrop>
      )}
    </>
  )
}
