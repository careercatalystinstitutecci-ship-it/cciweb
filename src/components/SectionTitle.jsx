import React from 'react'
import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, centered = true, dark = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ${
          dark ? 'text-dark dark:text-white' : 'text-dark dark:text-white'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionTitle
