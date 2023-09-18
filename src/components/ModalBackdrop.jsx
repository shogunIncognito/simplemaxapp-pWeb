export default function ModalBackdrop ({ children, ...props }) {
  return (
    <div {...props} className='z-30 absolute bg-black/60 h-screen w-screen top-0 left-0 flex justify-center items-center'>
      {children}
    </div>
  )
}
