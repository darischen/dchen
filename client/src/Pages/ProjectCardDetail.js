import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const ProjectCardDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { project } = location.state || {};

  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/markdown/${id}.md`);
        if (!response.ok) {
          throw new Error(`Could not find markdown file for ID: ${id}`);
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error(error);
        setMarkdownContent('# Project Not Found\nCould not load the markdown file.');
      }
    };

    fetchMarkdown();
  }, [id]);

  return (
    <div className="max-w-[800px] mx-auto p-8 text-white">
      {/* Back to Projects Link (inline-flex for arrow + text side by side) */}
      <Link
        to="/projects"
        className="
          inline-flex
          items-center
          text-[#0073e6]
          hover:underline
          mb-6
          not-prose
        "
      >
        {/* Small arrow icon */}
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} fill-rule="evenodd" clip-rule="evenodd"><path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/></svg>
      </Link>

      {project && (
        <h1 className="text-3xl font-bold mb-4 not-prose">
          {project.title}
        </h1>
      )}

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectCardDetail;