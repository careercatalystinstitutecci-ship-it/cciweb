import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProcessCard from '../components/ProcessCard'
import CTASection from '../components/CTASection'

const Placement = () => {
  const placementProcess = [
    {
      step: 1,
      title: 'Resume Building',
      description: 'Our expert counselors help you create a professional resume that highlights your skills, projects, and achievements.',
      icon: '📄'
    },
    {
      step: 2,
      title: 'LinkedIn Optimization',
      description: 'Build a compelling LinkedIn profile with proper headline, summary, and skills to attract recruiters.',
      icon: '💼'
    },
    {
      step: 3,
      title: 'Technical Preparation',
      description: 'Intensive sessions covering core testing concepts, coding interviews, and technical troubleshooting.',
      icon: '📚'
    },
    {
      step: 4,
      title: 'Mock Interviews',
      description: 'Practice real interview scenarios with our experienced trainers and receive constructive feedback.',
      icon: '🎤'
    },
    {
      step: 5,
      title: 'Job Guidance',
      description: 'Personalized guidance on job search strategies, company research, and application optimization.',
      icon: '🔍'
    },
    {
      step: 6,
      title: 'Continuous Support',
      description: 'Ongoing mentoring and support even after course completion to help you succeed in your new role.',
      icon: '🤝'
    }
  ]

  const resources = [
    {
      icon: '📋',
      title: 'Resume Writing Workshop',
      description: 'Learn how to create an ATS-friendly resume that gets noticed by recruiters.'
    },
    {
      icon: '🎓',
      title: 'Interview Masterclass',
      description: 'Master behavioral and technical interviews with expert guidance and practice.'
    },
    {
      icon: '🔗',
      title: 'LinkedIn Networking',
      description: 'Build a strong professional network and learn outreach strategies.'
    },
    {
      icon: '💬',
      title: 'Negotiation Skills',
      description: 'Learn to negotiate salary and benefits effectively.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Placement Assistance & Career Support"
        subtitle="We support your journey towards employment with comprehensive career guidance and job placement assistance"
        image="🚀"
        buttons={[
          { label: 'Start Learning', href: '/course', type: 'primary' },
          { label: 'Contact Us', href: '/contact', type: 'secondary' }
        ]}
      />

      {/* Important Notice */}
      <section className="py-8 md:py-12 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400">
        <div className="container-custom">
          <div className="flex gap-4">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <h3 className="font-bold text-dark dark:text-white mb-2">Important Note</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Career Catalyst Institute provides comprehensive placement assistance and career support. However, job placements ultimately depend on your performance, market conditions, and individual efforts. We believe in supporting your journey rather than guaranteeing outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Placement Process"
            subtitle="Step-by-step guidance from training to employment"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {placementProcess.map((process, index) => (
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

      {/* Key Services */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Key Services"
            subtitle="Comprehensive support for your career success"
          />

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">📄</span> Resume Building
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Our expert resume writers help you create a compelling resume that:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Highlights your testing skills and experience</li>
                  <li>• Showcases your real-world projects</li>
                  <li>• Is ATS-optimized for applicant tracking systems</li>
                  <li>• Impresses hiring managers instantly</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🎤</span> Interview Preparation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Intensive interview preparation sessions including:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Mock interviews with real scenarios</li>
                  <li>• Behavioral question practice</li>
                  <li>• Technical question guidance</li>
                  <li>• Body language and presentation tips</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">💼</span> LinkedIn Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Build a professional LinkedIn presence that attracts recruiters:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Professional headline optimization</li>
                  <li>• Compelling summary writing</li>
                  <li>• Skills endorsement strategy</li>
                  <li>• Networking outreach guidance</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🔍</span> Job Search Guidance
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Strategic job search support including:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li>• Job portal navigation and filtering</li>
                  <li>• Company research strategies</li>
                  <li>• Application optimization</li>
                  <li>• Salary negotiation tips</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Additional Resources"
            subtitle="Everything you need to succeed"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-bold text-dark dark:text-white mb-3">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Placement FAQs"
            subtitle="Common questions about placement assistance"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How long does it take to get a job after course completion?',
                a: 'It varies from person to person. Some students get jobs within 1-2 months, while others may take 3-6 months depending on their effort, market conditions, and job requirements.'
              },
              {
                q: 'Do you guarantee 100% placement?',
                a: 'No, we do not guarantee 100% placement as job placement depends on your individual performance, efforts, market conditions, and company requirements. However, we provide comprehensive support to maximize your chances.'
              },
              {
                q: 'Can I contact trainers after course completion?',
                a: 'Yes, we provide continuous support and mentoring even after course completion. You can reach out to your trainers for guidance and assistance.'
              },
              {
                q: 'What is the average salary for Software Testers?',
                a: 'Entry-level Software Testers typically earn 2-3 lakhs per annum. With experience, this increases to 4-8 lakhs and beyond. Salary depends on skills, experience, and company.'
              },
              {
                q: 'Do you help with salary negotiation?',
                a: 'Yes, we provide guidance on negotiation skills and help you understand market rates for different roles and experience levels.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
              >
                <h3 className="font-bold text-dark dark:text-white mb-2">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Start Your Path to Success"
        subtitle="Enroll now and get access to our complete placement assistance program"
        buttonText="Enroll Now"
        buttonHref="/contact"
      />
    </div>
  )
}

export default Placement
