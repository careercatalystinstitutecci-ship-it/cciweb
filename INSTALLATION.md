<!-- Installation and Setup Instructions -->

# Career Catalyst Institute - Installation & Deployment Guide

## System Requirements

- Node.js 16.x or higher
- npm 8.x or higher (or yarn)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- 2GB free disk space

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Careercat
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- React Icons

### 3. Environment Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Update with your configuration (optional):
```
VITE_APP_NAME=Career Catalyst Institute
VITE_EMAILJS_PUBLIC_KEY=your_key_here
```

### 4. Development Server
```bash
npm run dev
```

Server runs at: http://localhost:5173

### 5. Build for Production
```bash
npm run build
```

Output folder: `dist/`

### 6. Preview Production Build
```bash
npm run preview
```

## 📁 File Structure Overview

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   ├── Hero.jsx        # Hero section template
│   ├── Cards/          # Various card components
│   └── Forms/          # Form components
├── pages/              # Page components (routes)
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Course.jsx
│   └── ...
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── data/               # Constants and data
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx            # Entry point
```

## 🎯 Key Features Configuration

### Email Integration (EmailJS)

1. Sign up: https://www.emailjs.com
2. Create service and template
3. Update in `src/App.jsx`:
```javascript
import emailjs from 'emailjs-com'
emailjs.init('YOUR_PUBLIC_KEY')
```

### Analytics (Google Analytics)

Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### SEO Meta Tags

Already configured in `index.html` and each page

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. `npm run build`
2. Drop `dist` folder to Netlify

### Traditional Server
1. `npm run build`
2. Copy `dist/` to server
3. Configure server to serve `index.html` for SPA routing

## 🔒 Security Checklist

- [ ] Remove any API keys before committing
- [ ] Use environment variables for sensitive data
- [ ] Enable HTTPS on production
- [ ] Configure CORS properly
- [ ] Sanitize user inputs in forms
- [ ] Review and update dependencies regularly

## 📊 Performance Optimization

Current Lighthouse Targets:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

Check performance:
```bash
npm run build
npm run preview
# Open DevTools > Lighthouse
```

## 🧪 Testing

Components are production-ready but you may want to add:
- Unit tests: Jest + React Testing Library
- E2E tests: Cypress or Playwright

## 🆘 Troubleshooting

### Port 5173 Already in Use
```bash
npm run dev -- --port 3000
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
npm run build -- --force
```

### Styles Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check Tailwind CSS configuration

## 📚 Additional Resources

- Project Documentation: See README.md
- Quick Start Guide: See QUICKSTART.md
- React Docs: https://react.dev
- Vite Guide: https://vitejs.dev
- Tailwind CSS: https://tailwindcss.com

## 📞 Support & Contact

Career Catalyst Institute
- Email: career.catalyst.institute.cci@gmail.com
- Phone: +91-8888-888-888
- Website: [Your Domain]

## 📄 License & Terms

- All content is proprietary to Career Catalyst Institute
- See LICENSE.md for full details
- See TERMS.md for terms and conditions

---

Last Updated: December 2024
Version: 1.0.0
