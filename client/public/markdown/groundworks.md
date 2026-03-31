## Overview
Groundwork Books Collective is a leftist, non-hierarchical, non-profit organization that sells leftist literature. Groundwork Books is both a community space and bookstore. Some topics offered are philosophy, political theory, feminist theory, art, and others. The website is a full-stack Next.js application that integrates with Square POS for inventory management, Instagram for community events, and Google Sheets for event tracking. The platform uses serverless API routes deployed on Vercel and includes real-time inventory syncing, intelligent book search, and secure checkout.

([GitHub Link](https://github.com/Groundwork-Books/gw-website-react))

([Live Demo Link](https://groundworkbooks.org/))

---

## Quick Summary
- Full-stack Next.js application with integrated backend API routes deployed as serverless functions on Vercel.

- Real-time inventory management synced with Square POS API, displaying thousands of books with live stock updates.

- Advanced book search powered by Pinecone vector database for intelligent semantic search and filtering.

- Community events integration pulling live updates from Instagram and Google Sheets for real-time event announcements.

- Secure checkout with Square payment integration and Firebase authentication for user accounts.

- High-performance caching using Upstash Redis for optimized load times and smooth user experience.

---

## Key Features
- Full-Stack Architecture
  - Single Next.js application with integrated API routes, eliminating the need for a separate backend server.
- Inventory Management
  - Real-time book catalog synced with Square POS API, automatically updating stock levels across the site.
- Intelligent Book Search
  - Pinecone vector database enables semantic search for finding books by content, themes, and keywords beyond simple title matching.
- Dynamic Cart System
  - React Context and localStorage for client-side cart management with custom add-to-cart animations.
- Secure Checkout
  - Square payment integration with webhook handling for order processing and confirmation.
- Community Events
  - Instagram Basic Display API fetches community events and displays them alongside Google Sheets integration for event tracking.
- User Authentication
  - Firebase email/password authentication with protected routes for cart, checkout, and account pages.
- Performance Optimization
  - Upstash Redis caching layer reduces load times and improves user experience with intelligent cache invalidation.
- Fully Responsive Design
  - Tailwind CSS ensures seamless experience across desktop, tablet, and mobile devices.
- Serverless Deployment
  - Vercel auto-deploys with integrated CI/CD pipeline, no server management required.

---

## Tools Used
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Firebase Auth
- Square Point of Sale API
- Pinecone Vector Database
- Upstash Redis
- Instagram Basic Display API
- Google Sheets API
- Vercel (Hosting & Deployment)
 
---

## Images

### Landing Page
![Landing](/markdown/groundworks-assets/landing.png)

### Community
![Community](/markdown/groundworks-assets/community.png)

### Store
![Store](/markdown/groundworks-assets/store.png)

### Modal
![Modal](/markdown/groundworks-assets/modal.png)

### Shopping Cart
![Shopping Cart](/markdown/groundworks-assets/cart.png)

### About
![About](/markdown/groundworks-assets/about.png)