import React from 'react';

const Home = () => {
  return (
    <div className="section">
      <section className="mb-12 text-center">
        <h2 className="section-title">About Me</h2>
        
        <div className="text-center mb-6">
          <img
            src="client\src\Pages\headshot.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto shadow-lg"
          />
        </div>

        <p className="text-base text-gray-700 leading-relaxed">
          I am a Computer Engineering graduate from UC San Diego with a passion for developing innovative solutions. 
          My experience spans full-stack development, hardware design, and machine learning, allowing me to build 
          impactful projects from concept to execution. In my free time, I enjoy exploring new tech trends, working 
          on open-source projects, and collaborating with like-minded individuals on creative endeavors.
        </p>
      </section>
    </div>
  );
};

export default Home;