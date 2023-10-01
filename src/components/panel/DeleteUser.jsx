import useDisclosure from '@/hooks/useDisclosure'
import ModalBackdrop from '../ModalBackdrop'
import Button from '../Button'
import { useState } from 'react'
import { deleteUser } from '@/services/api'
import toast from 'react-hot-toast'

export default function DeleteUser ({ user, setUsers }) {
  const { open, handleClose, handleOpen } = useDisclosure()
  const [loading, setLoading] = useState(false)

  const handleDelete = () => {
    setLoading(true)

    deleteUser(user.id)
      .then(() => {
        toast.success('Usuario eliminado')
        setUsers(prev => prev.filter(u => u.id !== user.id))
        handleClose()
      })
      .catch(err => toast.error(err.message))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Button onClick={handleOpen} className='transition-colors w-full mt-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        Eliminar
      </Button>

      {open && (
        <ModalBackdrop className='md:w-auto justify-center items-center font-bold gap-5'>
          <h2 className='text-xl opacity-85'>Eliminar usuario</h2>
          <h2 className='text-lg opacity-85'>El usuario <span className='text-red-400'>{user.name}</span> sera eliminado</h2>
          <div className='flex gap-1'>
            <Button disabled={loading} className='bg-red-500 hover:bg-red-700 disabled:bg-red-900 disabled:pointer-events-none' onClick={handleDelete}>{loading ? '...' : 'Eliminar'}</Button>
            <Button onClick={handleClose}>Cancelar</Button>
          </div>
        </ModalBackdrop>
      )}
    </>
  )
}
