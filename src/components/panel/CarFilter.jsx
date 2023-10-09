import { tableHeaders } from '@/helpers/data'
import Input from '../Input'

export default function CarFilter () {
  const headersToFilter = tableHeaders.filter(header => header !== 'Acciones' && header !== 'Imagen')

  return (
    <div className='flex h-full py-1 gap-2 px-2 items-center'>
      <h2>Filtrar por</h2>
      <div className='flex gap-1 items-center'>

        <select className='h-full outline-none px-1 bg-transparent'>
          {headersToFilter.map((header, index) => (
            <option key={index} className='bg-neutral-800' value={header}>
              {header}
            </option>
          ))}
        </select>

        <Input placeholder='...' className='h-full w-2/3 text-white bg-transparent ring-0 border-b-2 self-end' />
      </div>
    </div>
  )
}
