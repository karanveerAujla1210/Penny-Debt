import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Handshake, PhoneOff, FileText, BarChart2, TrendingUp, 
  Shield, CheckCircle, ArrowRight, ChevronRight, Star, Award, FileCheck
} from 'lucide-react';
import { useEffect, useState } from 'react';
import AOS from 'aos';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const coreServices = [
    {
      icon: Handshake,
      title: 'Debt Settlement',
      description: 'We negotiate with lenders to reduce your outstanding principal and help you close accounts at a lower amount.',
      features: [
        'Up to 70% reduction in total debt',
        'Single monthly payment',
        'Full legal documentation',
        'End-to-end support'
      ],
      category: 'settlement'
    },
    {
      icon: TrendingUp,
      title: 'EMI Reduction',
      description: 'We restructure repayment plans to reduce monthly pressure so you can manage expenses calmly.',
      features: [
        'Lower monthly payments',
        'Extended tenure options',
        'Interest rate negotiation',
        'Single EMI for multiple loans'
      ],
      category: 'reduction'
    },
    {
      icon: PhoneOff,
      title: 'Anti-Harassment Support',
      description: 'Our legal and compliance team ensures no recovery agent violates RBI rules.',
      features: [
        '24/7 legal protection',
        'Cease & desist notices',
        'RBI complaint filing',
        'Peace of mind'
      ],
      category: 'support'
    },
    {
      icon: BarChart2,
      title: 'Credit Score Rebuilding',
      description: 'We help restore your CIBIL profile after settlement with proven strategies.',
      features: [
        'Credit report analysis',
        'Dispute resolution',
        'Credit rebuilding plan',
        'Financial counseling'
      ],
      category: 'credit'
    },
    {
      icon: FileText,
      title: 'Financial Planning',
      description: 'We assist with budgeting, planning, and long-term strategies for financial stability.',
      features: [
        'Personalized budget',
        'Savings strategies',
        'Investment planning',
        'Wealth building'
      ],
      category: 'planning'
    }
  ];

  const comparisonData = {
    headers: ['Feature', 'Traditional Agents', 'Penny & Debt'],
    rows: [
      ['Legal process', '❌ No', '✅ Yes'],
      ['Transparent pricing', '❌ No', '✅ Yes'],
      ['Negotiation expertise', 'Low', 'High'],
      ['RBI compliance', 'No', 'Yes'],
      ['Customer support', 'Limited', 'Dedicated advisors'],
      ['Success rate', '30-50%', '95%+'],
      ['Harassment protection', 'No', '24/7 Support']
    ]
  };

  const caseStudies = [
    {
      title: '₹4.8L Loan Settled for ₹2.1L',
      description: 'Rahul from Bangalore reduced his total debt by 56% with our negotiation expertise.',
      icon: FileCheck
    },
    {
      title: 'EMI Reduced by 52%',
      description: 'Priya from Mumbai saw her monthly payments drop from ₹16,400 to ₹7,800.',
      icon: TrendingDown
    },
    {
      title: '23 Harassment Calls → 0',
      description: 'Within 48 hours, we stopped all collection calls for Arvind from Delhi.',
      icon: PhoneOff
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Debt Relief Solutions <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Designed for Real Life
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Regain control of your finances with our proven debt relief strategies. 
                Get expert help to reduce your debt and stop harassment calls today.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                <div className="flex items-center gap-2 bg-blue-700/30 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>RBI-Compliant Solutions</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-700/30 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>95% Success Rate</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-700/30 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Zero Upfront Fees</span>
                </div>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/apply"
                  className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/contact"
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Speak with an Expert
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your unique financial situation
            </p>
          </div>
          
          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12" data-aos="fade-up">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('settlement')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'settlement' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Debt Settlement
            </button>
            <button
              onClick={() => setActiveTab('reduction')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'reduction' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              EMI Reduction
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'support' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              Legal Support
            </button>
          </div>
          
          {/* Services Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {coreServices
              .filter(service => activeTab === 'all' || service.category === activeTab)
              .map((service, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
                    >
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Penny & Debt?</h2>
            <p className="text-xl text-gray-600">We're different from traditional debt settlement companies</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {comparisonData.headers.map((header, index) => (
                      <th 
                        key={index}
                        scope="col"
                        className={`px-6 py-4 text-left text-sm font-medium text-gray-700 uppercase tracking-wider ${index === 0 ? 'text-left' : 'text-center'}`}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {comparisonData.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      {row.map((cell, cellIndex) => (
                        <td 
                          key={cellIndex}
                          className={`px-6 py-4 whitespace-nowrap text-sm ${cellIndex === 0 ? 'text-gray-700 font-medium' : 'text-center'}`}
                        >
                          {cell.includes('✅') ? (
                            <span className="text-green-600 font-bold">{cell}</span>
                          ) : cell.includes('❌') ? (
                            <span className="text-red-500">{cell}</span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results, Real People</h2>
            <p className="text-xl text-gray-600">Success stories from our clients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <caseStudy.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center" data-aos="fade-up">
            <p className="text-gray-600 mb-6">Ready to start your journey to financial freedom?</p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Get Your Free Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our Process Works</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and effective</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do vs Traditional Lenders</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Traditional Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div>High interest rates and penalties</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div>Aggressive collection tactics</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div>No flexibility in payment terms</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div>Credit score damage</div>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Penny & Debt Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>Up to 70% debt reduction</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>Professional, respectful communication</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>Flexible, affordable payment plans</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>Credit rebuilding support</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
            Choose the service that's right for you and take the first step towards financial freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/apply"
              className="px-10 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 bg-blue-700 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;