import React from 'react';
import PageHeader from '../components/PageHeader.js';
import headshot from './headshot.jpg';
import '../App.css';

const Home = () => {
  return (
    <div>
      <PageHeader
        headshot={headshot}
        name="Daris Chen"
        title="Software Engineer"
        bio="Full-stack, ML, and hardware systems. Building at the intersection of software and silicon."
      />
      <div className="section" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px' }}>
        <section className="mb-12">
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#bbb' }}>
            I am a Computer Engineering graduate from UC San Diego with a passion for developing innovative solutions.
            My experience spans full-stack development, hardware design, and machine learning, allowing me to build
            impactful projects from concept to execution. In my free time, I enjoy exploring new tech trends, working
            on open-source projects, and collaborating with like-minded individuals on creative endeavors.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
