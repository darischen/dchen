import React, { useState } from 'react';
import TabNavigation from '../components/TabNavigation.js';
import ProjectCard from '../components/ProjectCard.js';
import PageHeader from '../components/PageHeader.js';
import projects from '../data/projects.js';
import useSeo from '../hooks/useSeo.js';
import headshot from './headshot.jpg';
import '../App.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useSeo({
    title: 'Projects | Daris Chen',
    description:
      'Full-stack, AI/ML, and hardware projects by Daris Chen, including PatentIQ, FlipperZillow, Simplerfy, Mini-Stockfish, a phased-array radar, and a custom CPU.',
    path: '/projects',
  });

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
        bio="Full-stack, AI/ML, and hardware systems. Building at the intersection of software and silicon."
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