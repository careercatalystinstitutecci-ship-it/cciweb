import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import CourseCard from '../components/CourseCard'
import PopularCourses from '../components/PopularCourses'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'
import ContactForm from '../components/ContactForm'
import SectionTitle from '../components/SectionTitle'
import CTASection from '../components/CTASection'
import ToolCard from '../components/ToolCard'
import CareerCard from '../components/CareerCard'
import StatsCounter from '../components/StatsCounter'
import {
  FiBookOpen,
  FiUsers,
  FiTarget,
  FiAward,
  FiBriefcase,
  FiCheckCircle,
  FiTrendingUp,
  FiCode,
} from 'react-icons/fi'

const Home = () => {
  // Add CSS for curriculum carousel
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      .curriculum-swiper-slide {
        height: auto !important;
        display: flex !important;
        align-items: stretch !important;
        padding-bottom: 50px !important;
      }
      .curriculum-swiper-slide > div {
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
      }
      .curriculum-swiper-slide ul.space-y-2 {
        display: block !important;
        margin-top: 16px !important;
      }
      .curriculum-swiper-slide > div > div > ul {
        display: block !important;
      }
      .swiper-button-prev-curriculum,
      .swiper-button-next-curriculum {
        position: absolute !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 10 !important;
        width: 40px !important;
        height: 40px !important;
        background-color: #6366f1 !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        color: white !important;
        cursor: pointer !important;
        font-size: 18px !important;
        transition: all 0.3s ease !important;
        border: none !important;
        padding: 0 !important;
      }
      .swiper-button-prev-curriculum {
        left: -60px !important;
      }
      .swiper-button-next-curriculum {
        right: -60px !important;
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const features = [
    {
      icon: FiBookOpen,
      title: 'Practical Learning',
      description: 'Hands-on training with real-world projects and live coding sessions for better understanding.'
    },
    {
      icon: FiTarget,
      title: 'Industry Relevant',
      description: 'Curriculum designed by industry experts covering the latest testing tools and methodologies.'
    },
    {
      icon: FiUsers,
      title: 'Expert Guidance',
      description: 'Learn from experienced QA professionals with years of industry experience.'
    },
    {
      icon: FiAward,
      title: 'Placement Assistance',
      description: 'Comprehensive career support and guidance to help you land your dream job.'
    },
    {
      icon: FiCheckCircle,
      title: 'Interview Preparation',
      description: 'Mock interviews and technical preparation to boost your confidence.'
    },
    {
      icon: FiBriefcase,
      title: 'Career Guidance',
      description: 'One-on-one mentoring and career counseling for personalized guidance.'
    }
  ]

  const whyChoose = [
    {
      icon: '🎯',
      title: 'Dedicated Software Testing Focus',
      description: 'Complete specialization in Software Testing & QA with no diluted content.'
    },
    {
      icon: '💻',
      title: 'Real-Time Projects',
      description: 'Work on live projects and build a portfolio that impresses employers.'
    },
    {
      icon: '📚',
      title: 'Interview Preparation',
      description: 'Dedicated sessions for interview preparation and technical knowledge.'
    },
    {
      icon: '📄',
      title: 'Resume Building',
      description: 'Professional resume writing help to showcase your skills effectively.'
    },
    {
      icon: '🚀',
      title: 'Career Guidance',
      description: 'Personalized career path guidance and continuous mentoring support.'
    },
    {
      icon: '✅',
      title: 'Practical Assignments',
      description: 'Weekly assignments and project work for continuous skill development.'
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

  const careers = [
    { icon: '👨‍💼', title: 'Software Tester', description: 'Entry-level position focusing on manual and automation testing.' },
    { icon: '⚙️', title: 'QA Engineer', description: 'Mid-level role managing quality assurance processes and test strategies.' },
    { icon: '🤖', title: 'Automation Tester', description: 'Specialized in automation script development and automation frameworks.' },
    { icon: '✏️', title: 'Manual Tester', description: 'Focus on manual testing methodologies and test case development.' },
    { icon: '📊', title: 'QA Analyst', description: 'Analyzing quality metrics and implementing process improvements.' },
    { icon: '🔬', title: 'Test Engineer', description: 'Design and develop testing frameworks and testing infrastructure.' }
  ]

  const faqs = [
    {
      question: 'What are the prerequisites for the Software Testing course?',
      answer: 'Basic understanding of software development, programming concepts, and a strong desire to learn is sufficient. No prior testing experience required. We welcome beginners and professionals looking to transition into QA.'
    },
    {
      question: 'How long is the course?',
      answer: 'Our comprehensive Software Testing Master Program is 8-12 weeks long with intensive training sessions. The duration can vary based on your pace and existing knowledge.'
    },
    {
      question: 'Will I get a certificate after completion?',
      answer: 'Yes, you will receive a completion certificate from Career Catalyst Institute after successfully completing all modules and project work. However, this is not an industry-recognized certification but an institute completion certificate.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'We offer a 7-day money-back guarantee if you are not satisfied with the course. Please refer to our terms and conditions for detailed information on refund policies.'
    },
    {
      question: 'Can I access course materials offline?',
      answer: 'Course materials can be downloaded for offline access. However, live sessions and practical labs require internet connectivity.'
    },
    {
      question: 'What kind of placement assistance do you provide?',
      answer: 'We provide comprehensive support including resume building, LinkedIn optimization, mock interviews, technical preparation, and job guidance. However, we do not guarantee 100% placement as job placements depend on individual performance and market conditions.'
    },
    {
      question: 'Can I join part-time?',
      answer: 'Yes, we offer both full-time and part-time batches with flexible scheduling to accommodate working professionals.'
    },
    {
      question: 'What is the class size?',
      answer: 'We maintain small batch sizes (maximum 20-25 students) to ensure personalized attention and better learning outcomes.'
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Tester',
      company: 'Tech Corp India',
      content: 'The course structure was excellent with perfect balance between theory and practical implementation. The trainers were very supportive and helped me land a job within 2 months of completion.',
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'QA Engineer',
      company: 'Digital Solutions Ltd',
      content: 'Exceptional training program! The real-world projects and mock interviews were game-changers for me. I am now confident in my testing skills and delivering quality products.',
      avatar: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Automation Tester',
      company: 'Innovation Labs',
      content: 'Great mentors, comprehensive curriculum, and excellent placement support. The institute provided exactly what I was looking for. Highly recommended for anyone entering the QA field.',
      avatar: '👨‍💻'
    },
    {
      name: 'Sneha Desai',
      role: 'Test Engineer',
      company: 'Cloud Tech Solutions',
      content: 'Career Catalyst Institute exceeded my expectations. The trainers are knowledgeable, the assignments are practical, and the career guidance was instrumental in my success.',
      avatar: '👩‍🔬'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        poweredBy="GenAI Powered"
        title="Software Testing"
        subtitle="Training With Job Placement"
        image={{
          description: 'Join The Best IT Training Institute Of India And Become Job-Ready IT Professionals.'
        }}
        features={[
          { icon: '💎', label: '10+ Years of Excellence' },
          { icon: '🎯', label: '100% Placement Support' },
          { icon: '👥', label: '5000+ Students Placed' },
          { icon: '👨‍💼', label: 'MNC Trainers' }
        ]}
        cta1={{
          icon: '💬',
          label: 'Ask for Demo Session',
          href: 'https://wa.me/919511284775'
        }}
        cta2={{
          icon: '☎️',
          label: 'Reserve Your Seat',
          href: '/contact'
        }}
        imageType="image"
        imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop"
        videoOverlay={false}
      
      />

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Why Learning With Us Matters"
            subtitle="We've designed our program to meet the exact needs of the industry"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Carousel (inserted after Why Learning With Us Matters) */}
      <PopularCourses
        courses={[
          { title: 'Software Testing', duration: '8-12 weeks', modules: 9, icon: '💻', price: '₹3.5L–8.0L', features: ['Live Training Sessions', 'Practical Assignments', 'Real Projects', 'Expert Support'] },
          { title: 'Automation Testing', duration: '10-14 weeks', modules: 10, icon: '🤖', price: '₹4.0L–10.0L', features: ['Live Training Sessions', 'Practical Assignments', 'Real Projects', 'Expert Support'] },
          { title: 'Playwright Automation', duration: '8-12 weeks', modules: 8, icon: '🎭', price: '₹4.5L–10.0L', features: ['Live Training Sessions', 'Practical Assignments', 'Real Projects', 'Expert Support'] },
          { title: 'Performance Testing', duration: '6-10 weeks', modules: 6, icon: '⚡', price: '₹4.0L–9.0L', features: ['Live Training Sessions', 'Practical Assignments', 'Real Projects', 'Expert Support'] },
          { title: 'API Testing & Automation', duration: '6-8 weeks', modules: 5, icon: '🔌', price: '₹3.5L–7.5L', features: ['Live Training Sessions', 'Practical Assignments', 'Real Projects', 'Expert Support'] }
        ]}
      />

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Career Catalyst Institute"
            subtitle="Everything you need for a successful career in Software Testing"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {whyChoose.map((item, index) => (
              <FeatureCard
                key={index}
                icon={() => <span className="text-4xl">{item.icon}</span>}
                title={item.title}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Our Software Testing Master Program"
            subtitle="Comprehensive curriculum covering all aspects of modern testing"
          />

          <div className="relative px-16 md:px-20">
            <div className="swiper-container-wrapper relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                  nextEl: '.swiper-button-next-curriculum',
                  prevEl: '.swiper-button-prev-curriculum'
                }}
                pagination={{ 
                  clickable: false,
                  el: '.swiper-pagination-curriculum'
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 }
                }}
              >
                {[
                  { number: 1, title: 'Testing Fundamentals', icon: '📖' },
                  { number: 2, title: 'Manual Testing', icon: '✋' },
                  { number: 3, title: 'Agile Testing', icon: '🔄' },
                  { number: 4, title: 'JIRA Mastery', icon: '🔧' },
                  { number: 5, title: 'Database Testing', icon: '💾' },
                  { number: 6, title: 'API Testing', icon: '📮' },
                  { number: 7, title: 'Selenium Automation', icon: '🤖' },
                  { number: 8, title: 'Playwright Framework', icon: '🎭' },
                  { number: 9, title: 'Real-Time Project', icon: '💼' }
                ].map((module, index) => (
                  <SwiperSlide key={index} className="curriculum-swiper-slide flex">
                    <div className="w-full flex flex-col">
                      <CourseCard
                        title={module.title}
                        icon={module.icon}
                        modules={index + 1}
                        duration={`${2 + index} weeks`}
                        features={[
                          'Live Training Sessions',
                          'Practical Assignments',
                          'Real Projects',
                          'Expert Support'
                        ]}
                        delay={index * 0.05}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Custom Navigation Arrows */}
            <button className="swiper-button-prev-curriculum">
              ❮
            </button>
            <button className="swiper-button-next-curriculum">
              ❯
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 md:mt-16"
          >
            <Link to="/course">
              <button className="px-8 py-3 md:py-4 bg-gradient-primary text-white rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all">
                View Full Curriculum
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tools Covered */}
      <section className="py-16 md:py-24 bg-gradient-dark">
        <div className="container-custom">
          <SectionTitle
            title="Industry Tools We Teach"
            subtitle="Master the tools used by top QA professionals worldwide"
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
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Career Opportunities After Training"
            subtitle="Multiple career paths in Software Testing & Quality Assurance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {careers.map((career, index) => (
              <CareerCard
                key={index}
                icon={career.icon}
                title={career.title}
                description={career.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Placement Assistance */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Placement Assistance & Career Support"
            subtitle="We support your journey towards employment"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">📄</span> Resume Building
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our experts help you craft a professional resume that showcases your testing skills and real-world project experience effectively.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span> Interview Preparation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Mock interviews and technical preparation sessions to boost your confidence and prepare you for real company interviews.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">💼</span> LinkedIn Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We help you build a strong LinkedIn profile that attracts recruiters and showcases your testing expertise.
              </p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
              <h3 className="text-2xl font-bold text-dark dark:text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">🚀</span> Job Guidance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Personalized guidance on job search strategies, application tips, and career development planning.
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-accent/10 border-2 border-accent">
            <p className="text-center text-gray-700 dark:text-gray-200 text-lg">
              <strong>Note:</strong> We provide comprehensive placement assistance and career support. However, job placements depend on your performance, market conditions, and individual efforts. We believe in supporting your journey rather than guaranteeing outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="What Our Students Say"
            subtitle="Real feedback from professionals who transformed their careers"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                avatar={testimonial.avatar}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about our program"
          />

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
                Ready to Transform Your Career?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                Book a free demo session or get more information about our Software Testing Master Program. Our counselors are ready to help you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📧</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Email</p>
                    <a href="mailto:career.catalyst.institute.cci@gmail.com" className="text-primary hover:underline">
                      career.catalyst.institute.cci@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1">📞</span>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">Phone</p>
                    <a href="tel:+918888888888" className="text-primary hover:underline">
                      +91-8888-888-888
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div>
              <SectionTitle title="Contact Us" subtitle="Fill the form below" centered={false} />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Don't Wait, Start Your Learning Journey Today"
        subtitle="Limited seats available in each batch. Enroll now and secure your place in the upcoming batch."
        buttonText="Enroll Now"
        buttonHref="/contact"
      />
    </div>
  )
}

export default Home
