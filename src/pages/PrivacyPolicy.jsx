import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Introduction',
      content: `Career Catalyst Institute (CCI) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.`
    },
    {
      title: '1. Information We Collect',
      content: `We may collect information about you in a variety of ways. The information we may collect on the Site includes:
      
      Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
      
      Financial Data: Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
      
      Data From Social Networks: User information from social networks, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
      
      Mobile Device Data: Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.
      
      Third-Party Data: Information from third parties, including but not limited to information from our partners, data brokers, and public databases.`
    },
    {
      title: '2. Use of Your Information',
      content: `Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
      
      • Create and manage your account
      • Email you regarding your account or order
      • Fulfill and send orders, and send related information
      • Process your transactions and send related information
      • Generate a personal profile about you
      • Respond to your inquiries, comments, questions, and requests
      • Offer new products, services, and promotions to you
      • Send promotional communications
      • Monitor and analyze usage and trends
      • Place you in our customer database
      • Develop, improve, and target advertisements and marketing`
    },
    {
      title: '3. Disclosure of Your Information',
      content: `We may share information we have collected about you in certain circumstances:
      
      • By Law or to Protect Rights: If we believe the release of information is necessary to comply with the law.
      • Third-Party Service Providers: We may share your information with third parties that perform services for us.
      • Business Transfers: If Career Catalyst Institute is involved in a merger, acquisition, or sale of all or a portion of its assets.
      • Other Disclosures: We may disclose your information when disclosure is in the public interest.`
    },
    {
      title: '4. Security of Your Information',
      content: `We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.`
    },
    {
      title: '5. Contact Us',
      content: `If you have questions or comments about this Privacy Policy, please contact us at:
      
      Email: career.catalyst.institute.cci@gmail.com
      Phone: +91-8888-888-888
      Address: Nashik, Maharashtra, India`
    }
  ]

  return (
    <div>
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="text-accent hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-300 text-lg">
              Learn how Career Catalyst Institute protects your personal information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert max-w-none space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sections.length * 0.1 }}
              className="p-6 md:p-8 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Last Updated:</strong> December 2024
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                This Privacy Policy is subject to change without notice. We recommend that you review this Privacy Policy periodically to stay informed about how we protect the personal information we collect.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
