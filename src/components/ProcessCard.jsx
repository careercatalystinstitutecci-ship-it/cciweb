import React from 'react'
import { motion } from 'framer-motion'

const ProcessCard = ({ step, title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative"
    >
      <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all">
        {/* Step Badge */}
        <div className="absolute -top-4 -left-4 w-12 h-12 md:w-14 md:h-14 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
          {step}
        </div>

        {/* Icon */}
        <div className="text-4xl md:text-5xl mb-4">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold text-dark dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default ProcessCard
