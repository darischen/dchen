import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../App.css';

const ProjectCardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(`/markdown/${id}.md`);
        if (!response.ok) {
          throw new Error('Project not found');
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [id]);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center', color: '#aaa' }}>Loading...</div>;
  if (error) return <div style={{ padding: '40px', textAlign: 'center', color: '#ff6b6b' }}>Error: {error}</div>;

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px', backgroundColor: '#0a0a14' }}>
      <button
        onClick={() => navigate('/projects')}
        style={{
          background: 'none',
          border: 'none',
          color: '#ec4899',
          cursor: 'pointer',
          fontSize: '1rem',
          marginBottom: '20px',
          textDecoration: 'underline'
        }}
      >
        ← Back to Projects
      </button>
      <div style={{ color: '#fff' }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectCardDetail;
