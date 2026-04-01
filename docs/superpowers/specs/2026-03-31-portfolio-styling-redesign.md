# Portfolio Site Styling Redesign

**Date:** 2026-03-31
**Author:** Claude Code (with Daris Chen)
**Status:** Approved Design

---

## Overview

Revamp the styling of a personal portfolio to position as a mid-tier SWE across diverse technical domains (AI/ML, hardware/low-level, full-stack web). Move from generic dark theme to sophisticated dark refined aesthetic using monospace typography, strategic color-coding, and clear information hierarchy.

**Target impression:** Technically credible, versatile, confident. "I work across domains and know what I'm doing."

---

## Design Direction: Dark Refined

### Aesthetic Principles
- **Monospace-forward:** All typography uses monospace fonts (Courier New, Menlo, Monaco, or modern monospace alternatives). Signals technical depth and confidence.
- **Sophisticated restraint:** Clean spacing and typography carry the design. Color is strategic, not decorative.
- **Multi-accent system:** Three category-specific accent colors for visual organization without breaking cohesion.
- **Technical credibility:** Layout and details signal understanding of design, not copying templates.

---

## Color Palette

### Base Theme
- **Background:** `#0a0a14` (deep dark, almost black)
- **Panels/Cards:** `#1a1a2e` (slightly lighter dark)
- **Borders:** `#333` (subtle contrast)
- **Text:** `#ffffff` (white for primary text), `#aaa`/`#bbb` (lighter grays for secondary)

### Accent Colors (Category-Specific)
Projects are visually organized by domain using distinct accent colors:

| Category | Color | Use Case |
|----------|-------|----------|
| **AI/ML Projects** | `#00d9ff` (Cyan) | Modern, cutting-edge, energetic. Project titles, labels, tech tags. |
| **Hardware/Low-Level** | `#7c3aed` (Violet) | Deep, technical, sophisticated. Architecture, circuits, systems. |
| **Web/Full-Stack** | `#ec4899` (Hot Pink) | Dynamic, modern. Web apps, full-stack work. |

**Note:** Tech stack tags inherit their category's accent color with semi-transparent background and bright text.

---

## Page Structure

### 1. Header Section (Medium Introduction)
**Purpose:** Introduce yourself briefly, then get out of the way.

**Layout:**
- Horizontal layout with headshot on left, content on right
- Max-width container (900px)
- Flex-based, responsive (stacks on mobile)

**Content:**
- **Headshot:** 120px × 120px, rounded corners (`border-radius: 8px`), subtle border (`2px solid #333`)
- **Name:** Large, bold heading (`font-size: 1.8rem`, `font-weight: bold`)
- **Title:** Smaller, cyan accent (`color: #00d9ff`, `font-size: 1rem`)
- **Bio:** 1-2 sentences explaining your expertise across domains (`font-size: 0.95rem`, `color: #bbb`, `line-height: 1.6`)
- **Links:** GitHub, LinkedIn, Email as inline links with hot pink accent (`color: #ec4899`), separated by centered dots

**Spacing:** 50px padding on container, 30px gap between headshot and content

---

### 2. Projects Section

#### Navigation: Tab Interface
**Purpose:** Filter projects by category while keeping UI clean.

**Tabs:**
- `All` (default, cyan underline)
- `AI/ML` (cyan accent when active)
- `Hardware` (violet accent when active)
- `Web` (hot pink accent when active)

**Behavior:**
- Click to filter grid below
- Active tab has matching accent color + underline
- Inactive tabs are gray (`color: #aaa`)
- Monospace styling, subtle hover effects

---

#### Grid Cards
**Purpose:** Display projects with consistent structure, visual categorization, scannable info.

**Card Structure:**
- **Grid layout:** `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`, 20px gap
- **Individual card styling:**
  - Background: `#1a1a2e`
  - Border: `1px solid #333`
  - Left border: `3px solid [accent-color]` (matches category)
  - Padding: 20px
  - Border-radius: 8px

**Card Content (Top to Bottom):**

1. **Category Label**
   - Format: `▸ AI/ML` (or Hardware, Web)
   - Color: matches accent (cyan, violet, or hot pink)
   - Font-weight: bold
   - Font-size: 0.85rem
   - Margin-bottom: 12px

2. **Project Title**
   - Font-size: 1.1rem
   - Font-weight: bold
   - Color: white
   - Margin-bottom: 10px

3. **Description**
   - Font-size: 0.9rem
   - Color: `#aaa`
   - Line-height: 1.5
   - Margin-bottom: 15px
   - 1-2 sentences, focused on impact/scope

4. **Tech Stack Tags**
   - Display: flex, wrap, 8px gap
   - Font-size: 0.8rem
   - **Styling:**
     - Background: `rgba([accent-color], 0.15)` (semi-transparent accent)
     - Color: Bright variant of accent (e.g., `#00d9ff` for cyan, `#a78bfa` for violet, `#f472b6` for hot pink)
     - Padding: 4px 8px
     - Border-radius: 4px
     - Border: `1px solid rgba([accent-color], 0.3)`
   - Examples:
     - ML tags: cyan background, cyan text
     - Hardware tags: violet background, lighter violet text
     - Web tags: hot pink background, lighter pink text

