import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ProjectCardDetail from './Pages/ProjectCardDetail';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1a1a2e]">
        <Navbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectCardDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;