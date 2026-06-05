import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Hook to scroll to top when route changes
export const useScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
}

// Hook to track viewport
export const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
    width
  }
}

// Hook for intersection observer
export const useInViewport = (ref, options = {}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, {
      threshold: 0.1,
      ...options
    })

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref, options])

  return isVisible
}
