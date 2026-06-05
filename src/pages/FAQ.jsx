import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'

const FAQ = () => {
  const faqs = [
    {
      question: 'What are the prerequisites for the Software Testing course?',
      answer: 'Basic understanding of software development, programming concepts, and a strong desire to learn is sufficient. No prior testing experience is required. We welcome beginners and professionals looking to transition into QA.'
    },
    {
      question: 'How long is the course?',
      answer: 'Our comprehensive Software Testing Master Program is 10-12 weeks long with intensive training sessions. The duration can vary based on your pace and existing knowledge. We offer flexible scheduling with both full-time and part-time options.'
    },
    {
      question: 'Will I get a certificate after completion?',
      answer: 'Yes, you will receive a completion certificate from Career Catalyst Institute after successfully completing all modules and project work. This certificate validates your completion but is not an industry-recognized certification like ISTQB.'
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batch sizes with a maximum of 20-25 students per batch to ensure personalized attention and better learning outcomes for each student.'
    },
    {
      question: 'Can I access course materials offline?',
      answer: 'Course materials can be downloaded for offline access. However, live sessions and practical labs require internet connectivity. You get lifetime access to all recorded sessions and materials.'
    },
    {
      question: 'What kind of placement assistance do you provide?',
      answer: 'We provide comprehensive support including resume building, LinkedIn optimization, mock interviews, technical preparation, and job guidance. However, we do not guarantee 100% placement as job placements depend on individual performance and market conditions.'
    },
    {
      question: 'Can I join part-time?',
      answer: 'Yes, we offer both full-time and part-time batches with flexible scheduling to accommodate working professionals and students with other commitments.'
    },
    {
      question: 'What tools will I learn?',
      answer: 'You will learn industry-standard tools including JIRA, Postman, MySQL, Selenium, Playwright, Git, GitHub, and Chrome DevTools. All these tools are in high demand across the industry.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 7-day money-back guarantee if you are not satisfied with the course. Please refer to our terms and conditions for detailed information on refund policies and conditions.'
    },
    {
      question: 'How often are new batches started?',
      answer: 'We start new batches every month. Exact dates vary, so we recommend contacting us to know about upcoming batch schedules and early bird discounts.'
    },
    {
      question: 'What is the average salary for Software Testers?',
      answer: 'Entry-level Software Testers typically earn 2-3 lakhs per annum. With experience and skills, this can increase to 4-8 lakhs and beyond. Salary depends on factors like skills, experience, company, and location.'
    },
    {
      question: 'Do you provide job placements?',
      answer: 'We provide comprehensive placement assistance and career support including resume building, interviews, and job guidance. However, actual job placements depend on your performance, efforts, and market conditions. We believe in supporting your journey rather than guaranteeing outcomes.'
    },
    {
      question: 'Can I contact trainers after course completion?',
      answer: 'Yes, you can reach out to your trainers for guidance and assistance even after course completion. We provide continuous support and mentoring to help you succeed in your career.'
    },
    {
      question: 'What is the learning mode?',
      answer: 'Training is conducted through live online interactive sessions with hands-on practice. This allows you to learn from anywhere and get real-time support from trainers and peers.'
    },
    {
      question: 'Is coding knowledge required?',
      answer: 'No, coding knowledge is not required for most modules. However, some modules like Selenium automation may benefit from basic programming understanding. We provide support for beginners in all modules.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our Software Testing training program"
        image="❓"
        buttons={[
          { label: 'View FAQs', href: '#faq-section', type: 'primary' },
          { label: 'Contact Us', href: '/contact', type: 'secondary' }
        ]}
      />

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Your Questions Answered"
            subtitle="Everything you need to know about our program"
          />

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Don't see your question here? Get in touch with our team and we'll be happy to help you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                  Contact Us
                </button>
              </a>
              <a href="mailto:career.catalyst.institute.cci@gmail.com">
                <button className="px-6 py-3 bg-white dark:bg-gray-800 text-primary border-2 border-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all">
                  Send Email
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Career?"
        subtitle="Join thousands of successful students who have launched their QA careers with us"
        buttonText="Enroll Now"
        buttonHref="/contact"
      />
    </div>
  )
}

export default FAQ
