import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { title: 'Total Loans', value: '₹1.2 Cr' },
          { title: 'Active Loans', value: '456' },
          { title: 'Overdue', value: '₹2.8L' },
          { title: 'Collections This Month', value: '₹12.4L' },
        ].map((card, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow-md border-l-4 border-blue-600">
            <h2 className="text-gray-600 text-sm">{card.title}</h2>
            <p className="text-xl font-bold text-gray-800 mt-2">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Recent Loans</h2>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm">
              <th className="p-2">Borrower</th>
              <th className="p-2">Loan ID</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-sm text-gray-700">
              <td className="p-2">Raj Malhotra</td>
              <td className="p-2">LN12345</td>
              <td className="p-2">₹1,00,000</td>
              <td className="p-2 text-green-600 font-semibold">Active</td>
            </tr>
            <tr className="border-b text-sm text-gray-700">
              <td className="p-2">Anjali Sharma</td>
              <td className="p-2">LN12346</td>
              <td className="p-2">₹2,50,000</td>
              <td className="p-2 text-red-500 font-semibold">Overdue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
