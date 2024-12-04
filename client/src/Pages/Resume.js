import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import '../App.css';
import resume from './resumeDarisChen.pdf';

const Resume = () => {
  const [openSections, setOpenSections] = useState({
    education: false,
    skills: false,
    projects: false,
    experience: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="max-w-[800px] mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Resume</h1>
        <a
          href={resume}
          className="flex items-center gap-2 bg-[#0073e6] text-white px-4 py-2 rounded-md hover:bg-[#005bb8] transition-colors duration-200"
          download="resumeDarisChen.pdf"
        >
          <Download size={20} />
          Download PDF
        </a>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        {/* Education Section */}
        <section className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('education')}
          >
            <h2 className="text-2xl font-bold hover:text-[#005bb8] transition-colors duration-200">
              Education
            </h2>
            {openSections.education ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {openSections.education && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#0073e6]">University of California San Diego</h3>
              <p className="text-gray-700">B.S. in Computer Engineering</p>
              <p className="text-gray-600 mt-2">
                Relevant Coursework: Computer Organization and Systems Programming, Data Structures and Object-Oriented Design, Discrete Mathematics, Mathematics for Algorithms and Systems, Linear Algebra, Software Engineering, Signal Analysis, Analog Design
              </p>
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('skills')}
          >
            <h2 className="text-2xl font-bold hover:text-[#005bb8] transition-colors duration-200">
              Skills
            </h2>
            {openSections.skills ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {openSections.skills && (
            <ul className="mt-4 list-disc pl-5 text-gray-700">
              <li>Languages: Python, Java, C, C++, ARM, HTML, CSS, JavaScript</li>
              <li>Libraries and Frameworks: React.js, Node.js, Express.js, Socket.io, Svelte, Tailwind, NumPy, pandas, Matplotlib, TensorFlow, CUDA, cuDNN</li>
              <li>Developer Tools: Git, Visual Studio, Jest, Puppeteer, MongoDB, CodeMirror, Miro, Jira, Figma</li>
            </ul>
          )}
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('projects')}
          >
            <h2 className="text-2xl font-bold hover:text-[#005bb8] transition-colors duration-200">
              Projects
            </h2>
            {openSections.projects ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {openSections.projects && (
            <div className="mt-4">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0073e6]">Red Pitaya Hackathon</h3>
                <p className="text-gray-600">Tools: Python, VHDL, FPGA, Signal Processing</p>
                <p className="text-gray-700 mt-2">
                  Engineered half-duplex infrared systems, boosting transmission efficiency by 75% in simulated space conditions. Reduced steps to encode, transmit, and decode messages, enhancing reliability.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0073e6]">Stock Analysis and Prediction AI</h3>
                <p className="text-gray-600">Tools: TensorFlow, Python, Numpy, Pandas</p>
                <p className="text-gray-700 mt-2">
                  Developed an LSTM deep-learning model for stock price prediction, increasing accuracy by 22%. Optimized datasets, reducing processing time by 30%, and enabled users to generate 15% more ROI in simulations.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0073e6]">Hearthpebble</h3>
                <p className="text-gray-600">Tools: React.js, Node.js, Three.js, MongoDB</p>
                <p className="text-gray-700 mt-2">
                  Built a web-based card game with real-time multiplayer features using WebSockets. Integrated 3D rendering with Three.js and GSAP, enhancing user experience.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('experience')}
          >
            <h2 className="text-2xl font-bold hover:text-[#005bb8] transition-colors duration-200">
              Experience
            </h2>
            {openSections.experience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {openSections.experience && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#0073e6]">Project Manager</h3>
              <p className="text-gray-600">UC San Diego | March 2024 - June 2024</p>
              <p className="text-gray-700 mt-2">
                Oversaw the CI/CD pipeline, achieving a 30% reduction in deployment errors and realigning team objectives to meet the Iron Triangle’s quality, scope, and timeline requirements.
              </p>
              <p className="text-gray-700 mt-2">
                Led the creation of 50+ user stories, assigning accurate story points to prioritize tasks, which enabled efficient rollouts of 10+ core features across project sprints.
              </p>
              <p className="text-gray-700 mt-2">
                Optimized task allocation and backlog organization, accelerating key feature delivery by 25% and reducing completion time from four to three weeks.
              </p>
              <p className="text-gray-700 mt-2">
                Spearheaded daily stand-ups and bi-weekly sprints within the Agile Scrum framework, enhancing communication among team members by 40% and boosting project delivery timelines by 33% while ensuring alignment on project objectives across a team of 12 members.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Resume;