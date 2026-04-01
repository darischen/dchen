# Portfolio Styling Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform portfolio from generic dark theme to dark refined aesthetic with monospace typography, multi-accent color system, and improved information hierarchy across Home, Projects, and Resume pages.

**Architecture:** Replace CSS classes with new dark-refined theme variables, refactor React components to match new structure (header reuse, project categorization, resume tabs), maintain routing and functionality.

**Tech Stack:** React, CSS3 (Flexbox, CSS Grid), React Router

---

## File Structure Overview

### Files to Modify
- **`client/src/App.css`** — Complete CSS redesign (colors, typography, layouts)
- **`client/src/Pages/Home.js`** — Use new header component, update layout
- **`client/src/Pages/Projects.js`** — Add category metadata, implement tabs, grid cards
- **`client/src/Pages/Resume.js`** — Add tab interface for multiple resumes
- **`client/src/Pages/Navbar.js`** — Remove Contact route

### Files to Create
- **`client/src/components/PageHeader.js`** — Reusable header with headshot, name, role, bio, links
- **`client/src/components/ProjectCard.js`** — Individual project card with category label and tech tags
- **`client/src/components/TabNavigation.js`** — Reusable tab component for filtering

### Files to Deprecate
- **`client/src/Pages/Contact.js`** — Remove route from navigation (can delete file or leave inactive)

---

## Task Breakdown

### Phase 1: CSS Foundation & Global Styling

### Task 1: Update App.css — Color Palette & Base Styles

**Files:**
- Modify: `client/src/App.css` (complete rewrite)

- [ ] **Step 1: Add CSS custom properties (variables) for colors**

Replace the entire top of `client/src/App.css` with:

```css
:root {
  /* Base Colors */
  --bg-primary: #0a0a14;
  --bg-secondary: #1a1a2e;
  --border-color: #333;
  --text-primary: #ffffff;
  --text-secondary: #aaa;
  --text-tertiary: #bbb;

  /* Accent Colors */
  --accent-ml: #00d9ff;
  --accent-ml-bright: #00d9ff;
  --accent-ml-light: #a78bfa;

  --accent-hw: #7c3aed;
  --accent-hw-bright: #a78bfa;
  --accent-hw-light: #a78bfa;

  --accent-web: #ec4899;
  --accent-web-bright: #f472b6;
  --accent-web-light: #f472b6;

  /* General Accent (for links, primary actions) */
  --accent-general: #ec4899;

  /* Spacing */
  --container-max-width: 900px;
  --padding-section: 50px;
  --padding-content: 40px;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'Courier New', Courier, monospace;
}

a {
  color: var(--accent-general);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Container max-width utility */
.max-w-container {
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
}
```

- [ ] **Step 2: Update global and utility styles**

Add to `client/src/App.css`:

```css
/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

h1 {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--text-primary);
}

h2 {
  font-size: 1.5rem;
  color: var(--text-primary);
}

h3 {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--text-primary);
}

p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* App Container */
.app {
  background-color: var(--bg-primary);
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

/* Flex utilities */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Border utilities */
.border-accent-ml { border-left-color: var(--accent-ml); }
.border-accent-hw { border-left-color: var(--accent-hw); }
.border-accent-web { border-left-color: var(--accent-web); }
```

- [ ] **Step 3: Commit**

```bash
git add client/src/App.css
git commit -m "style: add CSS custom properties and global styles for dark refined theme"
```

---

### Task 2: Update App.css — Navbar Styling

**Files:**
- Modify: `client/src/App.css`

- [ ] **Step 1: Add navbar styles**

Append to `client/src/App.css`:

