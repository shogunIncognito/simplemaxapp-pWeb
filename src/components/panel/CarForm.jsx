import Button from '../Button'
import Input from '../Input'
import Image from 'next/image'
import { carInputs } from '@/helpers/data'

export default function CarForm ({
  setValues, values, handleImage, handleSubmit,
  loading, images, handleClose, brands, children
}) {
  const handleChange = (e) => {
    const { name, value } = e.target
    if (!setValues) return
    if (name === 'brandId') return setValues(prev => ({ ...prev, brandId: Number(value) }))
    setValues(prev => ({
      ...prev,
      [name]: name === 'plate' ? value.toUpperCase() : value
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
          <div className='flex flex-col gap-1 overflow-ellipsis'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>Marca</label>
            <select onChange={handleChange} value={values.brandId} name='brandId' id='brandId' className='text-gray-600 font-medium px-2 py-2 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300'>
              <option value='' disabled>Seleccione una marca</option>
              {brands.map(brand => (
                <option key={brand.id} value={brand.id}>{brand.name}</option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>Tipo combustible</label>
            <select onChange={handleChange} name='fuel' id='fuel' className='text-gray-600 font-medium px-2 py-2 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300'>
              <option value='corriente'>Corriente</option>
              <option value='diesel'>Diesel</option>
            </select>
          </div>

          <div className='flex flex-col gap-1 overflow-ellipsis'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>Transmisión</label>
            <select onChange={handleChange} name='transmission' id='transmission' className=' text-gray-600 font-medium px-2 py-2  ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300'>
              <option value='manual'>Manual</option>
              <option value='automatica'>Automática</option>
            </select>
          </div>

          <div className='flex flex-col gap-1 overflow-ellipsis'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>Tipo de vehículo</label>
            <select onChange={handleChange} name='type' id='type' className=' text-gray-600 font-medium px-2 py-2  ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300'>
              <option value='automovil'>Automóvil</option>
              <option value='camioneta'>Camioneta</option>
            </select>
          </div>

          <div className='flex flex-col gap-1 overflow-ellipsis'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>CC</label>
            <select onChange={handleChange} name='cc' id='cc' className=' text-gray-600 font-medium px-2 py-2 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300'>
              <option value='1.0'>1.0</option>
              <option value='1.1'>1.1</option>
              <option value='1.2'>1.2</option>
              <option value='1.3'>1.3</option>
              <option value='1.4'>1.4</option>
              <option value='1.5'>1.5</option>
              <option value='1.6'>1.6</option>
              <option value='1.8'>1.8</option>
              <option value='2.0'>2.0</option>
              <option value='2.2'>2.2</option>
              <option value='2.4'>2.4</option>
              <option value='2.5'>2.5</option>
              <option value='2.6'>2.6</option>
              <option value='2.7'>2.7</option>
              <option value='2.8'>2.8</option>
            </select>
          </div>
          {
            carInputs.map((input, index) => (
              <div key={index} className='flex flex-col gap-1'>
                <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>{input.label}</label>
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
        <div className='flex flex-col md:flex-row gap-3 w-full items-center mt-5 justify-center'>
          <label className='text-white bg-gray-800 p-2 rounded'>
            Agregar imagen
            <input hidden type='file' onChange={handleImage} accept='image/*' />
          </label>
          {images.previewImage && <Image className='self-center rounded h-auto w-auto min-w-[150px] object-cover min-h-[150px] max-w-[120px] max-h-[120px]' alt='carImage' src={images.previewImage} width={120} height={120} />}
        </div>
        <div className='flex gap-2 max-w-full items-center justify-center'>
          <Button disabled={loading} type='submit' className='mt-7 w-40 disabled:bg-opacity-70 disabled:cursor-not-allowed'>{loading ? '...' : children}</Button>
          <Button onClick={handleClose} className='mt-7 w-40 bg-red-500 hover:bg-red-700'>Cerrar</Button>
        </div>
      </form>
    </>
  )
}
