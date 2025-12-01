import { Routes, Route } from 'react-router-dom';
import PremiumNavbar from './components/PremiumNavbar';
import PremiumFooter from './components/PremiumFooter';
import Home from './pages/Home';
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
import './App.css';

function App() {
  return (
    <>
      <PremiumNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
      <PremiumFooter />
    </>
  );
}

export default App;
