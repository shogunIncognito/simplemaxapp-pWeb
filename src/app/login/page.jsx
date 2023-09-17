'use client'

import Button from '@/components/Button'
import Logo from '@/assets/maxautosicon.png'
import sideImage from '@/assets/maxHero1.jpg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { login } from '@/services/api'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'

export default function page () {
  const router = useRouter()
  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    deleteCookie('token')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    login(values)
      .then(res => router.replace('/panel'))
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    if (e.target.value === ' ') return
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='w-full h-screen max-h-screen flex-col md:flex-row overflow-hidden flex justify-center items-center'>
      <section className='flex w-full justify-center items-center md:w-1/2 lg:w-1/3 bg-neutral-50 h-full'>
        <form onSubmit={handleSubmit} className='w-3/4 lg:w-1/2 relative rounded-md font-bold gap-4 p-6 py-10 mb-10 flex flex-col'>
          <Image className='self-center object-cover h-auto w-auto' alt='loginLogo' src={Logo} width={120} height={120} />
          <div className='flex flex-col gap-1'>
            <label className='text-md opacity-70' htmlFor='username'>Usuario</label>
            <input value={values.username} onChange={handleChange} className='py-1 font-medium px-2 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300' id='username' type='text' name='username' />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-md opacity-70' htmlFor='password'>Contraseña</label>
            <input value={values.password} onChange={handleChange} className='py-1 font-medium px-2 ring-2 rounded outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300' id='password' type='password' name='password' />
          </div>
          <Button className='mt-3 disabled:bg-opacity-70 disabled:cursor-not-allowed'>Iniciar sesión</Button>
        </form>
      </section>
      <section className='h-screen w-full md:w-1/2 lg:w-2/3'>
        <Image priority src={sideImage} alt='sideimage' className='w-full h-full object-cover' />
      </section>
    </div>
  )
}
