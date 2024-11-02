import React from 'react';
import { FileText, Download } from 'lucide-react';
import '../App.css';

const Resume = () => {
  return (
    <div className="max-w-[800px] mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resume</h1>
        <a
          href=".\Pages\resumeDarisChen.pdf"
          className="flex items-center gap-2 bg-[#0073e6] text-white px-4 py-2 rounded-md hover:bg-[#005bb8] transition-colors duration-200"
          download
        >
          <Download size={20} />
          Download PDF
        </a>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-[#0073e6]">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#0073e6]">Project Manager</h3>
            <p className="text-gray-600">UC San Diego | March 2024 - June 2024</p>
            <p className="text-gray-700 mt-2">
              Led the development of a CI/CD pipeline, organized Agile sprints, and managed backlog
              prioritization for the software team.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-[#0073e6]">Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-[#0073e6]">University of California San Diego</h3>
            <p className="text-gray-700">B.S. in Computer Engineering</p>
            <p className="text-gray-600 mt-2">
              Relevant Coursework: Computer Organization, Data Structures, Software Engineering,
              Signal Analysis, Analog Design
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;