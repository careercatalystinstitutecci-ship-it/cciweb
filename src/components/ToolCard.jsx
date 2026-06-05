import React from 'react'
import { motion } from 'framer-motion'

const ToolCard = ({ icon, name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.1, y: -10 }}
      className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all text-center group cursor-pointer"
    >
      <div className="text-5xl md:text-6xl mb-4 inline-block group-hover:animate-bounce">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-dark dark:text-white group-hover:text-primary transition-colors">
        {name}
      </h3>
    </motion.div>
  )
}

export default ToolCard
