import React from 'react';
import '../App.css';

const PageHeader = ({
  headshot,
  name = 'Daris Chen',
  title = 'Software Engineer',
  bio = 'Full-stack, ML, and hardware systems. Building at the intersection of software and silicon.',
  showDownloadButton = false,
  downloadLink = null,
  downloadFilename = null
}) => {
  return (
    <div className="page-header">
      <div className="page-header-container">
        <div className="page-header-image">
          <img
            src={headshot}
            alt="Headshot"
          />
        </div>
        <div className="page-header-content">
          <h1>{name}</h1>
          <p className="subtitle">{title}</p>
          <p>{bio}</p>
          <div className="page-header-links">
            <a href="https://github.com/darischen" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/darischen" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>·</span>
            <a href="mailto:daris.chen@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
