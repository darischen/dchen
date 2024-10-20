const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')));

// API Route for personal info
app.get('/api/info', (req, res) => {
  res.json({
    name: 'Your Name',
    bio: 'Your bio here...',
    skills: ['JavaScript', 'Node.js', 'React', 'Express', 'SQL'],
    projects: [
      { title: 'Project 1', description: 'Project description 1' },
      { title: 'Project 2', description: 'Project description 2' },
    ],
  });
});

// Fallback for serving React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
