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

  const primaryCategory = categories[0];
  const techArray = project.tools.split(', ').slice(0, 5);

  return (
    <Link
      to={`/projects/${project.id}`}
      state={{ project }}
      className={`project-card ${getAccentClass(primaryCategory)}`}
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
