import { useState, useEffect } from 'react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Tech-related images (using free Unsplash images)
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      alt: 'Digital Technology Network'
    },
    {
      url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Modern Technology Setup'
    },
    {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Team Collaboration Technology'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      alt: 'Data Analytics Dashboard'
    },
    {
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Creative Digital Workspace'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
          />
          {/* Dark Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/85 to-navy-900/80"></div>
          {/* Additional dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider