import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import BlogCard from '../components/BlogCard'
import CTASection from '../components/CTASection'
import useSiteContent from '../hooks/useSiteContent'
import { FiBookOpen, FiMail, FiTag } from 'react-icons/fi'

const Blog = () => {
  const { content } = useSiteContent()
  const resources = content.resources || { blogPosts: [], categories: [] }
  const posts = resources.blogPosts || []
  const featured = posts[0]

  return (
    <div className="bg-white dark:bg-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.22),transparent_30%)]" />
        <div className="container-custom relative z-10 grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-teal-100 backdrop-blur">
              <FiBookOpen className="h-4 w-4" />
              Resources and articles
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              QA Learning Resources
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Read practical guides, career tips, testing concepts, and tool-focused articles for Software Testing learners.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#blog-grid" className="rounded-lg bg-white px-6 py-3 text-center font-bold text-primary shadow-xl transition-all hover:-translate-y-0.5">Read Articles</a>
              <Link to="/contact" className="rounded-lg border border-white/30 px-6 py-3 text-center font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10">Ask Question</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&h=720&fit=crop" alt="QA learning resources" className="h-[360px] w-full rounded-3xl object-cover shadow-2xl md:h-[520px]" />
          </motion.div>
        </div>
      </section>

      <section id="blog-grid" className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle title="Latest Articles" subtitle="Blog cards are editable from the admin Resources tab, including images." />
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard
                key={`${post.title}-${index}`}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                image={post.image}
                imageUrl={post.imageUrl}
                href={post.href || '#'}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="bg-slate-50 py-20 dark:bg-gray-800/60 md:py-28">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-800 md:grid-cols-2">
              {featured.imageUrl && <img src={featured.imageUrl} alt={featured.title} className="h-full min-h-[320px] w-full object-cover" />}
              <div className="p-8 md:p-10">
                <div className="mb-4 flex items-center gap-3">
                  <FiTag className="h-5 w-5 text-accent" />
                  <p className="text-sm font-bold uppercase tracking-wide text-accent">Featured Article</p>
                </div>
                <h2 className="text-3xl font-bold text-dark dark:text-white">{featured.title}</h2>
                <p className="mt-4 leading-8 text-gray-600 dark:text-gray-300">{featured.excerpt}</p>
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">Posted on <strong>{featured.date}</strong></p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <SectionTitle title="Browse by Category" subtitle="Categories are also editable from admin." />
          <div className="flex flex-wrap justify-center gap-3">
            {(resources.categories || []).map((category, index) => (
              <motion.span key={`${category}-${index}`} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.04 }} className="rounded-full border border-primary/20 bg-primary/5 px-5 py-3 font-semibold text-primary">
                {category}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20 dark:from-gray-800 dark:to-gray-900 md:py-28">
        <div className="container-custom max-w-2xl text-center">
          <FiMail className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h2 className="text-3xl font-bold text-dark dark:text-white md:text-4xl">Need Personal Guidance?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Send your question and our team will help you understand the right QA learning path.</p>
          <Link to="/contact" className="mt-8 inline-flex rounded-lg bg-gradient-primary px-7 py-3 font-bold text-white shadow-lg">Contact Us</Link>
        </div>
      </section>

      <CTASection title="Ready To Start Your Testing Journey?" subtitle="Enroll in our practical Software Testing course today." buttonText="Enroll Now" buttonHref="/contact" />
    </div>
  )
}

export default Blog
