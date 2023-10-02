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
  const [values, setValues] = useState(selectedCar)
  const [loading, setLoading] = useState(false)
  const { reFetch, brands } = useCarsStore()

  const handleSubmit = (e) => {
    e.preventDefault()

    // el id no se actualiza
    const { description, id, brand, ...restOfValues } = values

    if (!values.image) return toast.error('Debe agregar una imagen')
    if (objectHasEmptyValues(restOfValues)) return toast.error('Todos los campos son obligatorios')

    setLoading(true)
    updateCar(selectedCar.id, { ...restOfValues, description })
      .then(() => {
        reFetch()
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
        setValues({ ...values, image: reader.result })
      }

      reader.readAsDataURL(file)
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'brand') return setValues({ ...values, brandId: Number(e.target.value) })
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
          <div className='flex flex-col gap-1'>
            <label className='text-white'>Marca</label>
            <select onChange={handleChange} value={values.brandId} name='brand' id='brand' className='h-full text-gray-600 font-medium px-1 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300'>
              {brands.map(brand => (
                <option key={brand.id} value={brand.id}>{brand.name}</option>
              ))}
            </select>
          </div>

          {
            carInputs.map((input, index) => (
              <div key={index} className='flex flex-col gap-1'>
                <label className='text-white'>{input.placeholder}</label>
                <Input
                  onChange={handleChange}
                  value={values[input.name]}
                  required={input.name !== 'description'}
                  className='p-2'
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                />
              </div>
            ))
          }

        </div>
        <div className='flex gap-2 w-full items-center mt-5 justify-center'>
          <label className='text-white bg-gray-800 p-2 rounded'>
            Agregar imagen
            <input hidden type='file' onChange={handleImage} accept='image/*' />
          </label>
          {values.image && <Image className='self-center rounded h-auto w-auto min-w-[150px] object-cover min-h-[150px] max-w-[120px] max-h-[120px]' alt='carImage' src={values.image} width={120} height={120} />}
        </div>
        <div className='flex gap-2 max-w-full justify-center items-center'>
          <Button disabled={loading} type='submit' className='mt-7 w-40 bg-green-500 hover:bg-green-700 disabled:bg-opacity-70 disabled:cursor-not-allowed'>{loading ? '...' : 'Actualizar'}</Button>
          <Button onClick={() => setSelectedCar(null)} className='mt-7 w-40 bg-red-500 hover:bg-red-700'>Cancelar</Button>
        </div>
      </form>
    </ModalBackdrop>
  )
}
