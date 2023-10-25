'use client'
import Spinner from '@/components/Spinner'
import useCarsStore from '@/hooks/useCarsStore'
import { AiOutlineCar, AiOutlineTags, AiOutlineFolderOpen, AiOutlineUserSwitch, AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { IoColorFilterOutline } from 'react-icons/io5'
import { SlSpeedometer } from 'react-icons/sl'
import { TbSettingsCheck } from 'react-icons/tb'
import { LuFuel } from 'react-icons/lu'
import { GrConfigure } from 'react-icons/gr'
import { BsCardText } from 'react-icons/bs'
import { useState } from 'react'

export default function page ({ params }) {
  const { cars, loading } = useCarsStore()
  const [Translate, setTranslate] = useState(0)

  if (loading) return <Spinner />

  const car = cars.find((car) =>
    String(car.id) === params.id
  )

  const imagenes = car.image
  if (Translate >= imagenes.length * 100) {
    setTranslate(0)
  }
  if (Translate <= -100) {
    setTranslate((imagenes.length - 1) * 100)
  }
  console.log(Translate)

  return (
    <>
      <section className='w-full h-[100vh] flex flex-col lg:flex-row mb-4'>
        <div className='w-full xl:w-[50%] h-full flex flex-col items-center justify-center md:p-16 lg:p-14 min-[1920px]:p-24'>
          <div className='w-[73%] h-[90%] md:w-[70%] md:h-[80%] lg:w-[80%] lg:h-[77%] xl:w-[90ssss%] xl:h-[87%] min-[1920px]:w-[95%] min-[1920px]:h-[85%]'>
            <div className='w-full max-w-fit h-[80%] border rounded-md overflow-hidden mb-2 flex items-center relative'>
              <button onClick={() => setTranslate(Translate - 100)} className='text-white absolute z-20 bg-slate-200 rounded-full m-2 p-1'><AiFillCaretLeft className='text-blue-400' size={20} /></button>
              <button onClick={() => setTranslate(Translate + 100)} className='text-white absolute z-20 bg-slate-200 rounded-full  right-0 m-2 p-1'><AiFillCaretRight className='text-blue-400' size={20} /></button>
              <div className='w-full object-fill max-w-full h-full flex duration-700' style={{ transform: `translateX(-${Translate}%)` }}>
                {
                imagenes.map((i, index) => (
                  <div key={index} className='w-full h-full select-none min-w-full'>
                    <img className='w-full h-full object-fill object-center select-none' src={i} alt='' />
                  </div>

                ))
                }
              </div>

            </div>
            <div className='flex h-[20%] select-none bg-blue-200 border rounded-md overflow-x-auto p-1'>
              {
                imagenes.map((i, index) => (
                  <img
                    onClick={() => setTranslate(index * 100)} key={index + 100} className='w-[15%] cursor-pointer select-none h-full object-cover object-center rounded-md mr-1' src={i} alt=''
                  />
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-full xl:w-[50%] h-full flex items-center justify-center lg:p-16 min-[1920px]:p-24'>
          <div className='w-[90%] h-[85%] md:w-[70%] md:h-[80%] lg:w-[95%] lg:h-[90%] min-[1920px]:w-[95%] min-[1920px]:h-[85%] border-2 border-blue-200 rounded-md p-2 flex flex-col'>
            <div className='w-full h-[20%] flex flex-col justify-center border-b-2 border-blue-200'>
              <h1 className='font-mono font-semibold text-2xl min-[1920px]:text-4xl min-[2560px]:text-5xl'>{car.brand} {car.line}</h1>
              <h1 className='font-mono font-semibold text-2xl min-[1920px]:text-4xl min-[2560px]:text-5xl'><span className='text-blue-400'>$</span> {Math.round(car.price).toLocaleString()}</h1>
            </div>
            <div className='w-full h-[80%] flex p-2'>
              <div className='w-[50%] h-full mr-2'>{/* Colmuna 1 */}
                <div className='flex h-[20%] items-center border-b-2 border-blue-200 capitalize'>
                  <AiOutlineTags className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Marca</span>  <br /> {car.brand}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-200 capitalize'>
                  <IoColorFilterOutline className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Color</span>  <br /> {car.color}</p>
                </div>
                <div className='flex h-[20%] items-center border-b border-blue-200 capitalize'>
                  <AiOutlineFolderOpen className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Tipo</span>  <br /> {car.type}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-200 capitalize'>
                  <TbSettingsCheck className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Transmision</span>  <br /> {car.transmission}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-200 capitalize'>
                  <LuFuel className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Combustible</span>  <br /> {car.fuel}</p>
                </div>
              </div>
              <div className='w-[50%] h-full ml-2'>{/* Colmuna 2 */}
                <div className='flex h-[20%] items-center border-b-2 border-blue-200 capitalize'>
                  <AiOutlineCar className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Linea</span>  <br /> {car.line}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-200 capitalize'>
                  <SlSpeedometer className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Km</span>  <br /> {car.kilometers}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-200 capitalize'>
                  <GrConfigure className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Año</span>  <br /> {car.model}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-200 capitalize'>
                  <AiOutlineUserSwitch className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Propietarios</span>  <br /> {car.owners}</p>
                </div>
                <div className='flex h-[20%] items-center border-b-2 border-blue-200 capitalize'>
                  <BsCardText className='mr-2' size={24} />
                  <p className='min-[2560px]:text-3xl min-[1920px]:text-xl'> <span className='text-blue-400 text-xs min-[1920px]:text-base min-[2560px]:text-lg capitalize'>Placa</span>  <br /> {car.plate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='w-full flex justify-center'>
        <div className='w-[80%] flex'>
          <div className='w-[50%] bg-blue-300'>
            <div>
              <p>d</p>
              <p>d</p>
            </div>
          </div>
          <div className='w-[50%] bg-green-300'>
            <h1>HolaPA</h1>
          </div>
        </div>
      </section> */}
    </>
  )
}
