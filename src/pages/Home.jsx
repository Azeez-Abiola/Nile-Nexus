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
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-primary-700 to-primary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display-xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Empowering Businesses with
              <span className="text-primary-300 block">Reliable Technical Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              From software development to IT support, Nile Nexus Talents delivers scalable, 
              modern solutions for UK businesses ready to innovate and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/services">
                <button className="inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 text-lg rounded-xl border-2 border-white text-white hover:bg-white hover:text-primary-600">
                  Explore Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-display-lg font-display font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of technical services to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group">
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
          <div className="text-center mb-16">
            <h2 className="text-display-lg font-display font-bold text-navy mb-4">
              Why Choose Nile Nexus Talents?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with business understanding to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
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
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Success Story"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-display-lg font-display font-bold text-navy mb-6">
                Delivering Results That Matter
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We helped a growing UK startup scale their platform to handle 10x traffic increase 
                while reducing server costs by 40% through smart cloud architecture and optimization.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary-500">10x</div>
                  <div className="text-gray-600">Traffic Increase</div>
                </div>
                <div className="text-center">
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
          <h2 className="text-display-lg font-display font-bold mb-6">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Our experts are here to turn your vision into reality.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
              Talk to Our Experts
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home