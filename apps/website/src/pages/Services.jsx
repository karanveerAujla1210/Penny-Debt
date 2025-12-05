import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Handshake, PhoneOff, FileText, BarChart2, TrendingUp, 
  Shield, CheckCircle, ArrowRight, ChevronRight, Star, Award, FileCheck
} from 'lucide-react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import theme from '../styles/theme';

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
      title: 'Comprehensive Debt Settlement',
      description: 'Our RBI-certified financial experts negotiate directly with your creditors to reduce your total debt by 40-70% on average. We handle everything from documentation to final settlement, making the process stress-free for you.',
      features: [
        '✅ Average 40-70% reduction in total debt (actual results may vary)',
        '✅ Single, fixed monthly payment based on your budget',
        '✅ Complete legal protection from creditor harassment',
        '✅ Dedicated relationship manager for personalized support',
        '✅ No upfront fees - we only get paid when you save',
        '✅ 24/7 online dashboard to track your progress'
      ],
      category: 'settlement'
    },
    {
      icon: TrendingUp,
      title: 'EMI Restructuring',
      description: 'Struggling with high EMIs? Our financial experts can help restructure your loans to reduce monthly payments by up to 50% while keeping you on track to becoming debt-free.',
      features: [
        '🔄 Up to 50% lower monthly payments',
        '📅 Extended loan tenures for better cash flow',
        '💵 Lower interest rates through expert negotiation',
        '🔗 Combine multiple loans into one easy payment',
        '⏱️ Quick approval process (typically 3-5 business days)',
        '📱 Real-time updates on your restructured loans'
      ],
      category: 'reduction'
    },
    {
      icon: Shield,
      title: 'Legal Protection & Recovery Support',
      description: 'Stop creditor harassment immediately with our legal protection services. Our team ensures all communications go through us, giving you peace of mind and space to rebuild your finances.',
      features: [
        '⚖️ Immediate stop to collection calls and visits',
        '📜 Legally binding cease & desist notices',
        '🏛️ RBI complaint registration and follow-up',
        '👨‍⚖️ In-house legal experts for your protection',
        '🔒 100% confidentiality guaranteed',
        '📞 24/7 emergency support line'
      ],
      category: 'support'
    },
    {
      icon: BarChart2,
      title: 'Credit Score Rehabilitation',
      description: 'Rebuild your credit score with our proven 12-24 month rehabilitation program. Most clients see a 100-200 point improvement in their credit score within the first year.',
      features: [
        '📊 Detailed credit report analysis and improvement plan',
        '🔍 Dispute and remove inaccuracies from your credit report',
        '📈 Personalized credit rebuilding strategy',
        '🎓 Free financial education webinars and resources',
        '🔔 Real-time credit monitoring and alerts',
        '🏆 Certificate of financial literacy upon completion'
      ],
      category: 'credit'
    },
    {
      icon: FileText,
      title: 'Financial Wellness Program',
      description: 'Our certified financial planners create personalized money management plans to help you stay debt-free and build wealth for the future.',
      features: [
        '💰 Customized budget that works with your lifestyle',
        '💡 Smart strategies to build an emergency fund',
        '📈 Investment planning for all life stages',
        '🏡 Home ownership and wealth building guidance',
        '👵 Retirement planning and wealth preservation',
        '👨‍👩‍👧‍👦 Family financial planning and education'
      ],
      category: 'planning'
    }
  ];

  const comparisonData = {
    headers: ['What You Get', 'Other Companies', 'Penny & Debt'],
    rows: [
      ['Regulatory Compliance', '❌ Often operate in grey areas', '✅ 100% RBI Compliant & Registered'],
      ['Fees & Pricing', '❌ Hidden charges, high upfront costs', '✅ No Hidden Fees, Pay Only When You Save'],
      ['Expertise', 'Basic negotiators', '🎓 Certified Financial Experts (10+ years avg. experience)'],
      ['Success Rate', '30-50% (industry average)', '🏆 97% Success Rate (verified by clients)'],
      ['Support', '9-5, Weekdays only', '⏰ 24/7 Dedicated Support Team'],
      ['Credit Impact', 'Often damages credit score', '📈 Credit Rebuilding Plan Included'],
      ['Legal Protection', '❌ No legal support', '⚖️ Full Legal Team Support Included'],
      ['Client Satisfaction', '⭐⭐⭐ (3/5 average)', '⭐⭐⭐⭐⭐ (4.9/5 from 1000+ reviews)'],
      ['Response Time', '2-3 business days', '⏱️ 2-hour response guarantee'],
      ['Security', 'Basic data protection', '🔒 Bank-level 256-bit SSL encryption']
    ]
  };

  const caseStudies = [
    {
      title: '₹18.5L Debt Settled for ₹7.9L',
      description: 'The Sharma Family from Delhi - Reduced total debt by 57% with our structured settlement plan, saving them ₹10.6L.',
      icon: FileCheck,
      location: 'Delhi, India'
    },
    {
      title: 'EMI Reduced by 63%',
      description: 'Mr. Patel from Ahmedabad - Monthly payments dropped from ₹42,500 to ₹15,725, providing immediate financial relief.',
      icon: TrendingDown,
      location: 'Ahmedabad, India'
    },
    {
      title: 'Credit Score Improved by 180 Points',
      description: 'Ms. Kapoor from Mumbai - Rebuilt her credit score from 580 to 760 in just 18 months with our rehabilitation program.',
      icon: BarChart2,
      location: 'Mumbai, India'
    },
    {
      title: 'Harassment Stopped in 24 Hours',
      description: 'The Reddy Family from Hyderabad - All collection calls and visits ceased within one business day of our intervention.',
      icon: PhoneOff,
      location: 'Hyderabad, India'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
        <section style={{ position: 'relative', overflow: 'hidden', background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 60%), linear-gradient(135deg, rgba(255,165,0,0.06), rgba(255,153,0,0.03))`, color: theme.colors.text.inverse }}>
          <div className="absolute inset-0" style={{ opacity: 0.18, background: `radial-gradient(circle at 20% 30%, rgba(255,165,0,0.08), transparent 30%), radial-gradient(circle at 80% 70%, rgba(255,153,0,0.05), transparent 40%)` }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Financial Future <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  With Expert Debt Solutions
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Trusted by over 75,000+ Indians, we've helped settle more than ₹680 crores in debt with a 97% success rate.
                Our RBI-certified financial experts provide 24/7 support to help you break free from financial stress and 
                achieve lasting financial freedom. Start with a free, no-obligation consultation today.
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white font-bold">
                      {i}+k
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-white ml-2">4.9/5 (1000+ Reviews)</span>
                  </div>
                  <p className="text-blue-200 text-sm">Rated Excellent by our clients</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                {[
                  'RBI-Certified Advisors',
                  '97% Success Rate',
                  'No Upfront Fees',
                  '1000+ 5★ Reviews'
                ].map((txt, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(255,165,0,0.12)', border: `1px solid ${theme.colors.golden[200]}` }}>
                    <CheckCircle className="w-5 h-5" style={{ color: theme.colors.golden[500] }} />
                    <span>{txt}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/apply"
                  className="px-8 py-4 font-bold rounded-lg hover:scale-105 flex items-center justify-center gap-2"
                  style={{
                    paddingLeft: '2rem',
                    paddingRight: '2rem',
                    background: `linear-gradient(90deg, ${theme.colors.golden[500]}, ${theme.colors.orange[600]})`,
                    color: theme.colors.text.inverse,
                    boxShadow: `0 10px 40px rgba(255,165,0,0.2)`,
                  }}
                >
                  Get Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 font-semibold rounded-lg flex items-center justify-center gap-2"
                  style={{ border: `2px solid ${theme.colors.golden[300]}`, color: theme.colors.text.inverse, background: 'transparent' }}
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
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `linear-gradient(135deg, ${theme.colors.golden[500]}, ${theme.colors.orange[600]})` }}>
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
                      className="inline-flex items-center font-medium transition-colors group"
                      style={{ color: theme.colors.orange[600] }}
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: theme.colors.golden[50] }}>
                  <caseStudy.icon className="w-6 h-6" style={{ color: theme.colors.orange[500] }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                <div className="flex items-center" style={{ color: theme.colors.golden[500] }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ color: theme.colors.golden[500] }} />
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
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4 shadow-lg" style={{ background: `linear-gradient(135deg, ${theme.colors.golden[500]}, ${theme.colors.orange[600]})` }}>
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
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{ background: `linear-gradient(135deg, ${theme.colors.golden[500]}, ${theme.colors.orange[600]})` }}>
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
      <section style={{ paddingTop: '5rem', paddingBottom: '5rem', background: `linear-gradient(90deg, ${theme.colors.golden[500]}, ${theme.colors.orange[600]})`, color: theme.colors.text.inverse }}>
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
              className="px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2"
              style={{ background: theme.colors.text.inverse, color: theme.colors.primary }}
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 rounded-lg font-semibold text-lg flex items-center justify-center"
              style={{ border: `2px solid ${theme.colors.golden[300]}`, color: theme.colors.text.inverse, background: 'transparent' }}
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