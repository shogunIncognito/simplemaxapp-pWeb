import { twMerge } from 'tailwind-merge'

export default function ModalBackdrop ({ children, className, ...props }) {
  return (
    <div className='z-30 absolute bg-black/60 h-screen w-screen top-0 left-0 flex justify-center items-center'>
      <div {...props} className={twMerge('animate__animated animate__faster animate__fadeIn w-4/5 md:w-2/5 flex z-50 flex-col bg-slate-700 p-6 rounded', className)}>
        {children}
      </div>
    </div>
  )
}
