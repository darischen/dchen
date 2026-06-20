import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import projects from '../data/projects.js';
import useSeo from '../hooks/useSeo.js';
import '../App.css';

const SITE = 'https://www.darischen.com';

const ProjectCardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const project = projects.find((p) => p.id === id);

  const breadcrumb = useMemo(() => {
    if (!project) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE}/projects` },
        { '@type': 'ListItem', position: 3, name: project.title, item: `${SITE}/projects/${id}` },
      ],
    };
  }, [project, id]);

  useSeo({
    title: project ? `${project.title} | Daris Chen` : 'Project | Daris Chen',
    description: project
      ? project.description
      : 'A project by Daris Chen, UC San Diego Computer Engineering graduate.',
    path: `/projects/${id}`,
    jsonLd: breadcrumb,
  });

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
          marginBottom: '20px'
        }}
      >
        ← Back to Projects
      </button>
      {project && (
        <h1 style={{ color: '#fff', marginBottom: '20px' }}>{project.title}</h1>
      )}
      <div style={{ color: '#fff' }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectCardDetail;
