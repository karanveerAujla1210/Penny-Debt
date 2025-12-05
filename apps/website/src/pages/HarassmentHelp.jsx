import React, { useState } from 'react';

const HarassmentHelp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, POST to /api/harassment-report
    console.log('Harassment report', { name, phone, message });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Help is on the way</h2>
        <p>We've received your request. Our team will contact you within 15 minutes to 2 hours. If this is an emergency, call +91 9773921023 or WhatsApp us now.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 24, maxWidth: 760, margin: '0 auto' }}>
      <h2>Being Harassed By Recovery Agents?</h2>
      <p style={{ color: '#444' }}>Fill the quick form below and our emergency support team will prioritise your case.</p>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 12 }}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label>Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" />
        </div>
        <div>
          <label>Short description (who, when, what)</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Brief details" rows={4}></textarea>
        </div>
        <div>
          <button type="submit">Request Emergency Help</button>
        </div>
      </form>
      <div style={{ marginTop: 16, color: '#666' }}>
        <strong>Immediate Help:</strong> Call +91 9773921023 or WhatsApp <a href="https://wa.me/919773921023" target="_blank" rel="noopener noreferrer">+91 9773921023</a>
      </div>
    </div>
  );
};

export default HarassmentHelp;
