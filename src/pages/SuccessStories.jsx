import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import useSiteContent from '../hooks/useSiteContent'
import { FiAward, FiBriefcase, FiStar, FiTrendingUp, FiUsers } from 'react-icons/fi'

const SuccessStories = () => {
  const { content } = useSiteContent()
  const stories = content.successStories || []
  const statistics = [
    { number: '500+', label: 'Students Guided', icon: FiUsers },
    { number: '4.9/5', label: 'Average Rating', icon: FiStar },
    { number: '100+', label: 'Hiring Targets', icon: FiBriefcase },
    { number: 'Career', label: 'Growth Focus', icon: FiTrendingUp },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.22),transparent_30%)]" />
        <div className="container-custom relative z-10 grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur">
              <FiAward className="h-4 w-4" />
              Alumni outcomes
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Student Success Stories
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Real learner journeys showing how practical training, mentoring, and career preparation can create a stronger QA career path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="rounded-lg bg-white px-6 py-3 text-center font-bold text-primary shadow-xl transition-all hover:-translate-y-0.5">Share Your Story</Link>
              <Link to="/course" className="rounded-lg border border-white/30 px-6 py-3 text-center font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10">Join Next Batch</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=720&fit=crop" alt="Successful students and mentors" className="h-[360px] w-full rounded-3xl object-cover shadow-2xl md:h-[520px]" />
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-accent py-12 md:py-16">
        <div className="container-custom grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {statistics.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.08 }} className="text-white">
                <Icon className="mx-auto mb-3 h-7 w-7" />
                <p className="text-3xl font-black md:text-4xl">{stat.number}</p>
                <p className="mt-1 text-sm opacity-90 md:text-base">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle title="Meet Our Successful Alumni" subtitle="These story cards are fully editable from the admin dashboard." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {stories.map((story, index) => (
              <motion.div key={`${story.name}-${index}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
                {story.imageUrl && <img src={story.imageUrl} alt={story.name} className="h-56 w-full object-cover" loading="lazy" />}
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-lg font-black text-white">
                      {(story.name || 'S').slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-dark dark:text-white">{story.name}</h3>
                      <p className="text-sm font-semibold text-accent">{story.achievement || `${story.role} at ${story.company}`}</p>
                    </div>
                  </div>
                  <p className="leading-7 text-gray-600 dark:text-gray-300">{story.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-gray-800/60 md:py-28">
        <div className="container-custom">
          <SectionTitle title="Our Impact" subtitle="Professional learning support designed around measurable career progress." />
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              ['Practical Skills', 'Hands-on assignments and projects'],
              ['Career Readiness', 'Resume, LinkedIn, and interviews'],
              ['Confidence', 'Mentor feedback and guided practice'],
            ].map(([title, text], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} className="rounded-2xl bg-white p-7 text-center shadow-md dark:bg-gray-800">
                <h3 className="text-2xl font-bold gradient-text">{title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready To Write Your Success Story?" subtitle="Join our next batch and build practical QA career skills." buttonText="Enroll Now" buttonHref="/contact" />
    </div>
  )
}

export default SuccessStories