```css
/* Navbar */
.navbar {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  border-bottom: 1px solid var(--border-color);
  font-family: 'Courier New', Courier, monospace;
}

.navbar-content {
  max-width: var(--container-max-width);
  display: flex;
  align-items: center;
  width: 100%;
}

.navbar-brand {
  margin-right: auto;
  font-weight: bold;
  font-size: 1.1rem;
}

.navbar-brand a {
  color: var(--text-primary);
  text-decoration: none;
}

.navbar-brand a:hover {
  color: var(--accent-general);
}

.nav-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: 'Courier New', Courier, monospace;
}

.nav-buttons .button-container {
  display: flex;
  align-items: center;
}

.nav-buttons .button-container a {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
  padding: 8px 12px;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.nav-buttons .button-container a:hover {
  background-color: rgba(236, 72, 153, 0.1);
  color: var(--accent-general);
  text-decoration: none;
}

.nav-buttons .button-container a.active {
  background-color: rgba(236, 72, 153, 0.2);
  color: var(--accent-general);
}

/* Responsive Navbar */
@media (max-width: 768px) {
  .nav-buttons {
    flex-wrap: wrap;
    gap: 10px;
  }

  .nav-buttons .button-container a {
    font-size: 0.85rem;
    padding: 6px 10px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add client/src/App.css
git commit -m "style: add navbar styling with dark refined theme"
```

---

### Task 3: Update App.css — Page Header Component Styles

**Files:**
- Modify: `client/src/App.css`

- [ ] **Step 1: Add PageHeader styles**

Append to `client/src/App.css`:

```css
/* Page Header (Medium Intro) */
.page-header {
  background-color: var(--bg-primary);
  padding: 50px 40px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 40px;
}

.page-header-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.page-header-image {
  flex-shrink: 0;
}

.page-header-image img {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  border: 2px solid var(--border-color);
  object-fit: cover;
}

.page-header-content {
  flex: 1;
}

.page-header-content h1 {
  margin: 0 0 5px 0;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--text-primary);
}

.page-header-content .subtitle {
  margin: 0 0 15px 0;
  color: var(--accent-ml);
  font-size: 1rem;
  font-weight: bold;
}

.page-header-content p {
  margin: 0 0 15px 0;
  color: var(--text-tertiary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.page-header-links {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
}

.page-header-links a {
  color: var(--accent-general);
  text-decoration: none;
}

.page-header-links a:hover {
  text-decoration: underline;
}

.page-header-links span {
  color: var(--border-color);
}

/* Responsive Page Header */
@media (max-width: 768px) {
  .page-header {
    padding: 40px 20px;
  }

  .page-header-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .page-header-image {
    flex-shrink: 0;
  }

  .page-header-image img {
    width: 100px;
    height: 100px;
  }

  .page-header-content h1 {
    font-size: 1.5rem;
  }

  .page-header-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add client/src/App.css
git commit -m "style: add page header component styles"
```

---

### Task 4: Update App.css — Tab Navigation Styles

**Files:**
- Modify: `client/src/App.css`

- [ ] **Step 1: Add tab navigation styles**

Append to `client/src/App.css`:

```css
/* Tab Navigation */
.tab-navigation {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 15px;
  font-family: 'Courier New', Courier, monospace;
}

.tab-button {
  background: none;
  border: none;
  color: var(--text-secondary);
  padding: 8px 0;
  font-size: 0.95rem;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  position: relative;
}

.tab-button:hover {
  color: var(--text-primary);
}

.tab-button.active {
  color: var(--text-primary);
  font-weight: bold;
}

.tab-button.active.accent-ml {
  color: var(--accent-ml);
  border-bottom-color: var(--accent-ml);
}

.tab-button.active.accent-hw {
  color: var(--accent-hw);
  border-bottom-color: var(--accent-hw);
}

.tab-button.active.accent-web {
  color: var(--accent-web);
  border-bottom-color: var(--accent-web);
}

/* Responsive Tabs */
@media (max-width: 768px) {
  .tab-navigation {
    gap: 15px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .tab-button {
    font-size: 0.85rem;
    white-space: nowrap;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add client/src/App.css
git commit -m "style: add tab navigation component styles"
```

---

