import React, { useState, useEffect } from "react";
import SEO from "../../components/SEO";

// Professional Fintech Home Page with New Design System
const HomeRevamped = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { label: "Clients Served", value: 5000, prefix: "", suffix: "+" },
    { label: "Debt Resolved", value: 50, prefix: "₹", suffix: "Cr+" },
    { label: "Success Rate", value: 95, prefix: "", suffix: "%" },
    { label: "Years Experience", value: 8, prefix: "", suffix: "+" }
  ];

  // Animated counter for stats
  const AnimatedStat = ({ label, value, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev < value) {
            return Math.min(prev + Math.ceil(value / 50), value);
          }
          return value;
        });
      }, 50);
      
      return () => clearInterval(timer);
    }, [value]);

    return (
      <div className="fintech-card text-center">
        <div style={{ 
          fontSize: "2.5rem", 
          fontWeight: 800, 
          color: "var(--primary-blue)", 
          marginBottom: "0.5rem" 
        }}>
          {prefix}{count.toLocaleString()}{suffix}
        </div>
        <div style={{ 
          fontSize: "0.875rem", 
          color: "var(--gray-600)", 
          fontWeight: 600 
        }}>
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="fintech-page">
      <SEO pageName="home" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title animate-fade-in">
              India's Most Trusted
              <span style={{ color: "var(--primary-blue)" }}> Debt Relief </span>
              Service Provider
            </h1>
            <p className="hero-subtitle animate-slide-up">
              Professional debt relief solutions with transparent processes, 
              legal protection, and guaranteed results. Join over 5,000 satisfied clients 
              who achieved financial freedom with our expert guidance.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <a href="/applyform" className="btn btn-primary btn-lg">
                Get Started Today
              </a>
              <a href="/contact" className="btn btn-secondary btn-lg">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="fintech-section-alt">
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="fintech-section">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                About Penny & Debt
              </h2>
              <p className="text-lg mb-4">
                We are India's leading debt relief service provider, specializing in 
                comprehensive financial solutions that help individuals and businesses 
                overcome debt challenges and achieve lasting financial stability.
              </p>
              <p className="mb-6">
                Our team of certified financial advisors and legal experts work 
                tirelessly to negotiate with creditors, reduce debt burdens, and 
                provide personalized strategies for financial recovery.
              </p>
              <div className="flex gap-4">
                <a href="/about" className="btn btn-primary">Learn More</a>
                <a href="/services" className="btn btn-secondary">Our Services</a>
              </div>
            </div>
            <div className="fintech-card">
              <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li className="flex items-center gap-3 mb-3">
                  <span style={{ color: "var(--success)", fontSize: "1.25rem" }}>✓</span>
                  100% Transparent Process
                </li>
                <li className="flex items-center gap-3 mb-3">
                  <span style={{ color: "var(--success)", fontSize: "1.25rem" }}>✓</span>
                  Legal Protection Guaranteed
                </li>
                <li className="flex items-center gap-3 mb-3">
                  <span style={{ color: "var(--success)", fontSize: "1.25rem" }}>✓</span>
                  No Hidden Fees
                </li>
                <li className="flex items-center gap-3 mb-3">
                  <span style={{ color: "var(--success)", fontSize: "1.25rem" }}>✓</span>
                  Expert Financial Advisors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="fintech-section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive debt relief solutions tailored to your specific financial situation
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Debt Relief Programs",
                description: "Structured plans to reduce and eliminate your debt burden with manageable payment options."
              },
              {
                icon: "⚖️",
                title: "Legal Protection",
                description: "Complete legal support and protection from creditor harassment and unlawful collection practices."
              },
              {
                icon: "📈",
                title: "Credit Score Recovery",
                description: "Strategic credit rebuilding programs to improve your credit score and financial standing."
              },
              {
                icon: "💰",
                title: "Financial Planning",
                description: "Personalized budgeting and financial planning to ensure long-term financial stability."
              },
              {
                icon: "🤝",
                title: "Creditor Negotiation",
                description: "Expert negotiation with creditors to secure favorable settlement terms and reduced payments."
              },
              {
                icon: "📊",
                title: "Financial Analysis",
                description: "Comprehensive financial assessment to identify the best debt relief strategy for your situation."
              }
            ].map((service, index) => (
              <div key={index} className="fintech-card text-center">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="fintech-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">
              Simple 5-step process to achieve debt freedom
            </p>
          </div>
          
          <div className="grid gap-8">
            {[
              {
                step: 1,
                title: "Free Consultation",
                description: "Schedule a free consultation with our debt relief experts to assess your financial situation."
              },
              {
                step: 2,
                title: "Custom Strategy",
                description: "Receive a personalized debt relief plan tailored to your specific needs and financial goals."
              },
              {
                step: 3,
                title: "Legal Protection",
                description: "Our legal team provides immediate protection from creditor harassment and collection calls."
              },
              {
                step: 4,
                title: "Negotiation Process",
                description: "We negotiate with your creditors to reduce debt amounts and establish manageable payment terms."
              },
              {
                step: 5,
                title: "Financial Freedom",
                description: "Complete your program and enjoy debt-free living with improved credit and financial stability."
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  background: "var(--primary-blue)",
                  color: "var(--white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  flexShrink: 0
                }}>
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fintech-section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Real stories from real people who achieved financial freedom
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai",
                text: "Penny & Debt helped me reduce my debt by 60% and provided complete legal protection. Their transparent process and expert guidance made all the difference.",
                rating: 5
              },
              {
                name: "Rajesh Kumar",
                location: "Delhi",
                text: "Professional service with genuine care. They negotiated with all my creditors and created a manageable payment plan that fit my budget perfectly.",
                rating: 5
              },
              {
                name: "Anita Patel",
                location: "Bangalore",
                text: "Excellent support throughout the entire process. My credit score improved significantly, and I'm now completely debt-free. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="fintech-card">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: "#fbbf24", fontSize: "1.25rem" }}>★</span>
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fintech-section" style={{ background: "var(--primary-blue)", color: "var(--white)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--white)" }}>
            Ready to Start Your Journey to Financial Freedom?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            Join thousands of satisfied clients who have successfully eliminated their debt with our proven strategies.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="/applyform" 
              className="btn btn-lg"
              style={{ 
                background: "var(--white)", 
                color: "var(--primary-blue)",
                border: "none"
              }}
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="btn btn-lg"
              style={{ 
                background: "transparent", 
                color: "var(--white)",
                border: "2px solid var(--white)"
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeRevamped;