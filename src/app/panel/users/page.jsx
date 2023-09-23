'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import users from '@/mocks/users.json'

export default function page () {
  return (
    <>
      <section className='w-full flex justify-center'>
        <form className='flex flex-col gap-3 bg-slate-900 mt-10 p-5 rounded'>
          <div className='w-full flex flex-col gap-1'>
            <label htmlFor='username'>Nombre</label>
            <Input type='text' id='username' placeholder='Pedro' />
          </div>
          <div className='w-full flex flex-col gap-1'>
            <label htmlFor='password'>Contraseña</label>
            <Input type='password' id='password' placeholder='contraseña' />
          </div>
          <Button>Crear</Button>
        </form>
      </section>

      <table className='w-full mt-10 max-w-full overflow-x-auto text-sm text-center text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              ID
            </th>
            <th scope='col' className='px-6 py-3'>
              Nombre
            </th>
            <th scope='col' className='px-6 py-3'>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>

          {/* {loading && (
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td colSpan='9' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                Cargando...
              </td>
            </tr>
          )} */}

          {users.map(user => (
            <tr key={user.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <td className='capitalize px-6 py-4'>
                {user.id}
              </td>
              <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {user.username}
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
    </>
  )
}
