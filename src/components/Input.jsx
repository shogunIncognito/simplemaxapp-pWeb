import { twMerge } from 'tailwind-merge'

export default function Input ({ className, ...props }) {
  return (
    <input
      {...props}
      className={twMerge('py-1 bg-transparent text-white font-medium rounded px-2 border-b-2 outline-none hover:border-b-blue-400 focus:border-b-blue-600 transition-all duration-300', className)}
    />
  )
}
