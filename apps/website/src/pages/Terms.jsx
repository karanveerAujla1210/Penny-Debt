import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';
import AOS from 'aos';

const Terms = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl text-blue-100">
              Please read these terms carefully before using Penny & Debt's services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            
            <div data-aos="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Agreement</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By using our website or services, you agree to these terms.
              </p>
            </div>

            <div data-aos="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Eligibility</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                You must be 18+ and legally capable of entering binding agreements.
              </p>
            </div>

            <div data-aos="fade-up">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Service Conditions</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Penny & Debt provides debt relief advisory services. Results may vary based on lender policies and borrower profile.
              </p>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payments</h2>
              <p className="text-gray-700 leading-relaxed">
                Fees are disclosed transparently before enrolment. No hidden charges are added later.
              </p>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitations</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not guarantee specific settlement outcomes or CIBIL scores, as each lender case differs.
              </p>
            </div>

            <div data-aos="fade-up" className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Legal Jurisdiction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Any disputes fall under the jurisdiction of Indian courts.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
