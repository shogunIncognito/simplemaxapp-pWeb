import sideImage from '@/assets/maxautosicon.png'
import Image from 'next/image'

export default function PanelLayout ({ children }) {
  return (
    <main className='flex'>
      <aside className='w-1/3'>
        <Image src={sideImage} width={150} height={150} alt='sideimage' className='object-cover' />
        <nav>
          <ul>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Inicio</a></li>
          </ul>
        </nav>
      </aside>
      <section className='w-2/3'>
        {children}
      </section>
    </main>
  )
}
