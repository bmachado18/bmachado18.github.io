import { Outlet } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col min-h-screen md:ml-60">
        <Header />
        <main className="flex-1 bg-white p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
