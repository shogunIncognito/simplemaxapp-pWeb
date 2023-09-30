'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import { createUser, getUsers } from '@/services/api'
import { objectHasEmptyValues } from '@/utils/functions'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function page () {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getUsers()
      .then(res => setUsers(res))
      .catch(err => toast.error(err.message))
      .finally(() => setLoading(false))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.target))
    if (objectHasEmptyValues(data)) return toast.error('Todos los campos son obligatorios')

    createUser(data)
      .then(res => {
        setUsers([...users, res])
        toast.success('Usuario creado')
        e.target.reset()
      })
      .catch(err => {
        console.log(err)
        if (err.request.status === 400) return toast.error('El usuario ya existe')
        toast.error(err.message)
      })
  }

  return (
    <>
      <section className='w-full h-[40%] flex justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-slate-900 mt-4 p-4 rounded'>
          <div className='w-full flex flex-col gap-1'>
            <label className='opacity-80 font-bold' htmlFor='username'>Nombre</label>
            <Input required className='p-2' name='name' type='text' id='username' placeholder='Pedro' />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <label className='opacity-80 font-bold' htmlFor='password'>Contraseña</label>
            <Input required className='p-2' name='password' type='password' id='password' placeholder='contraseña' />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <label className='opacity-80 font-bold' htmlFor='cedula'>Cedula</label>
            <Input minLength='10' required className='p-2' name='cedula' type='number' id='cedula' placeholder='123456789' />
          </div>
          <Button className='py-2 mt-2'>Crear</Button>
        </form>
      </section>

      <div className='mt-10 max-h-[50%] overflow-auto'>
        <table className='w-full max-w-full overflow-x-auto text-sm text-center text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Nombre
              </th>
              <th scope='col' className='px-6 py-3'>
                Cedula
              </th>
              <th scope='col' className='px-6 py-3'>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>

            {loading && (
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td colSpan='9' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Cargando...
                </td>
              </tr>
            )}

            {users.map(user => (
              <tr key={user.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <td className='capitalize px-6 py-4'>
                  {user.id}
                </td>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {user.name}
                </th>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {user.cedula}
                </th>
                <td className='px-6 py-4 h-full w-1/6 m-auto'>
                  <Button onClick={() => {}} className='transition-colors w-full mt-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
