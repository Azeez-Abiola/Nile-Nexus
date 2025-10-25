import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top when navigating
  const handleNavigation = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-200'
      }`}>
        <nav className="container-custom">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'py-3' : 'py-4'
          }`}>
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center transition-all duration-300"
                onClick={handleNavigation}
              >
                <img 
                  src="./images/nilenexus3.png" 
                  alt="Nile Nexus Talents" 
                  className={`transition-all duration-300 ${
                    isScrolled ? 'h-12' : 'h-16'
                  }`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-1 mr-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={handleNavigation}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"></div>
                    )}
                    <div className={`absolute inset-0 rounded-lg bg-primary-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 ${isActive(item.href) ? 'opacity-100' : 'opacity-0'}`}></div>
                  </Link>
                ))}
              </div>
              
              <Link
                to="/contact"
                className={`relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 transform group ${
                  isScrolled ? 'px-6 py-2.5 text-sm' : 'px-8 py-3 text-base'
                }`}
                onClick={handleNavigation}
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Quote
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 text-gray-700 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 p-2 transition-colors duration-200"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Full Screen Menu */}
        <div className={`absolute inset-0 bg-white transform transition-all duration-500 ease-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          
          {/* Menu Content */}
          <div className="h-full flex flex-col justify-center items-center px-8">
            
            {/* Navigation Links */}
            <nav className="text-center">
              <div className="space-y-8">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-4xl md:text-5xl font-display font-bold transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-primary-500 scale-110'
                        : 'text-gray-800 hover:text-primary-500 hover:scale-105'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: isMenuOpen ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                    }}
                    onClick={handleNavigation}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
            
            {/* CTA Button */}
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
                onClick={handleNavigation}
              >
                Get Free Quote
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 text-center">
              <a 
                href="mailto:info@nilenexus.co.uk" 
                className="text-gray-600 hover:text-primary-500 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                info@nilenexus.co.uk
              </a>
              <p className="text-gray-500 mt-2">+44 123 456 7890</p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes in a style tag */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

export default Header