---

## Typography

**Font Family:** Monospace
**Primary choices:** Courier New, Menlo, Monaco, or modern alternatives (JetBrains Mono, IBM Plex Mono)

**Hierarchy:**
- **Page Title (H1):** 1.8rem, bold, white
- **Subtitle:** 1rem, cyan accent
- **Card Title (H3):** 1.1rem, bold, white
- **Body Text:** 0.9rem, `#aaa`
- **Small Labels:** 0.85rem, bold, accent-colored
- **Tech Tags:** 0.8rem, semi-transparent background

---

## Spacing & Layout

- **Container Max-Width:** 900px
- **Padding:** 50px horizontal, 40px vertical (sections)
- **Section Gaps:** 40px margin-bottom between major sections
- **Card Grid Gap:** 20px
- **Tag Gap:** 8px
- **Internal Card Padding:** 20px
- **Element Margins:** Consistent 12-15px between card elements

---

## Responsive Behavior

**Breakpoint:** 768px (tablet/mobile)

- **Header:** Stacks vertically (headshot above content) on mobile
- **Card Grid:** Auto-fits to single column on mobile
- **Tabs:** Remain horizontal, may wrap if space limited
- **Overall:** Maintain padding and spacing hierarchy

---

## Interactive Elements

### Links
- **Default:** Hot pink (`#ec4899`)
- **Hover:** Slight opacity increase or underline (to be determined during implementation)
- **Visited:** Same color (no distinction needed)

### Tabs
- **Active state:** Accent color + underline
- **Hover state:** Slight brightening or text-shadow
- **Transition:** Smooth 0.3s ease (optional, for polish)

### Cards
- **Hover state:** Optional subtle lift (box-shadow increase) or background brightening
- **No required interaction** for MVP, can add depth later

---

## Resume Page

### Purpose
Display domain-specific resumes (General SWE, Web Dev, AI/ML, Hardware) with tab-based filtering, matching the main portfolio aesthetic.

### Page Structure

**Header:** Same as main page (medium intro with headshot, name, role, bio, links)

**Tabs:** Identical styling to project filtering tabs
- `General` (default, cyan underline)
- `Web Dev` (hot pink accent when active)
- `AI/ML` (cyan accent when active)
- `Hardware` (violet accent when active)

**Content Area:**
- **PDF Iframe:** Display selected resume PDF in embedded viewer
  - Full-width, responsive height (min 600px, auto-scale)
  - Styled border/frame to match card aesthetic
- **Download Button:** Positioned above or alongside iframe (reuse existing implementation)
  - Updates dynamically to download correct resume based on active tab

### Resume Files
Located in `client/src/`:
- `DarisChenResumeSWE.pdf` (General — default tab)
- `DarisChenResumeWD.pdf` (Web Dev)
- `DarisChenResumeAI.pdf` (AI/ML)
- `DarisChenResumeEE.pdf` (Hardware)

### Tab Behavior
- Click tab → iframe src updates to corresponding resume file
- Download button href updates to match active tab
- No page reload, smooth tab switching

---

## Summary of Changes from Current

| Aspect | Current | New |
|--------|---------|-----|
| Typography | System fonts (Arial) | Monospace throughout |
| Color scheme | Blue-heavy (#0073e6) | Dark refined: cyan/violet/hot pink |
| Header | Minimal or full-height | Medium: headshot + intro, balanced |
| Project display | Basic cards (if present) | Grid cards with tabs, color-coded |
| Tech stack visibility | Not highlighted | Prominent, color-coded tags |
| Information density | Varies | Consistent minimal + tech stack |
| Visual hierarchy | Unclear | Clear: layout, color, typography |

---

## Implementation Notes

### Files to Create/Modify
- **CSS:** `client/src/App.css` (primary styling)
- **React Components:** May need to refactor header, project display, tabs (depends on current structure)
- **Assets:** Ensure headshot is optimized and accessible

### Fonts
- Import monospace font (Courier New is system default, but consider importing JetBrains Mono or similar for refinement)
- Fallback chain: `font-family: 'Courier New', Courier, monospace;`

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid, Flexbox fully supported
- No advanced CSS features required (no gradients, animations, or filters necessary for MVP)

---

## Success Criteria

✓ Monospace typography throughout
✓ Dark refined aesthetic (dark background, strategic accent colors)
✓ Medium intro header with headshot, name, role, bio, links
✓ Tab-based filtering for AI/ML, Hardware, Web categories
✓ Grid card layout with color-coded left borders and tech stacks
✓ Cyan/violet/hot pink accent system applied consistently
✓ Responsive on mobile (stacks appropriately)
✓ No functionality changes—purely styling redesign
✓ All projects visible and scannable

---

## Deprecated Pages

- **Contact Page:** Remove entirely. Contact via header links (GitHub, LinkedIn, Email) instead.

---

## Out of Scope

- Adding new project content (use existing projects)
- Changing project structure or metadata
- Adding animations or transitions (beyond hover states, optional)
- Dark mode toggle (already dark)
- SEO improvements
- Accessibility improvements (beyond maintaining current level)
