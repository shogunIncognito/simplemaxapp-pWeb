import Button from '../Button'
import Input from '../Input'
import Image from 'next/image'
import { carInputs, selectOptionsCC } from '@/helpers/data'
import Select from '../Select'
import { AiFillDelete } from 'react-icons/ai'

export default function CarForm ({
  setValues, values, handleImage, handleSubmit,
  loading, images, handleDeleteImage, handleClose, brands, children
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
      <form onSubmit={handleSubmit} className='overflow-auto lg:max-h-90[dvh] max-h-[80dvh]'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
          <div className='flex flex-col gap-1 overflow-ellipsis'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>Marca</label>
            <Select onChange={handleChange} value={values.brandId} name='brandId' id='brandId'>
              <option className='bg-slate-600' value='' disabled>Seleccione una marca</option>
              {brands.map(brand => (
                <option className='bg-slate-600' key={brand.id} value={brand.id}>{brand.name}</option>
              ))}
            </Select>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>Tipo combustible</label>
            <Select onChange={handleChange} value={values.fuel} name='fuel' id='fuel'>
              <option className='bg-slate-600' value='corriente'>Corriente</option>
              <option className='bg-slate-600' value='diesel'>Diesel</option>
            </Select>
          </div>

          <div className='flex flex-col gap-1 overflow-ellipsis'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>Transmisión</label>
            <Select onChange={handleChange} value={values.transmission} name='transmission' id='transmission'>
              <option className='bg-slate-600' value='manual'>Manual</option>
              <option className='bg-slate-600' value='automatica'>Automática</option>
            </Select>
          </div>

          <div className='flex flex-col gap-1 overflow-ellipsis'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>Tipo de vehículo</label>
            <Select onChange={handleChange} value={values.type} name='type' id='type'>
              <option className='bg-slate-600' value='automovil'>Automóvil</option>
              <option className='bg-slate-600' value='camioneta'>Camioneta</option>
            </Select>
          </div>

          <div className='flex flex-col gap-1 overflow-ellipsis'>
            <label className='text-white whitespace-nowrap text-ellipsis overflow-hidden'>CC</label>
            <Select onChange={handleChange} value={values.cc} name='cc' id='cc'>

              {selectOptionsCC.map((cc, index) => (
                <option key={index} className='bg-slate-600' value={cc}>{cc}</option>
              ))}

            </Select>
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
        <div className='flex flex-col gap-3 items-center mt-5 justify-center'>
          <label className='text-white bg-gray-800 p-2 rounded'>
            Agregar imagen
            <input hidden type='file' multiple onChange={handleImage} accept='image/*' />
          </label>

          <section className='grid grid-rows-1 md:grid-rows-2 max-w-[40%] grid-flow-col overflow-x-auto'>
            {images.length > 0 && (
              images.map((image, index) => {
                return (
                  <div key={index} className='relative w-32 h-32'>
                    <Image
                      src={image.url}
                      alt='car image'
                      width={100}
                      height={100}
                      className='rounded object-cover block w-full h-full'
                    />
                    <div onClick={() => handleDeleteImage(image)} className='cursor-pointer absolute top-1 right-1 bg-red-500 rounded-full p-1'>
                      <AiFillDelete size={20} />
                    </div>
                  </div>
                )
              })
            )}
          </section>

        </div>
        <div className='flex gap-2 max-w-full items-center justify-center'>
          <Button loading={loading} disabled={loading} type='submit' className='mt-7 w-40 disabled:bg-opacity-70 disabled:cursor-not-allowed'>
            {children}
          </Button>
          <Button onClick={handleClose} className='mt-7 w-40 bg-red-500 hover:bg-red-700'>Cerrar</Button>
        </div>
      </form>
    </>
  )
}
