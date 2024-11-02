import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-content max-w-[800px] mx-auto flex flex-col items-center text-center px-4">
        <Link to="/" className="header-title">
          Daris Chen
        </Link>
        <p className="header-subtitle">Software Engineer</p>
        <div className="header-contact">
          <a href="mailto:daris.chen@gmail.com" className="header-link">daris.chen@gmail.com</a> |
          (562) 386-3975 |
          <a href="https://github.com/darischen" className="header-link">GitHub</a> |
          <a href="https://www.linkedin.com/in/darischen" className="header-link">LinkedIn</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
