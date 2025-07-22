import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-90">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink to="/" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="/experience" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
            <NavLink to="/projects" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;