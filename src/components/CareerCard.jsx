import React from 'react'
import { motion } from 'framer-motion'

const CareerCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary group"
    >
      <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-dark dark:text-white mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default CareerCard
