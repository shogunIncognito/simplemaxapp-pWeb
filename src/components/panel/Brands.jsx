import useDisclosure from '@/hooks/useDisclosure'
import Button from '../Button'
import ModalBackdrop from '../ModalBackdrop'
import Input from '../Input'
import { createBrand, deleteBrand } from '@/services/api'
import { useState } from 'react'
import useCarsStore from '@/hooks/useCarsStore'
import toast from 'react-hot-toast'
import Spinner from '../Spinner'
import Select from '../Select'

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
                  {loading ? <Spinner className='p-0' size={24} /> : 'Agregar'}
                </Button>
              </div>
            </form>
            <form className='gap-4 justify-center items-center flex flex-col'>
              <div>
                <h2 className='text-lg opacity-85'>Seleccionar marca a eliminar</h2>

                <Select className='w-full' name='brandToDelete' value={brand.brandToDelete} onChange={handleChange}>
                  {!brandsLoading
                    ? brands.map(brand => (
                      <option className='bg-slate-500' key={brand.id} value={brand.id}>{brand.name}</option>
                    ))
                    : <option className='bg-slate-500'>Cargando...</option>}
                </Select>

              </div>
              <div className='flex gap-1'>
                <Button
                  disabled={loading || brandsLoading}
                  className='py-2 bg-red-600 hover:bg-red-800 disabled:bg-red-900 disabled:pointer-events-none'
                  onClick={handleDelete}
                >
                  {loading ? <Spinner className='p-0' size={24} /> : 'Eliminar'}
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
