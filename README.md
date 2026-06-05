# Career Catalyst Institute - Software Testing Training Website

A modern, responsive educational website built with React.js, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI Design**: Clean, professional interface with glass-morphism effects
- **Fully Responsive**: Mobile-first approach optimized for all devices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Multiple Pages**: 10 comprehensive pages covering all aspects of the institute
- **Dark/Light Theme**: Professional color schemes for readability
- **SEO Optimized**: Meta tags and structured content
- **Contact Forms**: Integrated contact functionality
- **Performance Optimized**: Fast loading with optimized assets

## 📋 Pages Included

1. **Home** - Hero section, features, course overview, testimonials, FAQ
2. **About Us** - Mission, vision, values, learning methodology
3. **Software Testing Course** - Complete curriculum with 9 modules
4. **Placement Assistance** - Career support and job placement guidance
5. **Success Stories** - Student testimonials and achievements
6. **Contact Us** - Contact form and information
7. **Blog** - Articles on software testing and career tips
8. **FAQ** - Frequently asked questions
9. **Privacy Policy** - Data protection information
10. **Terms & Conditions** - Legal terms and course policies

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Swiper JS** - Carousel functionality (optional)
- **EmailJS** - Email integration (optional)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone/Navigate to the project:**
   ```bash
   cd Careercat
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
Careercat/
├── public/                 # Static files
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── CourseCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── ContactForm.jsx
│   │   ├── BlogCard.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── CTASection.jsx
│   │   ├── ToolCard.jsx
│   │   ├── CareerCard.jsx
│   │   ├── ModuleCard.jsx
│   │   ├── ProcessCard.jsx
│   │   └── StatCard.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Course.jsx
│   │   ├── Placement.jsx
│   │   ├── SuccessStories.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   ├── FAQ.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsConditions.jsx
│   ├── utils/            # Utility functions
│   │   ├── helpers.js
│   │   └── withHelmet.js
│   ├── data/             # Data constants
│   │   └── constants.js
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

## 🎨 Color Palette

- **Primary**: #2563EB (Blue)
- **Secondary**: #0F172A (Dark Navy)
- **Accent**: #14B8A6 (Teal)
- **Light**: #FFFFFF (White)
- **Dark**: #1E293B (Slate)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile Phones (320px - 767px)
- Tablets (768px - 1023px)
- Laptops (1024px - 1439px)
- Desktops (1440px - 1920px)
- Ultra-wide screens (1920px+)

## 🔧 Customization

### Update Contact Information
Edit the contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Change Color Scheme
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  accent: '#YOUR_COLOR',
  // ...
}
```

### Add Your Content
- Update course modules in `src/data/constants.js`
- Edit testimonials in `src/pages/Home.jsx`
- Add blog posts in `src/pages/Blog.jsx`

## 🚀 Performance Optimization

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: React Router enables automatic code splitting
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Asset Optimization**: All assets are optimized for web

## 🔐 Security Considerations

- Input validation on all forms
- CORS headers configured properly
- No sensitive data in client-side code
- Content Security Policy ready

## 📧 Email Integration (Optional)

To enable EmailJS integration:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your Public Key
3. Update in `src/App.jsx`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY")
   ```

## 🤝 Support

For any issues or questions:
- Email: career.catalyst.institute.cci@gmail.com
- Phone: +91-8888-888-888

## 📄 License

This project is the intellectual property of Career Catalyst Institute.

## 🎯 Features Checklist

- ✅ Modern responsive design
- ✅ 10 comprehensive pages
- ✅ Smooth animations
- ✅ Mobile-first approach
- ✅ Dark/Light theme ready
- ✅ Fully accessible
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Contact forms
- ✅ Professional components

## 🔄 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy 'dist' folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload contents of 'dist' folder to your server
```

## 📞 Contact Information

**Career Catalyst Institute (CCI)**
- Email: career.catalyst.institute.cci@gmail.com
- Phone: +91-8888-888-888
- Location: Nashik, Maharashtra, India
- Hours: Monday to Sunday, 9AM to 9PM

---

**Version**: 1.0.0
**Last Updated**: December 2024
