import image1 from '@/assets/imagenmaxautos1.jpeg'

export default function page () {
  return (
    <>
      <section className='w-full max-sm:py-5 max-sm:p-0 p-28 min-[2560px]:p-36 h-auto flex items-center justify-center'>
        <div className='w-[90%] mt-24 md:mt-10 h-auto flex flex-col items-center justify-center xl:flex-row rounded-md border overflow-hidden bg-slate-100 p-24 max-xl:p-16 max-md:p-2'>
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
            <h1 className='text-blue-700/90 font-mono font-bold text-2xl my-3 mb-6 min-[1920px]:text-3xl min-[2560px]:text-5xl'>QUIENES SOMOS</h1>
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

      <section className='flex md:flex-row p-2 flex-col'>
        <div className='md:w-1/3 w-full flex flex-col justify-center items-center bg-blue-300 shadow-lg font-bold rounded p-2'>
          <h2 className='text-2xl'>Horarios de apertura</h2>
          <ul className='my-5 flex flex-col gap-3'>
            <li className='grid grid-cols-2'>
              <p>Lunes</p>
              8:00 AM - 6:00 PM
            </li>
            <li className='grid grid-cols-2'>
              <p>Martes</p>
              8:00 AM - 6:00 PM
            </li>
            <li className='grid grid-cols-2'>
              <p>Miercoles</p>
              8:00 AM - 6:00 PM
            </li>
            <li className='grid grid-cols-2'>
              <p>Jueves</p>
              8:00 AM - 6:00 PM
            </li>
            <li className='grid grid-cols-2'>
              <p>Viernes</p>
              8:00 AM - 6:00 PM
            </li>
            <li className='grid grid-cols-2'>
              <p>Sabado</p>
              8:00 AM - 6:00 PM
            </li>
            <li className='grid grid-cols-2'>
              <p>Domingo</p>
              CERRADO
            </li>
          </ul>
        </div>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.4354539650095!2d-73.62022801996487!3d4.124806286974369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2fc37b59d1df%3A0xebf7a3199e0db914!2sCompra%20Y%20Venta%20De%20Carros%20Max-Autos!5e0!3m2!1ses-419!2sco!4v1698363184868!5m2!1ses-419!2sco' className='flex-1 border-0 h-auto w-full' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
      </section>
    </>
  )
}
