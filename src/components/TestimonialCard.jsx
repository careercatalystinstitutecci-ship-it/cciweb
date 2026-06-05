import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const TestimonialCard = ({ name, role, company, content, rating = 5, avatar = '👤', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-6 italic">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-dark dark:text-white">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
          <p className="text-xs text-accent font-medium">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
