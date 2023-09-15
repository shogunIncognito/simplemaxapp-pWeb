import { twMerge } from 'tailwind-merge'

export default function Button ({ children, className, ...props }) {
  return (
    <button {...props} className={twMerge('bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800 transition-all duration-200 ease-in-out', className)}>
      {children}
    </button>
  )
}
