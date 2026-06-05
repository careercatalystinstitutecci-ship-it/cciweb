import React from 'react'
import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'

const Hero = ({ 
  title, 
  subtitle, 
  image, 
  buttons, 
  backgroundGradient = 'gradient-primary',
  imageType = 'emoji',
  imageSrc,
  videoOverlay = false,
  badge = null,
  poweredBy = null,
  features = [],
  cta1 = null,
  cta2 = null
}) => {
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
            {/* Powered By */}
            {poweredBy && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-primary font-semibold text-lg mb-3"
              >
                {poweredBy}
              </motion.p>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 text-dark dark:text-white leading-tight"
            >
              {title}
            </motion.h1>

            {/* Subtitle Line 2 */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4 md:mb-6"
              >
                {subtitle}
              </motion.p>
            )}
            
            {/* Description */}
            {image?.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed text-base md:text-lg"
              >
                {image.description}
              </motion.p>
            )}

            {/* Feature Tags */}
            {features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-12"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 md:py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
                  >
                    <span className="text-lg md:text-xl">{feature.icon}</span>
                    <span className="text-sm md:text-base">{feature.label}</span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {cta1 && (
                <a
                  href={cta1.href}
                  className="px-8 py-3 rounded-full font-bold text-center transition-all transform hover:scale-105 bg-green-500 hover:bg-green-600 text-white hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>{cta1.icon}</span>
                  {cta1.label}
                </a>
              )}
              {cta2 && (
                <a
                  href={cta2.href}
                  className="px-8 py-3 rounded-full font-bold text-center transition-all transform hover:scale-105 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white dark:bg-gray-800 dark:text-accent dark:border-accent flex items-center justify-center gap-2"
                >
                  <span>{cta2.icon}</span>
                  {cta2.label}
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center justify-center relative"
          >
            <div className="relative w-full">
              {/* Gradient Background Blur */}
              <div className="absolute inset-0 bg-gradient-primary/20 rounded-3xl blur-2xl"></div>
              
              {/* Main Image Container */}
              {imageType === 'image' && imageSrc ? (
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={imageSrc} 
                    alt="Hero" 
                    className="w-full h-auto object-contain"
                  />
                  
                  {/* Video Overlay */}
                  {videoOverlay && (
                    <>
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                        {/* Play Button Circle */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer mb-8"
                        >
                          <FiPlay className="w-10 h-10 text-primary fill-primary" />
                        </motion.div>
                        
                        {/* Video Label */}
                        <div className="text-center text-white">
                          <p className="text-sm font-semibold mb-1">Quick Overview</p>
                          <p className="text-base font-bold">Watch our 1 min intro</p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Badge */}
                  {badge && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="absolute top-6 right-6 bg-gradient-primary text-white px-4 py-3 rounded-xl shadow-lg"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{badge.icon || '👥'}</span>
                        <p className="text-sm font-semibold">{badge.label}</p>
                      </div>
                      <p className="text-lg font-bold">{badge.value}</p>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  {image || '💼'}
                </div>
              )}
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
