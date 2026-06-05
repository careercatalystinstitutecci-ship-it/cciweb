import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const BlogCard = ({ title, excerpt, date, category, image = '📝', delay = 0, href = '#' }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="block group rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all"
    >
      {/* Image */}
      <div className="h-48 md:h-56 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl md:text-7xl overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {image}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Category and Date */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
            {category}
          </span>
          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            {date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-dark dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
          <span>Read More</span>
          <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  )
}

export default BlogCard
