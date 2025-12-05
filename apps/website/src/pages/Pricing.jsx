import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Star, Shield, DollarSign, Calculator, 
  ArrowRight, Phone, HelpCircle 
} from 'lucide-react';
import { useState, useEffect } from 'react';
import AOS from 'aos';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const pricingPlans = [
    {
      name: 'Basic Debt Settlement',
      fee: '15-20%',
      feeNote: 'of enrolled debt',
      payment: 'After successful settlement',
      description: 'Perfect for straightforward debt settlement cases',
      features: [
        'Debt analysis',
        'Creditor negotiation',
        'Legal documentation',
        'Email support'
      ],
      bestFor: 'Single creditor or simple cases',
      popular: false
    },
    {
      name: 'Premium Debt Relief',
      fee: '18-25%',
      feeNote: 'of enrolled debt',
      payment: 'After successful settlement',
      description: 'Most comprehensive debt relief solution',
      features: [
        'Everything in Basic',
        'Dedicated case manager',
        'Priority negotiation',
        'Phone support',
        'Credit counseling'
      ],
      bestFor: 'Multiple creditors or complex cases',
      popular: true
    },
    {
      name: 'Complete Financial Freedom',
      fee: '20-30%',
      feeNote: 'of enrolled debt',
      payment: 'After successful settlement',
      description: 'Full-service financial recovery program',
      features: [
        'Everything in Premium',
        'Legal representation',
        'Credit repair assistance',
        'Financial planning',
        '24/7 support',
        'Post-settlement guidance'
      ],
      bestFor: 'High debt amounts or legal issues',
      popular: false
    }
  ];

  const example = {
    totalDebt: 1000000,
    settledAmount: 350000,
    ourFee: 70000,
    totalPayment: 420000,
    savings: 580000
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

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
                Transparent Pricing - <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  No Hidden Fees
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                We only succeed when you succeed. Pay only after we successfully settle your debt. 
                No upfront costs, no hidden charges.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>No Upfront Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Pay Only After Success</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <span>100% Money-Back Guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Success-based pricing that aligns with your financial recovery</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-2 text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-1" />
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.fee}</span>
                    <span className="text-gray-600 ml-2">{plan.feeNote}</span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold mb-4">{plan.payment}</p>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800 mb-1">Best For:</p>
                    <p className="text-sm text-blue-700">{plan.bestFor}</p>
                  </div>
                  
                  <Link
                    to="/apply"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Fees Work Example */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our Fees Work</h2>
            <p className="text-xl text-gray-600">Real example showing exactly what you pay</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100" data-aos="fade-up" data-aos-delay="200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Example Calculation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Total Debt:</span>
                    <span className="text-xl font-bold text-red-600">{formatCurrency(example.totalDebt)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Settled Amount:</span>
                    <span className="text-xl font-bold text-green-600">{formatCurrency(example.settledAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Our Fee (20%):</span>
                    <span className="text-xl font-bold text-blue-600">{formatCurrency(example.ourFee)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-blue-50 px-4 rounded-lg">
                    <span className="font-bold text-gray-900">Your Total Payment:</span>
                    <span className="text-2xl font-bold text-blue-600">{formatCurrency(example.totalPayment)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-xl">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">{formatCurrency(example.savings)}</div>
                      <div className="text-sm">SAVED</div>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-green-600">58% Total Savings!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-xl text-gray-600">Flexible and fair payment options</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'No Upfront Fees',
                description: 'Start your debt relief journey with zero upfront costs'
              },
              {
                icon: CheckCircle,
                title: 'Pay After Settlement',
                description: 'Fees are only charged after successful debt settlement'
              },
              {
                icon: Calculator,
                title: 'Flexible Payment Options',
                description: 'Multiple payment plans to fit your budget'
              },
              {
                icon: DollarSign,
                title: '100% Money-Back Guarantee',
                description: 'If we don\'t settle your debt, you don\'t pay anything'
              }
            ].map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing FAQs</h2>
          </div>
          
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
            {[
              {
                question: 'When do I pay the fees?',
                answer: 'You only pay fees after we successfully settle your debt. No upfront costs or hidden charges.'
              },
              {
                question: 'What if you can\'t settle my debt?',
                answer: 'If we can\'t achieve a settlement, you pay nothing. We offer a 100% money-back guarantee.'
              },
              {
                question: 'Are there any additional costs?',
                answer: 'No hidden fees. All costs are transparently discussed upfront. The only fee is our success-based percentage.'
              },
              {
                question: 'Can I pay in installments?',
                answer: 'Yes, we offer flexible payment plans to accommodate your financial situation after settlement.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
            Ready to Get Your Custom Quote?
          </h2>
          <p className="text-xl text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
            Get a personalized debt relief plan with transparent pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/apply"
              className="px-10 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Get Custom Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 bg-blue-700 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Speak with Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;