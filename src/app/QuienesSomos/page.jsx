import image1 from '@/assets/imagenmaxautos1.jpeg'

export default function page () {
  return (
    <>
      <section className='w-full max-sm:py-5 max-sm:p-0 p-28 min-[2560px]:p-36 h-auto flex items-center justify-center'>
        <div className='w-[90%] h-auto flex flex-col items-center justify-center xl:flex-row rounded-md border overflow-hidden bg-slate-100 p-24 max-xl:p-16 max-md:p-2'>
          <div className='w-full xl:w-[50%] h-auto flex items-center justify-center xl:mr-6'>
            <div className='w-full h-full flex items-center justify-center rounded-md overflow-hidden shadow-lg'>
              <img className='w-full h-full object-cover duration-500 hover:scale-110' src={image1.src} alt='nosotros' />
            </div>
          </div>
          <div className='w-full xl:w-[50%] h-full flex flex-col items-center justify-center p-7 bg-slate-100'>
            <h1 className='text-blue-400 font-mono font-bold text-2xl my-3 min-[1920px]:text-3xl min-[2560px]:text-4xl'>QUIENES SOMOS</h1>
            <p className='text-lg font-normal min-[1920px]:text-xl min-[2560px]:text-2xl'>Max-Autos es una empresa llanera con una trayectoria De más de 10 años en el sector automotriz
              que ha logrado posicionarse como marca líder en la ciudad de Villavicencio, trabajando siempre
              para satisfacer las necesidades de nuestros clientes y superar sus expectativas, haciendo cada
              vez más clientes felices.
            </p>
          </div>
        </div>
      </section>

      <section className='p-5'>
        <div className='w-full h-auto min-[1920px]:h-[35vh] min-[2560px]:h-[40vh] flex rounded-md py-2 border-blue-200 border-[4px] bg-blue-200 shadow-md'>
          <div className='w-full h-full flex flex-col items-center justify-center p-2 md:p-10'>
            <h1 className='text-white font-mono font-bold text-2xl my-3 mb-6 min-[1920px]:text-3xl min-[2560px]:text-5xl'>QUIENES SOMOS</h1>
            <p className='text-lg font-normal max-w-[90%] text-center min-[1920px]:text-2xl min-[2560px]:text-3xl'>Max-Autos es una empresa llanera con una trayectoria De más de 10 años en el sector automotriz
              que ha logrado posicionarse como marca líder en la ciudad de Villavicencio, trabajando siempre
              para satisfacer las necesidades de nuestros clientes y superar sus expectativas, haciendo cada
              vez más clientes felices.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full max-sm:py-5 max-sm:p-0 p-28 min-[2560px]:p-36 h-auto flex items-center justify-center'>
        <div className='w-[90%] h-auto flex flex-col items-center justify-center xl:flex-row rounded-md border overflow-hidden bg-slate-100 p-24 max-xl:p-16 max-md:p-2'>
          <div className='w-full xl:w-[50%] h-full flex flex-col items-center justify-center p-7 bg-slate-100'>
            <h1 className='text-blue-400 font-mono font-bold text-2xl my-3 min-[1920px]:text-3xl min-[2560px]:text-4xl'>QUIENES SOMOS</h1>
            <p className='text-lg font-normal min-[1920px]:text-xl min-[2560px]:text-2xl'>Max-Autos es una empresa llanera con una trayectoria De más de 10 años en el sector automotriz
              que ha logrado posicionarse como marca líder en la ciudad de Villavicencio, trabajando siempre
              para satisfacer las necesidades de nuestros clientes y superar sus expectativas, haciendo cada
              vez más clientes felices.
            </p>
          </div>
          <div className='w-full xl:w-[50%] h-auto flex items-center justify-center xl:mr-6'>
            <div className='w-full h-full flex items-center justify-center rounded-md overflow-hidden shadow-lg'>
              <img className='w-full h-full object-cover duration-500 hover:scale-110' src={image1.src} alt='nosotros' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
