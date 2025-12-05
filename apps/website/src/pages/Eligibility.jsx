import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Eligibility = () => {
  return (
    <div style={{ padding: 32, maxWidth: 900, margin: '0 auto' }}>
      <h2>Check Eligibility</h2>
      <p>Enter minimal details to get a free, non-binding assessment of approximate settlement potential.</p>
      <p>
        <Button asChild>
          <Link to="/customer-login">Start Assessment</Link>
        </Button>
      </p>
      <div style={{ marginTop: 20 }}>
        <h4>What to expect</h4>
        <ul>
          <li>We will call or WhatsApp you within 15 minutes to 2 hours.</li>
          <li>Keep loan/statement screenshots ready for faster assessment.</li>
          <li>Settlement timelines vary from 6–36+ months.</li>
        </ul>
      </div>
    </div>
  );
};

export default Eligibility;
