import { Routes, Route, Navigate } from 'react-router-dom';
import EmployeeLogin from './pages/Auth/EmployeeLogin';
import CustomerLogin from './pages/Auth/CustomerLogin';

// Role-based Dashboards
import AdminDashboard from './pages/Admin/Dashboard';
import AdvisorDashboard from './pages/Advisor/AdvisorDashboard';
import CEODashboard from './pages/CEO/CEODashboard';
import COODashboard from './pages/COO/COODashboard';
import CTODashboard from './pages/CTO/CTODashboard';
import ComplianceDashboard from './pages/Compliance/ComplianceDashboard';
import CounsellorDashboard from './pages/Counsellor/CounsellorDashboard';
import CreditDashboard from './pages/Credit/CreditDashboard';
import FinanceDashboard from './pages/Finance/FinanceDashboard';
import HRDashboard from './pages/HR/HRDashboard';
import LegalDashboard from './pages/Legal/LegalDashboard';
import OperationsDashboard from './pages/Operations/OperationsDashboard';
import RecoveryDashboard from './pages/Recovery/RecoveryDashboard';
import SupportDashboard from './pages/Support/SupportDashboard';
import TeamLeadDashboard from './pages/TeamLead/TeamLeadDashboard';
import TechDashboard from './pages/Tech/TechDashboard';
import VerifierDashboard from './pages/Verifier/VerifierDashboard';
import CustomerDashboard from './pages/Customer/CustomerDashboard';
import EmployeeDashboard from './pages/Employee/Dashboard';
import ManagerDashboard from './pages/Manager/Dashboard';

// Shared Pages
import LeadsList from './pages/Leads/LeadsList';
import CreateLead from './pages/Leads/CreateLead';
import LeadDetails from './pages/Leads/LeadDetails';
import CaseList from './pages/Case/CaseList';
import CaseDetails from './pages/Case/CaseDetails';
import CreateCase from './pages/Case/CreateCase';
import NotFound from './pages/Shared/NotFound';

import './App.css';

function App() {
  return (
    <Routes>
        {/* Auth Routes */}
        <Route path="/login/employee" element={<EmployeeLogin />} />
        <Route path="/login/customer" element={<CustomerLogin />} />
        
        {/* Dashboard Routes - Role Based */}
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/advisor" element={<AdvisorDashboard />} />
        <Route path="/dashboard/ceo" element={<CEODashboard />} />
        <Route path="/dashboard/coo" element={<COODashboard />} />
        <Route path="/dashboard/cto" element={<CTODashboard />} />
        <Route path="/dashboard/compliance" element={<ComplianceDashboard />} />
        <Route path="/dashboard/counsellor" element={<CounsellorDashboard />} />
        <Route path="/dashboard/credit" element={<CreditDashboard />} />
        <Route path="/dashboard/finance" element={<FinanceDashboard />} />
        <Route path="/dashboard/hr" element={<HRDashboard />} />
        <Route path="/dashboard/legal" element={<LegalDashboard />} />
        <Route path="/dashboard/operations" element={<OperationsDashboard />} />
        <Route path="/dashboard/recovery" element={<RecoveryDashboard />} />
        <Route path="/dashboard/support" element={<SupportDashboard />} />
        <Route path="/dashboard/teamlead" element={<TeamLeadDashboard />} />
        <Route path="/dashboard/tech" element={<TechDashboard />} />
        <Route path="/dashboard/verifier" element={<VerifierDashboard />} />
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/employee" element={<EmployeeDashboard />} />
        <Route path="/dashboard/manager" element={<ManagerDashboard />} />
        
        {/* Leads Management */}
        <Route path="/leads" element={<LeadsList />} />
        <Route path="/leads/create" element={<CreateLead />} />
        <Route path="/leads/:id" element={<LeadDetails />} />
        
        {/* Cases Management */}
        <Route path="/cases" element={<CaseList />} />
        <Route path="/cases/create" element={<CreateCase />} />
        <Route path="/cases/:caseId" element={<CaseDetails />} />
        <Route path="/cases/:caseId/documents" element={<CaseDetails />} />
        <Route path="/cases/:caseId/credit-analysis" element={<CaseDetails />} />
        <Route path="/cases/:caseId/counselling" element={<CaseDetails />} />
        <Route path="/cases/:caseId/enrollment" element={<CaseDetails />} />
        <Route path="/cases/:caseId/negotiation" element={<CaseDetails />} />
        <Route path="/cases/:caseId/settlement" element={<CaseDetails />} />
        <Route path="/cases/:caseId/payments" element={<CaseDetails />} />
        <Route path="/cases/:caseId/closure" element={<CaseDetails />} />
        <Route path="/cases/:caseId/timeline" element={<CaseDetails />} />
        <Route path="/cases/:caseId/notes" element={<CaseDetails />} />
        
        {/* Default Routes */}
        <Route path="/" element={<Navigate to="/login/employee" replace />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
