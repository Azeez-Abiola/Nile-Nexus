import { useState } from 'react'
import { Link } from 'react-router-dom'

const FloatingChatIcon = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        to="/chat"
        className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Chat Icon */}
        <svg 
          className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>

        {/* Tooltip */}
        <div className={`absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}>
          Chat with us!
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-20"></div>
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </Link>
    </div>
  )
}

export default FloatingChatIcon