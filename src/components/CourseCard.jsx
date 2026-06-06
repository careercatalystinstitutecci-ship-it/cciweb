import React from 'react'
import { motion } from 'framer-motion'

const CourseCard = ({ title, duration, modules, icon, price, features = [], delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col h-full"
    >
      <motion.div
        className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg transition-all border border-gray-200 dark:border-gray-700 flex flex-col flex-grow"
      >
        {/* Icon */}
        <div className="text-3xl md:text-4xl mb-3">{icon}</div>

        {/* Title and Duration */}
        <h3 className="text-lg md:text-xl font-bold text-dark dark:text-white mb-1">{title}</h3>
        <p className="text-accent font-semibold text-xs mb-3">{duration}</p>

        {/* Modules Count */}
        <div className="bg-gradient-primary/10 rounded-lg p-2 mb-3">
          <p className="text-xs md:text-sm font-semibold text-primary">
            {modules} Modules
          </p>
        </div>

        {/* Features - Inside card */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-4 px-0">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                <span className="text-accent font-bold mt-0.5 flex-shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price and Button - Always at bottom */}
        {price && (
          <div className="mt-auto">
            <p className="text-lg md:text-xl font-bold gradient-text mb-3">{price}</p>
            <button className="w-full px-4 py-2 bg-gradient-primary text-white rounded-lg font-semibold text-sm transition-all">
              Enroll Now
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default CourseCard
