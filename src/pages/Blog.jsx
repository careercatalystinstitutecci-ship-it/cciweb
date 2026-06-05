import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import BlogCard from '../components/BlogCard'
import CTASection from '../components/CTASection'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'What is Software Testing? A Comprehensive Guide for Beginners',
      excerpt: 'Learn the fundamentals of software testing, different types of testing, and why it\'s crucial for software development quality.',
      date: 'Dec 15, 2024',
      category: 'Basics',
      image: '📖'
    },
    {
      id: 2,
      title: 'Manual Testing vs Automation Testing: Which Should You Learn First?',
      excerpt: 'Understand the differences, advantages, and disadvantages of manual and automation testing to choose the right path for your career.',
      date: 'Dec 10, 2024',
      category: 'Testing Types',
      image: '⚖️'
    },
    {
      id: 3,
      title: 'Selenium for Beginners: A Step-by-Step Guide to Web Automation',
      excerpt: 'Master the basics of Selenium, set up your environment, and write your first automated test script in this comprehensive guide.',
      date: 'Dec 5, 2024',
      category: 'Automation',
      image: '🤖'
    },
    {
      id: 4,
      title: 'API Testing with Postman: Complete Tutorial with Examples',
      excerpt: 'Learn how to test REST APIs using Postman, create collections, and automate your API testing workflow.',
      date: 'Nov 28, 2024',
      category: 'API Testing',
      image: '📮'
    },
    {
      id: 5,
      title: 'How to Write Effective Test Cases: Best Practices and Examples',
      excerpt: 'Discover the key elements of a well-written test case and learn best practices to improve your testing efficiency.',
      date: 'Nov 20, 2024',
      category: 'Test Design',
      image: '✍️'
    },
    {
      id: 6,
      title: 'Career in Software Testing: Roles, Salaries, and Growth Opportunities',
      excerpt: 'Explore different career paths in software testing, salary expectations, and how to advance your QA career.',
      date: 'Nov 12, 2024',
      category: 'Career',
      image: '💼'
    },
    {
      id: 7,
      title: 'Agile Testing Methodology: Adapting Quality Assurance for Agile Development',
      excerpt: 'Understand how testing works in Agile environments and learn the principles of Agile testing methodology.',
      date: 'Nov 5, 2024',
      category: 'Agile',
      image: '🔄'
    },
    {
      id: 8,
      title: 'Database Testing: SQL Queries and Data Validation Techniques',
      excerpt: 'Learn database testing concepts, write SQL queries for testing, and validate data integrity in your applications.',
      date: 'Oct 28, 2024',
      category: 'Database',
      image: '💾'
    },
    {
      id: 9,
      title: 'Bug Reporting Best Practices: How to Write Clear and Effective Bug Reports',
      excerpt: 'Master the art of bug reporting with our comprehensive guide to writing clear, detailed, and actionable bug reports.',
      date: 'Oct 20, 2024',
      category: 'QA Process',
      image: '🐛'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Career Catalyst Blog"
        subtitle="Insights, tips, and best practices for Software Testing and Quality Assurance professionals"
        image="📝"
        buttons={[
          { label: 'Read Articles', href: '#blog-grid', type: 'primary' },
          { label: 'Subscribe', href: '#contact', type: 'secondary' }
        ]}
      />

      {/* Blog Posts Grid */}
      <section id="blog-grid" className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Latest Articles"
            subtitle="Stay updated with the latest trends and tips in Software Testing"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                image={post.image}
                delay={index * 0.05}
                href="#"
              />
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <button className="px-8 py-3 md:py-4 bg-gradient-primary text-white rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white dark:bg-gray-800 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⭐</span>
              <p className="text-accent font-bold text-sm">FEATURED ARTICLE</p>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-dark dark:text-white mb-4">
              The Complete Guide to Starting a Career in Software Testing
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              If you're interested in building a career in software testing and quality assurance, this comprehensive guide covers everything you need to know - from basic concepts to job landing strategies. We break down the learning path, essential skills, career opportunities, and answer common questions about entering the QA field.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Posted on <strong>December 1, 2024</strong>
              </div>
              <button className="px-6 py-2 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Read Full Article
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionTitle
            title="Browse by Category"
            subtitle="Find articles on topics that interest you"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Basics', 'Testing Types', 'Automation', 'API Testing', 'Agile', 'Career', 'Database', 'QA Process'].map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-3 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 border border-primary/20 font-medium text-dark dark:text-white hover:bg-primary hover:text-white transition-all text-sm md:text-base"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
              Get Latest Updates
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Subscribe to our newsletter and get the latest articles, tips, and career advice delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-dark dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your Testing Journey?"
        subtitle="Enroll in our comprehensive Software Testing course today"
        buttonText="Enroll Now"
        buttonHref="/contact"
      />
    </div>
  )
}

export default Blog
