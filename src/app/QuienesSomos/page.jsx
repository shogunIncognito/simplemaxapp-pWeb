import image1 from '@/assets/imagenmaxautos1.jpeg'

export default function page () {
  return (
    <>
      <section className='w-full h-[90vh] min-[1920px]:h-[70vh] min-[2560px]:h-[67vh] flex items-center justify-center'>
        <div className='w-[80%] h-[80%] flex rounded-md border overflow-hidden'>
          <div className='w-[50%] h-full bg-slate-100 flex items-center justify-center'>
            <div className='w-[70%] h[70%] rounded-md overflow-hidden'>
              <img className='w-full h-full object-cover' src={image1.src} alt='' />
            </div>
          </div>
          <div className='w-[50%] h-full flex flex-col items-center justify-center p-7 bg-slate-100'>
            <h1 className='text-blue-400 font-mono font-bold text-2xl my-3'>QUIENES SOMOS</h1>
            <p className='text-lg font-normal'>Max-Autos es una empresa llanera con una trayectoria De más de 10 años en el sector automotriz
              que ha logrado posicionarse como marca líder en la ciudad de Villavicencio, trabajando siempre
              para satisfacer las necesidades de nuestros clientes y superar sus expectativas, haciendo cada
              vez más clientes felices.
            </p>
          </div>
        </div>
      </section>
      <section className='w-full h-[50vh] min-[1920px]:h-[35vh] min-[2560px]:h-[40vh] flex rounded-md border-blue-200 border-[4px] bg-blue-200 shadow-md '>
        <div className='w-full h-full flex flex-col items-center justify-center p-10'>
          <h1 className='text-white font-mono font-bold text-2xl my-3'>QUIENES SOMOS</h1>
          <p className='text-lg font-normal'>Max-Autos es una empresa llanera con una trayectoria De más de 10 años en el sector automotriz
            que ha logrado posicionarse como marca líder en la ciudad de Villavicencio, trabajando siempre
            para satisfacer las necesidades de nuestros clientes y superar sus expectativas, haciendo cada
            vez más clientes felices.
          </p>
        </div>
      </section>
      <section className='w-full h-[90vh] min-[1920px]:h-[70vh] min-[2560px]:h-[67vh] flex items-center justify-center'>
        <div className='w-[80%] h-[80%] flex rounded-md border overflow-hidden'>
          <div className='w-[50%] h-full flex flex-col items-center justify-center p-7 bg-slate-100'>
            <h1 className='text-blue-400 font-mono font-bold text-2xl my-3'>QUIENES SOMOS</h1>
            <p className='text-lg font-normal'>Max-Autos es una empresa llanera con una trayectoria De más de 10 años en el sector automotriz
              que ha logrado posicionarse como marca líder en la ciudad de Villavicencio, trabajando siempre
              para satisfacer las necesidades de nuestros clientes y superar sus expectativas, haciendo cada
              vez más clientes felices.
            </p>
          </div>
          <div className='w-[50%] h-full bg-slate-100 flex items-center justify-center'>
            <div className='w-[70%] h[70%] rounded-md overflow-hidden'>
              <img className='w-full h-full object-cover' src={image1.src} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
