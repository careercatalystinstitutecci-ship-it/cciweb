import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ModuleCard from '../components/ModuleCard'
import CTASection from '../components/CTASection'
import ToolCard from '../components/ToolCard'

const Course = () => {
  const modules = [
    {
      number: 1,
      title: 'Software Testing Fundamentals',
      duration: '2 weeks',
      topics: ['Testing Basics', 'SDLC & STLC', 'Testing Levels', 'Testing Types', 'Quality Assurance Concepts']
    },
    {
      number: 2,
      title: 'Manual Testing',
      duration: '2 weeks',
      topics: ['Test Case Design', 'Test Execution', 'Bug Reporting', 'Test Documentation', 'Defect Management']
    },
    {
      number: 3,
      title: 'Agile Testing',
      duration: '1.5 weeks',
      topics: ['Agile Methodology', 'Sprint Planning', 'User Stories', 'Testing in Sprints', 'Continuous Integration']
    },
    {
      number: 4,
      title: 'JIRA & Project Management',
      duration: '1.5 weeks',
      topics: ['JIRA Setup', 'Issue Creation', 'Bug Tracking', 'Agile Board', 'Reporting & Analytics']
    },
    {
      number: 5,
      title: 'SQL & Database Testing',
      duration: '2 weeks',
      topics: ['SQL Queries', 'Database Concepts', 'Data Validation', 'Database Testing', 'Performance Testing']
    },
    {
      number: 6,
      title: 'API Testing',
      duration: '2 weeks',
      topics: ['REST APIs', 'Postman Tool', 'API Testing', 'Authentication', 'Response Validation']
    },
    {
      number: 7,
      title: 'Selenium Automation',
      duration: '3 weeks',
      topics: ['Selenium Basics', 'Locators', 'Web Driver', 'Test Automation', 'Framework Development']
    },
    {
      number: 8,
      title: 'Playwright Framework',
      duration: '2.5 weeks',
      topics: ['Playwright Basics', 'Locators & Selectors', 'Actions', 'Test Framework', 'Cross-browser Testing']
    },
    {
      number: 9,
      title: 'Real-Time Project',
      duration: '2 weeks',
      topics: ['Live Project', 'Team Collaboration', 'Project Delivery', 'Portfolio Building', 'Career Guidance']
    }
  ]

  const tools = [
    { icon: '🔧', name: 'JIRA' },
    { icon: '📮', name: 'Postman' },
    { icon: '💾', name: 'MySQL' },
    { icon: '🤖', name: 'Selenium' },
    { icon: '🎭', name: 'Playwright' },
    { icon: '📦', name: 'Git' },
    { icon: '🐱', name: 'GitHub' },
    { icon: '🔍', name: 'Chrome DevTools' }
  ]

  const courseHighlights = [
    { icon: '⏱️', title: '10-12 Weeks', description: 'Comprehensive program covering all aspects of Software Testing' },
    { icon: '👥', title: 'Small Batches', description: 'Maximum 20-25 students for personalized attention' },
    { icon: '📚', title: 'Flexible Timing', description: 'Full-time and part-time batches available' },
    { icon: '💼', title: 'Real Projects', description: 'Work on live projects to build your portfolio' },
    { icon: '📖', title: 'Lifetime Access', description: 'Access to course materials and resources forever' },
    { icon: '🎓', title: 'Certificate', description: 'Institute completion certificate after course completion' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Master Software Testing & Quality Assurance"
        subtitle="Comprehensive 10-12 week program covering Manual Testing, Automation, API Testing, Database Testing, and more"
        image="🎓"
        buttons={[
          { label: 'Enroll Now', href: '/contact', type: 'primary' },
          { label: 'Schedule Demo', href: '#demo', type: 'secondary' }
        ]}
      />

      {/* Course Highlights */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Why Our Course?"
            subtitle="What makes our training program unique"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courseHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 shadow-lg text-center"
              >
                <p className="text-4xl mb-3">{highlight.icon}</p>
                <h3 className="text-xl font-bold text-dark dark:text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Complete Course Curriculum"
            subtitle="9 comprehensive modules covering all aspects of modern testing"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={index}
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

      {/* Tools & Technologies */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Industry Tools We Teach"
            subtitle="Master the tools used by professional QA engineers"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {tools.map((tool, index) => (
              <ToolCard
                key={index}
                icon={tool.icon}
                name={tool.name}
                delay={index * 0.05}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20"
          >
            <h3 className="text-2xl font-bold text-dark dark:text-white mb-3">Why These Tools?</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Every tool in our curriculum is carefully selected based on current industry demand and job requirements. We ensure you learn the same tools used by leading companies, making you immediately job-ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="What You'll Learn"
            subtitle="Key competencies developed during the course"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              'Manual Testing - Test case creation, execution, and documentation',
              'Automation Testing - Selenium and Playwright framework development',
              'API Testing - RESTful API testing using Postman',
              'Database Testing - SQL queries and database validation',
              'Agile Testing - Testing in Agile environments and sprint planning',
              'JIRA - Bug tracking and project management',
              'Performance Testing - Load and stress testing concepts',
              'Career Readiness - Interview preparation and professional development'
            ].map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg flex items-start gap-4"
              >
                <span className="text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 dark:text-gray-200 font-medium">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Details */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Enrollment Details"
            subtitle="Important information about course enrollment"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border-l-4 border-primary"
            >
              <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Prerequisites</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Basic computer literacy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Understanding of SDLC concepts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>No coding experience required</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Passion to learn and grow</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg border-l-4 border-accent"
            >
              <h3 className="text-xl font-bold text-dark dark:text-white mb-4">Mode of Training</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Live online interactive sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Hands-on coding practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Real-world project assignments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Lifetime access to resources</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Testing Journey?"
        subtitle="Limited seats available. Enroll now and transform your career"
        buttonText="Enroll Now"
        buttonHref="/contact"
      />
    </div>
  )
}

export default Course
