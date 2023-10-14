import { twMerge } from 'tailwind-merge'

export default function Select ({ className, children, ...props }) {
  return (
    <select {...props} className={twMerge('font-medium py-2 rounded outline-none hover:border-blue-400 focus:border-blue-600 transition-all duration-300 bg-transparent border-b-2 text-white', className)}>
      {children}
    </select>
  )
}
