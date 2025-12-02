import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Target, Heart, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import CountUp from 'react-countup';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const stats = [
    { value: 50000, suffix: '+', label: 'Happy Customers' },
    { value: 450, suffix: 'Cr+', prefix: '₹', label: 'Debt Settled' },
    { value: 95, suffix: '%', label: 'Success Rate' },
    { value: 4.8, suffix: '★', label: 'Average Rating' },
  ];

  const values = [
    { icon: Shield, title: 'Transparency', desc: 'No hidden fees, clear communication at every step' },
    { icon: Heart, title: 'Integrity', desc: 'Ethical practices, RBI-compliant processes' },
    { icon: Users, title: 'Empathy', desc: 'Understanding your unique financial situation' },
    { icon: Award, title: 'Excellence', desc: 'Proven track record of successful settlements' },
  ];

  const timeline = [
    { year: '2020', title: 'Founded', desc: 'Penny & Debt established with mission to help Indians become debt-free' },
    { year: '2021', title: '5,000 Clients', desc: 'Helped first 5,000 families achieve financial freedom' },
    { year: '2022', title: 'AI Platform', desc: 'Launched AI-powered debt negotiation system' },
    { year: '2023', title: '25,000 Clients', desc: 'Expanded nationwide with regional offices' },
    { year: '2024', title: '50,000+ Clients', desc: 'Crossed major milestone with ₹450Cr+ debt settled' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empowering Indians to <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Achieve Debt Freedom
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Founded in 2020, we've helped over 50,000 families settle ₹450+ crores in debt, 
                transforming financial stress into freedom through transparent, ethical solutions.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>RBI Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>100% Legal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Proven Results</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8" data-aos="fade-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.prefix}
                  <CountUp end={stat.value} duration={2.5} separator="," />
                  {stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-700" data-aos="fade-up" data-aos-delay="100">
            <p className="mb-6">
              Founded in 2020, Penny & Debt was born from a simple mission: help everyday Indians break free from 
              the crushing burden of debt. We've helped over 50,000 families settle ₹450+ crores in debt, 
              transforming financial stress into freedom.
            </p>
            <p className="mb-6">
              India faces a silent debt crisis. Millions struggle with credit card defaults, personal loans, 
              and harassment from recovery agents. Traditional solutions are expensive, complicated, and often ineffective. 
              We created Penny & Debt to change that.
            </p>
            <p>
              Our platform combines cutting-edge technology with human expertise to negotiate with banks and NBFCs 
              on your behalf. We've helped thousands of Indians reduce their debt by up to 70% while protecting 
              them legally from harassment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in our mission to help Indians achieve debt freedom</p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={index * 100}
                className="flex gap-6 items-start"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide transparent, ethical, and effective debt relief solutions that restore 
                financial dignity and peace of mind to Indian families.
              </p>
            </div>
            
            <div data-aos="fade-left" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become India's most trusted debt relief platform, helping millions achieve 
                financial freedom through innovative, technology-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team Philosophy</h2>
            <p className="text-xl text-gray-600 mb-8">
              Expert financial counselors, legal advisors, and negotiation specialists with 100+ years 
              combined experience in debt management and financial services.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 italic">
                "We believe every person deserves a second chance at financial freedom. Our team works 
                tirelessly to ensure that debt doesn't define your future – your determination does."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
            Ready to Start Your Debt-Free Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
            Join 50,000+ Indians who chose financial freedom with Penny & Debt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/apply"
              className="px-10 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/how-it-works"
              className="px-10 py-4 bg-blue-700 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;