import { Routes, Route } from 'react-router-dom';
import PremiumNavbar from './components/PremiumNavbar';
import PremiumFooter from './components/PremiumFooter';
import FinanceHome from './pages/FinanceHome';
import './styles/fintech-system.css';
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
import ProtectedRoute from './components/ProtectedRoute';
import LoginCustomer from './pages/auth/LoginCustomer';
import LoginEmployee from './pages/auth/LoginEmployee';
import LoginAdmin from './pages/auth/LoginAdmin';
import CustomerDashboard from './pages/dashboard/customer/CustomerDashboard';
import EmployeeDashboard from './pages/dashboard/employee/EmployeeDashboard';
import AdminDashboard from './pages/dashboard/admin/AdminDashboard';
import Unauthorized from './pages/Unauthorized';
import HarassmentHelp from './pages/HarassmentHelp';
import Eligibility from './pages/Eligibility';
import './App.css';
import './components/PremiumNavbar.css';

function App() {
  return (
    <>
      <PremiumNavbar />
      <Routes>
        <Route path="/" element={<FinanceHome />} />
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
        <Route path="/login" element={<LoginCustomer />} />
        <Route path="/customer-login" element={<LoginCustomer />} />
        <Route path="/employee-login" element={<LoginEmployee />} />
        <Route path="/admin-login" element={<LoginAdmin />} />

        {/* Protected dashboards */}
        <Route
          path="/dashboard/customer"
          element={
            <ProtectedRoute allowedRoles={["customer"]}>
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/employee"
          element={
            <ProtectedRoute allowedRoles={["employee"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/harassment-help" element={<HarassmentHelp />} />
        <Route path="/eligibility" element={<Eligibility />} />
      </Routes>
      <PremiumFooter />
    </>
  );
}

export default App;
