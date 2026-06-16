import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import useSiteContent from '../hooks/useSiteContent'
import { FiHelpCircle, FiMail, FiMessageCircle } from 'react-icons/fi'

const FAQ = () => {
  const { content } = useSiteContent()
  const faqs = content.faqs || []

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.22),transparent_30%)]" />
        <div className="container-custom relative z-10 py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur">
              <FiHelpCircle className="h-4 w-4" />
              Frequently asked questions
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Your Questions Answered</h1>
            <p className="mt-6 text-base leading-8 text-slate-200 md:text-lg">
              Find clear answers about training, batches, tools, placement assistance, and career support.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="faq-section" className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle title="Program FAQs" subtitle="Questions are editable from the admin FAQ tab." />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-gray-800/60 md:py-28">
        <div className="container-custom max-w-3xl text-center">
          <FiMessageCircle className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="text-3xl font-bold text-dark dark:text-white md:text-4xl">Still Have Questions?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Get in touch and our team will help you understand the course and next batch details.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="rounded-lg bg-gradient-primary px-6 py-3 font-semibold text-white shadow-lg">Contact Us</Link>
            <a href={`mailto:${content.settings?.email || 'career.catalyst.institute.cci@gmail.com'}`} className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-white px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white dark:bg-gray-900">
              <FiMail />
              Send Email
            </a>
          </div>
        </div>
      </section>

      <CTASection title="Ready To Transform Your Career?" subtitle="Join learners building practical QA skills with Career Catalyst Institute." buttonText="Enroll Now" buttonHref="/contact" />
    </div>
  )
}

export default FAQ
