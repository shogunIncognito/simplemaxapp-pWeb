import useDisclosure from '@/hooks/useDisclosure'
import { IoMdSettings } from 'react-icons/io'
import ModalBackdrop from '../ModalBackdrop'
import Button from '../Button'
import Input from '../Input'

export default function UserSettings () {
  const { open, handleClose, handleOpen } = useDisclosure()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    console.log(data)
  }

  return (
    <>
      <div className='flex-1 group relative flex justify-end'>
        <IoMdSettings size={25} className='group-hover:text-gray-500 transition-colors cursor-pointer' onClick={handleOpen} />
        <span className='animate__animated animate__bounceIn absolute hidden whitespace-nowrap -right-14 z-20 group-hover:block -top-10 bg-neutral-600 shadow-2xl 00 rounded p-1.5'>Cambiar contraseña</span>
      </div>

      {open && (
        <ModalBackdrop className='p-0 max-w-min flex-1'>
          <div className='flex flex-col gap-6 p-6 shadow-md bg-neutral-900 w-full'>
            <h2 className='opacity-80 capitalize text-2xl text-center'>Cambiar contraseña</h2>

            <section className='flex justify-center mx-10'>
              <form onSubmit={handleSubmit} className='flex gap-5 flex-col justify-start items-start'>
                <div>
                  <label>Contraseña actual</label>
                  <Input name='actualPassword' type='password' />
                </div>
                <div>
                  <label>Nueva contraseña</label>
                  <Input name='newPassword' type='password' />
                </div>
                <div>
                  <label>Confirmar contraseña</label>
                  <Input name='confirmPassword' type='password' />
                </div>

                <div className='flex gap-2 my-4 items-center'>
                  <Button type='submit' className='bg-purple-600 hover:bg-purple-800'>Guardar</Button>
                  <Button onClick={handleClose}>Cancelar</Button>
                </div>
              </form>
            </section>

          </div>
        </ModalBackdrop>
      )}
    </>
  )
}
