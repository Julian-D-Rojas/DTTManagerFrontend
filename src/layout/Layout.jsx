import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { useLocation } from 'react-router-dom'
import { VideoSection } from '../components/VideoSection'
export const Layout = () => {
  const location = useLocation()
  return (
    <>
      <Header />
      <main className={location.pathname === '/information' ? 'mt-24' : 'mt-0'}>
        <VideoSection location={location} />
        <Outlet />
      </main>
      <footer>
        <p>2024</p>
      </footer>
    </>
  )
}
