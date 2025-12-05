import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>Unauthorized</h2>
      <p>You do not have permission to view this page.</p>
      <p>
        If you believe this is an error, please <Link to="/contact">contact support</Link> or return to the <Link to="/">homepage</Link>.
      </p>
    </div>
  );
};

export default Unauthorized;
