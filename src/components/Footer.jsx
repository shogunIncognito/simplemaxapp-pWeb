import MaxIcon from '../assets/maxautosicon.png'
import { BsWhatsapp } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'

export default function Footer () {
  return (
    <>
      <section className='grid grid-cols-4 h-[300px] bg-blue-400'>
        <div className='flex items-center justify-center'>
          <img className='w-24 h-20' src={MaxIcon.src} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='my-2 font-semibold'>CONTACTANOS</h1>
          <p className='flex my-2'><BsWhatsapp className='mx-1' size={25} />maxautos@gmail.com</p>
          <p className='flex my-2'><BiPhoneCall className='mx-1' size={25} />+57 3108504578</p>
          <p className='flex my-2'><AiOutlineInstagram className='mx-1' size={25} />maxautoscalidad</p>
        </div>
        <div className='flex flex-col items-center justify-center p-4'>
          <h1 className='my-2 font-semibold'>NOSOTROS</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam odio minima perferendis quaerat
            non temporibus perspiciatis officiis! Atque hic voluptatibus quaerat ea magni at corporis, laborum
            voluptatum accusamus mollitia aut.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Link className='my-4 hover:text-cyan-100' href='/'>Inicio</Link>
          <Link className='my-4 hover:text-cyan-100' href='/cars'>Nuestros Autos</Link>
          <Link className='my-4 hover:text-cyan-100' href='/QuienesSomos'>Nosotros</Link>
        </div>
      </section>
    </>
  )
}