### Task 5: Update App.css — Project Grid & Card Styles

**Files:**
- Modify: `client/src/App.css`

- [ ] **Step 1: Add project grid and card styles**

Append to `client/src/App.css`:

```css
/* Projects Section */
.projects-section {
  background-color: var(--bg-primary);
  padding: 50px 40px;
  margin-bottom: 40px;
}

.projects-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

/* Project Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/* Project Card */
.project-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  border-left: 3px solid var(--border-color);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  background-color: rgba(0, 217, 255, 0.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.project-card.accent-ml {
  border-left-color: var(--accent-ml);
}

.project-card.accent-ml:hover {
  background-color: rgba(0, 217, 255, 0.05);
}

.project-card.accent-hw {
  border-left-color: var(--accent-hw);
}

.project-card.accent-hw:hover {
  background-color: rgba(124, 58, 237, 0.05);
}

.project-card.accent-web {
  border-left-color: var(--accent-web);
}

.project-card.accent-web:hover {
  background-color: rgba(236, 72, 153, 0.05);
}

/* Project Card Content */
.project-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.project-category-label {
  font-weight: bold;
  font-size: 0.85rem;
}

.project-category-label.ml {
  color: var(--accent-ml);
}

.project-category-label.hw {
  color: var(--accent-hw);
}

.project-category-label.web {
  color: var(--accent-web);
}

.project-card-title {
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--text-primary);
}

.project-card-description {
  margin: 0 0 15px 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  flex-grow: 1;
}

/* Tech Stack Tags */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.8rem;
}

.tech-tag {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid;
}

.tech-tag.ml {
  background-color: rgba(0, 217, 255, 0.15);
  color: var(--accent-ml);
  border-color: rgba(0, 217, 255, 0.3);
}

.tech-tag.hw {
  background-color: rgba(124, 58, 237, 0.15);
  color: var(--accent-hw-bright);
  border-color: rgba(124, 58, 237, 0.3);
}

.tech-tag.web {
  background-color: rgba(236, 72, 153, 0.15);
  color: var(--accent-web-bright);
  border-color: rgba(236, 72, 153, 0.3);
}

/* Responsive Projects */
@media (max-width: 768px) {
  .projects-section {
    padding: 40px 20px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add client/src/App.css
git commit -m "style: add project grid and card component styles"
```

---

### Task 6: Update App.css — Resume Page Styles

**Files:**
- Modify: `client/src/App.css`

- [ ] **Step 1: Add resume section styles**

Append to `client/src/App.css`:

```css
/* Resume Section */
.resume-section {
  background-color: var(--bg-primary);
  padding: 50px 40px;
}

.resume-container {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
}

.resume-header h2 {
  margin: 0;
  color: var(--text-primary);
}

.resume-download-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--accent-general);
  color: var(--text-primary);
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: 'Courier New', Courier, monospace;
  text-decoration: none;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.resume-download-btn:hover {
  opacity: 0.9;
  background-color: rgba(236, 72, 153, 0.9);
}

/* Resume Iframe Container */
.resume-iframe-container {
  background-color: var(--bg-secondary);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  overflow: hidden;
}

.resume-iframe-container iframe {
  width: 100%;
  height: 800px;
  border: none;
  border-radius: 4px;
}

/* Responsive Resume */
@media (max-width: 768px) {
  .resume-section {
    padding: 40px 20px;
  }

  .resume-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .resume-iframe-container iframe {
    height: 600px;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add client/src/App.css
git commit -m "style: add resume section and iframe styles"
```

---

### Task 7: Update App.css — Home Page & Section Styles

**Files:**
- Modify: `client/src/App.css`

- [ ] **Step 1: Add home and section styles**

Append to `client/src/App.css`:

