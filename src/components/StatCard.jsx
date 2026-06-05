import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ icon: Icon, number, label, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg text-center hover:shadow-2xl transition-all"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </div>
      <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{number}</p>
      <p className="text-gray-600 dark:text-gray-300 font-medium">{label}</p>
    </motion.div>
  )
}

export default StatCard
