import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ProjectModal = () => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Only show modal on homepage
    if (location.pathname !== '/') {
      return
    }

    const handleScroll = () => {
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show modal when user scrolls 40% down the page
      const scrollPercent = (scrolled / (documentHeight - windowHeight)) * 100
      
      console.log('Scroll percent:', scrollPercent) // Debug log
      console.log('Conditions:', {
        scrollPercent,
        scrollPercentOver40: scrollPercent > 40,
        isSubmitted,
        modalShown: localStorage.getItem('modalShown')
      })
      
      if (scrollPercent > 40 && !isSubmitted && !localStorage.getItem('modalShown')) {
        console.log('Showing modal') // Debug log
        setIsVisible(true)
        // Trigger animation after a brief delay
        setTimeout(() => setIsAnimating(true), 50)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isSubmitted, location.pathname])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      localStorage.setItem('modalShown', 'true')
      
      // Auto close after success
      setTimeout(() => {
        setIsVisible(false)
      }, 3000)
    }, 1000)
  }

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem('modalShown', 'true')
    }, 300)
  }

  // Debug function - remove in production
  const resetModal = () => {
    localStorage.removeItem('modalShown')
    setIsVisible(false)
    setIsSubmitted(false)
    console.log('Modal reset - localStorage cleared, scroll 40% to see it again')
  }

  // Clear localStorage on component mount for testing - remove in production
  useEffect(() => {
    localStorage.removeItem('modalShown')
    console.log('Modal localStorage cleared on mount')
  }, [])

  // Add manual trigger for testing - remove in production
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'M' && e.ctrlKey) { // Ctrl+M to manually show modal
        if (!localStorage.getItem('modalShown')) {
          setIsVisible(true)
          setTimeout(() => setIsAnimating(true), 50)
        }
      }
      if (e.key === 'R' && e.ctrlKey) { // Ctrl+R to reset modal
        resetModal()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-all duration-500 ease-out ${
      isAnimating ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'
    }`}>
      <div className={`bg-white rounded-2xl max-w-md w-full relative shadow-2xl transform transition-all duration-700 ease-out ${
        isAnimating ? 'scale-100 translate-y-0 opacity-100' : 'scale-75 translate-y-8 opacity-0'
      }`}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className={`text-center mb-8 transform transition-all duration-500 delay-200 ${
                isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 delay-300 hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  What product would you like us to build for you?
                </h2>
                <p className="text-gray-600">
                  Tell us about your project and we'll provide a free consultation and quote.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className={`transform transition-all duration-500 delay-400 ${
                  isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div className={`transform transition-all duration-500 delay-500 ${
                  isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div className={`transform transition-all duration-500 delay-600 ${
                  isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div className={`transform transition-all duration-500 delay-700 ${
                  isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <textarea
                    name="projectDescription"
                    placeholder="Tell us about your project idea..."
                    rows={3}
                    required
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-300"
                  />
                </div>

                <div className={`transform transition-all duration-500 delay-800 ${
                  isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* Success State */
            <div className={`text-center transform transition-all duration-500 ${
              isSubmitted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-500 delay-200">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We've received your project details and will get back to you within 24 hours.
              </p>
            </div>
          )}

          {/* Chat Button */}
          {!isSubmitted && (
            <div className={`mt-6 pt-6 border-t border-gray-200 transform transition-all duration-500 delay-900 ${
              isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <Link
                to="/chat"
                className="flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-primary-100 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                Prefer to chat? Click here
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal