import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

const Services = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'Custom applications, system integrations, and enterprise tools built with modern technologies.',
      features: [
        'Custom Web Applications',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Database Design & Optimization',
        'Legacy System Modernization',
        'Cloud-Native Development'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Web Development',
      description: 'Responsive, SEO-friendly websites using modern frameworks like React, Next.js, and Tailwind.',
      features: [
        'Responsive Website Design',
        'E-commerce Development',
        'Content Management Systems',
        'Progressive Web Apps (PWA)',
        'SEO Optimization',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'WordPress', 'Shopify', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform apps for Android and iOS with React Native or Flutter.',
      features: [
        'Cross-Platform Mobile Apps',
        'Native iOS Development',
        'Native Android Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store Connect'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive, user-first designs for digital products that convert and engage.',
      features: [
        'User Experience Research',
        'User Interface Design',
        'Prototyping & Wireframing',
        'Design System Creation',
        'Usability Testing',
        'Brand Identity Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'IT Consulting & Infrastructure',
      description: 'Professional guidance, cloud setup, and scalable technical support for your business.',
      features: [
        'Cloud Architecture Design',
        'DevOps Implementation',
        'Security Audits',
        'Infrastructure Monitoring',
        'Disaster Recovery Planning',
        'Technology Strategy Consulting'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Maintenance & Support',
      description: 'Continuous improvement, updates, and performance monitoring for your systems.',
      features: [
        '24/7 System Monitoring',
        'Regular Security Updates',
        'Performance Optimization',
        'Bug Fixes & Patches',
        'Feature Enhancements',
        'Technical Support'
      ],
      technologies: ['Monitoring Tools', 'Analytics', 'Version Control', 'CI/CD', 'Support Ticketing', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy to-primary-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative container-custom py-20">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-display-xl md:text-6xl font-display font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive technical solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                  <h2 className="text-display-md font-display font-bold text-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-xl font-semibold text-navy mb-3">What We Offer:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="text-xl font-semibold text-navy mb-3">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div data-aos="fade-up" data-aos-delay="300">
                    <Link to="/contact">
                      <Button>
                        Get Started with {service.title}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-display-lg font-display font-bold text-navy mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              on budget, and exceeds your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We dive deep into understanding your business needs, goals, and technical requirements.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates detailed wireframes, mockups, and technical specifications for your project.',
                image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build your solution using modern technologies and best practices with regular updates.',
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'We launch your project, provide training, and offer ongoing support for continued success.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="aspect-square w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={phase.image} 
                    alt={phase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-3xl font-display font-bold text-primary-500 mb-2">
                  {phase.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-navy mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600">
                  {phase.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <div data-aos="fade-up">
            <h2 className="text-display-lg font-display font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business. 
              Get a free consultation and project estimate today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Learn About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services