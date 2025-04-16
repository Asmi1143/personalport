# Asmitha S Portfolio (Serverless)

A modern, responsive portfolio website built using React, TypeScript, and Tailwind CSS. This portfolio is designed to be completely serverless, making it easy to deploy on any static hosting platform.

## Features

- Fully responsive design that works on all devices
- Dark/light mode toggle with persistent preferences
- Smooth animations and transitions using Framer Motion
- Section-based navigation with smooth scrolling
- Contact form (ready to be connected to a form service)
- Modern UI components using ShadCN

## Sections

- Home/Hero
- About
- Skills
- Experience
- Projects
- Achievements & Certifications
- Contact

## Running the Project

### Development

The project is currently set up to run with a development server:

```bash
# Start the development server
npm run dev
```

### Serverless Deployment

This portfolio is designed to be fully serverless. To build the static site:

```bash
# Build the static site
node build-static.js
```

This will create a `dist` directory with all the static files needed for deployment.

For a complete deployment process:

```bash
# Run the deployment script
node deploy-static.js
```

This will:
1. Build the static site
2. Add necessary configuration files for various static hosts
3. Prepare everything for deployment

## Deployment Options

The static site can be deployed to any of these platforms:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Replit Deployments
- Any other static hosting service

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- ShadCN UI components
- Vite (build tool)

## Customization

- Theme settings can be adjusted in `theme.json`
- Content can be modified in the respective component files
- Styling can be customized via Tailwind classes