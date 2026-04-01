import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ProjectCardDetail from './Pages/ProjectCardDetail';
import Resume from './Pages/Resume';
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;