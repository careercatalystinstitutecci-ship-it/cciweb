import React from 'react'
import { motion } from 'framer-motion'

const CTASection = ({ title, subtitle, buttonText = 'Get Started', buttonHref = '/contact' }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <motion.a
            href={buttonHref}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-bold text-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            {buttonText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
