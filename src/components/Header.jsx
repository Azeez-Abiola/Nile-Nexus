import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-300 sticky top-0 z-50">
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-display font-bold text-navy">
                Nile Nexus
                <span className="text-primary-500 ml-1">Talents</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary"
              >
                Get Quote
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
                    onClick={() => setIsMenuOpen(false)}
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
                onClick={() => setIsMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 text-center">
              <a 
                href="mailto:info@nilenexus.co.uk" 
                className="text-gray-600 hover:text-primary-500 transition-colors text-lg"
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