import { ImSpinner9 } from 'react-icons/im'
import { twMerge } from 'tailwind-merge'

export default function Spinner ({ color = 'text-slate-300', className, ...props }) {
  return (
    <div {...props} className={twMerge('flex h-full pb-32 justify-center items-center', className)}>
      <ImSpinner9 size={50} className={`animate-spin ${color}`} />
    </div>
  )
}
