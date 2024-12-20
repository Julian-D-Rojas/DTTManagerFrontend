import { useEffect, useState } from 'react'
import { Logo } from './icons/Logo'

export const Header = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTop(false)
      } else {
        setIsTop(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${isTop ? 'bg-transparent' : 'bg-[#a1a1a10] shadow-md shadow-[#181818] #a1a1a180 backdrop-blur-md'} top-0 sm:top-6 p-4 fixed left-0 right-0 sm:left-[initial] sm:right-[initial] sm:w-[85vw] flex items-center gap-1 rounded-none sm:rounded-3xl transition-all`}
    >
      <Logo />
      TDT
    </header>
  )
}
