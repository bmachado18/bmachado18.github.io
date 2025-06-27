import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'block px-4 py-2 bg-red-900 text-white rounded-md'
      : 'block px-4 py-2 hover:bg-red-900 hover:text-white rounded-md text-white'

  return (
    <aside className="hidden md:block fixed inset-y-0 left-0 w-60 bg-primary text-white overflow-y-auto">
      <h1 className="text-2xl font-bold p-4 border-b border-red-900">Brent Machado</h1>
      <nav className="p-4 space-y-2">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
