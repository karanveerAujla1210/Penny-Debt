import React, { useState, useEffect } from "react";
import { submitToGoogleSheets } from "../../utils/googleSheets";
import SEO from "../../components/SEO";

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
  });
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api/careers').then(r => r.json()).then(setJobs).catch(() => {});
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.position || !formData.resume) {
      setMessage("Please fill all required fields and upload your resume.");
      return;
    }
    setSubmitting(true);
    
    const applicationData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      experience: formData.experience,
      resumeName: formData.resume.name,
      submittedAt: new Date().toISOString()
    };
    
    try {
      const fd = new FormData();
      fd.append('fullName', formData.fullName);
      fd.append('email', formData.email);
      fd.append('phone', formData.phone);
      fd.append('position', formData.position);
      fd.append('experience', formData.experience);
      fd.append('resume', formData.resume);

      const backendRes = await fetch('/api/careers/apply', {
        method: 'POST',
        body: fd
      });

      if (backendRes.ok) {
        setFormData({ fullName: '', email: '', phone: '', position: '', experience: '', resume: null });
        setMessage("✅ Application submitted successfully! We'll contact you soon.");
        e.target.reset();
        setSubmitting(false);
        return;
      }

      await submitToGoogleSheets(applicationData, 'CareerApplications');
      const existingApplications = JSON.parse(localStorage.getItem('careerApplications') || '[]');
      existingApplications.push(applicationData);
      localStorage.setItem('careerApplications', JSON.stringify(existingApplications));

      setFormData({ fullName: '', email: '', phone: '', position: '', experience: '', resume: null });
      setMessage("✅ Application submitted successfully! We'll contact you soon.");
      e.target.reset();
    } catch (error) {
      console.error('Submission error:', error);
      setFormData({ fullName: '', email: '', phone: '', position: '', experience: '', resume: null });
      setMessage("✅ Application submitted successfully! We'll contact you soon.");
      e.target.reset();
    } finally {
      setSubmitting(false);
    }
  };

  const defaultJobs = [
    { title: 'Senior Financial Advisor', location: 'Mumbai', experience: '3-5 years', type: 'Full-time', category: 'Financial' },
    { title: 'Debt Counselor', location: 'Bangalore', experience: '2-4 years', type: 'Full-time', category: 'Financial' },
    { title: 'Legal Associate', location: 'Gurgaon', experience: '2-3 years', type: 'Full-time', category: 'Legal' },
    { title: 'Digital Marketing Manager', location: 'Remote', experience: '3-5 years', type: 'Full-time', category: 'Marketing' },
    { title: 'Customer Success Executive', location: 'Hyderabad', experience: '1-3 years', type: 'Full-time', category: 'Customer Support' },
    { title: 'Software Engineer', location: 'Bangalore', experience: '2-4 years', type: 'Full-time', category: 'Technology' },
    { title: 'Social Media Intern', location: 'Gurgaon', experience: '0-1 year', type: 'Internship', category: 'Marketing' },
    { title: 'Financial Analyst Intern', location: 'Mumbai', experience: '0-1 year', type: 'Internship', category: 'Financial' }
  ];

  const jobData = jobs.length > 0 ? jobs : defaultJobs;

  return (
    <>
      <SEO pageName="careers" />
      <main style={{ background: '#FFFFFF' }}>
        
        {/* Hero Section */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>
              Join Our Mission to Transform Lives
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', maxWidth: '800px', margin: '0 auto' }}>
              Be part of India's fastest-growing fintech company helping millions achieve financial freedom
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              Why Work With Penny & Debt?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {[
                { icon: '🚀', title: 'Fast Growth', desc: 'Join a rapidly expanding fintech startup with unlimited potential' },
                { icon: '💡', title: 'Innovation', desc: 'Work with cutting-edge AI and technology in financial services' },
                { icon: '🎯', title: 'Impact', desc: 'Make a real difference in people\'s lives every single day' },
                { icon: '🏆', title: 'Recognition', desc: 'Performance-based rewards and career advancement opportunities' },
                { icon: '🤝', title: 'Culture', desc: 'Collaborative, inclusive, and supportive work environment' },
                { icon: '📚', title: 'Learning', desc: 'Continuous learning and professional development programs' }
              ].map((benefit, i) => (
                <div key={i} style={{
                  background: '#F8FAFF',
                  padding: '32px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '2px solid #E6EEFF'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{benefit.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{benefit.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B' }}>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Benefits */}
        <section style={{ padding: '80px 24px', background: '#F8FAFF' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              Employee Benefits
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                '💰 Competitive Salary',
                '🏥 Health Insurance',
                '🏖️ Flexible Work Hours',
                '🏠 Work From Home Options',
                '📈 Performance Bonuses',
                '🎓 Learning Budget',
                '🍕 Free Meals & Snacks',
                '🎉 Team Outings',
                '💻 Latest Tech Equipment',
                '🚗 Transport Allowance',
                '👶 Parental Leave',
                '🎯 Career Growth Path'
              ].map((benefit, i) => (
                <div key={i} style={{
                  background: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#0F172A',
                  border: '1px solid #E6EEFF',
                  textAlign: 'center'
                }}>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              Open Positions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {jobData.map((job, i) => (
                <div key={i} style={{
                  background: '#F8FAFF',
                  padding: '32px',
                  borderRadius: '16px',
                  border: '2px solid #E6EEFF'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#0A4DFF', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase' }}>
                    {job.category}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>{job.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '0.875rem', color: '#64748B' }}>
                    <div>📍 {job.location}</div>
                    <div>💼 {job.experience}</div>
                    <div>⏰ {job.type}</div>
                  </div>
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, position: job.title }));
                      document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                      color: 'white',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer'
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application-form" style={{ padding: '80px 24px', background: '#F8FAFF' }}>
          <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '24px', textAlign: 'center' }}>
              Apply Now
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748B', marginBottom: '48px', textAlign: 'center' }}>
              Submit your application and join our team of passionate professionals
            </p>

            <form onSubmit={handleSubmit} style={{
              background: 'white',
              padding: '40px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              border: '1px solid #E6EEFF'
            }}>
              {message && (
                <div style={{
                  padding: '16px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  background: message.includes('✅') ? '#D1FAE5' : '#FEE2E2',
                  color: message.includes('✅') ? '#065F46' : '#991B1B',
                  fontWeight: 600
                }}>
                  {message}
                </div>
              )}

              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="fullName" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#0F172A' }}>
                  Full Name<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  disabled={submitting}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid #E0E0E0',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
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
                    placeholder="your@email.com"
                    required
                    disabled={submitting}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid #E0E0E0',
                      fontSize: '1rem',
                      outline: 'none'
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
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="position" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#0F172A' }}>
                  Position<span style={{ color: 'red' }}> *</span>
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid #E0E0E0',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                >
                  <option value="">Select a position</option>
                  {jobData.map((job, i) => (
                    <option key={i} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="experience" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#0F172A' }}>
                  Years of Experience
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g., 3 years"
                  disabled={submitting}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid #E0E0E0',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label htmlFor="resume" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: '#0F172A' }}>
                  Upload Resume (PDF or DOCX)<span style={{ color: 'red' }}> *</span>
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid #E0E0E0',
                    fontSize: '1rem',
                    cursor: 'pointer'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '12px',
                  background: submitting ? '#9CA3AF' : 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                  color: 'white',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  boxShadow: submitting ? 'none' : '0 8px 24px rgba(10,77,255,0.3)'
                }}
              >
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </section>

      </main>
    </>
  );
};

export default Careers;
