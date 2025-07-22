import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLinkStyle = {
    color: '#ffffff',
    borderBottom: '2px solid #4f46e5',
  };

  return (
    <nav className="shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="text-2xl font-bold text-white">
            My Portfolio
          </NavLink>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className="text-gray-300 hover:text-white transition-colors" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
            <NavLink to="/about" className="text-gray-300 hover:text-white transition-colors" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About</NavLink>
            <NavLink to="/experience" className="text-gray-300 hover:text-white transition-colors" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Experience</NavLink>
            <NavLink to="/projects" className="text-gray-300 hover:text-white transition-colors" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Projects</NavLink>
            <NavLink to="/contact" className="text-gray-300 hover:text-white transition-colors" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;