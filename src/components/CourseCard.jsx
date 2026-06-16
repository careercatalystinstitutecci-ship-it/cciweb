import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiBookOpen, FiCheckCircle, FiClock, FiLayers } from 'react-icons/fi'

const CourseCard = ({ title, duration, modules, icon, price, features = [], imageUrl, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex h-full flex-col"
    >
      <motion.div
        whileHover={{ y: -6 }}
        className="group flex flex-grow flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all hover:border-primary/30 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/15 to-accent/15">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-accent text-4xl font-black text-white">
              {icon || <FiBookOpen />}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
          {price && (
            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-primary shadow-lg">
              {price}
            </div>
          )}
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-lg">
            <span className="text-lg font-black">{icon || 'QA'}</span>
          </div>
        </div>

        <div className="flex flex-grow flex-col p-5 md:p-6">
          <h3 className="text-xl font-bold leading-snug text-dark dark:text-white">{title}</h3>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-slate-50 p-3 dark:bg-gray-900">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                <FiClock className="h-4 w-4" />
                Duration
              </div>
              <p className="font-bold text-dark dark:text-white">{duration || 'Flexible'}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 dark:bg-gray-900">
              <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                <FiLayers className="h-4 w-4" />
                Modules
              </div>
              <p className="font-bold text-dark dark:text-white">{modules || 1} Modules</p>
            </div>
          </div>

          {features.length > 0 && (
            <ul className="mt-5 space-y-3">
              {features.slice(0, 5).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <FiCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto pt-6">
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-4 py-3 font-bold text-white transition-all hover:shadow-lg"
            >
              Enroll Now
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default CourseCard
