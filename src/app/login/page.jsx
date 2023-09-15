import Button from '@/components/Button'

export default function page () {
  return (
    <section className='w-full h-[50dvh] flex justify-center items-center'>
      <form className='bg-slate-200 rounded-md font-bold md:w-1/6 gap-3 p-6 flex flex-col'>
        <div className='flex flex-col gap-1'>
          <label className='text-md' htmlFor='username'>Usuario</label>
          <input className='py-1 px-3 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300' id='username' type='text' name='username' />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-md' htmlFor='password'>Contraseña</label>
          <input className='py-1 px-3 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300' id='password' type='password' name='password' />
        </div>
        <Button className='mt-3'>Iniciar sesion</Button>
      </form>
    </section>
  )
}
