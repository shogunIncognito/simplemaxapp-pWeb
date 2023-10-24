import MaxIcon from '../assets/maxautosicon.png'
import { BsWhatsapp } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { GrLocation, GrMapLocation } from 'react-icons/gr'
import { MdLocationCity } from 'react-icons/md'

export default function Footer () {
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-3 h-auto bg-blue-400 p-6'>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-24 h-20 my-4' src={MaxIcon.src} />
          <h1>HolaPaSomosUnosDuros</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='my-2 font-semibold'>CONTACTANOS</h1>
          <p className='flex my-2'><BsWhatsapp className='mx-1' size={25} />maxautos@gmail.com</p>
          <p className='flex my-2'><BiPhoneCall className='mx-1' size={25} />+57 3108504578</p>
          <p className='flex my-2'><AiOutlineInstagram className='mx-1' size={25} />maxautoscalidad</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='flex my-2'><MdLocationCity className='mx-1' size={25} /> Colombia</p>
          <p className='flex my-2'><GrMapLocation className='mx-1' size={25} /> Villavicencio-Meta</p>
          <p className='flex my-2'><GrLocation className='mx-1' size={25} /> SPM19 MZ4 CS3</p>
        </div>
      </section>
    </>
  )
}
