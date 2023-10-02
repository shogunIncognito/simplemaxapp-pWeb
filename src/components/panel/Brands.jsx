import useDisclosure from '@/hooks/useDisclosure'
import Button from '../Button'
import ModalBackdrop from '../ModalBackdrop'
import Input from '../Input'
import { createBrand, deleteBrand } from '@/services/api'
import { useState } from 'react'
import useCarsStore from '@/hooks/useCarsStore'
import toast from 'react-hot-toast'

export default function Brands () {
  const { open, handleClose, handleOpen } = useDisclosure()
  const { reFetch, brands, loading: brandsLoading } = useCarsStore()
  const [loading, setLoading] = useState(false)
  const [brand, setBrand] = useState({
    brandToDelete: brands[0]?.id,
    brandToAdd: ''
  })

  const handleCreate = () => {
    setLoading(true)

    createBrand(brand.brandToAdd)
      .then(res => {
        toast.success('Marca creada')
        reFetch()
        setBrand({ ...brand, brandToAdd: '' })
      })
      // ajustar los errores de la api
      .catch(err => toast.error(err.message))
      .finally(() => setLoading(false))
  }

  const handleChange = (e) => {
    if (e.target.value === ' ') return
    setBrand({
      ...brand,
      [e.target.name]: e.target.value
    })
  }

  const handleDelete = () => {
    setLoading(true)

    deleteBrand(Number(brand.brandToDelete))
      .then(res => {
        toast.success('Marca eliminada')
        reFetch()
        setBrand('')
      })
      .catch(err => toast.error(err.message))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Button className='font-bold py-2 px-4' onClick={handleOpen}>Gestionar marcas</Button>

      {open && (
        <ModalBackdrop className='gap-6 justify-center items-center p-8 md:w-auto'>
          <h1 className='text-xl font-bold opacity-80'>Añadir o eliminar marcas</h1>
          <div className='flex gap-6 md:flex-row flex-col'>
            <form className='gap-4 justify-center items-center flex flex-col'>
              <div>
                <h2 className='text-lg opacity-85'>Nombre de marca a añadir</h2>
                <Input name='brandToAdd' value={brand.brandToAdd} onChange={handleChange} className='py-2' placeholder='Renault...' />
              </div>
              <div className='flex gap-1'>
                <Button
                  disabled={loading}
                  className='py-2 bg-green-600 hover:bg-green-800 disabled:bg-green-900 disabled:pointer-events-none'
                  onClick={handleCreate}
                >
                  {loading ? '...' : 'Agregar'}
                </Button>
              </div>
            </form>
            <form className='gap-4 justify-center items-center flex flex-col'>
              <div>
                <h2 className='text-lg opacity-85'>Seleccionar marca a eliminar</h2>
                <select name='brandToDelete' value={brand.brandToDelete} onChange={handleChange} className='w-full text-gray-600 font-medium py-2 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300'>
                  {!brandsLoading
                    ? brands.map(brand => (
                      <option key={brand.id} value={brand.id}>{brand.name}</option>
                    ))
                    : <option>Cargando...</option>}
                </select>
              </div>
              <div className='flex gap-1'>
                <Button
                  disabled={loading || brandsLoading}
                  className='py-2 bg-red-600 hover:bg-red-800 disabled:bg-red-900 disabled:pointer-events-none'
                  onClick={handleDelete}
                >
                  {loading ? '...' : 'Eliminar'}
                </Button>
              </div>
            </form>
          </div>
          <Button className='py-2' onClick={handleClose}>Cerrar</Button>
        </ModalBackdrop>
      )}
    </>
  )
}
