# darischen.com
This website is a portfolio website showcasing my projects and research as a computer science student. It includes information about my background, skills, and interests, as well as links to my GitHub and LinkedIn profiles. The website is designed to be visually appealing and easy to navigate, with a focus on showcasing my work in a clear and concise manner.

## Tech Stack
- React
- TypeScript
- Tailwind CSS
- Node.js
- Express.js
- Vercel Hosting

## Notable Packages
- iframe
- katex
- lucide-react
- react-router-dom
- react-mathjax
- react-markdown
- rehype-raw
- rehype-katex
- remark-gfm
- remark-math

These packages allow me to easily add a project whenever necessary. It uses dynamic routing to create a new page for each project, and the content is stored in a markdown file. The markdown file supports latex and math rendering, as well as HTML rendering. Each new project page is created by adding a new markdown file to the `markdown` folder, and the website automatically generates a new page for it. The website is hosted on Vercel, which allows for easy deployment and scaling.

IFrame is used to display PDFs when directly typing in content to the PDF file is not possible. This allows me to easily display research papers and other documents like my resume on the website without having to convert them to images or other formats. The iframe is responsive and adjusts to the size of the screen, making it easy to view on any device.

## Routing

### [Home](daris.chen.com)
The Home page includes a brief introduction about myself, my background, and my interests.

### [Projects](daris.chen.com/projects)
The projects page includes a list of my projects, each with a brief description and a link to the project page. The project pages are dynamically generated from markdown files stored in the `markdown` folder. Each project page includes a detailed description of the project, as well as any relevant images or videos.

The project page displays the following projects:
- [RedShift](https://darischen.com/projects/redshift)
- [Developer Blog](https://darischen.com/projects/devblog)
- [16-bit Carry Look-Ahead Adder](https://darischen.com/projects/16bit-adder)
- [Groundworks Books Full-Stack Commercial Website](https://darischen.com/projects/groundworks)
- [Elon Early Warning System (EEWS)](https://darischen.com/projects/eews)
- [Hearthpebble](https://darischen.com/projects/hearthpebble)
- [This Website](https://darischen.com/projects/darischen)

### [Resume](daris.chen.com/resume)
The Resume page includes a downloadable PDF version of my resume, as well as the content of my resume in PDF format. The PDF is displayed using an iframe, which allows for easy viewing and downloading.

### [Contact](daris.chen.com/contact)
The Contact page includes my email, phone number, links to my GitHub and LinkedIn profiles, and locations where I may be found.

## Running locally
To run the website locally, clone the repository and run the following commands:

```
cd dchen
npm install
npm run dev
```
This will start the development server and open the website in your default browser. You can then make changes to the code and see the changes reflected in real-time.

## Deployment
To deploy the website, run the following command:

```
npm run build
```
This will create a production build of the website in the `build` folder. You can then deploy the contents of the `build` folder to your hosting provider of choice. The website is currently hosted on Vercel, which allows for easy deployment and scaling.

## Acknowledgements
- [Vercel](https://vercel.com/) for hosting the website
- [React](https://reactjs.org/) for the front-end framework
- [TypeScript](https://www.typescriptlang.org/) for the programming language
- [Tailwind CSS](https://tailwindcss.com/) for the CSS framework
- [Node.js](https://nodejs.org/) for the back-end framework
- [Express.js](https://expressjs.com/) for the back-end framework
- [React Router](https://reactrouter.com/) for routing
