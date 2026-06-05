import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useScrollToTop } from './hooks/useHooks'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import Placement from './pages/Placement'
import SuccessStories from './pages/SuccessStories'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import FAQ from './pages/FAQ'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'

function AppContent() {
  useScrollToTop()

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  useEffect(() => {
    // Initialize EmailJS (optional)
    // Uncomment and add your public key to enable email functionality
    // import emailjs from 'emailjs-com'
    // emailjs.init("YOUR_PUBLIC_KEY")
  }, [])

  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
