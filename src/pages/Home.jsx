import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

const Home = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom applications, system integrations, and enterprise tools built with modern technologies.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Web Development',
      description: 'Responsive, SEO-friendly websites using modern frameworks like React, Next.js, and Tailwind.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform apps for Android and iOS with React Native or Flutter.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive, user-first designs for digital products that convert and engage.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'IT Consulting',
      description: 'Professional guidance, cloud setup, and scalable technical support for your business.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Maintenance & Support',
      description: 'Continuous improvement, updates, and performance monitoring for your systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const pillars = [
    {
      title: 'Expertise',
      description: 'Our team brings years of experience across multiple technologies and industries.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Reliability',
      description: 'We deliver on time, every time, with transparent communication throughout the process.',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions for your business.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-primary-700 to-primary-600">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-4 sm:left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-4 sm:right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        <div className="relative container-custom text-center z-10">
          {/* Main Headline */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-white leading-tight mb-6">
              Transform Your Business
              <span className="block bg-gradient-to-r from-primary-300 via-white to-primary-200 bg-clip-text text-transparent">
                With Expert
              </span>
              <span className="block text-primary-200">
                Digital Solutions
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              We deliver bespoke technology solutions that drive growth for 
              <span className="text-white font-medium"> forward-thinking businesses</span> across the UK.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 px-4" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform">
                <span className="relative z-10 whitespace-nowrap">Request Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            <Link to="/services" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:bg-white hover:text-primary-600 hover:scale-105 transform">
                <span className="whitespace-nowrap">See Our Solutions</span>
                <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-4 sm:left-10 hidden lg:block" data-aos="fade-right" data-aos-delay="800">
          <div className="w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center animate-bounce">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-1/3 right-4 sm:right-10 hidden lg:block" data-aos="fade-left" data-aos-delay="900">
          <div className="w-16 h-16 bg-primary-400/20 rounded-xl backdrop-blur-sm border border-white/20 flex items-center justify-center animate-pulse">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-display-lg font-display font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of technical services to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-display font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  to="/services"
                  className="text-primary-500 font-semibold hover:text-primary-600 transition-colors inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-display-lg font-display font-bold text-navy mb-4">
              Why Choose Nile Nexus Talents?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with business understanding to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 200}>
                <div className="aspect-square w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-navy mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Success Story"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-display-lg font-display font-bold text-navy mb-6">
                Delivering Results That Matter
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We helped a growing UK startup scale their platform to handle 10x traffic increase 
                while reducing server costs by 40% through smart cloud architecture and optimization.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
                  <div className="text-3xl font-display font-bold text-primary-500">10x</div>
                  <div className="text-gray-600">Traffic Increase</div>
                </div>
                <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
                  <div className="text-3xl font-display font-bold text-primary-500">40%</div>
                  <div className="text-gray-600">Cost Reduction</div>
                </div>
              </div>
              <Link to="/contact">
                <Button>
                  Start Your Success Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <div data-aos="fade-up">
            <h2 className="text-display-lg font-display font-bold mb-6">
              Let's Build Something Exceptional Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Our experts are here to turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="group relative px-8 py-4 bg-white text-primary-600 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl transform min-w-[200px]">
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Talk to Our Experts
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </Link>
              <Link to="/services">
                <button className="group relative px-8 py-4 border-2 border-white text-white rounded-full text-lg font-bold transition-all duration-300 hover:bg-white hover:text-primary-600 hover:scale-105 transform min-w-[200px]">
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    View Services
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home