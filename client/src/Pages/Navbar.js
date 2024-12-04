import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderGit2, FileText, Mail } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/', icon: <Home size={18} /> },
    { label: 'Projects', href: '/projects', icon: <FolderGit2 size={18} /> },
    { label: 'Resume', href: '/resume', icon: <FileText size={18} /> },
    { label: 'Contact', href: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="navbar bg-[#1a1a2e] text-white shadow-md">
      <div className="navbar-content max-w-[1200px] mx-auto px-6 py-3 flex items-center">
        {/* Navbar Brand */}
        <div className="navbar-brand flex-shrink-0">
          <Link to="/" className="text-xl font-bold hover:underline">
            Daris Chen
          </Link>
        </div>

        {/* Navbar Buttons */}
        <div className="nav-buttons flex gap-8 ml-auto">
          {navItems.map((item) => (
            <div key={item.label} className="button-container">
              <Link
                to={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-white bg-blue-700'
                    : 'hover:bg-blue-600'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;