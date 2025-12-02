import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ModernNavbar from './components/ModernNavbar';
import ModernFooter from './components/ModernFooter';
import { AnimatePresence } from 'framer-motion';
import NewHome from './pages/NewHome';
import PremiumHome from './pages/PremiumHome';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ApplyForm from './pages/ApplyForm';
import ApplyLoan from './pages/ApplyLoan';
import ApplyLoanBasicDetails from './pages/ApplyLoanBasicDetails';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Signup from './pages/Signup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ModernNavbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PremiumHome />} />
          <Route path="/home" element={<NewHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/apply-loan" element={<ApplyLoan />} />
          <Route path="/apply-loan-basic" element={<ApplyLoanBasicDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AnimatePresence>
      <ModernFooter />
    </div>
  );
}

export default App;
