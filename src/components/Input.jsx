import { twMerge } from 'tailwind-merge'

export default function Input ({ className, ...props }) {
  return (
    <input
      {...props}
      className={twMerge('py-1 text-gray-600 font-medium px-2 ring-2 outline-none hover:ring-blue-400 focus:ring-blue-600 transition-all duration-300', className)}
    />
  )
}
