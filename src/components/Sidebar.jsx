import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'block px-4 py-2 bg-primary text-white rounded-md'
      : 'block px-4 py-2 hover:bg-primary hover:text-white rounded-md text-gray-900'

  return (
    <aside className="hidden md:block fixed inset-y-0 left-0 w-60 bg-secondary text-gray-900 border-r border-gray-300 overflow-y-auto">
      <h1 className="text-2xl font-bold p-4 border-b border-gray-300 text-primary">Brent Machado</h1>
      <nav className="p-4 space-y-2">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
