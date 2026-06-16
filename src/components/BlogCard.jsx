import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiFileText } from 'react-icons/fi'

const BlogCard = ({ title, excerpt, date, category, image = 'AR', imageUrl, delay = 0, href = '#' }) => {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="block overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl dark:bg-gray-800 group"
    >
      <div className="flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-accent text-5xl md:h-56 md:text-6xl">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 font-black text-white"
          >
            {image || <FiFileText />}
          </motion.div>
        )}
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
            {category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 md:text-sm">{date}</span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-dark transition-colors group-hover:text-primary dark:text-white md:text-2xl">
          {title}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
          {excerpt}
        </p>

        <div className="flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
          <span>Read More</span>
          <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.a>
  )
}

export default BlogCard
