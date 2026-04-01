import React, { useState } from 'react';
import { Download } from 'lucide-react';
import TabNavigation from '../components/TabNavigation.js';
import PageHeader from '../components/PageHeader.js';
import headshot from './headshot.jpg';
import resumePDF from './DarisChenResume.pdf';
import '../App.css';

const Resume = () => {
  const [activeResume, setActiveResume] = useState('general');

  const resumeFiles = {
    general: {
      file: resumePDF,
      filename: 'DarisChenResume.pdf',
      label: 'General'
    },
    web: {
      file: resumePDF,
      filename: 'DarisChenResume.pdf',
      label: 'Web Dev'
    },
    ml: {
      file: resumePDF,
      filename: 'DarisChenResume.pdf',
      label: 'AI/ML'
    },
    hw: {
      file: resumePDF,
      filename: 'DarisChenResume.pdf',
      label: 'Hardware'
    }
  };

  const tabs = [
    { id: 'general', label: 'General', accent: 'ml' },
    { id: 'web', label: 'Web Dev', accent: 'web' },
    { id: 'ml', label: 'AI/ML', accent: 'ml' },
    { id: 'hw', label: 'Hardware', accent: 'hw' },
  ];

  const currentResume = resumeFiles[activeResume];

  return (
    <>
      <PageHeader
        headshot={headshot}
        name="Daris Chen"
        title="Software Engineer"
        bio="Full-stack, ML, and hardware systems. Building at the intersection of software and silicon."
      />
      <div className="resume-section">
        <div className="resume-container">
          <div className="resume-header">
            <h2>Resume</h2>
            <a
              href={currentResume.file}
              className="resume-download-btn"
              download={currentResume.filename}
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>

          <TabNavigation
            tabs={tabs}
            activeTab={activeResume}
            onTabChange={setActiveResume}
          />

          <div className="resume-iframe-container">
            <iframe
              src={currentResume.file}
              title={`${currentResume.label} Resume PDF`}
              className="resume-iframe"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
