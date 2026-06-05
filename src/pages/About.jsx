import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import ProcessCard from '../components/ProcessCard'
import {
  FiTarget,
  FiEye,
  FiBook,
  FiUsers,
  FiCheckCircle,
  FiTrendingUp,
} from 'react-icons/fi'

const About = () => {
  const values = [
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'Committed to providing the highest quality training and education.'
    },
    {
      icon: FiUsers,
      title: 'Student-Centric',
      description: 'Focused on individual growth and personalized learning experiences.'
    },
    {
      icon: FiCheckCircle,
      title: 'Integrity',
      description: 'Transparent practices and honest communication with all stakeholders.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'Continuously updating curriculum with latest industry trends.'
    }
  ]

  const trainingProcess = [
    {
      step: 1,
      title: 'Assessment & Planning',
      description: 'We understand your current level and create a personalized learning path.',
      icon: '📋'
    },
    {
      step: 2,
      title: 'Interactive Learning',
      description: 'Engaging live sessions with hands-on practice and real-world examples.',
      icon: '🎓'
    },
    {
      step: 3,
      title: 'Project Work',
      description: 'Apply your knowledge on real projects and build a portfolio.',
      icon: '💼'
    },
    {
      step: 4,
      title: 'Career Support',
      description: 'Comprehensive guidance for interviews, resumes, and job placement.',
      icon: '🚀'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="About Career Catalyst Institute"
        subtitle="Empowering professionals to build rewarding careers in Software Testing and Quality Assurance"
        image="🎯"
        buttons={[
          { label: 'Start Learning', href: '/course', type: 'primary' },
          { label: 'Contact Us', href: '/contact', type: 'secondary' }
        ]}
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 shadow-lg"
            >
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To provide world-class Software Testing training that empowers professionals to build successful careers in Quality Assurance, equipping them with industry-relevant skills and practical knowledge.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 shadow-lg"
            >
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become the leading Software Testing training institute recognized for creating skilled QA professionals who drive quality and innovation in the software industry.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 shadow-lg"
            >
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">Our Values</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Excellence, Integrity, Student-Centric Approach, Innovation, and Continuous Improvement guide our every decision and action.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institute Story */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Journey"
            subtitle="How Career Catalyst Institute was founded"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Career Catalyst Institute was established with a singular vision: to revolutionize Software Testing education in India. Founded by experienced QA professionals and trainers, CCI emerged from the observation that there was a significant gap between what companies need and what traditional education provides.
              </p>
              <p>
                We recognized that aspirants needed not just theoretical knowledge but practical, industry-relevant training with real-world project exposure. What started as a small batch of passionate learners has now grown into a thriving community of hundreds of trained professionals working across the globe.
              </p>
              <p>
                Our commitment to excellence, practical learning, and student success has been the driving force behind our growth. We continuously evolve our curriculum, update our tools and technologies, and improve our training methodology to ensure our students are always ahead in the QA landscape.
              </p>
              <p>
                Today, Career Catalyst Institute stands as a beacon of quality training in Software Testing, with alumni working at leading companies like TCS, Infosys, Accenture, Amazon, and many other IT and non-IT organizations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Values"
            subtitle="Principles that guide everything we do"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Learning Methodology"
            subtitle="How we ensure effective and engaging learning"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-6">Live Interactive Sessions</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">💬</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Real-Time Interaction</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Direct communication with trainers and peers</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🎓</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Expert Guidance</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Learn from experienced QA professionals</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">📚</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Comprehensive Resources</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Access to notes, code samples, and materials</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-6">Practical Hands-On Training</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">💼</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Real-World Projects</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Work on actual projects from day one</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">🔧</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Industry Tools</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Master tools used by companies worldwide</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">👥</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Peer Learning</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Collaborate and learn from fellow students</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Training Process"
            subtitle="Step-by-step journey to success"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {trainingProcess.map((process, index) => (
              <ProcessCard
                key={index}
                step={process.step}
                title={process.title}
                description={process.description}
                icon={process.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Career Development Approach */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Career Development Approach"
            subtitle="We invest in your future success"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">📝</span> Resume Building
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Professional resume crafting sessions where we highlight your skills, projects, and achievements to make you stand out to recruiters.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">💼</span> LinkedIn Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Build a compelling LinkedIn profile that showcases your expertise and attracts recruiters from top companies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🎤</span> Mock Interviews
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Practice with real interview scenarios, get feedback from experts, and build confidence for actual company interviews.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🚀</span> Job Guidance
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Personalized career counseling and guidance on job search strategies, company research, and application optimization.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Career Catalyst Institute?"
        subtitle="Start your journey towards a successful career in Software Testing today"
        buttonText="Explore Courses"
        buttonHref="/course"
      />
    </div>
  )
}

export default About
