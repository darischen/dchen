import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    axios.get('/api/info').then((response) => {
      setInfo(response.data);
    });
  }, []);

  if (!info) return <p>Loading...</p>;

  return (
    <div className="app">
      <header className="header">
        <h1>Daris Chen</h1>
        <p>
          <a href="mailto:daris.chen@gmail.com">daris.chen@gmail.com</a> | (562) 386-3975 |
          <a href="https://github.com/darischen"> GitHub</a> |
          <a href="https://www.linkedin.com/in/darischen"> LinkedIn</a>
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <p>University of California San Diego</p>
        <p>B.S. in Computer Engineering</p>
        <p>
          Relevant Coursework: Computer Organization, Data Structures, Software Engineering, Signal Analysis,
          Analog Design
        </p>
      </section>

      <section className="section">
        <h2>Projects</h2>

        <div className="project">
          <h3>Red Pitaya Hackathon</h3>
          <p>
            <strong>Tools:</strong> Red Pitaya, Vivado by Xilinx, Python, Signal Processing, FPGA, VHDL
          </p>
          <p>
            Worked with three team members to improve communication speed by 75% in a simulated outer space
            environment using half-duplex infrared communication.
          </p>
        </div>

        <div className="project">
          <h3>Stock Analysis and Prediction</h3>
          <p>
            <strong>Tools:</strong> Git, TensorFlow, Jupyter, NumPy, Pandas
          </p>
          <p>
            Developed an LSTM RNN for predicting stock prices based on historical data and increased accuracy
            by 22%, generating a 15% return on investment in testing.
          </p>
        </div>

        <div className="project">
          <h3>Plant Monitoring System</h3>
          <p>
            <strong>Tools:</strong> Circuit Design, Adafruit Metro, Moisture Sensor, Light Level Sensor
          </p>
          <p>
            Monitored plant health using sensors, alerting caretakers of undesirable conditions within 3 minutes.
          </p>
        </div>

        <div className="project">
          <h3>Hearthpebble</h3>
          <p>
            <strong>Tools:</strong> MongoDB, Express.js, React.js, Node.js, Socket.io, Axios, ThreeJS, GSAP
          </p>
          <p>
            Developed a full-stack web-based 1-on-1 card game, rendering graphics using ThreeJS, real-time
            communication with WebSockets, and integrated backend with Express.js and MongoDB.
          </p>
          <a href="https://github.com/ParsaHaji09/hearthpebble">Project Link</a>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>

        <div className="experience">
          <h3>Project Manager, UC San Diego</h3>
          <p>March 2024 - June 2024</p>
          <p>
            Led the development of a CI/CD pipeline, organized Agile sprints, and managed backlog prioritization
            for the software team.
          </p>
        </div>
      </section>

      <section className="section skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> Python, Java, C/C++, ARM, HTML, CSS, JavaScript
          </li>
          <li>
            <strong>Frameworks:</strong> React.js, Node.js, Express.js, Socket.io, Svelte, Tailwind
          </li>
          <li>
            <strong>Tools:</strong> GitHub, VSCode, Visual Studio, Jest, Puppeteer, Miro, Jira, Figma
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Daris Chen</p>
      </footer>
    </div>
  );
}

export default App;
