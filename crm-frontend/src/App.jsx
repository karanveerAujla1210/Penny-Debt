import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PremiumHeader from './components/PremiumHeader';
import { FiHome, FiUsers, FiDollarSign, FiPieChart, FiSettings } from 'react-icons/fi';
import { performance } from 'perf_hooks';

// Import pages (you'll need to create these)
const Dashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
    {/* Dashboard content */}
  </div>
);

const Leads = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-800">Leads</h1>
    {/* Leads content */}
  </div>
);

const Customers = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
    {/* Customers content */}
  </div>
);

const Payments = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-800">Payments</h1>
    {/* Payments content */}
  </div>
);

const Reports = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
    {/* Reports content */}
  </div>
);

// Sidebar component
const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: <FiHome className="h-5 w-5" />, path: '/' },
    { name: 'Leads', icon: <FiUsers className="h-5 w-5" />, path: '/leads' },
    { name: 'Customers', icon: <FiUsers className="h-5 w-5" />, path: '/customers' },
    { name: 'Payments', icon: <FiDollarSign className="h-5 w-5" />, path: '/payments' },
    { name: 'Reports', icon: <FiPieChart className="h-5 w-5" />, path: '/reports' },
    { name: 'Settings', icon: <FiSettings className="h-5 w-5" />, path: '/settings' },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm">
              PD
            </div>
            <span className="ml-3 text-lg font-semibold text-gray-900">PennyDebt</span>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 space-y-1 bg-white">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <span className="mr-3 text-gray-400 group-hover:text-gray-500">
                    {item.icon}
                  </span>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col">
        <PremiumHeader />
        <div className="flex flex-1 overflow-hidden pt-16">
          <Sidebar />
          <main className="flex-1 relative overflow-y-auto focus:outline-none bg-gray-50">
            <div className="py-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/leads" element={<Leads />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
