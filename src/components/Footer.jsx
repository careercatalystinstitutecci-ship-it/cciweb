import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useSiteContent from '../hooks/useSiteContent'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { content } = useSiteContent()
  const settings = content.settings

  const footerSections = [
    {
      title: 'About',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' }
      ]
    },
    {
      title: 'Courses',
      links: [
        { label: 'Software Testing', href: '/course' },
        { label: 'Course Curriculum', href: '/course' },
        { label: 'Placement Assistance', href: '/placement' },
        { label: 'Success Stories', href: '/success-stories' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Contact', href: '/contact' },
        { label: 'Support', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms-conditions' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Disclaimer', href: '#' }
      ]
    }
  ]

  const contactInfo = [
    { icon: FiMail, text: settings.email, href: `mailto:${settings.email}` },
    { icon: FiPhone, text: settings.phone, href: `tel:${settings.phone.replace(/\D/g, '')}` },
    { icon: FiMapPin, text: settings.location, href: '#' }
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="bg-gradient-dark text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-lg">
                CCI
              </div>
              <h3 className="text-xl font-bold">{settings.brandName}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Empowering professionals with world-class Software Testing and Quality Assurance training.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="font-semibold text-lg mb-4 text-accent">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-accent">Contact</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors text-sm group"
                >
                  <contact.icon className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                  <span className="break-all">{contact.text}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-8"></div>

        {/* Bottom Footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p variants={itemVariants} className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} {settings.instituteName}. All rights reserved.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex gap-6 text-sm text-gray-400"
          >
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
