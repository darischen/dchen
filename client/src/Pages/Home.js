import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="section">
      <header className="text-center mb-12">
        <h1 className="header-title">Daris Chen</h1>
        <p className="text-lg text-gray-600">
          <a href="mailto:daris.chen@gmail.com" className="text-[#0073e6] hover:underline">daris.chen@gmail.com</a> |
          (562) 386-3975 |
          <a href="https://github.com/darischen" className="text-[#0073e6] hover:underline ml-1">GitHub</a> |
          <a href="https://www.linkedin.com/in/darischen" className="text-[#0073e6] hover:underline ml-1">LinkedIn</a>
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-[#0073e6]">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          Computer Engineering graduate from UC San Diego with a passion for developing innovative solutions.
          Experienced in full-stack development, hardware design, and machine learning.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-[#0073e6]">Education</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-[#0073e6]">University of California San Diego</h3>
          <p className="text-gray-700">B.S. in Computer Engineering</p>
          <p className="text-gray-600 mt-2">
            Relevant Coursework: Computer Organization, Data Structures, Software Engineering,
            Signal Analysis, Analog Design
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;