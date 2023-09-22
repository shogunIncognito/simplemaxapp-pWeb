import Image from 'next/image'
import MaxIcon from '@/assets/maxautosicon.png'

export const HomeIcon = ({ width = '40px', ...props }) => (
  <svg viewBox='0 0 24 24' {...props} width={width} fill='none' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <path fillRule='evenodd' clipRule='evenodd' d='M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z' fill='#080341' /> </g></svg>
)

export const CarIcon = ({ width = '40px', ...props }) => (
  <svg fill='#000000' {...props} width={width} viewBox='-4 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'> <title>car</title> <path d='M19.938 7.188l3.563 7.156c0.063 0.094 0.094 0.219 0.125 0.313 0.219 0.563 0.375 1.344 0.375 1.844v3.406c0 1.063-0.719 1.938-1.719 2.188v2c0 0.969-0.781 1.719-1.719 1.719-0.969 0-1.719-0.75-1.719-1.719v-1.938h-13.688v1.938c0 0.969-0.75 1.719-1.719 1.719-0.938 0-1.719-0.75-1.719-1.719v-2c-1-0.25-1.719-1.125-1.719-2.188v-3.406c0-0.5 0.156-1.281 0.375-1.844 0.031-0.094 0.063-0.219 0.125-0.313l3.563-7.156c0.281-0.531 1.031-1.031 1.656-1.031h12.563c0.625 0 1.375 0.5 1.656 1.031zM5.531 9.344l-1.906 4.344c-0.094 0.156-0.094 0.344-0.094 0.469h16.938c0-0.125 0-0.313-0.094-0.469l-1.906-4.344c-0.25-0.563-1-1.063-1.594-1.063h-9.75c-0.594 0-1.344 0.5-1.594 1.063zM4.688 19.906c1 0 1.781-0.813 1.781-1.844 0-1-0.781-1.781-1.781-1.781s-1.844 0.781-1.844 1.781c0 1.031 0.844 1.844 1.844 1.844zM19.313 19.906c1 0 1.844-0.813 1.844-1.844 0-1-0.844-1.781-1.844-1.781s-1.781 0.781-1.781 1.781c0 1.031 0.781 1.844 1.781 1.844z' /> </g></svg>
)

export const UbicationIcon = ({ width = '40px', ...props }) => (
  <svg fill='#000000' {...props} width={width} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' strokeWidth='0' /><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' /><g id='SVGRepo_iconCarrier'><path d='M12,2a8,8,0,0,0-7.992,8A12.816,12.816,0,0,0,12,22v0H12v0a12.816,12.816,0,0,0,7.988-12A8,8,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z' /></g></svg>
)

export const AboutIcon = ({ width = '40px', ...props }) => (
  <svg {...props} width={width} version='1.1' id='_x32_' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xmlSpace='preserve' fill='#000000'>    <g id='SVGRepo_bgCarrier' strokeWidth={0} />    <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />    <g id='SVGRepo_iconCarrier'>      {' '}      <style type='text/css' dangerouslySetInnerHTML={{ __html: ' .st0{fill:#000000;} ' }} />{' '}      <g>        {' '}        <path className='st0' d='M256.495,96.434c26.632,0,48.213-21.597,48.213-48.205C304.708,21.58,283.128,0,256.495,0 c-26.65,0-48.222,21.58-48.222,48.229C208.274,74.837,229.846,96.434,256.495,96.434z' />{' '}        <path className='st0' d='M298.267,119.279h-42.271h-42.271c-23.362,0-48.779,25.418-48.779,48.788v162.058 c0,11.685,9.463,21.156,21.148,21.156c5.743,0,0,0,14.756,0l8.048,138.206c0,12.434,10.078,22.513,22.513,22.513 c5.244,0,14.923,0,24.585,0c9.671,0,19.35,0,24.593,0c12.434,0,22.513-10.078,22.513-22.513l8.04-138.206 c14.764,0,9.013,0,14.764,0c11.676,0,21.148-9.471,21.148-21.156V168.067C347.054,144.697,321.636,119.279,298.267,119.279z' />{' '}        <path className='st0' d='M104.141,149.083c23.262,0,42.105-18.85,42.105-42.104c0-23.262-18.843-42.112-42.105-42.112 c-23.27,0-42.104,18.851-42.104,42.112C62.037,130.232,80.871,149.083,104.141,149.083z' />{' '}        <path className='st0' d='M408.716,149.083c23.27,0,42.104-18.85,42.104-42.104c0-23.262-18.834-42.112-42.104-42.112 c-23.253,0-42.104,18.851-42.104,42.112C366.612,130.232,385.463,149.083,408.716,149.083z' />{' '}        <path className='st0' d='M137.257,169.024h-33.548h-36.92c-20.398,0-42.595,22.213-42.595,42.612v141.526 c0,10.212,8.264,18.476,18.468,18.476c5.018,0,0,0,12.884,0l7.024,120.704c0,10.852,8.805,19.658,19.666,19.658 c4.577,0,13.024,0,21.473,0c8.439,0,16.895,0,21.472,0c10.861,0,19.666-8.805,19.666-19.658l7.016-120.704v-6.849 c-8.98-8.856-14.606-21.082-14.606-34.664V169.024z' />{' '}        <path className='st0' d='M445.211,169.024h-36.928h-33.54v161.101c0,13.582-5.626,25.808-14.615,34.664v6.849l7.017,120.704 c0,10.852,8.814,19.658,19.674,19.658c4.578,0,13.025,0,21.464,0c8.456,0,16.904,0,21.481,0c10.862,0,19.659-8.805,19.659-19.658 l7.032-120.704c12.883,0,7.865,0,12.883,0c10.204,0,18.468-8.265,18.468-18.476V211.636 C487.806,191.237,465.61,169.024,445.211,169.024z' />{' '}</g>{' '}</g></svg>
)

export const MaxAutosIcon = ({ ...props }) => (
  <Image priority {...props} src={MaxIcon} alt='MaxAutos' style={{ width: 120, height: 90 }} />
)

export const LoginIcon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    transform='scale(-1 1)'
    viewBox='-9 0 32 32'
    {...props}
    width={60}
  >
    <path d='M13.28 5.88a.806.806 0 00-.44-.12H.8c-.44 0-.84.36-.84.84v15.08c0 .44.36.84.84.84h2.4v2.92c0 .28.12.52.36.68.12.08.28.12.44.12.12 0 .24-.04.32-.08l8.84-3.76a.82.82 0 00.52-.76V6.6c-.04-.28-.16-.56-.4-.72zM1.64 20.8V7.4H8.8L3.72 9.6a.82.82 0 00-.52.76V20.8H1.64zm10.36.32l-7.12 3.04V10.88L12 7.84v13.28zm-4.36-4.28a.84.84 0 11-1.68 0 .84.84 0 011.68 0z' />
  </svg>
)

export const MenuIcon = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='#fff'
      viewBox='0 0 24 24'
      {...props}
      width={60}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  )
}

export const CloseIcon = ({ ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      stroke='#000'
      viewBox='0 0 24 24'
      {...props}
      width={60}
    >
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM8.97 8.97a.75.75 0 011.06 0L12 10.94l1.97-1.97a.75.75 0 011.06 1.06L13.06 12l1.97 1.97a.75.75 0 01-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 01-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 010-1.06z'
        clipRule='evenodd'
      />
    </svg>
  )
}
