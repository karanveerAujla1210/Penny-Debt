import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, UserCheck, BarChart3, Handshake, Trophy, 
  CheckCircle, Clock, Shield, ArrowRight, Phone 
} from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      step: 1,
      icon: FileText,
      title: 'Free Consultation',
      duration: 'Day 1',
      description: 'Share your debt details via phone/form. Our expert reviews your situation and provides initial assessment within 24 hours.',
      whatHappens: [
        'Share your debt details',
        'Our expert reviews your situation', 
        'Receive initial assessment within 24 hours'
      ],
      whatYouNeed: [
        'List of all debts',
        'Monthly income details',
        'Recent statements'
      ]
    },
    {
      step: 2,
      icon: BarChart3,
      title: 'Custom Debt Relief Plan',
      duration: 'Days 2-7',
      description: 'Detailed financial analysis and personalized settlement strategy with clear timeline and payment plan.',
      whatHappens: [
        'Detailed financial analysis',
        'Personalized settlement strategy',
        'Clear timeline and payment plan',
        'Review and approval from you'
      ],
      whatYouGet: [
        'Written plan document',
        'Projected savings calculation',
        'Month-by-month roadmap'
      ]
    },
    {
      step: 3,
      icon: UserCheck,
      title: 'Enrollment & Setup',
      duration: 'Days 8-14',
      description: 'Sign service agreement, set up dedicated savings account, assign your case manager, and begin monthly deposits.',
      whatHappens: [
        'Sign service agreement',
        'Set up dedicated savings account',
        'Assign your case manager',
        'Begin monthly deposits'
      ],
      yourCommitment: [
        'Monthly deposits to settlement fund',
        'Stop using credit cards',
        'Maintain communication'
      ]
    },
    {
      step: 4,
      icon: Handshake,
      title: 'Creditor Negotiation',
      duration: 'Months 1-18',
      description: 'We contact your creditors, negotiate reduced settlements, handle all communications, and keep you updated weekly.',
      whatHappens: [
        'We contact your creditors',
        'Negotiate reduced settlements',
        'Handle all communications',
        'Keep you updated weekly'
      ],
      whatWeDo: [
        'Professional negotiation',
        'Legal documentation',
        'Creditor management',
        'Progress tracking'
      ]
    },
    {
      step: 5,
      icon: Trophy,
      title: 'Settlement & Payment',
      duration: 'Months 12-24',
      description: 'Creditors accept settlement offers, you approve each settlement, payments made from your fund, legal closure obtained.',
      whatHappens: [
        'Creditors accept settlement offers',
        'You approve each settlement',
        'Payments made from your fund',
        'Legal closure obtained'
      ],
      whatYouGet: [
        'Settlement confirmation letters',
        'Legal release documents',
        'Debt-free certificate'
      ]
    },
    {
      step: 6,
      icon: CheckCircle,
      title: 'Post-Settlement Support',
      duration: 'Ongoing',
      description: 'Credit report review, financial counseling, budget planning assistance, and ongoing support for your debt-free future.',
      whatHappens: [
        'Credit report review',
        'Financial counseling',
        'Budget planning assistance',
        'Ongoing support'
      ],
      yourFuture: [
        'Debt-free life',
        'Improved financial health',
        'Peace of mind',
        'Fresh start'
      ]
    }
  ];

  const caseStudy = {
    before: {
      totalDebt: '₹10,00,000',
      monthlyEMI: '₹45,000',
      stressLevel: 'High',
      yearsToClear: '7+ years'
    },
    after: {
      settledAmount: '₹2,80,000',
      monthlyPayment: '₹12,000',
      stressLevel: 'Minimal',
      debtFreeIn: '24 months'
    },
    savings: '₹7,20,000 (72% reduction)'
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Journey to <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Debt Freedom
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Our proven 6-step process has helped 50,000+ Indians achieve financial freedom. 
                Simple, transparent, and effective - step by step.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>100% Legal Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span>24-48 Month Timeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>95% Success Rate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Step-by-Step Process</h2>
            <p className="text-xl text-gray-600">From consultation to debt freedom - here's exactly what happens</p>
          </div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        Step {step.step} • {step.duration}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {step.whatHappens ? 'What Happens:' : 
                         step.whatYouNeed ? 'What You Need:' : 
                         step.yourCommitment ? 'Your Commitment:' : 
                         step.whatWeDo ? 'What We Do:' : 
                         step.yourFuture ? 'Your Future:' : 'Process:'}
                      </h4>
                      <ul className="space-y-2">
                        {(step.whatHappens || step.whatYouNeed || step.yourCommitment || step.whatWeDo || step.yourFuture || []).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {(step.whatYouGet || step.yourCommitment || step.whatYouGet) && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {step.whatYouGet ? 'What You Get:' : 'Additional Info:'}
                        </h4>
                        <ul className="space-y-2">
                          {(step.whatYouGet || []).map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Step Visual */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-bold text-blue-800">{step.step}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Example */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Example: What Happens After You Apply?</h2>
            <p className="text-xl text-gray-600">See how our process transformed one client's financial situation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6">Before Penny & Debt</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div>
                    <span className="font-semibold">Total Debt:</span> {caseStudy.before.totalDebt}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div>
                    <span className="font-semibold">Monthly EMI:</span> {caseStudy.before.monthlyEMI}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div>
                    <span className="font-semibold">Stress Level:</span> {caseStudy.before.stressLevel}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <div>
                    <span className="font-semibold">Years to Clear:</span> {caseStudy.before.yearsToClear}
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">After Our Process</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>
                    <span className="font-semibold">Settled Amount:</span> {caseStudy.after.settledAmount}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>
                    <span className="font-semibold">Monthly Payment:</span> {caseStudy.after.monthlyPayment}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>
                    <span className="font-semibold">Stress Level:</span> {caseStudy.after.stressLevel}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✅</span>
                  <div>
                    <span className="font-semibold">Debt-Free In:</span> {caseStudy.after.debtFreeIn}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8" data-aos="zoom-in" data-aos-delay="400">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full text-2xl font-bold shadow-xl">
              Total Savings: {caseStudy.savings}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Timeline Overview</h2>
            <p className="text-xl text-gray-600">From application to debt freedom - here's your journey timeline</p>
          </div>
          
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>
            
            <div className="space-y-8">
              {[
                { time: 'Day 1', event: 'Submit application & get free consultation' },
                { time: 'Days 2-7', event: 'Receive custom debt relief plan' },
                { time: 'Days 8-14', event: 'Enroll and set up savings account' },
                { time: 'Months 1-6', event: 'Active creditor negotiations begin' },
                { time: 'Months 6-18', event: 'Settlement agreements reached' },
                { time: 'Months 12-24', event: 'Final payments and debt freedom!' }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <div className="font-semibold text-blue-600 text-sm uppercase tracking-wide">
                      {item.time}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mt-1">
                      {item.event}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
            Ready to Start Your Journey Today?
          </h2>
          <p className="text-xl text-blue-100 mb-8" data-aos="fade-up" data-aos-delay="100">
            Join 50,000+ Indians who chose financial freedom with our proven process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/apply"
              className="px-10 py-4 bg-white text-blue-900 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Start Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-10 py-4 bg-blue-700 border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            No credit card required • Free consultation • 100% confidential
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;