import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Course', href: '/course' },
    { label: 'Placement', href: '/placement' },
    { label: 'Success Stories', href: '/success-stories' },
    { label: 'Resources', submenu: [
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' }
    ]},
    { label: 'Contact', href: '/contact' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled || isOpen 
        ? 'bg-white shadow-lg dark:bg-gray-900' 
        : 'bg-white/80 backdrop-blur-md dark:bg-gray-900/80'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-all">
              CCI
            </div>
            <span className="font-bold text-lg md:text-xl gradient-text hidden sm:inline-block">
              Career Catalyst
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-1"
            >
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.submenu ? (
                    <button className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors flex items-center gap-1">
                      {item.label}
                      <FiChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 transition-colors ${
                        location.pathname === item.href
                          ? 'text-primary font-semibold'
                          : 'text-gray-700 dark:text-gray-200 hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                  
                  {/* Dropdown */}
                  {item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute left-0 mt-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all"
                    >
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          to={subitem.href}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/contact">
              <button className="hidden md:block px-6 py-2 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Enroll Now
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-800 border-t dark:border-gray-700"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      <FiChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            to={subitem.href}
                            className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="block pt-2">
              <button className="w-full px-4 py-2 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Enroll Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar
