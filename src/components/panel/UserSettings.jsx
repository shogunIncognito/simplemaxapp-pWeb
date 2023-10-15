import useDisclosure from '@/hooks/useDisclosure'
import { IoMdSettings } from 'react-icons/io'
import { FaExchangeAlt } from 'react-icons/fa'
import ModalBackdrop from '../ModalBackdrop'
import Button from '../Button'
import Input from '../Input'
import { useState } from 'react'
import { objectHasEmptyValues } from '@/utils/functions'
import toast from 'react-hot-toast'
import { updateUser } from '@/services/api'
import useSessionStore from '@/hooks/useSessionStore'
import { updatePasswordCodes, updateUsernameCodes } from '@/utils/statusCodes'
import Spinner from '../Spinner'

const initialFormValues = {
  toPassword: {
    actualPassword: '',
    newPassword: '',
    confirmPassword: ''
  },
  toUsername: {
    username: ''
  }
}

export default function UserSettings () {
  const { open, handleClose, handleOpen } = useDisclosure()
  const { session } = useSessionStore()
  const [values, setValues] = useState(initialFormValues)
  const [settingsView, setSettingsView] = useState('username')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))

    if (objectHasEmptyValues(data)) return toast.error('Todos los campos son obligatorios')
    if (data.newPassword !== data.confirmPassword) return toast.error('Las contraseñas no coinciden')

    setLoading(true)
    updateUser(session.id, data, e.target.name)
      .then(res => {
        toast.success('Usuario actualizado')
        handleClose()
      })
      .catch(err => {
        if (e.target.name === 'toPassword') return toast.error(updatePasswordCodes[err.response.status] || 'Error al actualizar contraseña')
        toast.error(updateUsernameCodes[err.response.status] || 'Error al actualizar nombre de usuario')
      })
      .finally(() => {
        setLoading(false)
        setValues(initialFormValues)
      })
  }

  const handleToggleView = () => setSettingsView(settingsView === 'username' ? 'password' : 'username')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [e.target.form.name]: { ...values[e.target.form.name], [name]: value } })
  }

  return (
    <>
      <div className='flex-1 relative flex justify-end'>
        <div className='group'>
          <IoMdSettings size={25} className='group-hover:text-gray-500 transition-colors cursor-pointer' onClick={handleOpen} />
          <span className='animate__animated animate__bounceIn absolute hidden whitespace-nowrap -right-12 z-20 group-hover:block -top-10 bg-neutral-600 shadow-2xl 00 rounded p-1.5'>Ajustes usuario</span>
        </div>
      </div>

      <ModalBackdrop open={open} className='p-0 w-auto mx-5'>
        <div className='flex flex-col gap-6 p-6 shadow-md bg-neutral-900'>
          <header className='self-end group relative'>
            <FaExchangeAlt className='cursor-pointer hover:text-purple-600' size={25} onClick={handleToggleView} />
            <span className='animate__animated animate__bounceIn absolute hidden whitespace-nowrap -right-12 z-20 group-hover:block -top-10 bg-neutral-600 shadow-2xl 00 rounded p-1.5'>
              Cambiar {settingsView === 'username' ? 'contraseña' : 'nombre'}
            </span>
          </header>
          {settingsView === 'username'
            ? (
              <section className='flex items-center flex-col justify-center mx-10'>
                <h2 className='opacity-80 mb-7 capitalize text-2xl text-center'>Cambiar nombre</h2>

                <form name='toUsername' onSubmit={handleSubmit} className='flex gap-5 flex-col justify-start items-start'>
                  <div className='flex gap-5 flex-col'>
                    <label>Nuevo nombre de usuario</label>
                    <Input value={values.toUsername.username} onChange={handleChange} name='username' />
                  </div>

                  <div className='flex gap-2 my-4 items-center'>
                    <Button type='submit' className='bg-purple-600 hover:bg-purple-800'>Guardar</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                  </div>
                </form>
              </section>
              )
            : (
              <section className='flex flex-col justify-center mx-10'>
                <h2 className='opacity-80 mb-7 capitalize text-2xl text-center'>Cambiar contraseña</h2>
                <form name='toPassword' onSubmit={handleSubmit} className='flex gap-5 flex-col justify-start items-center'>
                  <div className='grid grid-cols-2'>
                    <label>Contraseña actual</label>
                    <Input value={values.toPassword.actualPassword} onChange={handleChange} name='actualPassword' type='password' />
                  </div>
                  <div className='grid grid-cols-2'>
                    <label>Nueva contraseña</label>
                    <Input value={values.toPassword.newPassword} onChange={handleChange} name='newPassword' type='password' />
                  </div>
                  <div className='grid grid-cols-2'>
                    <label>Confirmar contraseña</label>
                    <Input value={values.toPassword.confirmPassword} onChange={handleChange} name='confirmPassword' type='password' />
                  </div>

                  <div className='flex gap-2 my-4 items-center'>
                    <Button type='submit' className='bg-purple-600 hover:bg-purple-800'>{loading ? <Spinner /> : 'Guardar'}</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                  </div>
                </form>
              </section>
              )}

        </div>
      </ModalBackdrop>
    </>
  )
}
