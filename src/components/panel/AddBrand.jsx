import useDisclosure from '@/hooks/useDisclosure'
import Button from '../Button'
import ModalBackdrop from '../ModalBackdrop'
import Input from '../Input'
import { createBrand } from '@/services/api'
import { useState } from 'react'
import useCarsStore from '@/hooks/useCarsStore'
import toast from 'react-hot-toast'

export default function AddBrand () {
  const { open, handleClose, handleOpen } = useDisclosure()
  const { reFetch } = useCarsStore()
  const [brand, setBrand] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCreate = () => {
    setLoading(true)

    createBrand(brand)
      .then(res => {
        toast.success('Marca creada')
        reFetch()
        setBrand('')
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }

  const handleChange = (e) => {
    if (e.target.value === ' ') return
    setBrand(e.target.value)
  }

  return (
    <>
      <Button className='font-bold py-2 px-4' onClick={handleOpen}>Agregar marca</Button>

      {open && (
        <ModalBackdrop className='gap-4 justify-center items-center p-8 md:w-2/12'>
          <h1 className='text-xl font-bold opacity-80'>Añadir marca nueva</h1>
          <form className='gap-4 justify-center items-center flex flex-col'>
            <div>
              <h2 className='text-lg opacity-85'>Nombre de marca</h2>
              <Input value={brand} onChange={handleChange} className='py-2' placeholder='Marca' />
            </div>
            <div className='flex gap-1'>
              <Button
                disabled={loading}
                className='py-2 bg-green-600 hover:bg-green-800 disabled:bg-green-900 disabled:pointer-events-none'
                onClick={handleCreate}
              >
                {loading ? '...' : 'Agregar'}
              </Button>
              <Button className='py-2' onClick={handleClose}>Cerrar</Button>
            </div>
          </form>
        </ModalBackdrop>
      )}
    </>
  )
}
