import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar.js';
import Home from './Pages/Home.js';
import Projects from './Pages/Projects.js';
import Skills from './Pages/Skills.js';
import Resume from './Pages/Resume.js';
import Contact from './Pages/Contact.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f4f4f4]">
        <Navbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
