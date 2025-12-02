import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, TrendingDown, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

const NewHome = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { value: 450, suffix: 'Cr+', prefix: '₹', label: 'Debt Settled' },
    { value: 50000, suffix: '+', label: 'Happy Customers' },
    { value: 70, suffix: '%', label: 'Average Savings' },
    { value: 4.8, suffix: '★', label: 'Customer Rating' },
  ];

  const features = [
    { icon: Shield, title: '100% Legal & Compliant', desc: 'RBI-compliant processes with full legal protection' },
    { icon: TrendingDown, title: 'Up to 70% Debt Reduction', desc: 'Negotiate significant reductions on your total debt' },
    { icon: Users, title: 'Expert Negotiators', desc: 'Dedicated team handles all creditor communications' },
    { icon: Award, title: 'Proven Track Record', desc: '50,000+ successful debt settlements completed' },
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', location: 'Mumbai', amount: '₹8,00,000', time: '22 months', rating: 5, text: 'Reduced my ₹12L debt to ₹4L. Life-changing experience!' },
    { name: 'Priya Sharma', location: 'Bangalore', amount: '₹5,50,000', time: '18 months', rating: 5, text: 'Professional team. Transparent process. Highly recommended.' },
    { name: 'Amit Patel', location: 'Delhi', amount: '₹15,00,000', time: '30 months', rating: 5, text: 'Finally debt-free after 3 years of struggle. Thank you!' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold">Trusted by 50,000+ Indians</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Debt Freedom <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get up to <span className="font-bold text-white">70% debt relief</span> in 24-48 months. Break free from debt stress with our AI-powered platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/apply"
                  className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                >
                  Check Your Savings <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="px-8 py-4 bg-blue-700/50 backdrop-blur-sm border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all flex items-center justify-center"
                >
                  See How It Works
                </Link>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>RBI Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No Hidden Fees</span>
                </div>
              </div>
            </motion.div>

            {/* Right Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Your Potential Impact</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold mb-2">
                        {stat.prefix}
                        <CountUp end={stat.value} duration={2.5} separator="," />
                        {stat.suffix}
                      </div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Penny & Debt</h2>
            <p className="text-xl text-gray-600">Trusted by 50,000+ Indians for debt relief</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Path to Debt Freedom</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and effective</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Free Consultation', desc: 'Share your debt details. Our experts analyze in 24 hours.' },
              { step: '2', title: 'Custom Plan', desc: 'Get personalized debt settlement strategy with timelines.' },
              { step: '3', title: 'Negotiation', desc: 'We negotiate with creditors. Save up to 70%.' },
              { step: '4', title: 'Settlement', desc: 'Pay reduced amount. Get legal closure. Debt-free!' },
            ].map((item, index) => (
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

      {/* Before/After Comparison */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results. Real Freedom.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div data-aos="fade-right" className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Before</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div><span className="font-semibold">Total Debt:</span> ₹8,50,000</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div><span className="font-semibold">Monthly EMI:</span> ₹45,000</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div><span className="font-semibold">Stress Level:</span> High</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div><span className="font-semibold">Years to Clear:</span> 7+ years</div>
                </li>
              </ul>
            </div>
            
            <div data-aos="fade-left" className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">After</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div><span className="font-semibold">Settled Amount:</span> ₹2,80,000</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div><span className="font-semibold">Monthly Payment:</span> ₹12,000</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div><span className="font-semibold">Stress Level:</span> Minimal</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div><span className="font-semibold">Debt-Free In:</span> 24 months</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8" data-aos="zoom-in">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-xl">
              Savings: ₹5,70,000 (67% reduction)
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Debt Freedom</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <div className="mt-3 text-sm">
                    <span className="text-green-600 font-semibold">Debt Settled: {testimonial.amount}</span>
                    <span className="text-gray-500"> | {testimonial.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
            Ready to Become Debt-Free?
          </h2>
          <p className="text-xl text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
            Join 50,000+ Indians who chose financial freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/apply"
              className="px-10 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
            >
              Start Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="px-10 py-4 bg-blue-700 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-8 text-sm text-blue-200">
            No credit card required • Free consultation • 100% confidential
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewHome;
