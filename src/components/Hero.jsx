import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ title, subtitle, image, buttons, backgroundGradient = 'gradient-primary' }) => {
  return (
    <section className={`relative min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden flex items-center`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-dark dark:text-white leading-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed"
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {buttons?.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`px-6 py-3 rounded-lg font-semibold text-center transition-all transform hover:scale-105 ${
                    button.type === 'primary'
                      ? 'bg-gradient-primary text-white hover:shadow-xl'
                      : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-accent dark:border-accent'
                  }`}
                >
                  {button.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-3xl blur-2xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                {image || '💼'}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        {buttons?.stats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mt-16 pt-16 border-t border-gray-300 dark:border-gray-700"
          >
            {buttons.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero
