'use client'

import { useState } from 'react'
import Button from '../Button'
import ModalBackdrop from '../ModalBackdrop'

export default function CreateCar () {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <button onClick={handleOpen} className='transition-colors bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
        Agregar
      </button>
      {open && (
        <ModalBackdrop>
          <modal className='animate__animated animate__zoomIn flex z-50 flex-col bg-slate-700 p-8 rounded'>
            <h2 className='text-2xl text-white mb-10'>Crear auto</h2>
            <div className='flex flex-col gap-3'>
              <input className='transition-all duration-300 ring-2 focus:ring-blue-600 hover:ring-blue-400 outline-none p-2 rounded' type='text' name='brand' id='brand' placeholder='Marca' />
              <input className='transition-all duration-300 ring-2 focus:ring-blue-600 hover:ring-blue-400 outline-none p-2 rounded' type='text' name='brand' id='brand' placeholder='Marca' />
              <input className='transition-all duration-300 ring-2 focus:ring-blue-600 hover:ring-blue-400 outline-none p-2 rounded' type='text' name='brand' id='brand' placeholder='Marca' />
              <input className='transition-all duration-300 ring-2 focus:ring-blue-600 hover:ring-blue-400 outline-none p-2 rounded' type='text' name='brand' id='brand' placeholder='Marca' />
              <input className='transition-all duration-300 ring-2 focus:ring-blue-600 hover:ring-blue-400 outline-none p-2 rounded' type='text' name='brand' id='brand' placeholder='Marca' />
              <input className='p-2 text-white' type='file' accept='image/*' />
            </div>
            <div className='flex gap-2 max-w-full items-center'>
              <Button className='mt-7'>Agregar</Button>
              <Button onClick={handleClose} className='mt-7 bg-red-500 hover:bg-red-700'>Cancelar</Button>
            </div>
          </modal>
        </ModalBackdrop>
      )}
    </>
  )
}
