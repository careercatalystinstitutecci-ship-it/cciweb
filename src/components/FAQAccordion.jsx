import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 md:px-8 md:py-5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-between transition-colors text-left"
          >
            <span className="font-semibold text-dark dark:text-white text-base md:text-lg pr-4">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <FiChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700"
              >
                <p className="px-6 py-4 md:px-8 md:py-5 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default FAQAccordion