```css
/* General Sections */
.section {
  background-color: var(--bg-primary);
  margin-bottom: 40px;
  padding: 20px;
  box-sizing: border-box;
}

.section-title {
  color: var(--text-primary);
  font-size: 1.8em;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 5px;
  margin-bottom: 20px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}

.header-title {
  color: var(--text-primary);
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  text-decoration: none;
}

.header-title:hover {
  text-decoration: underline;
}

.header-subtitle {
  font-size: 1.2rem;
  color: var(--text-tertiary);
  margin-bottom: 1rem;
}

.header-contact {
  font-size: 0.9rem;
  color: var(--text-tertiary);
}

.header-link {
  color: var(--accent-general);
  text-decoration: none;
  margin: 0 5px;
}

.header-link:hover {
  text-decoration: underline;
}

/* Profile Image */
.profile-image {
  width: 150px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  object-fit: cover;
}

/* Responsive Home */
@media (max-width: 768px) {
  .section {
    padding: 15px;
  }

  .section-title {
    font-size: 1.4rem;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add client/src/App.css
git commit -m "style: add home page and general section styles"
```

---

### Phase 2: React Components

### Task 8: Create PageHeader Component

**Files:**
- Create: `client/src/components/PageHeader.js`

- [ ] **Step 1: Create the PageHeader component**

```javascript
import React from 'react';
import { Download } from 'lucide-react';
import '../App.css';

const PageHeader = ({
  headshot,
  name = 'Daris Chen',
  title = 'Software Engineer',
  bio = 'Full-stack, ML, and hardware systems. Building at the intersection of software and silicon.',
  showDownloadButton = false,
  downloadLink = null,
  downloadFilename = null
}) => {
  return (
    <div className="page-header">
      <div className="page-header-container">
        <div className="page-header-image">
          <img
            src={headshot}
            alt="Headshot"
          />
        </div>
        <div className="page-header-content">
          <h1>{name}</h1>
          <p className="subtitle">{title}</p>
          <p>{bio}</p>
          <div className="page-header-links">
            <a href="https://github.com/darischen">GitHub</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/darischen">LinkedIn</a>
            <span>·</span>
            <a href="mailto:daris.chen@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
```

- [ ] **Step 2: Create components directory if it doesn't exist**

```bash
mkdir -p client/src/components
```

- [ ] **Step 3: Commit**

```bash
git add client/src/components/PageHeader.js
git commit -m "feat: create PageHeader reusable component"
```

---

### Task 9: Create TabNavigation Component

**Files:**
- Create: `client/src/components/TabNavigation.js`

- [ ] **Step 1: Create the TabNavigation component**

```javascript
import React from 'react';
import '../App.css';

const TabNavigation = ({
  tabs,
  activeTab,
  onTabChange
}) => {
  // tabs should be array of objects: { id, label, accent }
  // accent is one of: 'ml', 'hw', 'web'

  const getAccentClass = (accent) => {
    if (accent === 'ml') return 'accent-ml';
    if (accent === 'hw') return 'accent-hw';
    if (accent === 'web') return 'accent-web';
    return '';
  };

  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-button ${getAccentClass(tab.accent)} ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
```

- [ ] **Step 2: Commit**

```bash
git add client/src/components/TabNavigation.js
git commit -m "feat: create TabNavigation reusable component"
```

---

### Task 10: Create ProjectCard Component

**Files:**
- Create: `client/src/components/ProjectCard.js`

