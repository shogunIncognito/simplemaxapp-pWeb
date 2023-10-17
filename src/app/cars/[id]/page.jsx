'use client'
import Spinner from '@/components/Spinner'
import useCarsStore from '@/hooks/useCarsStore'
import { AiOutlineCar, AiOutlineTags, AiOutlineFolderOpen, AiOutlineUserSwitch } from 'react-icons/ai'
import { IoColorFilterOutline } from 'react-icons/io5'
import { SlSpeedometer } from 'react-icons/sl'
import { TbSettingsCheck } from 'react-icons/tb'
import { LuFuel } from 'react-icons/lu'
import { GrConfigure } from 'react-icons/gr'
import { BsCardText } from 'react-icons/bs'
import { useState } from 'react'

export default function page ({ params }) {
  const { cars, loading } = useCarsStore()
  const [IterCars, setIterCars] = useState(0)
  console.log(IterCars)

  if (loading) return <Spinner />

  const car = cars.find((car) =>
    String(car.id) === params.id
  )

  const imagenes = car.image

  return (
    <>
      <section className='w-full h-[100vh] flex'>
        <div className='w-[50%] h-full flex flex-col items-center justify-center'>
          <div className='w-[85%] h-[85%]'>
            <div className='w-full h-[85%] border rounded-md overflow-hidden mb-2 '>
              <div className={`w-full h-full flex duration-700 -translate-x-[${IterCars}%]`}>
                {
                imagenes.map((i, index) => (
                  <img key={index} className='w-full h-full object-cover object-center' src={i} alt='' />
                ))
                }
              </div>
            </div>
            <div className='flex justify-center w-full h-[20%] bg-blue-200 border rounded-md overflow-hidden p-1'>
              {
                imagenes.map((i, index) => (
                  <img
                    onClick={() => setIterCars(index * 100)} key={i * 9} className='w-[15%] cursor-pointer h-full object-cover object-center rounded-md mr-1' src={i} alt=''
                  />
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-[50%] h-full flex items-center justify-center'>
          <div className='w-[90%] h-[85%] border rounded-md p-2 flex flex-col'>
            <div className='w-full h-[20%] flex flex-col justify-center border-b'>
              <h1 className='font-mono font-semibold text-2xl'>{car.brand} {car.line}</h1>
              <h1 className='font-mono font-semibold text-2xl'><span className='text-blue-400'>$</span> {Math.round(car.price).toLocaleString()}</h1>
            </div>
            <div className='w-full h-[80%] flex p-2'>
              <div className='w-[50%] h-full mr-2'>{/* Colmuna 1 */}
                <div className='flex h-[20%] items-center border-b'>
                  <AiOutlineTags className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Marca</span>  <br /> {car.brand}</p>
                </div>
                <div className='flex h-[20%] items-center border-b'>
                  <IoColorFilterOutline className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Color</span>  <br /> {car.color}</p>
                </div>
                <div className='flex h-[20%] items-center border-b'>
                  <AiOutlineFolderOpen className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Marca</span>  <br /> {car.type}</p>
                </div>
                <div className='flex h-[20%] items-center border-b'>
                  <TbSettingsCheck className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Transmision</span>  <br /> {car.transmission}</p>
                </div>
                <div className='flex h-[20%] items-center border-b'>
                  <LuFuel className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Combustible</span>  <br /> {car.fuel}</p>
                </div>
              </div>
              <div className='w-[50%] h-full ml-2'>{/* Colmuna 2 */}
                <div className='flex h-[20%] items-center border-b'>
                  <AiOutlineCar className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Linea</span>  <br /> {car.line}</p>
                </div>
                <div className='flex h-[20%] items-center border-b'>
                  <SlSpeedometer className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Linea</span>  <br /> {car.kilometers}</p>
                </div>
                <div className='flex h-[20%] items-center border-b'>
                  <GrConfigure className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Año</span>  <br /> {car.model}</p>
                </div>
                <div className='flex h-[20%] items-center border-b'>
                  <AiOutlineUserSwitch className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Propietarios</span>  <br /> {car.owners}</p>
                </div>
                <div className='flex h-[20%] items-center border-b'>
                  <BsCardText className='mr-2' size={24} />
                  <p> <span className='text-blue-400 text-xs'>Placa</span>  <br /> {car.plate}</p>
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
