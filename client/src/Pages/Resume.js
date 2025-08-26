import React from 'react';
import { Download } from 'lucide-react';
import '../App.css';
import resume from './DarisChenResume.pdf';

const Resume = () => {
  return (
    <div className="max-w-[800px] mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resume</h1>
        <a
          href={resume}
          className="flex items-center gap-2 bg-[#0073e6] text-white px-4 py-2 rounded-md hover:bg-[#005bb8] transition-colors duration-200"
          download="DarisChenResume.pdf"
        >
          <Download size={20} />
          Download PDF
        </a>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <iframe
          src={resume}
          title="Resume PDF"
          width="800px"
          height="1000px"
          className="border-0"
        />
      </div>
    </div>
  );
};

export default Resume;