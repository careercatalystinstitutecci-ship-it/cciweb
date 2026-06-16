import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ModuleCard from '../components/ModuleCard'
import CTASection from '../components/CTASection'
import ToolCard from '../components/ToolCard'
import CourseCard from '../components/CourseCard'
import useSiteContent from '../hooks/useSiteContent'
import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiDatabase,
  FiFileText,
  FiMonitor,
  FiTarget,
  FiTool,
  FiUsers,
} from 'react-icons/fi'

const Course = () => {
  const { content } = useSiteContent()

  const modules = [
    {
      number: 1,
      title: 'Software Testing Fundamentals',
      duration: '2 weeks',
      topics: ['Testing Basics', 'SDLC & STLC', 'Testing Levels', 'Testing Types', 'Quality Assurance Concepts'],
    },
    {
      number: 2,
      title: 'Manual Testing',
      duration: '2 weeks',
      topics: ['Test Case Design', 'Test Execution', 'Bug Reporting', 'Test Documentation', 'Defect Management'],
    },
    {
      number: 3,
      title: 'Agile Testing',
      duration: '1.5 weeks',
      topics: ['Agile Methodology', 'Sprint Planning', 'User Stories', 'Testing in Sprints', 'Continuous Integration'],
    },
    {
      number: 4,
      title: 'JIRA & Project Management',
      duration: '1.5 weeks',
      topics: ['JIRA Setup', 'Issue Creation', 'Bug Tracking', 'Agile Board', 'Reporting & Analytics'],
    },
    {
      number: 5,
      title: 'SQL & Database Testing',
      duration: '2 weeks',
      topics: ['SQL Queries', 'Database Concepts', 'Data Validation', 'Database Testing', 'Performance Testing'],
    },
    {
      number: 6,
      title: 'API Testing',
      duration: '2 weeks',
      topics: ['REST APIs', 'Postman Tool', 'API Testing', 'Authentication', 'Response Validation'],
    },
    {
      number: 7,
      title: 'Selenium Automation',
      duration: '3 weeks',
      topics: ['Selenium Basics', 'Locators', 'Web Driver', 'Test Automation', 'Framework Development'],
    },
    {
      number: 8,
      title: 'Playwright Framework',
      duration: '2.5 weeks',
      topics: ['Playwright Basics', 'Locators & Selectors', 'Actions', 'Test Framework', 'Cross-browser Testing'],
    },
    {
      number: 9,
      title: 'Real-Time Project',
      duration: '2 weeks',
      topics: ['Live Project', 'Team Collaboration', 'Project Delivery', 'Portfolio Building', 'Career Guidance'],
    },
  ]

  const tools = [
    { icon: 'JR', name: 'JIRA' },
    { icon: 'PM', name: 'Postman' },
    { icon: 'DB', name: 'MySQL' },
    { icon: 'SE', name: 'Selenium' },
    { icon: 'PW', name: 'Playwright' },
    { icon: 'GT', name: 'Git' },
    { icon: 'GH', name: 'GitHub' },
    { icon: 'CD', name: 'Chrome DevTools' },
  ]

  const courseHighlights = [
    { icon: FiClock, title: '10-12 Weeks', description: 'A complete job-focused QA program with structured weekly progress.' },
    { icon: FiUsers, title: 'Small Batches', description: 'Limited batch size for better trainer attention and doubt solving.' },
    { icon: FiMonitor, title: 'Live Online Training', description: 'Interactive sessions with practical demonstrations and assignments.' },
    { icon: FiBriefcase, title: 'Real Projects', description: 'Practice on realistic workflows to build portfolio-ready experience.' },
    { icon: FiBookOpen, title: 'Learning Resources', description: 'Notes, examples, assignments, and reusable practice material.' },
    { icon: FiAward, title: 'Completion Certificate', description: 'Institute certificate after successful completion of modules and projects.' },
  ]

  const outcomes = [
    'Write professional test cases, scenarios, and defect reports',
    'Understand SDLC, STLC, Agile ceremonies, and QA documentation',
    'Perform API testing with Postman and validate responses confidently',
    'Use SQL queries for database testing and data validation',
    'Build automation basics with Selenium and Playwright frameworks',
    'Use JIRA, Git, GitHub, and browser tools in real project workflows',
    'Prepare for technical interviews with practical QA explanations',
    'Present projects, resume, and LinkedIn profile more professionally',
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.25),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.22),transparent_30%)]" />

        <div className="container-custom relative z-10">
          <div className="grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur">
                <FiTarget className="h-4 w-4" />
                Software Testing career program
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Master Software Testing & Quality Assurance
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
                Learn Manual Testing, API Testing, Database Testing, Selenium, Playwright, JIRA, and real project workflows through a professional course designed for job readiness.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-primary shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl">
                  Enroll Now
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10">
                  Schedule Demo
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {[
                  ['9+', 'Modules'],
                  ['Live', 'Training'],
                  ['Project', 'Practice'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                    <p className="text-2xl font-black text-white">{value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=950&h=760&fit=crop"
                alt="Professional software testing course"
                className="h-[360px] w-full rounded-3xl object-cover shadow-2xl md:h-[520px]"
              />
              <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-white/20 bg-white p-5 shadow-2xl dark:bg-gray-900">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <FiFileText className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-2 text-xs font-bold text-gray-600 dark:text-gray-300">Test Cases</p>
                  </div>
                  <div>
                    <FiDatabase className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-2 text-xs font-bold text-gray-600 dark:text-gray-300">SQL + API</p>
                  </div>
                  <div>
                    <FiTool className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-2 text-xs font-bold text-gray-600 dark:text-gray-300">Automation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="Available Courses"
            subtitle="These course cards are managed from the admin dashboard. Add titles, duration, salary text, features, and now images too."
          />

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {(content.courses || []).map((course, index) => (
              <CourseCard
                key={`${course.title}-${index}`}
                title={course.title}
                icon={course.icon}
                duration={course.duration}
                modules={course.modules}
                features={course.features || []}
                price={course.price}
                imageUrl={course.imageUrl}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-gray-800/60 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="Why This Course Works"
            subtitle="A professional learning path with practical sessions, focused mentoring, and career preparation."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courseHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-dark dark:text-white">{highlight.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{highlight.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="Complete Course Curriculum"
            subtitle="9 modules covering the practical skills expected from modern QA professionals."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.number}
                number={module.number}
                title={module.title}
                duration={module.duration}
                topics={module.topics}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-dark py-20 md:py-28">
        <div className="container-custom">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Industry Tools We Teach</h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300 md:text-xl">
              Practice with tools used by QA teams in real delivery environments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {tools.map((tool, index) => (
              <ToolCard key={tool.name} icon={tool.icon} name={tool.name} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="What You'll Learn"
            subtitle="By the end, you should be able to explain, practice, and present core QA skills with confidence."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <FiCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                <p className="font-medium leading-7 text-gray-700 dark:text-gray-200">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 dark:from-gray-800 dark:to-gray-900 md:py-28">
        <div className="container-custom">
          <SectionTitle
            title="Enrollment Details"
            subtitle="Everything you need to know before joining the next batch."
          />

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-primary/20 bg-white p-7 shadow-lg dark:bg-gray-800"
            >
              <h3 className="text-2xl font-bold text-dark dark:text-white">Prerequisites</h3>
              <ul className="mt-5 space-y-3 text-gray-600 dark:text-gray-300">
                {['Basic computer literacy', 'Interest in software quality', 'No prior testing experience required', 'Consistency for assignments and practice'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-accent/20 bg-white p-7 shadow-lg dark:bg-gray-800"
            >
              <h3 className="text-2xl font-bold text-dark dark:text-white">Training Mode</h3>
              <ul className="mt-5 space-y-3 text-gray-600 dark:text-gray-300">
                {['Live online interactive sessions', 'Hands-on tool practice', 'Project assignments and reviews', 'Resume, LinkedIn, and interview preparation'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready To Start Your Testing Journey?"
        subtitle="Book a demo, understand the roadmap, and join a batch built around practical QA career skills."
        buttonText="Enroll Now"
        buttonHref="/contact"
      />
    </div>
  )
}

export default Course
