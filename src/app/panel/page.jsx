import carImage from '@/assets/carExample.jpg'
import Image from 'next/image'
import cars from '@/mocks/cars.json'
import CreateCar from '@/components/panel/CreateCar'

export default function page () {
  return (
    <section className='bg-neutral-800 w-full h-full p-5'>
      <div className='my-4 flex-col'>
        <CreateCar />
      </div>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-center text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Marca
              </th>
              <th scope='col' className='px-6 py-3'>
                Modelo
              </th>
              <th scope='col' className='px-6 py-3'>
                Año
              </th>
              <th scope='col' className='px-6 py-3'>
                Kilómetros
              </th>
              <th scope='col' className='px-6 py-3'>
                Color
              </th>
              <th scope='col' className='px-6 py-3'>
                Precio
              </th>
              <th scope='col' className='px-6 py-3'>
                Imagen
              </th>
              <th scope='col' className='px-6 py-3'>
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {car.id}
                </th>
                <td className='px-6 py-4'>
                  {car.brand}
                </td>
                <td className='px-6 py-4'>
                  {car.model}
                </td>
                <td className='px-6 py-4'>
                  {car.year}
                </td>
                <td className='px-6 py-4'>
                  {car.kilometers}
                </td>
                <td className='px-6 py-4'>
                  {car.color}
                </td>
                <td className='px-6 py-4'>
                  {car.price}
                </td>
                <td className='px-6 py-4 h-full'>
                  <Image src={carImage} alt='carro' width={150} height={150} className='rounded-md m-auto w-auto h-auto max-w-[150px] max-h-[150px]' />
                </td>
                <td className='px-6 py-4 h-full m-auto'>
                  <button className='transition-colors w-full mb-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                    Editar
                  </button>
                  <button className='transition-colors w-full mt-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
