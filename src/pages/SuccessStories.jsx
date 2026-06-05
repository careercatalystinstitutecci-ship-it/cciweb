import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'

const SuccessStories = () => {
  const successStories = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Tester',
      company: 'Tech Corp India',
      content: 'I was struggling to find a job after my graduation. Career Catalyst Institute provided the perfect training with real-world projects. The placement support was exceptional, and I landed a job within 2 months of completing the course. The practical knowledge I gained here is directly applicable in my current role.',
      avatar: '👨‍💼',
      achievement: 'Software Tester at Tech Corp India'
    },
    {
      name: 'Priya Sharma',
      role: 'QA Engineer',
      company: 'Digital Solutions Ltd',
      content: 'The course curriculum is well-structured and the trainers are incredibly knowledgeable. I appreciated the balance between theory and practical implementation. The mock interviews prepared me well for the real interviews. I got placed in my dream company with a 40% salary hike from my previous role.',
      avatar: '👩‍💼',
      achievement: 'QA Engineer at Digital Solutions Ltd'
    },
    {
      name: 'Amit Patel',
      role: 'Automation Tester',
      company: 'Innovation Labs',
      content: 'Transitioning from a non-tech background to QA testing seemed challenging, but the institute made it possible. The personalized mentoring and project-based learning helped me build confidence. Now I am working as an Automation Tester and earning 50% more than before. Great experience!',
      avatar: '👨‍💻',
      achievement: 'Automation Tester at Innovation Labs'
    },
    {
      name: 'Sneha Desai',
      role: 'Test Engineer',
      company: 'Cloud Tech Solutions',
      content: 'Excellent program with a focus on practical skills. The trainers have real-world experience which adds tremendous value to the learning. The placement cell was very supportive and helped me with resume building and interview preparation. I am now working as a Test Engineer with excellent career prospects.',
      avatar: '👩‍🔬',
      achievement: 'Test Engineer at Cloud Tech Solutions'
    },
    {
      name: 'Vikram Singh',
      role: 'Senior QA Analyst',
      company: 'Enterprise Solutions',
      content: 'After 2 years of experience in manual testing, I wanted to transition to automation and senior roles. This institute provided exactly what I needed - advanced automation skills and career advancement strategies. I got promoted and now lead a team of QA engineers. Highly grateful!',
      avatar: '👨‍🏫',
      achievement: 'Senior QA Analyst at Enterprise Solutions'
    },
    {
      name: 'Neha Gupta',
      role: 'QA Analyst',
      company: 'Fintech Corp',
      content: 'Perfect bridge program for career changers. I was working in a different field and wanted to enter IT. The instructors were patient and helpful. The real-world projects gave me portfolio pieces that impressed the hiring managers. Now I am working with a leading fintech company with great learning opportunities.',
      avatar: '👩‍💻',
      achievement: 'QA Analyst at Fintech Corp'
    },
    {
      name: 'Abhishek Sinha',
      role: 'Selenium Automation Expert',
      company: 'Tech Innovations',
      content: 'The Selenium and automation testing modules were comprehensive and well-designed. The trainers provided one-on-one support when I struggled with certain concepts. The career guidance helped me apply to the right companies. I now specialize in automation testing and love my job.',
      avatar: '💻',
      achievement: 'Selenium Automation Expert at Tech Innovations'
    },
    {
      name: 'Meera Kapoor',
      role: 'QA Engineer',
      company: 'Global IT Services',
      content: 'Coming from a non-IT background, I was nervous about joining the tech industry. The institute\'s supportive environment and expert mentors made all the difference. I gained not just technical skills but also confidence. Now I am successfully working as a QA Engineer at a reputed IT services company.',
      avatar: '👩‍💼',
      achievement: 'QA Engineer at Global IT Services'
    }
  ]

  const statistics = [
    { icon: '👥', number: '500+', label: 'Students Trained' },
    { icon: '🎓', number: '450+', label: 'Successfully Placed' },
    { icon: '⭐', number: '4.9/5', label: 'Average Rating' },
    { icon: '💼', number: '100+', label: 'Partner Companies' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Student Success Stories"
        subtitle="Real stories of professionals who transformed their careers with Career Catalyst Institute"
        image="🏆"
        buttons={[
          { label: 'Share Your Story', href: '/contact', type: 'primary' },
          { label: 'Join Now', href: '/course', type: 'secondary' }
        ]}
      />

      {/* Statistics */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-white"
              >
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm md:text-base opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Meet Our Successful Alumni"
            subtitle="Stories of transformation and career growth"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                    {story.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark dark:text-white">{story.name}</h3>
                    <p className="text-sm text-accent font-medium">{story.achievement}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                  "{story.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Impact"
            subtitle="The difference we make in students' lives"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 }}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg text-center"
            >
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold gradient-text mb-3">Avg Salary Growth</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">45% Increase</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">On average within first year</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg text-center"
            >
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold gradient-text mb-3">Avg Time to Job</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">3-4 Months</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">After course completion</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg text-center"
            >
              <div className="text-5xl mb-4">😊</div>
              <h3 className="text-2xl font-bold gradient-text mb-3">Student Satisfaction</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">94% Satisfied</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Based on feedback surveys</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="Ready to Write Your Success Story?"
        subtitle="Join our next batch and transform your career in Software Testing"
        buttonText="Enroll Now"
        buttonHref="/contact"
      />
    </div>
  )
}

export default SuccessStories
