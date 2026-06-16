import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiCode,
  FiCompass,
  FiFileText,
  FiLayers,
  FiMessageCircle,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'

const About = () => {
  const stats = [
    { value: '10+', label: 'Years Training Experience' },
    { value: '5000+', label: 'Learners Guided' },
    { value: '25', label: 'Students Per Batch' },
    { value: '100%', label: 'Career Support Focus' },
  ]

  const pillars = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description:
        'Make Software Testing education practical, structured, and accessible for students, freshers, and working professionals.',
    },
    {
      icon: FiCompass,
      title: 'Our Vision',
      description:
        'Build confident QA professionals who can contribute from day one with strong fundamentals, tools, and workplace readiness.',
    },
    {
      icon: FiAward,
      title: 'Our Standard',
      description:
        'Teach with clarity, keep batches personal, and update the curriculum around the skills companies actually expect.',
    },
  ]

  const values = [
    {
      icon: FiBookOpen,
      title: 'Practical First',
      description: 'Concepts are connected to assignments, tools, live examples, and real testing workflows.',
    },
    {
      icon: FiUsers,
      title: 'Personal Attention',
      description: 'Small batches help trainers understand every learner and guide them with more care.',
    },
    {
      icon: FiCheckCircle,
      title: 'Clear Guidance',
      description: 'We keep expectations transparent across learning, practice, interviews, and job search.',
    },
    {
      icon: FiTrendingUp,
      title: 'Industry Updated',
      description: 'Manual testing, API testing, database testing, Selenium, Playwright, Git, JIRA, and more.',
    },
  ]

  const process = [
    {
      icon: FiMessageCircle,
      title: 'Profile Assessment',
      description: 'We understand your background, goals, schedule, and current technical comfort level.',
    },
    {
      icon: FiLayers,
      title: 'Structured Learning',
      description: 'You move through fundamentals, tools, assignments, and guided practice in a clear sequence.',
    },
    {
      icon: FiCode,
      title: 'Project Practice',
      description: 'Hands-on work helps you build confidence with test cases, defects, APIs, databases, and automation.',
    },
    {
      icon: FiBriefcase,
      title: 'Career Preparation',
      description: 'Resume, LinkedIn, mock interviews, and job-search guidance help you present your skills well.',
    },
  ]

  const careerSupport = [
    {
      icon: FiFileText,
      title: 'Resume Building',
      description: 'Showcase your QA skills, tools, projects, and strengths in a recruiter-friendly format.',
    },
    {
      icon: FiUsers,
      title: 'Mock Interviews',
      description: 'Practice technical and HR interview questions with feedback that helps you improve.',
    },
    {
      icon: FiBriefcase,
      title: 'LinkedIn Optimization',
      description: 'Create a stronger professional profile that reflects your testing knowledge and projects.',
    },
    {
      icon: FiClock,
      title: 'Job Search Guidance',
      description: 'Learn how to research companies, apply consistently, and prepare for each opportunity.',
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary pt-16 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.24),transparent_30%)]" />

        <div className="container-custom relative z-10">
          <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 py-14 md:grid-cols-2 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur">
                <FiAward className="h-4 w-4" />
                Career-focused QA training institute
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                About Career Catalyst Institute
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
                We help learners build practical Software Testing skills through live training, real projects, expert mentorship, and career support designed for today&apos;s QA roles.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/course"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-primary shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Explore Courses
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Book Free Demo
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=700&fit=crop"
                  alt="Students learning in a professional training session"
                  className="h-[340px] w-full rounded-[1.5rem] object-cover md:h-[500px]"
                />
              </div>

              <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-2 gap-3 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur dark:bg-gray-900/95 sm:left-8 sm:right-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-slate-50 p-3 text-center dark:bg-gray-800">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-gray-100 bg-white p-7 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark dark:text-white">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">{pillar.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-gray-800/60 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <SectionTitle
                title="Built For Real Career Outcomes"
                subtitle="Career Catalyst Institute started with a simple observation: learners needed more than theory. They needed guided practice, workplace tools, and confidence."
                centered={false}
              />
              <div className="space-y-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
                <p>
                  Our training approach connects every topic to the practical work of a QA professional, from writing test cases and reporting defects to testing APIs, databases, and automation flows.
                </p>
                <p>
                  We keep the learning path structured and supportive so beginners can build strong fundamentals while working professionals can upgrade their skills with modern tools.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=680&fit=crop"
                alt="Mentor guiding learners during a technology class"
                className="h-[420px] w-full rounded-3xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-7 left-6 right-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">Our promise</p>
                <p className="mt-2 text-xl font-bold text-dark dark:text-white">
                  Learn clearly. Practice deeply. Prepare confidently.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="Values That Shape Every Batch"
            subtitle="The details behind our training experience are simple: relevance, consistency, and real support."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                  <Icon className="h-9 w-9 text-primary" />
                  <h3 className="mt-5 text-xl font-bold text-dark dark:text-white">{value.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 dark:from-gray-800 dark:to-gray-900 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="How We Train"
            subtitle="A focused journey from learning basics to presenting yourself for QA opportunities."
          />

          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-4xl font-black text-gray-100 dark:text-gray-700">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-dark dark:text-white">{step.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionTitle
                title="Career Support With Direction"
                subtitle="We help you translate training into a clear professional story, so recruiters can quickly understand your skills."
                centered={false}
              />
              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 text-gray-700 dark:text-gray-200">
                Placement assistance is provided through guidance, preparation, and support. Final job outcomes depend on individual performance, consistency, market demand, and interview results.
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {careerSupport.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.45 }}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-dark dark:text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{item.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready To Build Your QA Career?"
        subtitle="Join a practical Software Testing program designed around skills, projects, mentorship, and interview preparation."
        buttonText="Explore Courses"
        buttonHref="/course"
      />
    </div>
  )
}

export default About
