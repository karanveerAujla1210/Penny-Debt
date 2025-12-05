import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import AOS from 'aos';
import SEO from '../components/SEO';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqCategories = [
    {
      category: 'General Questions',
      faqs: [
        {
          question: 'What is debt settlement?',
          answer: 'Debt settlement is a process where we negotiate with your creditors to reduce the total amount you owe, often by 40-70%. You then pay the reduced amount in a lump sum or installments.'
        },
        {
          question: 'How long does the process take?',
          answer: 'Most settlements are completed within 24-48 months, depending on your debt amount and financial situation.'
        },
        {
          question: 'Is debt settlement legal in India?',
          answer: 'Yes, debt settlement is completely legal. We follow all RBI guidelines and ensure full legal compliance.'
        }
      ]
    },
    {
      category: 'Cost & Fees',
      faqs: [
        {
          question: 'How much do your services cost?',
          answer: 'We charge a success-based fee only after your debt is successfully settled. No upfront costs.'
        },
        {
          question: 'Are there any hidden charges?',
          answer: 'No. We believe in complete transparency. All fees are clearly explained before you sign up.'
        }
      ]
    },
    {
      category: 'Process Questions',
      faqs: [
        {
          question: 'Will this affect my credit score?',
          answer: 'Debt settlement may temporarily impact your credit score, but it\'s often better than bankruptcy or continued defaults.'
        },
        {
          question: 'Can I still use my credit cards during the process?',
          answer: 'We recommend stopping credit card usage during settlement to avoid accumulating more debt.'
        },
        {
          question: 'What if creditors don\'t agree to settle?',
          answer: 'Our expert negotiators have a 95% success rate. We work persistently to reach favorable settlements.'
        }
      ]
    },
    {
      category: 'Eligibility',
      faqs: [
        {
          question: 'Who is eligible for debt settlement?',
          answer: 'Anyone with unsecured debt (credit cards, personal loans) of ₹50,000 or more and facing financial hardship.'
        },
        {
          question: 'Do I need to be in default to qualify?',
          answer: 'No, but being in financial distress helps in negotiations.'
        }
      ]
    }
  ];

  // Flatten all FAQs for search
  const allFaqs = faqCategories.flatMap((category, catIndex) => 
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      category: category.category,
      globalIndex: catIndex * 100 + faqIndex
    }))
  );

  // Build FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category =>
      category.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  const filteredFaqs = searchTerm 
    ? allFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  return (
    <div className="pt-20">
      <SEO title="FAQ - Penny & Debt" description="Frequently asked questions about debt relief, settlement, costs, timelines, and eligibility." />
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
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
                Frequently Asked <br />
                <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Find answers to common questions about our debt relief services. 
                Can't find what you're looking for? Contact our support team.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-300 outline-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Search Results */}
          {filteredFaqs && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Search Results ({filteredFaqs.length} found)
              </h2>
              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">Try searching with different keywords</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleIndex(faq.globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <div>
                          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                            {faq.category}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900 mt-1">
                            {faq.question}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            activeIndex === faq.globalIndex ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {activeIndex === faq.globalIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Category-wise FAQs */}
          {!filteredFaqs && (
            <div className="space-y-12">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex} data-aos="fade-up" data-aos-delay={catIndex * 100}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-100">
                    {category.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = catIndex * 100 + faqIndex;
                      return (
                        <div
                          key={faqIndex}
                          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <button
                            onClick={() => toggleIndex(globalIndex)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            <ChevronDown 
                              className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                                activeIndex === globalIndex ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                          {activeIndex === globalIndex && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our debt relief experts are here to help. Get personalized answers to your specific situation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Link>
              
              <Link
                to="/apply"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center" data-aos="fade-up">
            {[
              { value: '10,000+', label: 'Questions Answered' },
              { value: '95%', label: 'Satisfaction Rate' },
              { value: '24/7', label: 'Support Available' },
              { value: '<2hrs', label: 'Response Time' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;