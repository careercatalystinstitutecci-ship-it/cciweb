import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const StatsCounter = ({ value, label, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const target = parseInt(value)

  useEffect(() => {
    let current = 0
    const increment = Math.ceil(target / 50)
    
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [target])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.p
        key={count}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        className="text-4xl md:text-5xl font-bold gradient-text"
      >
        {prefix}{count}{suffix}
      </motion.p>
      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 font-medium">
        {label}
      </p>
    </motion.div>
  )
}

export default StatsCounter
