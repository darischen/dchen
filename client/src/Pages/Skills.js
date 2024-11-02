import React from 'react';
import '../App.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C/C++", "ARM", "HTML", "CSS", "JavaScript"]
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Node.js", "Express.js", "Socket.io", "Svelte", "Tailwind"]
    },
    {
      title: "Tools",
      skills: ["GitHub", "VSCode", "Visual Studio", "Jest", "Puppeteer", "Miro", "Jira", "Figma"]
    },
    {
      title: "Other",
      skills: ["Agile Methodologies", "CI/CD", "Database Design", "Signal Processing", "Circuit Design"]
    }
  ];

  return (
    <div className="max-w-[800px] mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b-2 border-[#0073e6]">Skills</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#0073e6] mb-4">{category.title}</h2>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-blue-50 text-[#0073e6] px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;