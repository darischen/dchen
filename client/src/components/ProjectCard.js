import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProjectCard = ({
  project,
  categories
}) => {
  const getCategoryLabel = (cat) => {
    if (cat === 'ml') return 'AI/ML';
    if (cat === 'hw') return 'Hardware';
    if (cat === 'web') return 'Web';
    return 'Project';
  };

  const getAccentClass = (cat) => {
    if (cat === 'ml') return 'accent-ml';
    if (cat === 'hw') return 'accent-hw';
    if (cat === 'web') return 'accent-web';
    return '';
  };

  const getCategoryAbbrv = (cat) => {
    if (cat === 'ml') return 'ml';
    if (cat === 'hw') return 'hw';
    if (cat === 'web') return 'web';
    return '';
  };

  const getAccentColor = (cat) => {
    if (cat === 'ml') return '#00d9ff';
    if (cat === 'hw') return '#7c3aed';
    if (cat === 'web') return '#ec4899';
    return '#333';
  };

  const primaryCategory = categories[0];
  const techArray = project.tools.split(', ').slice(0, 5);

  // Create gradient border style for multi-category cards
  const cardStyle = categories.length > 1 ? {
    borderLeft: '3px solid transparent',
    backgroundImage: `linear-gradient(#1a1a2e, #1a1a2e), linear-gradient(to bottom, ${getAccentColor(categories[0])}, ${getAccentColor(categories[1])})`,
    backgroundClip: 'padding-box, border-box',
    backgroundOrigin: 'padding-box, border-box',
  } : {};

  return (
    <Link
      to={`/projects/${project.id}`}
      state={{ project }}
      className={`project-card ${getAccentClass(primaryCategory)}`}
      style={cardStyle}
    >
      <div className="project-card-header">
        {categories.map((cat, idx) => (
          <span key={idx} className={`project-category-label ${getCategoryAbbrv(cat)}`}>
            ▸ {getCategoryLabel(cat)}
          </span>
        ))}
      </div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-description">{project.description}</p>
      <div className="tech-stack">
        {techArray.map((tech, idx) => (
          <span key={idx} className={`tech-tag ${getCategoryAbbrv(primaryCategory)}`}>
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
