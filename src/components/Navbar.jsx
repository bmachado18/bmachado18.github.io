import { NavLink } from 'react-router-dom'

export default function Navbar({ darkMode, setDarkMode }) {
  const toggle = () => setDarkMode(!darkMode)
  const linkClass = ({ isActive }) =>
    `px-3 py-2 ${isActive ? 'font-semibold underline' : ''}`

  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex space-x-4">
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        <NavLink to="/resume" className={linkClass}>
          Resume
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
      </div>
      <button
        onClick={toggle}
        className="px-3 py-2 border rounded border-gray-300 dark:border-gray-600"
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </nav>
  )
}
