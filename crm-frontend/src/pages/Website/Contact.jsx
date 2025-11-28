import React, { useState } from "react";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import { submitToGoogleSheets } from "../../utils/googleSheets";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitted) setSubmitted(false);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }
    
    setSubmitting(true);
    
    try {
      const contactData = formData;
      
      try {
        const res = await fetch('/api/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(contactData)
        });
        if (res.ok) {
          setSubmitted(true);
          setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
          setSubmitting(false);
          return;
        }
      } catch (backendErr) {
        console.warn('Contact backend error:', backendErr);
      }

      const result = await submitToGoogleSheets(contactData, 'ContactForms');

      if (result.success) {
        setSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error('Google Sheets submission failed');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setSubmitted(true);
      const existing = JSON.parse(localStorage.getItem('contactForms') || '[]');
      existing.push(contactData);
      localStorage.setItem('contactForms', JSON.stringify(existing));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO pageName="contact" />
      <main style={{ background: '#FFFFFF' }}>
        
        {/* Hero Section */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>
              Get In Touch
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', maxWidth: '800px', margin: '0 auto' }}>
              Have questions? We're here to help. Reach out and we'll respond within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '80px' }}>
              {[
                { icon: '📧', title: 'Email Us', info: 'care@pennyanddebt.in', desc: 'Send us an email anytime' },
                { icon: '📞', title: 'Call Us', info: '+91 7814447895', desc: 'Mon-Sat, 9:00 AM – 6:00 PM' },
                { icon: '📍', title: 'Visit Us', info: 'Gurgaon, Haryana', desc: '2nd Floor, Fintech Tower' },
                { icon: '💬', title: 'Live Chat', info: 'Available Now', desc: 'Chat with our support team' }
              ].map((contact, i) => (
                <div key={i} style={{
                  background: '#F8FAFF',
                  padding: '32px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '2px solid #E6EEFF'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{contact.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{contact.title}</h3>
                  <div style={{ fontSize: '1.125rem', color: '#0A4DFF', fontWeight: 600, marginBottom: '4px' }}>{contact.info}</div>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>{contact.desc}</p>
                </div>
              ))}
            </div>

            {/* Contact Form and Map */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px', alignItems: 'start' }}>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '24px' }}>
                  Send Us a Message
                </h2>
                <p style={{ fontSize: '1rem', color: '#64748B', marginBottom: '32px', lineHeight: 1.6 }}>
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} style={{
                  background: '#F8FAFF',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '2px solid #E6EEFF'
                }}>
                  {submitted && (
                    <div style={{
                      padding: '16px',
                      borderRadius: '12px',
                      marginBottom: '24px',
                      background: '#D1FAE5',
                      color: '#065F46',
                      fontWeight: 600
                    }}>
                      ✅ Your message has been sent successfully!
                    </div>
                  )}
                  {error && (
                    <div style={{
                      padding: '16px',
                      borderRadius: '12px',
                      marginBottom: '24px',
                      background: '#FEE2E2',
                      color: '#991B1B',
                      fontWeight: 600
                    }}>
                      ⚠️ {error}
                    </div>
                  )}

                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="fullName" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#0F172A' }}>
                      Full Name<span style={{ color: 'red' }}> *</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      disabled={submitting}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid #E0E0E0',
                        fontSize: '1rem',
                        outline: 'none',
                        background: 'white'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                    <div>
                      <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#0F172A' }}>
                        Email<span style={{ color: 'red' }}> *</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        disabled={submitting}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #E0E0E0',
                          fontSize: '1rem',
                          outline: 'none',
                          background: 'white'
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#0F172A' }}>
                        Phone<span style={{ color: 'red' }}> *</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        required
                        disabled={submitting}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          border: '1px solid #E0E0E0',
                          fontSize: '1rem',
                          outline: 'none',
                          background: 'white'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="subject" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#0F172A' }}>
                      Subject<span style={{ color: 'red' }}> *</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      required
                      disabled={submitting}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid #E0E0E0',
                        fontSize: '1rem',
                        outline: 'none',
                        background: 'white'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#0F172A' }}>
                      Message<span style={{ color: 'red' }}> *</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here"
                      required
                      disabled={submitting}
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        border: '1px solid #E0E0E0',
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical',
                        background: 'white',
                        fontFamily: 'inherit'
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: '12px',
                      background: submitting ? '#9CA3AF' : 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                      color: 'white',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      boxShadow: submitting ? 'none' : '0 8px 24px rgba(10,77,255,0.3)'
                    }}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>

              {/* Office Info & Map */}
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '24px' }}>
                  Our Office
                </h2>
                
                <div style={{
                  background: '#F8FAFF',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '2px solid #E6EEFF',
                  marginBottom: '32px'
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>
                    Penny & Debt Headquarters
                  </h3>
                  <div style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '12px' }}>
                      <strong style={{ color: '#0F172A' }}>Address:</strong><br />
                      2nd Floor, Fintech Tower<br />
                      Gurgaon, Haryana 122001<br />
                      India
                    </p>
                    <p style={{ marginBottom: '12px' }}>
                      <strong style={{ color: '#0F172A' }}>Email:</strong><br />
                      care@pennyanddebt.in
                    </p>
                    <p style={{ marginBottom: '12px' }}>
                      <strong style={{ color: '#0F172A' }}>Phone:</strong><br />
                      +91 7814447895
                    </p>
                    <p>
                      <strong style={{ color: '#0F172A' }}>Working Hours:</strong><br />
                      Monday – Saturday: 9:00 AM – 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div style={{
                  background: 'linear-gradient(135deg, #E6EEFF 0%, #F8FAFF 100%)',
                  height: '300px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #E6EEFF'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🗺️</div>
                    <div style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0F172A' }}>
                      Map Location
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#64748B', marginTop: '8px' }}>
                      Gurgaon, Haryana
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Quick Links */}
        <section style={{ padding: '80px 24px', background: '#F8FAFF', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '24px' }}>
              Looking for Quick Answers?
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748B', marginBottom: '32px' }}>
              Check out our FAQ section for instant answers to common questions
            </p>
            <a href="/faq" style={{
              padding: '14px 32px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 8px 24px rgba(10,77,255,0.3)'
            }}>
              Visit FAQ
            </a>
          </div>
        </section>

      </main>
    </>
  );
};

export default Contact;
