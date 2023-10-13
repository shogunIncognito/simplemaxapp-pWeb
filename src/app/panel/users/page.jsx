'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Spinner from '@/components/Spinner'
import DeleteUser from '@/components/panel/DeleteUser'
import useSessionStore from '@/hooks/useSessionStore'
import { createUser, getUsers } from '@/services/api'
import { objectHasEmptyValues } from '@/utils/functions'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function page () {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const { session } = useSessionStore()

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

    if (data.cedula.length !== 10) return toast.error('La cédula debe tener 10 dígitos')

    setLoading(true)
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
      .finally(() => setLoading(false))
  }

  const filteredUsers = session ? users.filter(user => user.id !== session.id) : users

  return (
    <>
      <section className='w-full flex-col items-center h-auto flex justify-center'>
        <h2 className='text-2xl opacity-75 font-bold md:hidden mt-5'>Usuarios</h2>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3 bg-slate-900 mt-4 p-4 rounded'>
          <div className='flex md:flex-row flex-col gap-2'>
            <div className='w-full flex flex-col gap-1'>
              <label className='opacity-80 font-bold' htmlFor='name'>Nombre</label>
              <Input required className='p-2' name='name' type='text' id='name' placeholder='Pedro' />
            </div>
            <div className='w-full flex flex-col gap-1'>
              <label className='opacity-80 font-bold' htmlFor='password'>Contraseña</label>
              <Input required className='p-2' name='password' type='password' id='password' placeholder='contraseña' />
            </div>
          </div>
          <div className='w-full flex flex-col gap-1'>
            <label className='opacity-80 font-bold' htmlFor='cedula'>Cedula</label>
            <Input minLength='10' required className='p-2' name='cedula' type='number' id='cedula' placeholder='1234567890' />
          </div>
          <Button disabled={loading} className='py-2 mt-2 w-40 self-center'>{loading ? <Spinner className='p-0' size={24} /> : 'Crear'}</Button>
        </form>

      </section>

      <div className='mt-10 max-h-[50%] overflow-auto'>
        {loading
          ? <Spinner />
          : (
            <table className='w-full max-w-full overflow-x-auto text-sm text-center text-gray-400'>
              <thead className='text-xs uppercase bg-gray-700 text-gray-400'>
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

                {filteredUsers.map(user => (
                  <tr key={user.id} className='border-b bg-gray-800 border-gray-700'>
                    <td className='capitalize px-6 py-4'>
                      {user.id}
                    </td>
                    <th scope='row' className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                      {user.name}
                    </th>
                    <th scope='row' className='px-6 py-4 font-medium whitespace-nowrap text-white'>
                      {user.cedula}
                    </th>
                    <td className='px-6 py-4 h-full w-1/6 m-auto'>
                      <DeleteUser setUsers={setUsers} user={user} />
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
            )}

      </div>
    </>
  )
}
