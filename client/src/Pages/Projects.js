// src/Pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Projects = () => {
  // Keep your project info (ID, short details) here
  // The "id" must match the markdown filename for easy fetching (minus the .md extension)
  const projects = [
    {
      id: 'red-pitaya-hackathon',  // matches "red-pitaya-hackathon.md"
      title: 'Red Pitaya Hackathon',
      tools: 'Red Pitaya, Vivado by Xilinx, Python, Signal Processing, FPGA, VHDL',
      description:
        'Improved communication speed by 75% in a simulated outer space environment using half-duplex infrared communication.',
    },
    {
      id: 'stock-analysis-and-prediction',  // matches "stock-analysis-and-prediction.md"
      title: 'Stock Analysis and Prediction',
      tools: 'Git, TensorFlow, Jupyter, NumPy, Pandas',
      description:
        'Developed an LSTM RNN for predicting stock prices based on historical data, increasing accuracy by 22%, and generating a 15% return on investment.',
    },
    {
      id: 'plant-monitoring-system',  // matches "plant-monitoring-system.md"
      title: 'Plant Monitoring System',
      tools: 'Circuit Design, Adafruit Metro, Moisture Sensor, Light Level Sensor',
      description:
        'Monitored plant health using sensors, alerting caretakers of undesirable conditions within 3 minutes.',
    },
    {
      id: 'hearthpebble',  // matches "hearthpebble.md"
      title: 'Hearthpebble',
      tools: 'MongoDB, Express.js, React.js, Node.js, Socket.io, Axios, ThreeJS, GSAP',
      description:
        'A full-stack web-based 1-on-1 card game, featuring 3D graphics with ThreeJS and real-time communication via WebSockets.',
    },
    {
      id: 'portfolio-website',  // matches "portfolio-website.md"
      title: 'Portfolio Website',
      tools: 'React, Tailwind CSS, Markdown, React Router',
      description:
        'Built a personal portfolio website using React and Tailwind CSS, with project details stored in Markdown files',
    },

  ];

  return (
    <div className="max-w-[1200px] mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-white mb-8 pb-2 border-b-2 border-[#0073e6]">
        Projects
      </h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            state={{ project }}
            className="
              block
              bg-white
              p-6
              rounded-lg
              shadow-md
              transition-all
              hover:shadow-xl
              hover:bg-gray-100
              hover:-translate-y-1
            "
          >
            <h2 className="text-xl font-bold text-[#0073e6] mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-3">
              <strong>Tools:</strong> {project.tools}
            </p>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <p className="text-[#0073e6] font-medium">Learn More →</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
