## Overview

PatentIQ AI is an intelligent patent search and drafting assistant built to simplify patent research for students, inventors, and early-stage founders. The platform combines semantic search capabilities with LLM-based analysis to help users identify related patents, understand the competitive landscape, and receive AI-assisted drafting suggestions. By removing barriers to professional-level patent research, PatentIQ AI democratizes access to patent information for those who need it most.

([GitHub Link](https://github.com/haileasy-debug/PatentIQ-ai))

---

## Quick Summary
- AI-powered semantic patent search using vector embeddings and PostgreSQL pgvector for meaning-based retrieval rather than keyword matching.

- Idea submission and analysis system that accepts text or document uploads and queries USPTO patent databases to identify related, pending, or approved patents.

- Hybrid ranking system combining semantic similarity (70%) and keyword matching (30%) to deliver most relevant patent results.

- LLM-based recommendation engine that analyzes user submissions and provides structured suggestions for patent development and drafting.

- Keyword expansion and CPC classification suggestions to improve search recall and provide industry context.

- JWT authentication with Auth0 for secure user management and personalized research tracking.

- Full-stack application with FastAPI backend, Next.js frontend, and Supabase database integration.

---

## Key Features
- Semantic Patent Search
  - Vector embeddings convert patent text and queries into numerical representations
  - PostgreSQL with pgvector enables efficient similarity-based retrieval
  - Search finds patents by meaning, not just exact keywords
  - Interactive terminal-based search interface with real-time results

- Hybrid Ranking System
  - Combines semantic similarity scores with keyword matching
  - Configurable weighting (default: 70% semantic, 30% keyword)
  - Returns top-ranked patents based on relevance to user query
  - Provides similarity scores for transparency and decision-making

- Idea Submission & Analysis
  - Accept text descriptions or document uploads of invention ideas
  - USPTO API integration for live patent database queries
  - Identify existing patents that may conflict or relate to the idea
  - Detect pending applications and approved patents in similar domains

- Recommendation Engine
  - LLM analyzes user submissions against retrieved patents
  - Generates structured recommendations for next steps
  - Identifies patent gaps and opportunities for filing
  - Suggests related technology areas and CPC classifications

- AI-Assisted Drafting
  - Provides suggestions for patent specification content
  - Helps draft claims based on similar existing patents
  - Offers language suggestions aligned with patent office conventions
  - Supports iterative refinement of draft documents

- CPC Classification Suggestions
  - Automatically suggests Cooperative Patent Classification codes
  - Maps user ideas to appropriate patent categories
  - Helps understand competitive landscape by classification
  - Guides searchers to most relevant patent sections

- User Authentication & Profile Management
  - JWT tokens with Auth0 integration
  - Secure user accounts and research history tracking
  - Personalized recommendations based on search history
  - Privacy-first design with encrypted data storage

---

## Tools Used
- Python
- FastAPI
- Next.js
- OpenAI API
- OpenAI Embeddings
- PostgreSQL with pgvector
- Supabase
- Auth0
- USPTO Data API
- Docker
- Vercel

---

## Images

### Login Page
![PMALogin](/markdown/patentiq-assets/PMALogin.png)

### Projects Page
![Projects](/markdown/patentiq-assets/Projects.png)

### AI Chatbox/File Upload
![Chatbox](/markdown/patentiq-assets/Chatbox.png)

### Baseline Summary
![BaselineSummary](/markdown/patentiq-assets/BaselineSummary.png)

### Features Analyzed
![FeaturesAnalyzed](/markdown/patentiq-assets/FeaturesAnalyzed.png)

### Feature Overlap
![FeatureOverlap](/markdown/patentiq-assets/FeatureOverlap.png)

### Similar Patents
![SimilarPatents](/markdown/patentiq-assets/SimilarPatents.png)

### LLM Confidence Scores
![LLMConfidence](/markdown/patentiq-assets/LLMConfidence.png)

### Strategy Sandbox
![StrategySandbox](/markdown/patentiq-assets/StrategySandbox.png)

### Feature Heatmap
![FeatureHeatmap](/markdown/patentiq-assets/FeatureHeatmap.png)

### Prior Art Explorer
![PriorArtExplorer](/markdown/patentiq-assets/PriorArtExplorer.png)

### History
![History](/markdown/patentiq-assets/History.png)

### Trash
![Trash](/markdown/patentiq-assets/Trash.png)