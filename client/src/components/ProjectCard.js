import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProjectCard = ({
  project,
  category
}) => {
  // category should be 'ml', 'hw', or 'web'

  const getCategoryLabel = () => {
    if (category === 'ml') return 'AI/ML';
    if (category === 'hw') return 'Hardware';
    if (category === 'web') return 'Web';
    return 'Project';
  };

  const getAccentClass = (cat) => {
    if (cat === 'ml') return 'accent-ml';
    if (cat === 'hw') return 'accent-hw';
    if (cat === 'web') return 'accent-web';
    return '';
  };

  const getCategoryAbbrv = () => {
    if (category === 'ml') return 'ml';
    if (category === 'hw') return 'hw';
    if (category === 'web') return 'web';
    return '';
  };

  const techArray = project.tools.split(', ').slice(0, 5); // Limit to 5 tech items for visual cleanliness

  return (
    <Link
      to={`/projects/${project.id}`}
      state={{ project }}
      className={`project-card ${getAccentClass(category)}`}
    >
      <div className="project-card-header">
        <span className={`project-category-label ${getCategoryAbbrv()}`}>
          ▸ {getCategoryLabel()}
        </span>
      </div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-description">{project.description}</p>
      <div className="tech-stack">
        {techArray.map((tech, idx) => (
          <span key={idx} className={`tech-tag ${getCategoryAbbrv()}`}>
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
