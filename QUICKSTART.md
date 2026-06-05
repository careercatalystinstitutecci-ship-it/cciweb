# Quick Start Guide for Career Catalyst Institute Website

## 🚀 Getting Started

### Step 1: Install Node.js
Make sure you have Node.js v16+ installed on your system.
- Download from: https://nodejs.org/

### Step 2: Navigate to Project
```bash
cd Careercat
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start Development Server
```bash
npm run dev
```

The website will automatically open in your browser at `http://localhost:5173`

## 📝 Initial Configuration

### 1. Update Contact Information
Edit `src/components/Footer.jsx` and `src/pages/Contact.jsx`:
- Change phone number: `+91-8888-888-888`
- Change email: `career.catalyst.institute.cci@gmail.com`
- Change location: `Nashik, Maharashtra, India`

### 2. Customize Course Content
Edit `src/data/constants.js`:
- Update course modules
- Update tools covered
- Update career opportunities

### 3. Add Your Logo (Optional)
1. Add your logo image to `public/` folder
2. Update the logo in `src/components/Navbar.jsx`

### 4. Enable Email Integration (Optional)
1. Sign up at https://www.emailjs.com/
2. Get your Public Key and credentials
3. Update `src/App.jsx`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY")
   ```

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR_BLUE',
  secondary: '#YOUR_NAVY',
  accent: '#YOUR_TEAL',
  // ...
}
```

### Update Text Content
- Home Page: `src/pages/Home.jsx`
- About Page: `src/pages/About.jsx`
- Course Page: `src/pages/Course.jsx`
- Blog Page: `src/pages/Blog.jsx`

### Modify Navigation Menu
Edit `src/components/Navbar.jsx` - `navItems` array

## 🚀 Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## 📱 Testing Responsiveness

1. Open DevTools (F12)
2. Use device emulator to test:
   - iPhone SE (375px)
   - iPhone 14 (390px)
   - iPad (768px)
   - Desktop (1920px)

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Cache Issues
```bash
npm run dev -- --force
```

### Dependencies Issue
```bash
rm -rf node_modules
npm install
```

## 📦 Deployment Options

### Vercel (Recommended)
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow prompts

### Netlify
1. Run: `npm run build`
2. Drag & drop `dist/` folder to Netlify

### Traditional Hosting
1. Run: `npm run build`
2. Upload `dist/` folder contents to your server

## 📞 Support

Need help? Contact:
- Email: career.catalyst.institute.cci@gmail.com
- Phone: +91-8888-888-888

## 📚 Resources

- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Vite: https://vitejs.dev

---

Happy coding! 🎉
