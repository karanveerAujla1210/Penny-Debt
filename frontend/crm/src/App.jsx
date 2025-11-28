import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeLogin from './pages/Auth/EmployeeLogin';
import CustomerLogin from './pages/Auth/CustomerLogin';
import CRMApp from './pages/CRMApp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login/employee" element={<EmployeeLogin />} />
        <Route path="/login/customer" element={<CustomerLogin />} />
        <Route path="/*" element={<CRMApp />} />
      </Routes>
    </Router>
  );
}

export default App;