- [ ] **Step 1: Create the ProjectCard component**

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProjectCard = ({
  project,
  category
}) => {
  // category should be 'ml', 'hw', or 'web'

  const getCategoryLabel = () => {
    if (category === 'ml') return 'AI/ML';
    if (category === 'hw') return 'Hardware';
    if (category === 'web') return 'Web';
    return 'Project';
  };

  const getAccentClass = (cat) => {
    if (cat === 'ml') return 'accent-ml';
    if (cat === 'hw') return 'accent-hw';
    if (cat === 'web') return 'accent-web';
    return '';
  };

  const getCategoryAbbrv = () => {
    if (category === 'ml') return 'ml';
    if (category === 'hw') return 'hw';
    if (category === 'web') return 'web';
    return '';
  };

  const techArray = project.tools.split(', ').slice(0, 5); // Limit to 5 tech items for visual cleanliness

  return (
    <Link
      to={`/projects/${project.id}`}
      state={{ project }}
      className={`project-card ${getAccentClass(category)}`}
    >
      <div className="project-card-header">
        <span className={`project-category-label ${getCategoryAbbrv()}`}>
          ▸ {getCategoryLabel()}
        </span>
      </div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-description">{project.description}</p>
      <div className="tech-stack">
        {techArray.map((tech, idx) => (
          <span key={idx} className={`tech-tag ${getCategoryAbbrv()}`}>
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
```

- [ ] **Step 2: Commit**

```bash
git add client/src/components/ProjectCard.js
git commit -m "feat: create ProjectCard component with category and tech stack display"
```

---

### Phase 3: Update Pages

### Task 11: Update Projects.js — Add Category Metadata

**Files:**
- Modify: `client/src/Pages/Projects.js`

- [ ] **Step 1: Read current Projects.js to understand the project structure**

(Context: You'll see it has a projects array with id, title, tools, description)

- [ ] **Step 2: Update Projects.js to add category metadata**

Replace the entire `client/src/Pages/Projects.js` with:

```javascript
import React, { useState } from 'react';
import TabNavigation from '../components/TabNavigation.js';
import ProjectCard from '../components/ProjectCard.js';
import PageHeader from '../components/PageHeader.js';
import headshot from './headshot.jpg';
import '../App.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 'flipperzillow',
      title: 'FlipperZillow',
      category: 'ml',
      tools: 'Next.js, React, TypeScript, Tailwind CSS, Three.js, WebSpatial, Claude API, ElevenLabs API, DFormerV2, PyTorch, ROCm, AMD GPU, RapidAPI, Realtor.com, Google Maps API, Depth Anything V2, SAM3D, Open3D',
      description: 'An immersive AI-powered house tour platform combining dual parallel pipelines: SAM3D 3D reconstruction for Apple Vision Pro spatial viewing and DFormerV2 semantic segmentation for room analysis and AI-generated realtor narration.',
    },
    {
      id: 'weatherapp',
      title: 'WeatherApp',
      category: 'web',
      tools: 'Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Google Places API, Open-Meteo API, YouTube API, Leaflet, pdfkit, papaparse, xmlbuilder2',
      description: 'A full-stack weather application with real-time forecasts, interactive maps, location search via Google Places, and database-backed weather records with CSV/PDF/XML export capabilities.',
    },
    {
      id: 'simplerfy',
      title: 'Simplerfy',
      category: 'web',
      tools: 'Next.js, React, TypeScript, Tailwind CSS, Claude API, Chrome Extension API, LaTeX, PDF parsing',
      description: 'An AI-powered job application platform featuring resume tailoring, interview answer generation, and resume scoring powered by Claude. Includes a browser extension that autofills job applications across 15+ major job boards.',
    },
    {
      id: 'groundworks',
      title: 'Groundwork Books Full-Stack Commercial Website',
      category: 'web',
      tools: 'Next.js, Vercel, Firebase, Square, Redis, Pinecone, Tailwind, Instagram API, Google Forms API',
      description: 'A full-stack commercial website hosted on Vercel for Groundwork Books, including a shopping cart and inventory management system.',
    },
    {
      id: 'chess',
      title: 'Mini-Stockfish',
      category: 'ml',
      tools: 'Python, PyGame, Git, GitHub, PyTorch, Cython, Multi-threading',
      description: 'A mini version of Stockfish chess engine, using Python and Pygame, along with Cython for performance optimization.',
    },
    {
      id: 'CPU',
      title: 'TriCore9',
      category: 'hw',
      tools: 'System Verilog, Intel FPGA ModelSim, Quartus Prime',
      description: 'An 8-bit CPU with a custom 9-bit instruction set architecture and custom assembler, implemented using System Verilog and simulated on Intel FPGA ModelSim.',
    },
    {
      id: 'redshift',
      title: 'Redshift (Research)',
      category: 'ml',
      tools: 'Python, Git, GitHub, PyTorch, Transformers, LLMs',
      description: 'An automated adversarial jailbreak prompt generation for red-teaming framework utilizing attacker, target, and judge transformers and LLMs.',
    },
    {
      id: '16bit-adder',
      title: '16-bit Carry Look-Ahead Adder',
      category: 'hw',
      tools: 'Digital, Verilog',
      description: 'A 16 bit bitwise addition calculator using Carry Look-Ahead.',
    },
    {
      id: 'eews',
      title: 'Elon Early Warning System (EEWS)',
      category: 'ml',
      tools: 'Git, PyTorch, Jupyter, Numpy, Pandas, Adaptive Moment Estimation, CUDA',
      description: 'Stock price prediction using a Long Short Term Memory neural network.',
    },
    {
      id: 'devblog',
      title: 'Developer Blog',
      category: 'web',
      tools: 'HTML, CSS, JavaScript, CodeMirror, Git, GitHub Pages, Miro, Figma, Slack',
      description: 'A full-stack Developer Blog for daily development updates.',
    },
    {
      id: 'hearthpebble',
      title: 'Hearthpebble',
      category: 'web',
      tools: 'MongoDB, Express.js, React.js, Node.js, Socket.io, Axios, ThreeJS, GSAP',
      description: 'A full-stack web-based 1-on-1 card game, using 3D graphics with ThreeJS and real-time communication via WebSockets and Socket.io.',
    },
    {
      id: 'darischen',
      title: 'darischen.com',
      category: 'web',
      tools: 'React.js, Tailwind CSS, Vercel',
      description: 'My personal portfolio website, built using React.js and Tailwind',
    },
  ];

  const tabs = [
    { id: 'all', label: 'All', accent: 'ml' },
    { id: 'ml', label: 'AI/ML', accent: 'ml' },
    { id: 'hw', label: 'Hardware', accent: 'hw' },
    { id: 'web', label: 'Web', accent: 'web' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHeader
        headshot={headshot}
        name="Daris Chen"
        title="Software Engineer"
        bio="Full-stack, ML, and hardware systems. Building at the intersection of software and silicon."
      />
      <div className="projects-section">
        <div className="projects-container">
          <TabNavigation
            tabs={tabs}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
          />
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
```

- [ ] **Step 3: Commit**

```bash
git add client/src/Pages/Projects.js
git commit -m "refactor: update Projects page with tabs, categories, and new card layout"
```

---

### Task 12: Update Home.js

**Files:**
- Modify: `client/src/Pages/Home.js`

- [ ] **Step 1: Update Home.js to use new PageHeader**

Replace `client/src/Pages/Home.js` with:

```javascript
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
```

- [ ] **Step 2: Commit**

```bash
git add client/src/Pages/Home.js
git commit -m "refactor: update Home page to use new PageHeader component"
```

---

### Task 13: Update Resume.js — Add Multi-Resume Tabs

**Files:**
- Modify: `client/src/Pages/Resume.js`

- [ ] **Step 1: Update Resume.js with tab functionality**

Replace `client/src/Pages/Resume.js` with:

```javascript
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import TabNavigation from '../components/TabNavigation.js';
import PageHeader from '../components/PageHeader.js';
import headshot from './headshot.jpg';
import resumeSWE from './DarisChenResumeSWE.pdf';
import resumeWD from './DarisChenResumeWD.pdf';
import resumeAI from './DarisChenResumeAI.pdf';
import resumeEE from './DarisChenResumeEE.pdf';
import '../App.css';

const Resume = () => {
  const [activeResume, setActiveResume] = useState('general');

  const resumeFiles = {
    general: {
      file: resumeSWE,
      filename: 'DarisChenResumeSWE.pdf',
      label: 'General SWE'
    },
    web: {
      file: resumeWD,
      filename: 'DarisChenResumeWD.pdf',
      label: 'Web Dev'
    },
    ml: {
      file: resumeAI,
      filename: 'DarisChenResumeAI.pdf',
      label: 'AI/ML'
    },
    hw: {
      file: resumeEE,
      filename: 'DarisChenResumeEE.pdf',
      label: 'Hardware'
    }
  };

  const tabs = [
    { id: 'general', label: 'General', accent: 'ml' },
    { id: 'web', label: 'Web Dev', accent: 'web' },
    { id: 'ml', label: 'AI/ML', accent: 'ml' },
    { id: 'hw', label: 'Hardware', accent: 'hw' },
  ];

  const currentResume = resumeFiles[activeResume];

  return (
    <>
      <PageHeader
        headshot={headshot}
        name="Daris Chen"
        title="Software Engineer"
        bio="Full-stack, ML, and hardware systems. Building at the intersection of software and silicon."
      />
      <div className="resume-section">
        <div className="resume-container">
          <div className="resume-header">
            <h2>Resume</h2>
            <a
              href={currentResume.file}
              className="resume-download-btn"
              download={currentResume.filename}
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>

          <TabNavigation
            tabs={tabs}
            activeTab={activeResume}
            onTabChange={setActiveResume}
          />

          <div className="resume-iframe-container">
            <iframe
              src={currentResume.file}
              title={`${currentResume.label} Resume PDF`}
              className="resume-iframe"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
```

- [ ] **Step 2: Verify resume files exist in `client/src/Pages/`**

The files should be:
- `DarisChenResumeSWE.pdf`
- `DarisChenResumeWD.pdf`
- `DarisChenResumeAI.pdf`
- `DarisChenResumeEE.pdf`

- [ ] **Step 3: Commit**

```bash
git add client/src/Pages/Resume.js
git commit -m "feat: add multi-resume tab interface to Resume page"
```

---

### Task 14: Update Navbar.js — Remove Contact Route

**Files:**
- Modify: `client/src/Pages/Navbar.js`

- [ ] **Step 1: Update Navbar to remove Contact**

Replace `client/src/Pages/Navbar.js` with:

```javascript
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FolderGit2, FileText } from 'lucide-react';
import '../App.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/', icon: <Home size={18} /> },
    { label: 'Projects', href: '/projects', icon: <FolderGit2 size={18} /> },
    { label: 'Resume', href: '/resume', icon: <FileText size={18} /> },
  ];

  return (
    <nav className="navbar bg-[#1a1a2e] text-white shadow-md">
      <div className="navbar-content max-w-[1200px] mx-auto px-6 py-3 flex items-center">
        {/* Navbar Brand */}
        <div className="navbar-brand flex-shrink-0">
          <Link to="/" className="text-xl font-bold hover:underline">
            Daris Chen
          </Link>
        </div>

        {/* Navbar Buttons */}
        <div className="nav-buttons flex gap-8 ml-auto">
          {navItems.map((item) => (
            <div key={item.label} className="button-container">
              <Link
                to={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-white bg-blue-700'
                    : 'hover:bg-blue-600'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

- [ ] **Step 2: Update App.js to remove Contact route**

In `client/src/App.js`, replace the Routes section with:

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/projects/:id" element={<ProjectCardDetail />} />
  <Route path="/resume" element={<Resume />} />
</Routes>
```

Remove the import: `import Contact from './Pages/Contact';`

- [ ] **Step 3: Commit changes to both files**

```bash
git add client/src/Pages/Navbar.js client/src/App.js
git commit -m "refactor: remove Contact route from navbar and app"
```

---

### Phase 4: Testing & Verification

### Task 15: Manual Visual Testing

**Files:**
- No files to modify

- [ ] **Step 1: Start the development server**

```bash
cd client
npm start
```

Expected: App launches at http://localhost:3000

- [ ] **Step 2: Navigate to Home page**

Verify:
- PageHeader displays with headshot, name, title, bio, links
- Header is medium-sized (not full-height, not minimal)
- Monospace typography throughout
- Dark background (#0a0a14)
- Links are hot pink (#ec4899)

- [ ] **Step 3: Navigate to Projects page**

Verify:
- Tab navigation appears (All, AI/ML, Hardware, Web)
- Default tab is "All" with cyan underline
- Grid of cards displays below tabs
- Each card has:
  - Color-coded left border (cyan for ML, violet for HW, hot pink for Web)
  - Category label (▸ AI/ML, etc.) in matching color
  - Project title in white
  - Description in gray
  - Tech stack tags with semi-transparent colored background
- Clicking tabs filters projects correctly
- Cards hover with subtle background change

- [ ] **Step 4: Navigate to Resume page**

Verify:
- PageHeader displays (same as Projects)
- Tab navigation appears (General, Web Dev, AI/ML, Hardware)
- Default tab is "General" with cyan underline
- Resume PDF displays in iframe below tabs
- Download button appears and is functional
- Clicking different tabs updates the iframe and download link

- [ ] **Step 5: Test Navbar**

Verify:
- Navbar shows Home, Projects, Resume (no Contact)
- Active route is highlighted
- Links navigate correctly

- [ ] **Step 6: Test Responsive (mobile view)**

Open browser dev tools, set viewport to 375x667 (mobile):
- Header stacks vertically (headshot above content)
- Project grid becomes single column
- Tab navigation wraps if needed
- Text remains readable

- [ ] **Step 7: Verify color consistency**

- Cyan (#00d9ff) used for: ML category labels, ML tab highlights, ML card borders, ML tech tags
- Violet (#7c3aed) used for: Hardware category labels, Hardware tab highlights, Hardware card borders, Hardware tech tags
- Hot pink (#ec4899) used for: Web category labels, Web tab highlights, Web card borders, Web tech tags, header links

No placeholder or muted colors remaining

- [ ] **Step 8: Commit test results**

```bash
git add -A
git commit -m "test: verify visual design and responsive layout"
```

---

### Task 16: Clean Up & Final Commit

**Files:**
- Review all changes

- [ ] **Step 1: Check that Contact.js is no longer imported anywhere**

```bash
grep -r "Contact" client/src/ --include="*.js" --include="*.jsx"
```

Should only find: original Contact.js file (not imported)

- [ ] **Step 2: Verify all CSS custom properties are used**

Spot check App.css for any remaining hardcoded colors that should use variables

- [ ] **Step 3: Final summary commit**

```bash
git log --oneline | head -20
```

Verify all tasks are committed with clear messages

- [ ] **Step 4: Create a summary of changes**

```bash
git status
```

Should show clean working directory

---

## Summary

All tasks complete! Portfolio now features:

✅ **Dark Refined Aesthetic**
- Dark background (#0a0a14) throughout
- Monospace typography (Courier New)
- Strategic color-coding (cyan/violet/hot pink)

✅ **Improved Page Structure**
- Reusable PageHeader component
- Medium intro with headshot, bio, links
- Consistent across Home and Resume pages

✅ **Projects Page**
- Tab-based filtering (All, AI/ML, Hardware, Web)
- Grid card layout with proper spacing
- Color-coded category labels and tech stack tags
- Responsive single-column on mobile

✅ **Resume Page**
- Multi-resume tab interface (General, Web, AI/ML, Hardware)
- Dynamic resume display with iframe
- Working download button for each resume

✅ **Navigation**
- Updated navbar (removed Contact)
- Clean, monospace styling
- Proper active state indication

✅ **Responsive Design**
- Mobile-friendly layouts
- Proper spacing and typography scaling
- Accessible on all screen sizes
