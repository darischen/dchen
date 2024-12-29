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
            <div className="flex items-center">
              <h2 className="text-2xl font-bold hover:text-[#005bb8] transition-colors duration-200 cursor-pointer">
                Education
                <span className="ml-2 cursor-pointer">
                {openSections.education ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </h2>
            </div>
          </div>
          {openSections.education && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#0073e6]">University of California San Diego</h3>
              <p className="text-gray-700">B.S. in Computer Engineering</p>
              <p className="text-gray-600 mt-2">
                Relevant Coursework: Computer Organization and Systems Programming, Data Structures and Object Oriented Design, Discrete Mathematics, Mathematics for Algorithms and Systems, Linear Algebra, Data Structures, Software Engineering, Signal Analysis for Circuits and Systems, Analog Design
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
            <div className="flex items-center">
              <h2 className="text-2xl font-bold hover:text-[#005bb8] transition-colors duration-200 cursor-pointer">
                Skills
                <span className="ml-2 cursor-pointer">
                {openSections.skills ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </h2>
            </div>
          </div>
          {openSections.skills && (
            <ul className="mt-4 list-disc pl-5 text-gray-700">
              <li>Languages: Python, Java, C, C++, ARM, HTML, CSS, JavaScript</li>
              <li>Libraries and Frameworks: React.js, Node.js, Express.js, Socket.io, JUnit, Linux, Ubuntu, Svelte, Tailwind, NumPy, pandas, Matplotlib, Tensorflow, CUDA, cuDNN</li>
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
            <div className="flex items-center">
              <h2 className="text-2xl font-bold hover:text-[#005bb8] transition-colors duration-200 cursor-pointer">
                Projects
                <span className="ml-2 cursor-pointer">
                {openSections.projects ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </h2>
            </div>
          </div>
          {openSections.projects && (
            <div className="mt-4">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0073e6]">Red Pitaya Hackathon</h3>
                <p className="text-gray-600">
                Tools: Red Pitaya, Vivado by Xilinx, Python, Signal Processing, Soldering Iron, FPGA, VHDL
                </p>
                <p className="text-gray-700 mt-2">
                Engineered half-duplex infrared systems, boosting transmission efficiency by 75% on the Red Pitaya in simulated space conditions.
                </p>
                <p className="text-gray-700 mt-2">
                Eliminated 3 of 4 steps to encode, transmit, and decode messages, decreasing the number of possible failure points and ensuring reliable communications.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0073e6]">Stock Analysis and Prediction AI</h3>
                <p className="text-gray-600">Tools: Git, Tensorflow, Jupyter, Numpy, Pandas, Adaptive Moment Estimation, Mean Squared Error</p>
                <p className="text-gray-700 mt-2">
                Developed and trained a Long Short-Term Memory deep-learning Recurring Neural Network for predicting stock prices based on historical price points, Bollinger bands, moving averages, daily trade volume, and the stochastic oscillator.
                </p>
                <p className="text-gray-700 mt-2">
                Boosted computational efficiency by 30% through optimizing multi-million-line datasets sourced from Yahoo Finance and Kaggle using gradient descent and the Adam algorithm, reducing data processing time from 4 hours to 2.8 hours.
                </p>
                <p className="text-gray-700 mt-2">
                Helped users generate 15% more return on investment over a 3-month period in testing simulations, resulting from an increased stock behavior prediction accuracy of 22\%, while factoring fear index weighting.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0073e6]">Groundwork Books Full-Stack Commercial Website</h3>
                <p className="text-gray-600">Tools: Svelte, Firebase, Square, Google Forms API, Tailwind</p>
                <p className="text-gray-700 mt-2">
                Architected a robust e-commerce platform handling a catalog of over 2000 books, incorporating Square’s payment API and Google authentication to ensure secure transactions and efficient user management.
                </p>
                <p className="text-gray-700 mt-2">
                Crafted a highly responsive interface using Tailwind CSS and Svelte components, boosting load times by 40% and ensuring seamless functionality across all devices.
                </p>
                <p className="text-gray-700 mt-2">
                Established a real-time inventory management system with Firebase Database for streamlined product tracking and order processing.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0073e6]">Hearthpebble</h3>
                <p className="text-gray-600">Tools: MongoDB, Express.js, React.js, Node.js, Socket.io, Axios, ThreeJS, GSAP</p>
                <p className="text-gray-700 mt-2">
                Built a full-stack web-based 1-on-1 card game inspired by Hearthstone.
                </p>
                <p className="text-gray-700 mt-2">
                Developed a real-time multiplayer game using Three.js and GSAP for 3D rendering, seamlessly integrating WebSockets to enable real-time interactions.
                </p>
                <p className="text-gray-700 mt-2">
                Orchestrated seamless integration between React.js frontend and backend by developing RESTful APIs with Node.js, Express.js, and Axios, enhancing data flow efficiency and application performance.
                </p>
                <p className="text-gray-700 mt-2">
                Created a MongoDB database system to efficiently store and retrieve user profiles and activity logs, ensuring real-time access to critical user data.
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
            <div className="flex items-center">
              <h2 className="text-2xl font-bold hover:text-[#005bb8] transition-colors duration-200 cursor-pointer">
                Experience
                <span className="ml-2 cursor-pointer">
                {openSections.experience ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </h2>
            </div>
          </div>
          {openSections.experience && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-[#0073e6]">Project Manager</h3>
              <p className="text-gray-600">UC San Diego, CSE 110 | March 2024 - June 2024</p>
              <p className="text-gray-700 mt-2">
              Created a MongoDB database system to efficiently store and retrieve user profiles and activity logs, ensuring real-time access to critical user data.
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