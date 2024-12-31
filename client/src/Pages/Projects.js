// src/Pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      id: 'red-pitaya-hackathon',
      title: 'Red Pitaya Hackathon',
      tools: 'Red Pitaya, Vivado by Xilinx, Python, Signal Processing, FPGA, VHDL',
      description:
        'Created communication devices using the Red Pitaya.',
    },
    {
      id: 'stock-analysis-and-prediction',
      title: 'Stock Analysis and Prediction',
      tools: 'Git, TensorFlow, Jupyter, NumPy, Pandas',
      description:
        'Stock price prediction using a Long Short Term Memory neural network.',
    },
    {
      id: 'plant-monitoring-system',
      title: 'Plant Monitoring System',
      tools: 'Circuit Design, Adafruit Metro, Moisture Sensor, Light Level Sensor',
      description:
        'Monitored plant health using sensors, alerting caretakers of undesirable conditions within 3 minutes.',
    },
    {
      id: 'hearthpebble',
      title: 'Hearthpebble',
      tools: 'MongoDB, Express.js, React.js, Node.js, Socket.io, Axios, ThreeJS, GSAP',
      description:
        'A full-stack web-based 1-on-1 card game, using 3D graphics with ThreeJS and real-time communication via WebSockets.',
    },
    {
      id: 'groundworks',
      title: 'Groundwork Books Full-Stack Commercial Website',
      tools: 'Svelte, Firebase, Square, Google Forms API, Tailwind',
      description:
        'A full-stack commercial website for Groundwork Books, including a shopping cart and inventory management system.',
    },
    {
      id: 'devblog',
      title: 'Developer Blog',
      tools: 'HTML, CSS, JavaScript, CodeMirror, Git, GitHub Pages, Miro, Figma, Slack',
      description: 'A full-stack Developer Blog for daily development updates.',
    },
    {
      id: '16bit-adder',
      title: '16-bit Carry-Look Ahead Adder',
      tools: 'Digital, Verilog',
      description: 'A 16 bit bitwise addition calculator using Carry-Look Ahead.',
    },
    {
      id: 'darischen',
      title: 'darischen.com',
      tools: 'React.js, Tailwind CSS, Vercel',
      description:
        'My personal portfolio website, built using React.js and Tailwind',
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
              bordered-link
              block
              bg-white
              p-6
              rounded-lg
              shadow-md
              transition-all
              hover:shadow-xl
              hover:bg-gray-100
              hover:-translate-y-1
              border              /* <-- add a border */
              border-gray-200     /* <-- border color */
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