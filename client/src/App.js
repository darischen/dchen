import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ProjectCardDetail from './Pages/ProjectCardDetail';
import Resume from './Pages/Resume';
import NotFound from './Pages/NotFound';
import './App.css';

// react-snap crawls with this user agent. Skip Analytics during prerender so it
// doesn't inject the /_vercel/insights script, which 404s to HTML in the static
// crawl and throws "Unexpected token '<'".
const isPrerendering =
  typeof navigator !== 'undefined' && navigator.userAgent === 'ReactSnap';

function App() {
  return (
    <Router>
      {!isPrerendering && <Analytics />}
      <div className="min-h-screen bg-[#1a1a2e]">
        <Navbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectCardDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;