import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Clock, Users, TrendingUp, Heart, 
  ArrowRight, Mail, Briefcase, Star 
} from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

const Careers = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const jobOpenings = [
    {
      id: 1,
      title: 'Debt Counselor',
      department: 'Customer Success',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '2-5 years',
      skills: ['Financial counseling', 'Communication', 'Empathy', 'Problem-solving'],
      description: 'Help clients navigate their debt relief journey with compassionate guidance and expert advice.'
    },
    {
      id: 2,
      title: 'Legal Advisor',
      department: 'Legal',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '3-7 years',
      skills: ['Debt law', 'Negotiation', 'Legal documentation', 'Compliance'],
      description: 'Provide legal support for debt settlements and ensure compliance with RBI guidelines.'
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      experience: '1-3 years',
      skills: ['Customer service', 'CRM', 'Communication', 'Analytics'],
      description: 'Manage client relationships and ensure successful debt relief outcomes.'
    },
    {
      id: 4,
      title: 'Marketing Executive',
      department: 'Marketing',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['Digital marketing', 'Content creation', 'SEO', 'Social media'],
      description: 'Drive brand awareness and lead generation through innovative marketing strategies.'
    },
    {
      id: 5,
      title: 'Software Developer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-6 years',
      skills: ['React', 'Node.js', 'MongoDB', 'API development'],
      description: 'Build and maintain our debt relief platform and customer-facing applications.'
    },
    {
      id: 6,
      title: 'Business Development Executive',
      department: 'Sales',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '1-4 years',
      skills: ['Sales', 'Lead generation', 'Relationship building', 'Negotiation'],
      description: 'Identify and develop new business opportunities in the debt relief market.'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Make a Real Impact',
      description: 'Help thousands of families achieve financial freedom'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths and skill development opportunities'
    },
    {
      icon: Users,
      title: 'Great Team Culture',
      description: 'Collaborative environment with supportive colleagues'
    },
    {
      icon: Star,
      title: 'Competitive Benefits',
      description: 'Health insurance, performance bonuses, and flexible work'
    }
  ];

  const applicationProcess = [
    { step: 1, title: 'Submit Resume', description: 'Apply online with your updated resume and cover letter' },
    { step: 2, title: 'Initial Screening', description: 'HR team reviews your application and conducts initial call' },
    { step: 3, title: 'Technical Interview', description: 'Department head conducts role-specific interview' },
    { step: 4, title: 'Final Round', description: 'Meet with leadership team and cultural fit assessment' },
    { step: 5, title: 'Offer & Onboarding', description: 'Receive offer and complete smooth onboarding process' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-600 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Join Our Mission to <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Transform Lives
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Be part of a team that's helping thousands of Indians achieve financial freedom. 
                Build your career while making a real difference.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <span>50+ Team Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span>Fast Growing Company</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-400" />
                  <span>Meaningful Work</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600">Join a company that values growth, impact, and work-life balance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Find your next career opportunity with us</p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div
                key={job.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:ml-6 mt-4 lg:mt-0">
                    <button className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple and transparent hiring process</p>
          </div>
          
          <div className="space-y-8">
            {applicationProcess.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Didn't Find Your Role */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Didn't Find Your Role?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Send your resume and a brief note about your interests to our HR team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@pennyanddebt.in"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  careers@pennyanddebt.in
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
            Join our mission to help Indians achieve financial freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <button className="px-10 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
              View All Openings
            </button>
            <Link
              to="/about"
              className="px-10 py-4 bg-blue-700 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;