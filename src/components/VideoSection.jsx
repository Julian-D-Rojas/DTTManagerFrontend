/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Info } from './icons/Info'

export const VideoSection = ({ location }) => {
  return (
    <section
      className={`place-content-center h-[100vh] w-full relative overflow-hidden ${
        location.pathname === '/information' ? 'hidden' : 'grid'
      }`}
    >
      <video
        autoPlay
        muted
        loop
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source src='./videos/fondo.mp4' type='video/mp4' />
        Tu navegador no soporta el elemento video.
      </video>
      <div className='relative flex flex-col gap-4'>
        <h2 className='text-6xl font-bold'>Televisión Digital</h2>
        <Link
          to={'/information'}
          className='border-2 rounded-[1.5rem] border-black px-2 py-1 w-fit font-bold flex flex-row items-center'
          // className='bg-cyan-400 py-1 px-2 rounded-lg w-fit font-bold flex flex-row items-center'
        >
          <Info /> Información
        </Link>
      </div>
    </section>
  )
}
