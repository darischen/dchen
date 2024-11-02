import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, FolderGit2, Brain, FileText, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/', icon: <Home size={18} /> },
    { label: 'Projects', href: '/projects', icon: <FolderGit2 size={18} /> },
    { label: 'Skills', href: '/skills', icon: <Brain size={18} /> },
    { label: 'Resume', href: '/resume', icon: <FileText size={18} /> },
    { label: 'Contact', href: '/contact', icon: <Mail size={18} /> }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="text-xl font-bold hover:underline">
          Daris Chen
        </Link>
        
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-200
                ${location.pathname === item.href 
                  ? 'text-white bg-blue-700' 
                  : 'hover:bg-blue-600'
                }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden py-4 border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center space-x-2 px-4 py-3 rounded-md transition-colors duration-200 hover:bg-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
