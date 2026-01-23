# Saifur Portfolio - React Version

A modern, responsive portfolio website built with React, Vite, and shadcn/ui components.

## Features

- ⚡ Built with Vite for fast development
- 🎨 Modern UI with shadcn/ui components
- 🌙 Dark theme with purple-pink gradient accents
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 Clean, professional layout
- 📧 Contact form integration ready

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── lib/
│   └── utils.js      # Utility functions
├── App.jsx
├── App.css
└── main.jsx
```

## Customization

### Colors
The primary color scheme uses a purple-pink gradient. You can customize colors in `tailwind.config.js`:

```js
colors: {
  primary: "#f425f4",
  "background-dark": "#0a0a0c",
  "card-dark": "#160b16",
  "border-purple": "#492249",
}
```

### Content
Update your personal information in the respective component files:
- **Hero.jsx** - Name, title, description
- **About.jsx** - Bio, stats, images
- **Skills.jsx** - Technical skills
- **Projects.jsx** - Portfolio projects
- **Education.jsx** - Academic background
- **Contact.jsx** - Contact information

### Images
Replace the Google Photos URLs with your own images:
- Profile images in Hero and About sections
- Project screenshots in Projects section

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your repo and set build command to `npm run build`
- **GitHub Pages**: Use GitHub Actions to build and deploy

## License

MIT License - feel free to use this template for your own portfolio!