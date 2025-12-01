import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";

const About = () => {
  const [team, setTeam] = useState([]);
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    fetch('/api/team').then(r => r.json()).then(setTeam).catch(() => {});
    fetch('/api/milestones').then(r => r.json()).then(setMilestones).catch(() => {});
  }, []);

  return (
    <>
      <SEO pageName="about" />
      <main style={{ background: '#FFFFFF' }}>
        
        {/* Hero Section */}
        <section style={{ padding: '100px 24px', background: 'linear-gradient(135deg, #0A4DFF 0%, #0039CC 100%)', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '24px' }}>
              Transforming Debt Relief with Transparency, Technology & Trust
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.95)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              AI-driven settlement, expert negotiators, legal protection — helping Indians achieve financial freedom.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '32px', textAlign: 'center' }}>
              Our Story
            </h2>
            <div style={{ fontSize: '1.125rem', color: '#334155', lineHeight: 1.8, textAlign: 'justify' }}>
              <p style={{ marginBottom: '24px' }}>
                Penny & Debt was founded with a simple yet profound belief: no one should feel trapped by debt. In a world where financial pressure can affect your health, relationships, and future, we step in as your trusted ally.
              </p>
              <p style={{ marginBottom: '24px' }}>
                India faces a silent debt crisis. Millions struggle with credit card defaults, personal loans, and harassment from recovery agents. Traditional solutions are expensive, complicated, and often ineffective. We created Penny & Debt to change that.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Our platform combines cutting-edge AI technology with human expertise to negotiate with banks and NBFCs on your behalf. We've helped over 10,000 Indians reduce their debt by up to 65% while protecting them legally from harassment.
              </p>
              <p>
                With Penny & Debt, you don't just get a service — you get a second chance at financial freedom.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section style={{ padding: '80px 24px', background: '#F8FAFF' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              Our Core Values
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {[
                { icon: '🎯', title: 'Integrity', desc: 'We believe in doing what\'s right — not what\'s easy. Honesty is the foundation of every solution we offer.' },
                { icon: '💎', title: 'Transparency', desc: 'No hidden fees, no false promises. You know exactly what to expect at every step.' },
                { icon: '❤️', title: 'Customer-First', desc: 'Your financial wellbeing is our priority. We treat every client with respect and compassion.' },
                { icon: '🔒', title: 'Confidentiality', desc: 'Your personal and financial information is safe with us. Discretion is a promise we never break.' },
                { icon: '✅', title: 'Accuracy', desc: 'Precise calculations, realistic plans, and achievable goals — we deliver what we promise.' },
                { icon: '⚖️', title: 'Compliance', desc: '100% legal and RBI-compliant processes. We protect you from legal risks.' }
              ].map((value, i) => (
                <div key={i} style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid #E6EEFF'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{value.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>{value.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              Leadership Team
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {(team.length > 0 ? team : [
                { name: 'Rajesh Sharma', designation: 'Founder & CEO', specialization: 'Fintech & Debt Resolution', linkedin: '#' },
                { name: 'Priya Mehta', designation: 'Chief Legal Officer', specialization: 'Banking Law & Compliance', linkedin: '#' },
                { name: 'Amit Kumar', designation: 'Head of Technology', specialization: 'AI & Machine Learning', linkedin: '#' },
                { name: 'Sneha Patel', designation: 'Head of Customer Success', specialization: 'Financial Counselling', linkedin: '#' }
              ]).map((member, i) => (
                <div key={i} style={{
                  background: '#F8FAFF',
                  padding: '32px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '2px solid #E6EEFF'
                }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                    borderRadius: '50%',
                    margin: '0 auto 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2.5rem',
                    fontWeight: 900
                  }}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>{member.name}</h3>
                  <div style={{ fontSize: '0.875rem', color: '#0A4DFF', fontWeight: 600, marginBottom: '8px' }}>{member.designation}</div>
                  <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '16px' }}>{member.specialization}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} style={{ fontSize: '0.875rem', color: '#0A4DFF', fontWeight: 600, textDecoration: 'none' }}>
                      LinkedIn →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section style={{ padding: '80px 24px', background: '#F8FAFF' }}>
          <div className="container">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '64px', textAlign: 'center' }}>
              Our Journey
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {(milestones.length > 0 ? milestones : [
                { year: '2020', title: 'Founded', desc: 'Penny & Debt was established with a mission to help Indians become debt-free' },
                { year: '2021', title: '1,000 Clients', desc: 'Helped our first 1,000 clients achieve financial freedom' },
                { year: '2022', title: 'New Office', desc: 'Expanded operations with new office in Gurgaon' },
                { year: '2023', title: 'AI System Launch', desc: 'Launched AI-powered debt negotiation platform' },
                { year: '2024', title: '10,000+ Clients', desc: 'Crossed 10,000 debt-free clients milestone' }
              ]).map((milestone, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: '32px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    minWidth: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #0A4DFF 0%, #0066FF 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: 900
                  }}>
                    {milestone.year}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>{milestone.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section style={{ padding: '80px 24px', background: 'white' }}>
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0A4DFF', marginBottom: '24px' }}>
                  🎯 Our Mission
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#334155', lineHeight: 1.8 }}>
                  To make debt resolution simple, affordable, and stigma-free for every Indian household. We are committed to delivering personalized financial solutions, always rooted in transparency, legality, and trust.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0A4DFF', marginBottom: '24px' }}>
                  🌠 Our Vision
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#334155', lineHeight: 1.8 }}>
                  To become India's most trusted name in debt advisory — helping over 10 million Indians by 2030, building a movement where financial freedom isn't a privilege, but a right.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default About;
