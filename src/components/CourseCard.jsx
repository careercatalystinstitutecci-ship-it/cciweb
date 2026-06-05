import React from 'react'
import { motion } from 'framer-motion'

const CourseCard = ({ title, duration, modules, icon, price, features = [], delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 flex flex-col h-full"
    >
      {/* Icon */}
      <div className="text-4xl md:text-5xl mb-4">{icon}</div>

      {/* Title and Duration */}
      <h3 className="text-xl md:text-2xl font-bold text-dark dark:text-white mb-2">{title}</h3>
      <p className="text-accent font-semibold text-sm mb-4">{duration}</p>

      {/* Modules Count */}
      <div className="bg-gradient-primary/10 rounded-lg p-3 mb-4">
        <p className="text-sm md:text-base font-semibold text-primary">
          {modules} Modules
        </p>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <span className="text-accent font-bold mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Price and Button */}
      {price && (
        <div>
          <p className="text-2xl font-bold gradient-text mb-4">{price}</p>
          <button className="w-full px-4 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
            Enroll Now
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default CourseCard
