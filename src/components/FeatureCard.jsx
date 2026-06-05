import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon: Icon, title, description, delay = 0, onClick = null }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className={`p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all cursor-pointer group`}
    >
      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-dark dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default FeatureCard
