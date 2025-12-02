import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Users, TrendingUp, Star, Play, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PremiumHome = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Hero Stats
  const stats = [
    { number: 450, suffix: 'Cr+', label: 'Debt Resolved', prefix: '₹' },
    { number: 50000, suffix: '+', label: 'Happy Customers' },
    { number: 85, suffix: '%', label: 'Success Rate' },
    { number: 24, suffix: 'Months', label: 'Avg. Resolution Time' }
  ];

  // Features
  const features = [
    {
      icon: Shield,
      title: 'RBI Compliant',
      desc: 'Fully regulated and compliant with all Indian financial regulations'
    },
    {
      icon: Users,
      title: 'Expert Team',
      desc: 'Certified debt counselors and financial experts at your service'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      desc: 'Track record of reducing debt by 40-70% for our clients'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      debt: '₹12 Lakhs',
      saved: '₹7.2 Lakhs',
      rating: 5,
      text: 'Penny & Debt helped me reduce my credit card debt from ₹12 lakhs to just ₹4.8 lakhs. Their team was professional and supportive throughout the process.'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      debt: '₹8 Lakhs',
      saved: '₹4.8 Lakhs',
      rating: 5,
      text: 'I was drowning in personal loan debt. Thanks to their negotiation skills, I saved almost 60% of my total debt amount. Highly recommended!'
    },
    {
      name: 'Amit Patel',
      location: 'Bangalore',
      debt: '₹15 Lakhs',
      saved: '₹9 Lakhs',
      rating: 5,
      text: 'The best decision I made was contacting Penny & Debt. They not only reduced my debt but also helped me understand financial management better.'
    }
  ];

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10"
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-20 w-32 h-32 bg-cyan-400 rounded-full opacity-10"
          />
          <motion.div
            animate={{ y: [-30, 30, -30] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-10"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold">RBI Compliant • Trusted by 50,000+ Indians</span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  Become <br />
                  <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Debt-Free
                  </span> <br />
                  in 24 Months
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  India's most trusted debt relief platform. We've helped over 50,000 people 
                  reduce their debt by up to 70% through expert negotiation and personalized strategies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    to="/apply"
                    className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="inline-flex items-center gap-2 border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                  >
                    <Play className="w-5 h-5" />
                    Watch Success Stories
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>No Upfront Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Expert Negotiators</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Stats */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">Our Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold mb-2">
                        {stat.prefix}
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          delay={0.5}
                          separator=","
                        />
                        {stat.suffix}
                      </div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-blue-600">Penny & Debt?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with human expertise to deliver 
                the best debt relief solutions in India.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get debt-free in just 4 simple steps with our proven methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                desc: 'Share your debt details with our certified counselors'
              },
              {
                step: '02',
                title: 'Custom Strategy',
                desc: 'Get a personalized debt relief plan tailored to your situation'
              },
              {
                step: '03',
                title: 'Expert Negotiation',
                desc: 'Our team negotiates with creditors on your behalf'
              },
              {
                step: '04',
                title: 'Debt Freedom',
                desc: 'Achieve significant debt reduction and financial freedom'
              }
            ].map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real people, real results. See how we've transformed lives across India.
            </p>
          </div>

          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 max-w-4xl mx-auto">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.location}</div>
                    </div>
                    <div className="mt-4 sm:mt-0 text-right">
                      <div className="text-sm text-gray-600">Original Debt: {testimonial.debt}</div>
                      <div className="text-lg font-bold text-green-600">Saved: {testimonial.saved}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Ready to Start Your <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Debt-Free Journey?
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of Indians who have successfully eliminated their debt. 
              Get your free consultation today and take the first step towards financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumHome;