import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import theme from '../styles/theme';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const coreServices = [
    {
      id: 'settlement',
      title: 'Comprehensive Debt Settlement',
      desc: 'Negotiation-led reduction of outstanding debt with full legal protection.',
      features: ['40-70% average reduction', 'No upfront fees', 'Dedicated case manager']
    },
    {
      id: 'restructure',
      title: 'EMI Restructuring',
      desc: 'Restructure EMIs to make monthly payments affordable and sustainable.',
      features: ['Lower monthly payments', 'Flexible tenures', 'Transparent process']
    },
    {
      id: 'credit',
      title: 'Credit Rehabilitation',
      desc: 'Rebuild credit score with guided repayment and credit education.',
      features: ['Personalized plan', 'Credit monitoring', 'Education & support']
    }
  ];

  const processSteps = [
    { step: '1', title: 'Free Consultation' },
    { step: '2', title: 'Assessment & Plan' },
    { step: '3', title: 'Negotiate & Implement' },
    { step: '4', title: 'Recover & Rebuild' }
  ];

  const renderStars = (rating = 5) => (
    Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
    ))
  );

  const sampleReviews = [
    { id: 1, name: 'A. Sharma', rating: 5, text: 'Saved my life. Professional team.' },
    { id: 2, name: 'N. Verma', rating: 5, text: 'Transparent process and quick results.' }
  ];

  return (
    <div className="pt-20">
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 60%), rgba(255,165,0,0.03)`,
          color: theme.colors.text.inverse
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-blue-100 mb-6">Comprehensive, compliant debt solutions for individuals and businesses.</p>
            <div className="flex gap-3">
              <Link to="/apply" className="px-5 py-3 rounded-md font-semibold" style={{ background: theme.colors.golden[500], color: theme.colors.text.inverse }}>
                Apply Now
              </Link>
              <Link to="/contact" className="px-5 py-3 rounded-md font-semibold" style={{ border: `2px solid ${theme.colors.golden[300]}`, color: theme.colors.text.inverse, background: 'transparent' }}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Core Services</h2>
            <p className="text-gray-600 mt-2">Choose a service to learn more.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreServices.map((s) => (
              <div key={s.id} className="p-6 border rounded-2xl shadow-sm hover:shadow-md">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <ul className="space-y-2 mb-4">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-blue-600 font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6">How It Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {processSteps.map((p) => (
              <div key={p.step} className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-xl font-bold mb-2">{p.step}</div>
                <div className="font-medium">{p.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">What Our Clients Say</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {sampleReviews.map((r) => (
              <div key={r.id} className="p-6 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold">{r.name}</div>
                  <div className="flex items-center">{renderStars(r.rating)}</div>
                </div>
                <p className="text-gray-700">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
      'The team went above and beyond to help me resolve my financial situation. Truly life-changing service!',
      'Professional, courteous, and effective. They handled everything from start to finish with minimal hassle.',
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

      {/* Client Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience with us.
            </p>
            <div className="flex items-center justify-center mt-4 space-x-1">
              {renderStars(5)}
              <span className="ml-2 text-gray-700 font-medium">4.9/5 from 1000+ reviews</span>
            </div>
          </div>

          <div className="relative overflow-hidden py-8">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
            <div 
              className="flex space-x-6 px-4 py-8 overflow-x-auto scrollbar-hide"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth',
                animation: 'scroll 60s linear infinite',
              }}
            >
              {clientReviews.map((review) => (
              <div 
                key={review.id}
                className="flex-shrink-0 w-80 md:w-96 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  scrollSnapAlign: 'start',
                  animation: `slideIn 0.5s ease-out ${review.id * 0.05}s both`,
                  opacity: 0
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.location} • {review.date}</p>
                    </div>
                  </div>
                  {review.verified && (
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                  )}
                </div>
                
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{review.title}</h3>
                <p className="text-gray-600 mb-4">"{review.content}"</p>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-sm text-gray-500">Debt Settled</p>
                      <p className="font-semibold text-blue-600">{review.debtSettled}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Amount Saved</p>
                      <p className="font-semibold text-green-600">₹{review.saved}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{review.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
              <Quote className="w-5 h-5 text-blue-400" />
              <p className="text-blue-800 font-medium">
                Join 75,000+ Indians who've achieved financial freedom with our help
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;