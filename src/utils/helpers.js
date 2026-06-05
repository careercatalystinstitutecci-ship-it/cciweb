// Utility functions for scrolling
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

// Format date
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}

// Validate email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// Validate phone
export const validatePhone = (phone) => {
  const regex = /^[0-9]{10}$/
  return regex.test(phone.replace(/\D/g, ''))
}

// Truncate text
export const truncateText = (text, length) => {
  if (text.length > length) {
    return text.substring(0, length) + '...'
  }
  return text
}

// Get initials from name
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}
