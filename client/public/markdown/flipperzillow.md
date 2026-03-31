## Overview
FlipperZillow is an immersive AI-powered house tour platform that transforms real estate viewings into personalized experiences. Users enter a property address, and the system fetches listing photos from Realtor.com via RapidAPI, processes them through a sophisticated AI pipeline, and generates a complete 3D spatial tour with professional AI realtor narration. The application features dual parallel processing pipelines—one generating 3D reconstructions for Apple Vision Pro spatial viewing, and another producing voice-over narration—that merge into a seamless experience with interactive semantic search. Built during a hackathon with focus on AMD GPU acceleration, the platform leverages Depth Anything V2 for depth mapping, DFormerV2 for semantic feature extraction and room analysis, and Segment Anything Model 3D (SAM3D) for 3D object reconstruction, all running on AMD ROCm.

([GitHub Link](https://github.com/NirvekPanda/FlipperZillow))

---

## Quick Summary
- End-to-end AI house tour platform that accepts an address and generates a complete immersive experience with 3D visualization and AI narration.

- Dual parallel processing pipelines: 3D reconstruction pipeline converts images to spatial objects for Apple Vision Pro rendering, while AI narration pipeline analyzes rooms and generates professional realtor scripts.

- Realtor.com API integration via FastAPI fetches interior property photos directly without web scraping, avoiding rate-limiting and bot detection issues.

- Advanced depth analysis using Depth Anything V2 and SAM segmentation to reconstruct 3D point clouds from 2D images, exported as .glb files for WebSpatial rendering.

- DFormerV2 semantic segmentation model running on AMD Instinct GPU with ROCm for room classification, object detection, layout analysis, and structured property intelligence extraction.

- Professional voice-over generation combining Claude-powered realtor script generation with ElevenLabs text-to-speech for natural, engaging property narration.

- Apple Vision Pro support through WebSpatial integration, allowing users to hold and rotate the 3D reconstructed rooms in spatial computing environments.

- Interactive semantic search using Claude for natural language Q&A about property features, grounded in extracted room analysis data.

---

## Key Features
- Address Input & Geocoding
  - Google Places API autocomplete for intelligent address search
  - Google Maps Street View integration for location context
  - Reverse geocoding for property identification
  - Smart camera placement by detecting the closest street direction and reversing it to position the viewer looking at the house from the street perspective

- Realtor.com Photo Fetching via RapidAPI
  - RapidAPI integration queries Realtor.com API to retrieve interior property photos directly
  - No web scraping required, eliminating bot detection and rate-limiting issues
  - Automatic filtering for interior photos (excludes exterior/street views)
  - Result caching by address hash for efficient reuse
  - Graceful handling of "listing not found" and API error scenarios

- Depth Map Generation Pipeline
  - Depth Anything V2 integration for generating precise depth maps from images
  - Batch processing support for multiple images with GPU acceleration
  - Base64 encoding and disk caching for efficient reuse
  - Sub-30-second processing for standard 5-image sets

- 3D Reconstruction & SAM Segmentation
  - Segment Anything Model (SAM) for intelligent room surface segmentation
  - Point cloud generation from depth maps and segmentation masks
  - Open3D-based mesh generation and optimization
  - .glb file export for WebSpatial and Three.js compatibility
  - Textured point cloud rendering maintaining visual fidelity to source photos

- Semantic Feature Extraction (DFormerV2 on AMD GPU)
  - DFormerV2 RGBD semantic segmentation running on AMD Instinct MI300X with ROCm 6.x
  - Room classification, object detection, and layout analysis
  - Structured JSON output per image with room_type, detected_objects (with coverage percentages), layout features (windows, doors, natural light, spaciousness), and object counts
  - Efficient batch processing of property images with GPU acceleration
  - Aggregated property summary combining all room analyses

- Realtor Script Generation
  - Claude-powered script writing that creates 2-3 minute property narratives
  - Natural language synthesis referencing specific rooms and highlighting features
  - Professional realtor tone and cadence optimization

- Text-to-Speech Narration
  - ElevenLabs API integration for high-quality voice generation
  - Configurable voice selection for professional realtor personas
  - MP3 audio file generation with streaming support

- Apple Vision Pro Spatial Rendering
  - WebSpatial integration for immersive visionOS experience
  - 3D model loading and rotation capability
  - Synchronized audio narration playback during spatial tours
  - Three.js fallback for non-visionOS browsers and desktop viewing

- Interactive Tour Chat
  - Semantic search UI allowing natural language questions during tours
  - Claude-powered Q&A grounded in property analysis data
  - Real-time response generation with sub-3-second latency
  - Context-aware answers preventing hallucination outside property facts

- Pipeline Orchestration
  - Server-Sent Events (SSE) for real-time progress streaming to frontend
  - Sequential step execution with error boundaries and retry logic per stage
  - Comprehensive logging of timing, device utilization, and VRAM usage
  - Demo mode with pre-processed results for reliable hackathon presentations

---

## Tools Used
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Three.js (3D Rendering)
- WebSpatial & @webspatial/next-plugin (Apple Vision Pro)
- Google Maps JavaScript API & Google Places API
- RapidAPI (Realtor.com API Gateway)
- Depth Anything V2 (Depth Estimation)
- DFormerV2 (Semantic Segmentation & Feature Extraction)
- Segment Anything Model 3D (SAM3D) (3D Object Segmentation)
- Open3D (Point Cloud Processing & Mesh Generation)
- PyTorch with ROCm 6.x (AMD GPU Acceleration)
- AMD Instinct MI300X (GPU Hardware)
- Claude API (Script Generation & Semantic Search)
- ElevenLabs API (Text-to-Speech)
- Zod (Schema Validation)

---

## Images

### Address Input & Google Maps
// IMAGE 1: ADDRESS_SEARCH

### Room Analysis Display
// IMAGE 2: ROOM_ANALYSIS

### 3D Spatial Viewer
// IMAGE 3: SPATIAL_VIEWER

### Audio Narration & Chat
// IMAGE 4: NARRATION_AND_CHAT

---

## Schema

### Architecture Pipeline

**PIPELINE A: 3D Reconstruction**
```
Address Input → Realtor.com API (RapidAPI) → Interior Photos
    ↓
Depth Anything V2 → Depth Maps
    ↓
SAM3D Segmentation → Segmentation Masks
    ↓
Point Cloud Generation → 3D Model
    ↓
.glb Export → WebSpatial Renderer (Apple Vision Pro)
```

**PIPELINE B: AI Narration**
```
Address Input → Realtor.com API (RapidAPI) → Interior Photos
    ↓
Depth Anything V2 → Depth Maps
    ↓
DFormerV2 on AMD GPU → Semantic Features & Room Analysis
    ↓
Aggregated Property Summary
    ↓
Claude → Realtor Script Generation
    ↓
ElevenLabs → Voice-Over Audio
```

**Frontend Integration**
```
Both Pipelines → Next.js Frontend
    ↓
Address Search & Map Display
    ↓
Progress Tracking with Real-Time Updates
    ↓
Tour Experience Page with 3D Viewer + Audio Player
    ↓
Semantic Search Chat Interface
```
