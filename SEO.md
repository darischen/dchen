# Task: Make darischen.com crawlable (SSR/prerender) + link projects to GitHub

## Context
This is a Create React App (react-scripts) portfolio. It renders 100% client-side,
so Google's crawler fetches an empty `<div id="root">` shell and never sees the
project content. As a result, LinkedIn and Freelancer outrank the site for
queries like "daris mini-stockfish". The CRA app lives in `client/`. There is a
small Express server in `server/` and a `vercel.json` that rewrites all routes to
`/index.html`. Do NOT change the server or the rewrite.

Goal: prerender every route to static HTML at build time with react-snap, fix the
empty meta description, and add a GitHub repo link to every project card so the
crawlable page actually points at the repos.

Work only inside `client/`. Make the changes, build, and verify the output HTML
contains real text before finishing.

---

## Step 1 — Install dependencies
From `client/`:

    npm install
    npm install --save-dev react-snap
    npm install --save react-markdown rehype-katex rehype-raw remark-gfm remark-math katex

(The markdown packages exist in the ROOT package.json but are missing from
`client/package.json`; the build fails without them. Add them to client.)

---

## Step 2 — Switch index.js to hydrate prerendered markup
In `client/src/index.js`, replace the `createRoot(...).render(...)` call with a
branch that hydrates when prerendered HTML is already present, and falls back to
a normal render in dev. Final state of the render logic:

    const rootElement = document.getElementById('root');

    if (rootElement.hasChildNodes()) {
      ReactDOM.hydrateRoot(
        rootElement,
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    } else {
      ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }

Keep the existing imports and the `reportWebVitals()` call.

---

## Step 3 — Fix the meta description
In `client/public/index.html`, the `<meta name="description">` content is empty.
Set it to:

    <meta
      name="description"
      content="Daris Chen is a UC San Diego Computer Engineering graduate building full-stack, AI/ML, and hardware systems. Projects include PatentIQ, FlipperZillow, Mini-Stockfish, HandVol, and a 4-element phased array radar."
    />

---

## Step 4 — Add react-snap config + postbuild hook
In `client/package.json`:

1. Add a `postbuild` script (CRA runs it automatically after `build`):

       "build": "react-scripts build",
       "postbuild": "react-snap",

2. Add a top-level `reactSnap` key. The `puppeteerArgs` are required so Chrome
   launches in CI/root environments. The `include` list must cover every route,
   including one entry per project id. Pull the ids from the `projects` array in
   `client/src/Pages/Projects.js` (the `id` field of each object) — do not guess
   them. As of now they are: HB100, patentiq, chess, flipperzillow, simplerfy,
   groundworks, CPU, redshift, 16bit-adder, weatherapp, eews, devblog,
   hearthpebble, darischen.

       "reactSnap": {
         "source": "build",
         "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"],
         "minifyHtml": { "collapseWhitespace": false, "removeComments": false },
         "include": [
           "/", "/about", "/projects", "/contact", "/resume",
           "/projects/HB100", "/projects/patentiq", "/projects/chess",
           "/projects/flipperzillow", "/projects/simplerfy",
           "/projects/groundworks", "/projects/CPU", "/projects/redshift",
           "/projects/16bit-adder", "/projects/weatherapp", "/projects/eews",
           "/projects/devblog", "/projects/hearthpebble", "/projects/darischen"
         ]
       }

If you add or remove a project in Projects.js, keep this `include` list in sync.

---

## Step 5 — Add GitHub links to each project card
This is the point of the whole task: the crawlable page must link to the repos
so Google associates them with the name.

1. In `client/src/Pages/Projects.js`, add a `github` field to each project object
   in the `projects` array, e.g. `github: 'https://github.com/<user>/<repo>'`.
   ASK THE USER for the repo URLs — do not invent them. If a project has no
   public repo, omit the field for that project.

2. In `client/src/components/ProjectCard.js`, the card is currently a single
   `<Link>` wrapping the whole card, which navigates to the detail route. A
   nested `<a>` inside a router `<Link>` is invalid. Render the GitHub link
   OUTSIDE/after the card body, or stop the click from bubbling. Simplest correct
   approach: keep the card `<Link>` as-is, and after the `tech-stack` div add a
   conditional GitHub anchor that calls `e.stopPropagation()` on click:

       {project.github && (
         
           href={project.github}
           target="_blank"
           rel="noopener noreferrer"
           className="project-github-link"
           onClick={(e) => e.stopPropagation()}
         >
           View on GitHub
         </a>
       )}

   Note: an `<a>` cannot legally nest inside the React Router `<Link>` (which
   renders an `<a>`). If lint/build complains, refactor the card so the outer
   wrapper is a `<div>` with an onClick navigate handler, and the title is the
   `<Link>`, leaving the GitHub `<a>` as a separate sibling. Choose whichever
   keeps the HTML valid.

3. Add a `.project-github-link` style in `client/src/App.css` consistent with the
   existing card styling (small, accent-colored, doesn't break the card layout).

---

## Step 6 — Build and VERIFY (do not skip)
From `client/`:

    rm -rf build
    CI=false npm run build

Known issue: react-snap bundles an old Chrome. With react-markdown v10 (which
calls `Object.hasOwn`), the per-project DETAIL routes (`/projects/<id>`) may throw
`Object.hasOwn is not a function` during prerender. The LIST pages (`/`,
`/projects`, `/about`) still prerender correctly and contain every project name —
those are what the target search queries need, so a build that prerenders the list
pages is a success even if detail pages error. If you want detail pages prerendered
too, set react-snap to use a newer Chrome via the PUPPETEER_EXECUTABLE_PATH env var
pointing at an installed Chrome >= v90, or move markdown rendering out of the
prerender path. Confirm with the user before changing dependency/Chrome versions.

Verify the fix actually landed:

    grep -o "FlipperZillow\|Mini-Stockfish\|PatentIQ" build/projects/index.html | sort -u

Expect all three names to print. Then confirm the root div is full, not empty:

    node -e "const h=require('fs').readFileSync('build/projects/index.html','utf8');const i=h.indexOf('<div id=\"root\">');const j=h.indexOf('<script',i);console.log('root block chars:', j-i);"

Expect several thousand chars (empty shell would be ~15). If it prints ~15, the
prerender did not run — recheck Steps 2 and 4.

react-snap also writes a `build/200.html`. Leave it; Vercel ignores it. If you ever
re-run `react-snap` against an already-snapped build it errors ("can not run twice")
— always `rm -rf build` first.

---

## Step 7 — Done criteria
- `client/package.json` has the `postbuild` + `reactSnap` block and the markdown deps.
- `client/src/index.js` hydrates.
- `client/public/index.html` has a non-empty meta description.
- Every project with a known repo has a `github` field and a working link on its card.
- `build/projects/index.html` contains the literal project names and a full root div.

Do NOT commit or push. Stop after verification and report what prerendered, what
didn't (detail pages, if Chrome blocked them), and which projects still need repo
URLs from the user.