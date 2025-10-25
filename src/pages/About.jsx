import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and creative solutions to solve complex business challenges.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in everything we do, from code quality to client communication.',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Partnership',
      description: 'We work as an extension of your team, understanding your business goals and challenges.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Transparency',
      description: 'Clear communication, honest timelines, and regular updates keep you informed every step of the way.',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ]

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer & Founder',
      bio: 'Full-stack developer with 8+ years of experience in building scalable web applications and leading development teams.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['React', 'Node.js', 'AWS', 'Team Leadership']
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      bio: 'Creative designer passionate about crafting beautiful, user-centered digital experiences that drive engagement and conversion.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping']
    },
    {
      name: 'Michael Roberts',
      role: 'DevOps Engineer',
      bio: 'Infrastructure specialist focused on building robust, scalable systems that support business growth and reliability.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Architecture']
    },
    {
      name: 'Emma Thompson',
      role: 'Project Manager',
      bio: 'Experienced project manager ensuring smooth delivery, clear communication, and exceptional client satisfaction.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      skills: ['Agile', 'Scrum', 'Client Relations', 'Quality Assurance']
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
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative container-custom py-20">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-display-xl md:text-6xl font-display font-bold mb-6">
              About Nile Nexus Talents
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              We're a passionate team of technologists dedicated to empowering businesses 
              through innovative digital solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-display-lg font-display font-bold text-navy mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nile Nexus Talents Ltd is a UK-based technical agency that bridges the gap between 
                business vision and technical execution. Founded with the mission to democratize 
                access to high-quality technical expertise, we've grown from a small team of 
                passionate developers to a comprehensive digital solutions provider.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our name reflects our core philosophy: like the life-giving Nile River that 
                connects diverse landscapes, we serve as the nexus that connects your business 
                ideas with cutting-edge technology, fostering growth and innovation.
              </p>
              <div className="grid grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-display font-bold text-primary-500 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left">
              <img 
                src="/images/nilenexus3.png" 
                alt="Nile Nexus Talents"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-display-lg font-display font-bold text-navy mb-8" data-aos="fade-up">
            Our Mission
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-medium text-gray-700 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              "To connect ideas with execution by delivering top-tier technical and digital services 
              that empower businesses to thrive in an increasingly digital world."
            </p>
            <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="200">
              We believe that every business, regardless of size, deserves access to enterprise-level 
              technical expertise. Our mission drives us to make advanced technology solutions 
              accessible, affordable, and tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-display-lg font-display font-bold text-navy mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide every decision we make and every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="flex flex-col md:flex-row gap-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="w-full md:w-32 h-32 flex-shrink-0">
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our approach"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-display-lg font-display font-bold text-navy mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We follow a proven methodology that ensures successful project delivery 
                while maintaining the flexibility to adapt to your unique requirements.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    phase: 'Discovery',
                    description: 'Deep dive into your business goals, technical requirements, and success metrics.'
                  },
                  {
                    phase: 'Design',
                    description: 'Collaborative planning and design phase with regular feedback and iterations.'
                  },
                  {
                    phase: 'Development',
                    description: 'Agile development with regular updates, testing, and quality assurance.'
                  },
                  {
                    phase: 'Delivery',
                    description: 'Smooth deployment, training, and ongoing support for long-term success.'
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{step.phase}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-display-lg font-display font-bold text-navy mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team combines technical expertise with creative thinking to deliver 
              exceptional results for every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="aspect-square w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-semibold text-navy mb-1">
                  {member.name}
                </h3>
                <div className="text-primary-500 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
              Let's Collaborate on Your Next Big Idea
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to work with a team that treats your success as our own? 
              Let's discuss how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Start a Conversation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About