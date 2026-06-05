import React from 'react'
import { motion } from 'framer-motion'

const ModuleCard = ({ number, title, topics, duration, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all border-l-4 border-primary flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="inline-block px-4 py-2 bg-gradient-primary text-white rounded-lg font-bold mb-3">
            Module {number}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-dark dark:text-white">
            {title}
          </h3>
        </div>
      </div>

      {/* Duration */}
      <p className="text-accent font-semibold text-sm mb-4">{duration}</p>

      {/* Topics */}
      <div className="flex-grow mb-4">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-sm">Topics:</h4>
        <ul className="space-y-2">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button className="w-full px-4 py-2 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm md:text-base">
        Learn More
      </button>
    </motion.div>
  )
}

export default ModuleCard
