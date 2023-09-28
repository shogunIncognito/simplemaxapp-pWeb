import Button from '../components/Button'

export default function Home () {
  return (
    <>
      {/* Contenido principal de la pagina inicial '/' */}
      <section className='h-[95dvh] max-h-[95dvh] overflow-hidden bg-black/60 relative flex items-center justify-center text-white'>
        <div className='w-full h-72 flex flex-col items-center justify-center gap-3 mb-20 p-10 rounded'>
          <h1 className='text-5xl font-bold text-center'>Max <span className='text-blue-500'>Autos</span> </h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.</p>
          <Button className='bg-transparent border-2 border-white hover:bg-white hover:text-black mt-5'>Ver recientes</Button>
        </div>
        <video muted loop autoPlay playsInline className='-z-10 object-cover top-0 w-full h-full absolute' src='https://firebasestorage.googleapis.com/v0/b/adminpanelphotos.appspot.com/o/images%2FmaxAutosVideo.mp4?alt=media&token=d99f3869-999e-4148-a4cb-b3655593a5ef' />
      </section>

      <section className='h-[80dvh]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-center'>¿Quienes somos?</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.</p>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus.</p>
        </div>
      </section>

      {/* Contenido principal de la pagina inicial '/' */}
    </>
  )
}
