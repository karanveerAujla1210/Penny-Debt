import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { useEffect } from 'react';
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
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
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
          background: 'linear-gradient(135deg, #FF9500 0%, #FFB84D 60%)',
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
              <div key={s.id} className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <ul className="space-y-2 mb-4">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
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
                <div className="text-xl font-bold mb-2 text-blue-600">{p.step}</div>
                <div className="font-medium text-gray-800">{p.title}</div>
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
              <div key={r.id} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold">{r.name}</div>
                  <div className="flex items-center gap-1">{renderStars(r.rating)}</div>
                </div>
                <p className="text-gray-700">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', background: `linear-gradient(90deg, ${theme.colors.golden[500]}, ${theme.colors.orange[600]})`, color: theme.colors.text.inverse }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-6">
            Take the first step towards financial freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
              style={{ background: theme.colors.text.inverse, color: theme.colors.primary }}
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 rounded-lg font-semibold flex items-center justify-center"
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
