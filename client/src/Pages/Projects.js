import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: "Red Pitaya Hackathon",
      tools: "Red Pitaya, Vivado by Xilinx, Python, Signal Processing, FPGA, VHDL",
      description: "Worked with three team members to improve communication speed by 75% in a simulated outer space environment using half-duplex infrared communication."
    },
    {
      title: "Stock Analysis and Prediction",
      tools: "Git, TensorFlow, Jupyter, NumPy, Pandas",
      description: "Developed an LSTM RNN for predicting stock prices based on historical data and increased accuracy by 22%, generating a 15% return on investment in testing."
    },
    {
      title: "Plant Monitoring System",
      tools: "Circuit Design, Adafruit Metro, Moisture Sensor, Light Level Sensor",
      description: "Monitored plant health using sensors, alerting caretakers of undesirable conditions within 3 minutes."
    },
    {
      title: "Hearthpebble",
      tools: "MongoDB, Express.js, React.js, Node.js, Socket.io, Axios, ThreeJS, GSAP",
      description: "Developed a full-stack web-based 1-on-1 card game, rendering graphics using ThreeJS, real-time communication with WebSockets, and integrated backend with Express.js and MongoDB.",
      link: "https://github.com/ParsaHaji09/hearthpebble"
    }
  ];

  return (
    <div className="max-w-[800px] mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-[#0073e6]">Projects</h1>
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#0073e6] mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-3">
              <strong>Tools:</strong> {project.tools}
            </p>
            <p className="text-gray-700 mb-3">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                className="text-[#0073e6] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project Link
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;