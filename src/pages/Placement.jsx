import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import useSiteContent from '../hooks/useSiteContent'
import { FiAlertCircle, FiBriefcase, FiCheckCircle, FiFileText, FiMessageCircle, FiSearch, FiTarget, FiUsers } from 'react-icons/fi'

const icons = [FiFileText, FiUsers, FiMessageCircle, FiSearch, FiBriefcase, FiTarget]

const Placement = () => {
  const { content } = useSiteContent()
  const placement = content.placement || { process: [], services: [] }

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.22),transparent_30%)]" />
        <div className="container-custom relative z-10 grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur">
              <FiBriefcase className="h-4 w-4" />
              Career support program
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Placement Assistance & Career Support
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Get structured support for resume building, LinkedIn, interview preparation, job search planning, and confidence-building conversations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/course" className="rounded-lg bg-white px-6 py-3 text-center font-bold text-primary shadow-xl transition-all hover:-translate-y-0.5">Explore Courses</Link>
              <Link to="/contact" className="rounded-lg border border-white/30 px-6 py-3 text-center font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10">Talk To Counselor</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&h=720&fit=crop" alt="Career guidance and placement support" className="h-[360px] w-full rounded-3xl object-cover shadow-2xl md:h-[520px]" />
            <div className="absolute -bottom-6 left-5 right-5 rounded-2xl bg-white p-5 shadow-2xl dark:bg-gray-900">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Support promise</p>
              <p className="mt-2 text-xl font-bold text-dark dark:text-white">Guidance, preparation, and practical next steps.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-l-4 border-yellow-400 bg-yellow-50 py-8 dark:bg-yellow-900/20">
        <div className="container-custom flex gap-4">
          <FiAlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-yellow-600" />
          <p className="leading-7 text-gray-700 dark:text-gray-300">
            Career Catalyst Institute provides placement assistance and career support. Final job outcomes depend on individual performance, effort, market conditions, and company requirements.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle title="Our Placement Process" subtitle="A clear step-by-step path from preparation to applications." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(placement.process || []).map((item, index) => {
              const Icon = icons[index % icons.length]
              return (
                <motion.div key={`${item.title}-${index}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-black text-primary">STEP {index + 1}</span>
                  <h3 className="mt-2 text-xl font-bold text-dark dark:text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-gray-800/60 md:py-28">
        <div className="container-custom">
          <SectionTitle title="Career Services" subtitle="Editable support cards managed from the admin dashboard." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {(placement.services || []).map((service, index) => (
              <motion.div key={`${service.title}-${index}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="rounded-2xl bg-white p-7 shadow-md dark:bg-gray-800">
                <FiCheckCircle className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-2xl font-bold text-dark dark:text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Start Your Path To Success" subtitle="Join the training program and get access to structured career support." buttonText="Enroll Now" buttonHref="/contact" />
    </div>
  )
}

export default Placement
