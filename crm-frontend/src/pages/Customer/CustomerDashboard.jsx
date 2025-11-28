import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomerDashboard = () => {
  const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL || 'http://localhost:5000';
  const [data, setData] = useState({ debt: [], offers: [], payments: [] });
  // Replace with actual logged-in customer ID from auth context or localStorage
  const customerId = localStorage.getItem('customerId') || 1;
  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/customer-workflow/dashboard/${customerId}`)
      .then(res => setData(res.data))
      .catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerId]);
  return (
    <div style={{ padding: 32, maxWidth: 900, margin: "0 auto" }}>
      <h1>Welcome to Your Debt Relief Dashboard</h1>
      <section>
        <h2>Debt Status</h2>
        <pre>{JSON.stringify(data.debt, null, 2)}</pre>
      </section>
      <section>
        <h2>Settlement Offers</h2>
        <pre>{JSON.stringify(data.offers, null, 2)}</pre>
      </section>
      <section>
        <h2>Payment History</h2>
        <pre>{JSON.stringify(data.payments, null, 2)}</pre>
      </section>
    </div>
  );
};

export default CustomerDashboard;
