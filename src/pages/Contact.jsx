import React from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import useSiteContent from '../hooks/useSiteContent'
import { FiCheckCircle, FiClock, FiMail, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi'

const Contact = () => {
  const { content } = useSiteContent()
  const settings = content.settings
  const contactFaqs = content.contactFaqs || []
  const contactInfo = [
    { icon: FiMail, title: 'Email', content: settings.email, href: `mailto:${settings.email}` },
    { icon: FiPhone, title: 'Phone', content: settings.phone, href: `tel:${settings.phone.replace(/\D/g, '')}` },
    { icon: FiMapPin, title: 'Location', content: settings.location, href: '#' },
    { icon: FiClock, title: 'Support Hours', content: settings.supportHours, href: '#' },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.22),transparent_30%)]" />
        <div className="container-custom relative z-10 grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur">
              <FiMessageCircle className="h-4 w-4" />
              Talk to our team
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Get In Touch With Us</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Ask about batches, course roadmap, demo sessions, payment options, or placement support. We will guide you clearly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact-form" className="rounded-lg bg-white px-6 py-3 text-center font-bold text-primary shadow-xl transition-all hover:-translate-y-0.5">Send Message</a>
              <a href={`tel:${settings.phone.replace(/\D/g, '')}`} className="rounded-lg border border-white/30 px-6 py-3 text-center font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10">Call Now</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=900&h=720&fit=crop" alt="Contact Career Catalyst Institute" className="h-[360px] w-full rounded-3xl object-cover shadow-2xl md:h-[520px]" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a key={info.title} href={info.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-dark dark:text-white">{info.title}</h3>
                  <p className="mt-2 break-words text-gray-600 dark:text-gray-300">{info.content}</p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-slate-50 py-20 dark:bg-gray-800/60 md:py-28">
        <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
            <SectionTitle title="Let's Talk About Your Career" subtitle="Fill the form and our team will get back to you with the right guidance." centered={false} />
            <div className="space-y-4">
              {[
                ['Free Consultation', 'Talk to our counselors before joining.'],
                ['Personalized Guidance', 'Understand which QA path is right for you.'],
                ['Quick Response', 'We try to respond within 24 hours.'],
              ].map(([title, text]) => (
                <div key={title} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm dark:bg-gray-800">
                  <FiCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-bold text-dark dark:text-white">{title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div>
            <SectionTitle title="Contact Us" subtitle="Send your enquiry" centered={false} />
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle title="Quick Answers" subtitle="These contact page FAQs are editable from admin." />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {contactFaqs.map((faq, index) => (
              <motion.div key={`${faq.question}-${index}`} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 p-6 dark:from-gray-800 dark:to-gray-900">
                <h3 className="font-bold text-dark dark:text-white">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
