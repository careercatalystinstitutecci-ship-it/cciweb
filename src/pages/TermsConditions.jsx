import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TermsConditions = () => {
  const sections = [
    {
      title: 'Agreement to Terms',
      content: `By accessing and using Career Catalyst Institute's website and services, you accept and agree to be bound by and comply with these Terms and Conditions. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      title: 'Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Career Catalyst Institute's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:

      • Modifying or copying the materials
      • Using the materials for any commercial purpose or for any public display
      • Attempting to reverse engineer, disassemble, or decode any software contained on the Site
      • Removing any copyright or other proprietary notations from the materials
      • Transferring the materials to another person or "mirroring" the materials on any other server
      • Violating any applicable laws or regulations related to the access to or use of the Materials`
    },
    {
      title: 'Disclaimer',
      content: `The materials on Career Catalyst Institute's website are provided on an 'as is' basis. Career Catalyst Institute makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

      Further, Career Catalyst Institute does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Site or otherwise relating to such materials or on any sites linked to this site.`
    },
    {
      title: 'Limitations',
      content: `In no event shall Career Catalyst Institute or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Career Catalyst Institute's website, even if Career Catalyst Institute or an authorized representative has been notified orally or in writing of the possibility of such damage.`
    },
    {
      title: 'Accuracy of Materials',
      content: `The materials appearing on Career Catalyst Institute's website could include technical, typographical, or photographic errors. Career Catalyst Institute does not warrant that any of the materials on its website are accurate, complete, or current. Career Catalyst Institute may make changes to the materials contained on its website at any time without notice.`
    },
    {
      title: 'Links',
      content: `Career Catalyst Institute has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Career Catalyst Institute of the site. Use of any such linked website is at the user's own risk.`
    },
    {
      title: 'Modifications',
      content: `Career Catalyst Institute may revise these Terms and Conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions.`
    },
    {
      title: 'Course Terms',
      content: `• Course Content: All course materials, videos, and resources are the intellectual property of Career Catalyst Institute and cannot be reproduced, distributed, or shared without permission.
      
      • Attendance: Students are expected to maintain regular attendance. In case of excessive absences, student enrollment may be terminated.
      
      • Conduct: Students must maintain professional conduct throughout the course. Any inappropriate behavior or harassment will result in immediate termination.
      
      • Assessment: Completion of the course requires successful completion of all modules and assessments.
      
      • Certificate: The certificate issued is an institute completion certificate and not an industry-recognized certification like ISTQB.`
    },
    {
      title: 'Refund Policy',
      content: `• Money Back Guarantee: Career Catalyst Institute offers a 7-day money-back guarantee from the date of enrollment if you are not satisfied with the course.
      
      • Refund Process: To request a refund, contact our support team within 7 days of enrollment with proper documentation.
      
      • Conditions: Refunds are provided only if minimal course material has been accessed (less than 2 sessions).
      
      • Processing Time: Refunds are processed within 10 business days after approval.
      
      • Limited Refunds: After 7 days, no refunds are provided. However, you may request to switch batches or pause the course.`
    },
    {
      title: 'Placement Assistance',
      content: `• No Guarantee: Career Catalyst Institute does not guarantee 100% placement. Placements depend on individual performance, market conditions, and job availability.
      
      • Support Provided: We provide comprehensive support including resume building, mock interviews, technical preparation, and job guidance.
      
      • Eligibility: To be eligible for placement support, students must complete all course modules and maintain minimum attendance (85%).
      
      • Responsibility: While we support your career journey, final job selection depends on your efforts and company requirements.`
    },
    {
      title: 'Limitation of Liability',
      content: `Career Catalyst Institute, its instructors, and staff shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the course materials or services, even if Career Catalyst Institute has been advised of the possibility of such damages.`
    },
    {
      title: 'Governing Law',
      content: `These Terms and Conditions and any separate agreements we may enter into to provide the Service are governed by and construed in accordance with the laws of India, specifically Maharashtra.`
    },
    {
      title: 'Contact Information',
      content: `If you have any questions about these Terms and Conditions, please contact us at:
      
      Email: career.catalyst.institute.cci@gmail.com
      Phone: +91-8888-888-888
      Address: Nashik, Maharashtra, India`
    }
  ]

  return (
    <div>
      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-dark text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="text-accent hover:underline mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-gray-300 text-lg">
              Please read these terms and conditions carefully
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-6 md:p-8 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-white mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sections.length * 0.05 }}
              className="p-6 md:p-8 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400"
            >
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Last Updated:</strong> December 2024
              </p>
              <p className="text-gray-800 dark:text-gray-200 mt-2">
                Career Catalyst Institute reserves the right to modify these Terms and Conditions at any time. Continued use of the service after modifications constitutes acceptance of the updated terms.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TermsConditions
