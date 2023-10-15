'use client'

import Button from '@/components/Button'
import Logo from '@/assets/maxautosicon.png'
import sideImage from '@/assets/maxHero1.jpg'
import Image from 'next/image'
import { useState } from 'react'
import { login } from '@/services/api'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Input from '@/components/Input'
import useSessionStore from '@/hooks/useSessionStore'
import { loginCodes } from '@/utils/statusCodes'

export default function page () {
  const router = useRouter()
  const { setSession } = useSessionStore()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState({
    name: '',
    password: ''
  })

  const isButtonDisabled = !values.name || !values.password

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isButtonDisabled) return toast.error('Hay campos vacíos')

    setLoading(true)
    login(values)
      .then(res => {
        toast.success('Bienvenido')
        router.replace('/panel')
        window.localStorage.setItem('session', JSON.stringify(res.session))
        setSession(res.session)
      })
      .catch(err => {
        toast.error(loginCodes[err.response.status] || 'Error al iniciar sesión')
      })
      .finally(() => setLoading(false))
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
          <Image className='self-center object-cover h-auto' alt='loginLogo' src={Logo} width={170} height={120} />
          <div className='flex flex-col gap-1'>
            <label className='text-md opacity-70' htmlFor='name'>Usuario</label>
            <Input className='bg-white shadow text-gray-700 p-1.5' value={values.name} onChange={handleChange} id='name' type='text' name='name' />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-md opacity-70' htmlFor='password'>Contraseña</label>
            <Input className='bg-white shadow text-gray-700 p-1.5' value={values.password} onChange={handleChange} id='password' type='password' name='password' />
          </div>
          <Button loading={loading} disabled={isButtonDisabled || loading} className='mt-3 disabled:bg-opacity-70 disabled:cursor-not-allowed'>
            Iniciar sesión
          </Button>
        </form>
      </section>
      <section className='h-screen w-full md:w-1/2 lg:w-2/3'>
        <Image priority src={sideImage} alt='sideimage' className='w-full h-full object-cover' />
      </section>
    </div>
  )
}
