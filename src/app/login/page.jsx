import Button from '@/components/Button'
import Logo from '@/assets/maxautosicon.png'
import sideImage from '@/assets/maxHero1.jpg'
import Image from 'next/image'

export default function page () {
  return (
    <div className='w-full h-screen max-h-screen flex-col md:flex-row overflow-hidden flex justify-center items-center'>
      <section className='flex w-full justify-center items-center md:w-1/3 bg-neutral-50 h-full'>
        <form className='bg-slate-100 w-1/2 relative rounded-md font-bold gap-3 p-6 py-10 mt-10 flex flex-col'>
          <Image className='self-center absolute -top-12 md:-top-24 object-cover lg:h-32 lg:w-40' alt='loginLogo' src={Logo} width={120} height={120} />
          <div className='flex flex-col gap-1'>
            <label className='text-md' htmlFor='username'>Usuario</label>
            <input className='py-1 px-3 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300' id='username' type='text' name='username' />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-md' htmlFor='password'>Contraseña</label>
            <input className='py-1 px-3 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300' id='password' type='password' name='password' />
          </div>
          <Button className='mt-3'>Iniciar sesión</Button>
        </form>
      </section>
      <section className='h-screen w-full md:w-2/3'>
        <Image src={sideImage} alt='sideimage' className='w-full h-full object-cover' />
      </section>
    </div>
  )
}
