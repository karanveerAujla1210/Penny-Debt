import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { initProtection } from "./utils/protection";
import "./App.css";
import "./index.css";
import "./styles/fintech-design-system.css";
import "./styles/website.css";


import Home from "./pages/Website/Home";
import HomeRevamped from "./pages/Website/HomeRevamped";
import PremiumHome from "./pages/Website/PremiumHome";
import PremiumServices from "./pages/Website/PremiumServices";
import Services from "./pages/Website/Services";
import About from "./pages/Website/About";
import ApplyForm from "./pages/Website/ApplyForm";
import Blog from "./pages/Website/Blog";
import Careers from "./pages/Website/Careers";
import Contact from "./pages/Website/Contact";
import FAQ from "./pages/Website/FAQ";
import PrivacyPolicy from "./pages/Website/PrivacyPolicy";
import Terms from "./pages/Website/Terms";
import CRMApp from "./pages/crm/CRMApp";


import ApplyLoan from "./pages/Website/ApplyLoan";
import ApplyLoanBasicDetails from "./pages/Website/ApplyLoanBasicDetails";

import MarketingDashboard from "./pages/crm/Dashboard/MarketingDashboard";
import AdminDashboard from "./pages/crm/Dashboard/AdminDashboard";
import ManagerDashboard from "./pages/crm/Dashboard/ManagerDashboard";
import SupportDashboard from "./pages/crm/Dashboard/SupportDashboard";
import CustomerDashboard from "./pages/crm/Dashboard/CustomerDashboard";
import EmployeeDashboard from "./pages/crm/Dashboard/EmployeeDashboard";
import StaffDashboard from "./pages/crm/Dashboard/StaffDashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useMemo } from "react";

import Register from "./pages/crm/Customer/Register";
import Login from "./pages/crm/Customer/Login";
import Profile from "./pages/crm/Customer/Profile";
import CustomerHome from "./pages/crm/Customer/CustomerHome";

import CustomerLogin from "./pages/Auth/CustomerLogin";
import EmployeeLogin from "./pages/Auth/EmployeeLogin";
import SimpleEmployeeLogin from "./pages/Auth/SimpleEmployeeLogin";
import TestAuth from "./pages/Auth/TestAuth";
import IsolatedLogin from "./pages/Auth/IsolatedLogin";
import WorkingLogin from "./pages/Auth/WorkingLogin";
import TestLogin from "./pages/Auth/TestLogin";
import Signup from "./pages/Website/Signup";
import DataViewer from "./pages/Admin/DataViewer";
import TestPage from "./pages/TestPage";

const fontFamily = `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`;

import Header from "./components/Header";
import PremiumNavbar from "./components/PremiumNavbar";
import PremiumFooter from "./components/PremiumFooter";



// App without BrowserRouter - Fixed duplicate imports
export default function App() {
  // Initialize protection (COMPLETELY DISABLED)
  useEffect(() => {
    initProtection(); // Now just logs a message
  }, []);

  // Get user from localStorage (employee or customer)
  const employee = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("employee"));
    } catch {
      return null;
    }
  }, []);
  const customer = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("customerUser"));
    } catch {
      return null;
    }
  }, []);

  return (
    <>
      <PremiumNavbar />
      <main
        className="main-content"
        style={{
          minHeight: "calc(100vh - 160px)",
          width: "100%"
        }}
      >
        <Routes>
          <Route path="/" element={<PremiumHome />} />
          <Route path="/home" element={<PremiumHome />} />
          <Route path="/services" element={<PremiumServices />} />
          <Route path="/applyform" element={<ApplyForm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crm" element={<CRMApp />} />
          <Route path="/test-login" element={<TestLogin />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/services" element={<Services />} />
    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/applyloan" element={<ApplyLoan />} />
    <Route path="/applyloan-basic-details" element={<ApplyLoanBasicDetails />} />
          {/* Dashboard routes with role-based guards */}
          <Route path="/dashboard/admin" element={
            <ProtectedRoute allowedRoles={["admin"]} user={employee}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/manager" element={
            <ProtectedRoute allowedRoles={["teamlead","manager"]} user={employee}>
              <ManagerDashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/marketing" element={
            <ProtectedRoute allowedRoles={["marketing"]} user={employee}>
              <MarketingDashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/support" element={
            <ProtectedRoute allowedRoles={["support"]} user={employee}>
              <SupportDashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/customer" element={
            <ProtectedRoute allowedRoles={["customer"]} user={customer}>
              <CustomerDashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/employee" element={
            <ProtectedRoute allowedRoles={["employee"]} user={employee}>
              <EmployeeDashboard />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/staff" element={
            <ProtectedRoute allowedRoles={["staff"]} user={employee}>
              <StaffDashboard />
            </ProtectedRoute>
          } />
          {/* Website Auth */}
          <Route path="/customer-login" element={<CustomerLogin />} />
          <Route path="/employee-login" element={<WorkingLogin />} />
          <Route path="/simple-login" element={<SimpleEmployeeLogin />} />
          <Route path="/test-auth" element={<TestAuth />} />
          <Route path="/isolated-login" element={<IsolatedLogin />} />
          <Route path="/test-login" element={<TestLogin />} />
          <Route path="/old-employee-login" element={<EmployeeLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/data" element={<DataViewer />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<PremiumHome />} />
        </Routes>
      </main>
      <PremiumFooter />
      <Analytics />
    </>
  );
}
