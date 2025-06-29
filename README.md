# NPIC Paint Website

A modern, responsive marketing website built with Next.js and TypeScript for NPIC Paint company.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Docker** - Containerization

## Project Structure

```
npic-web/
├── public/                    # Static assets (images, logos)
├── src/
│   ├── app/                   # App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles
│   └── components/           # React components
│       ├── Header.tsx        # Navigation
│       ├── Hero.tsx          # Hero section
│       ├── AboutUs.tsx       # About section
│       ├── OurServices.tsx   # Services grid
│       ├── Pricing.tsx       # Pricing plans
│       ├── Footer.tsx        # Footer
│       └── ...               # Other components
├── docker-compose.yml        # Docker configuration
├── Dockerfile               # Container setup
└── tailwind.config.ts       # Styling configuration
```

## Local Development

```bash
# Clone repository
git clone https://github.com/daruns/NPIC-Paint-Webitse.git
cd NPIC-Paint-Webiste

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Docker Deployment

```bash
# Build and start with Docker Compose
docker-compose up --build

# Or with Docker only
docker build -t npic-web .
docker run -p 3000:3000 npic-web
```

## Production Deployment

```bash
# Build for production
npm run build
npm start

# Or deploy to Vercel/Netlify by connecting GitHub repo
```

## Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
```

---

**Live Demo:** http://localhost:3000 (after running locally)  
**Repository:** https://github.com/daruns/NPIC-Paint-Webitse.git
**Developer:** Darun Omar
**Email:** darun.s.omar@gmail.com