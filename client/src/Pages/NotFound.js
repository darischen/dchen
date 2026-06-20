import React from 'react';
import { Link } from 'react-router-dom';
import useSeo from '../hooks/useSeo.js';
import '../App.css';

const NotFound = () => {
  useSeo({
    title: '404 - Page Not Found | Daris Chen',
    description: 'The page you are looking for does not exist.',
  });

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '80px 40px', textAlign: 'center', color: '#fff' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '12px' }}>404</h1>
      <p style={{ color: '#bbb', marginBottom: '24px' }}>
        The page you are looking for does not exist.
      </p>
      <Link to="/" style={{ color: '#ec4899' }}>← Back to Home</Link>
    </div>
  );
};

export default NotFound;
