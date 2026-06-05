import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      content: 'career.catalyst.institute.cci@gmail.com',
      href: 'mailto:career.catalyst.institute.cci@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      content: '+91-8888-888-888',
      href: 'tel:+918888888888'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      content: 'Nashik, Maharashtra, India',
      href: '#'
    },
    {
      icon: FiClock,
      title: 'Support Hours',
      content: 'Monday to Sunday, 9AM to 9PM',
      href: '#'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Get In Touch With Us"
        subtitle="Have questions? We'd love to hear from you. Contact us anytime and we'll get back to you as soon as possible."
        image="📞"
        buttons={[
          { label: 'Send Message', href: '#contact-form', type: 'primary' },
          { label: 'Schedule Demo', href: '#contact-form', type: 'secondary' }
        ]}
      />

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-dark dark:text-white mb-2">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">{info.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-6">
                Let's Talk About Your Career
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're interested in our Software Testing course, want to book a free demo, or have any questions about our placement assistance program, we're here to help. Fill out the form and our team will get back to you shortly.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Free Consultation</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Talk to our counselors for free</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Personalized Guidance</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Get advice tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✓</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Quick Response</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-accent/10 border-l-4 border-accent">
                <p className="text-gray-700 dark:text-gray-200 font-medium">
                  💡 <strong>Pro Tip:</strong> The best time to reach us is between 10 AM and 8 PM for faster responses.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <div>
              <SectionTitle title="Contact Us" subtitle="Fill the form below" centered={false} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Quick Answers"
            subtitle="Frequently asked questions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'When do new batches start?',
                a: 'We run new batches every month. Contact us to know about the upcoming batch schedule and enrollment dates.'
              },
              {
                q: 'Can I get a refund if not satisfied?',
                a: 'Yes, we offer a 7-day money-back guarantee if you\'re not satisfied with the course. No questions asked.'
              },
              {
                q: 'Are there payment plans available?',
                a: 'Yes, we offer flexible payment plans to make the course affordable. Contact our team to discuss options.'
              },
              {
                q: 'Can I attend classes if I\'m working?',
                a: 'Absolutely! We offer both full-time and part-time batches with flexible schedules for working professionals.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900"
              >
                <h3 className="font-bold text-dark dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
