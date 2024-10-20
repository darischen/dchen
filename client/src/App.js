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
    <div className="App">
      <header>
        <h1>{info.name}</h1>
        <p>{info.bio}</p>
      </header>

      <section>
        <h2>Skills</h2>
        <ul>
          {info.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          {info.projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;