import React, { useState } from 'react';
import TabNavigation from '../components/TabNavigation.js';
import ProjectCard from '../components/ProjectCard.js';
import PageHeader from '../components/PageHeader.js';
import headshot from './headshot.jpg';
import '../App.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 'flipperzillow',
      title: 'FlipperZillow',
      categories: ['ml', 'web'],
      tools: 'ElevenLabs API, DFormerV2, PyTorch, ROCm, AMD GPU, RapidAPI, Realtor.com, Next.js, React, TypeScript, Tailwind CSS, WebSpatial, Claude API, Google Maps API, Depth Anything V2, SAM3D, Open3D, Three.js',
      description: 'An immersive AI-powered house tour platform combining dual parallel pipelines: SAM3D 3D reconstruction for Apple Vision Pro spatial viewing and DFormerV2 semantic segmentation for room analysis and AI-generated realtor narration.',
    },
    {
      id: 'weatherapp',
      title: 'WeatherApp',
      categories: ['web'],
      tools: 'Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Google Places API, Open-Meteo API, YouTube API, Leaflet, pdfkit, papaparse, xmlbuilder2',
      description:
        'A full-stack weather application with real-time forecasts, interactive maps, location search via Google Places, and database-backed weather records with CSV/PDF/XML export capabilities.',
    },
    {
      id: 'simplerfy',
      title: 'Simplerfy',
      categories: ['web'],
      tools: 'Chrome Extension API, Next.js, React, TypeScript, Tailwind CSS, Claude API, LaTeX, PDF parsing',
      description:
        'An AI-powered job application platform featuring resume tailoring, interview answer generation, and resume scoring powered by Claude. Includes a browser extension that autofills job applications across 15+ major job boards.',
    },
    {
      id: 'groundworks',
      title: 'Groundwork Books Full-Stack Commercial Website',
      categories: ['web'],
      tools: 'Square, Redis, Pinecone, Tailwind CSS, Next.js, Vercel, Instagram API, Google Forms API',
      description:
        'A full-stack commercial website hosted on Vercel for Groundwork Books, including a shopping cart and inventory management system.',
    },
    {
      id: 'chess',
      title: 'Mini-Stockfish',
      categories: ['ml'],
      tools: 'Python, PyGame, Git, GitHub, PyTorch, Cython, Multi-threading',
      description:
        'A mini version of Stockfish chess engine, using Python and Pygame, along with Cython for performance optimization.',
    },
    {
      id: 'CPU',
      title: 'TriCore9',
      categories: ['hw'],
      tools: 'System Verilog, Intel FPGA ModelSim, Quartus Prime',
      description:
        'An 8-bit CPU with a custom 9-bit instruction set architecture and custom assembler, implemented using System Verilog and simulated on Intel FPGA ModelSim.',
    },
    {
      id: 'redshift',
      title: 'Redshift (Research)',
      categories: ['ml'],
      tools: 'Python, Git, GitHub, PyTorch, Transformers, LLMs',
      description:
        'An automated adversarial jailbreak prompt generation for red-teaming framework utilizing attacker, target, and judge transformers and LLMs.',
    },
    {
      id: '16bit-adder',
      title: '16-bit Carry Look-Ahead Adder',
      categories: ['hw'],
      tools: 'Digital, Verilog',
      description: 'A 16 bit bitwise addition calculator using Carry Look-Ahead.',
    },
    {
      id: 'eews',
      title: 'Elon Early Warning System (EEWS)',
      categories: ['ml'],
      tools: 'Git, PyTorch, Jupyter, Numpy, Pandas, Adaptive Moment Estimation, CUDA',
      description:
        'Stock price prediction using a Long Short Term Memory neural network.',
    },
    {
      id: 'devblog',
      title: 'Developer Blog',
      categories: ['web'],
      tools: 'HTML, CSS, JavaScript, CodeMirror, Git, GitHub Pages, Miro, Figma, Slack',
      description: 'A full-stack Developer Blog for daily development updates.',
    },
    {
      id: 'hearthpebble',
      title: 'Hearthpebble',
      categories: ['web'],
      tools: 'MongoDB, Express.js, React.js, Node.js, Socket.io, Axios, ThreeJS, GSAP',
      description:
        'A full-stack web-based 1-on-1 card game, using 3D graphics with ThreeJS and real-time communication via WebSockets and Socket.io.',
    },
    {
      id: 'darischen',
      title: 'darischen.com',
      categories: ['web'],
      tools: 'React.js, Tailwind CSS, Vercel',
      description:
        'My personal portfolio website, built using React.js and Tailwind',
    },
    {
      id: 'patentiq',
      title: 'PatentIQ AI',
      categories: ['ml', 'web'],
      tools: 'Python, FastAPI, Next.js, OpenAI API, OpenAI Embeddings, PostgreSQL, pgvector, Supabase, Auth0, USPTO Data API, Docker, Vercel',
      description:
        'An AI-powered patent search and drafting assistant using semantic embeddings and vector similarity search. Combines LLM-based analysis with USPTO data to help students and inventors identify related patents and receive AI-assisted drafting suggestions.',
    },
  ];

  const tabs = [
    { id: 'all', label: 'All', accent: 'ml' },
    { id: 'ml', label: 'AI/ML', accent: 'ml' },
    { id: 'hw', label: 'Hardware', accent: 'hw' },
    { id: 'web', label: 'Web', accent: 'web' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.categories.includes(activeCategory));

  return (
    <>
      <PageHeader
        headshot={headshot}
        name="Daris Chen"
        title="Software Engineer"
        bio="Full-stack, ML, and hardware systems. Building at the intersection of software and silicon."
      />
      <div className="projects-section">
        <div className="projects-container">
          <TabNavigation
            tabs={tabs}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
          />
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                categories={project.categories}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;