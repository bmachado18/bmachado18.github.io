import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Resume from './pages/Resume.jsx'
import About from './pages/About.jsx'
import Hydromodel from './pages/Hydromodel.jsx'
import Martletplace from './pages/Martletplace.jsx'
import Peakrenewables from './pages/Peakrenewables.jsx'
import MailOCR from './pages/MailOCR.jsx'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/project/hydromodel" element={<Hydromodel />} />
          <Route path="/project/martletplace" element={<Martletplace />} />
          <Route path="/project/peakrenewables" element={<Peakrenewables />} />
          <Route path="/project/mail-ocr" element={<MailOCR />} />
        </Routes>
        <Footer />
      </div>
    )
}
