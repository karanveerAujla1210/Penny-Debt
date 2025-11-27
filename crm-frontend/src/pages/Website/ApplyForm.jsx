import React, { useState } from "react";
import { submitToGoogleSheets } from "../../utils/googleSheets";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    totalDebt: "",
    monthlyIncome: "",
    loanType: "personal",
    employmentStatus: "employed",
    city: "",
    pincode: "",
    message: "",
    agreeToTerms: false
  });

  const [otpData, setOtpData] = useState({
    otp: "",
    isOtpSent: false,
    isVerified: false,
    timer: 0
  });

  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setMessage("");
  };

  const handleOtpChange = (e) => {
    setOtpData(prev => ({
      ...prev,
      otp: e.target.value
    }));
    setMessage("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email";
    if (!formData.phone.trim()) return "Phone number is required";
    if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) return "Please enter a valid 10-digit phone number";
    if (!formData.totalDebt || formData.totalDebt < 10000) return "Minimum debt amount is ₹10,000";
    if (!formData.monthlyIncome || formData.monthlyIncome < 5000) return "Monthly income is required";
    if (!formData.city.trim()) return "City is required";
    if (!formData.pincode.trim()) return "Pincode is required";
    if (!/^[0-9]{6}$/.test(formData.pincode)) return "Please enter a valid 6-digit pincode";
    if (!formData.agreeToTerms) return "You must agree to the terms and conditions";
    if (!otpData.isVerified) return "Please verify your email with OTP";
    return null;
  };

  const sendOtp = async () => {
    if (!formData.email.trim()) {
      setMessage("Please enter your email address first");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setSendingOtp(true);
    
    setTimeout(() => {
      setOtpData(prev => ({
        ...prev,
        isOtpSent: true,
        timer: 60
      }));

      const countdown = setInterval(() => {
        setOtpData(prev => {
          if (prev.timer <= 1) {
            clearInterval(countdown);
            return { ...prev, timer: 0 };
          }
          return { ...prev, timer: prev.timer - 1 };
        });
      }, 1000);

      setMessage("OTP sent to your email address. Use '123456' for demo.");
      setSendingOtp(false);
    }, 1000);
  };

  const verifyOtp = async () => {
    if (!otpData.otp.trim()) {
      setMessage("Please enter the OTP");
      return;
    }

    setSendingOtp(true);
    
    setTimeout(() => {
      if (otpData.otp === '123456') {
        setOtpData(prev => ({
          ...prev,
          isVerified: true
        }));
        setMessage("Email verified successfully!");
      } else {
        setMessage("Invalid OTP. Use '123456' for demo.");
      }
      setSendingOtp(false);
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setMessage(error);
      return;
    }

    setSubmitting(true);
    
    const submissionData = {
      ...formData,
      source: 'website',
      leadType: 'debt_relief',
      emailVerified: true,
      submittedAt: new Date().toISOString()
    };
    
    try {
      try {
        const res = await fetch('/api/leads/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData)
        });

        if (res.ok) {
          const json = await res.json();
          console.log('Saved to backend lead id:', json.applicationId || json.id || json._id);
          setSubmitted(true);
        } else {
          console.warn('Backend lead submit returned', res.status);
        }
      } catch (backendErr) {
        console.warn('Backend lead submit error:', backendErr.message || backendErr);
      }

      try {
        await fetch('/api/loan-applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData)
        });
      } catch (laErr) {
        console.warn('loan-applications endpoint error:', laErr);
      }

      const result = await submitToGoogleSheets(submissionData, 'DebtApplications');
      if (result.success) {
        const existingData = JSON.parse(localStorage.getItem('debtApplications') || '[]');
        existingData.push(submissionData);
        localStorage.setItem('debtApplications', JSON.stringify(existingData));
        setSubmitted(true);
      } else {
        throw new Error('Google Sheets submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      const existingData = JSON.parse(localStorage.getItem('debtApplications') || '[]');
      existingData.push(submissionData);
      localStorage.setItem('debtApplications', JSON.stringify(existingData));

      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (submitted) {
    return (
      <main style={mainStyle}>
        <div style={{
          backgroundColor: "#FFFFFF",
          padding: 40,
          borderRadius: 16,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
          border: "1px solid #E0E0E0",
          textAlign: "center",
          maxWidth: 500,
          margin: "0 auto"
        }}>
          <div style={{
            width: 60,
            height: 60,
            backgroundColor: "#003BFF",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            color: "white",
            fontSize: "24px"
          }}>
            ✓
          </div>
          <h2 style={{
            fontSize: "1.875rem",
            fontWeight: "800",
            color: "#0D0D0D",
            marginBottom: 16
          }}>
            Application Submitted!
          </h2>
          <p style={{
            fontSize: "1rem",
            color: "#333333",
            lineHeight: 1.6
          }}>
            Thank you for your verified application. Our debt relief specialist will contact you within 24 hours to discuss your personalized solution.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main style={mainStyle}>
      <h1 style={headingStyle}>
        Apply for Debt Relief
      </h1>
      <p style={subHeadingStyle}>
        Take the first step towards financial freedom. Fill out the form below and our experts will create a personalized debt relief plan for you.
      </p>

      <form onSubmit={handleSubmit} style={formStyle}>
        {message && (
          <div style={{
            padding: "12px 16px",
            borderRadius: 12,
            marginBottom: 20,
            color: message.includes("successfully") || message.includes("sent") ? "#065f46" : "#991b1b",
            background: message.includes("successfully") || message.includes("sent") ? "#d1fae5" : "#fee2e2",
            border: `1px solid ${message.includes("successfully") || message.includes("sent") ? "#10b981" : "#ef4444"}`,
            fontWeight: "600"
          }}>
            {message}
          </div>
        )}

        <label htmlFor="name" style={labelStyle}>
          Full Name<span style={{ color: "red" }}> *</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          disabled={submitting}
          style={inputStyle}
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email Address<span style={{ color: "red" }}> *</span>
            </label>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={submitting || otpData.isVerified}
                style={{ 
                  ...inputStyle, 
                  marginBottom: 0, 
                  flex: 1,
                  backgroundColor: otpData.isVerified ? "#f0f9ff" : "#FFFFFF"
                }}
              />
              {!otpData.isVerified && (
                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={sendingOtp || otpData.timer > 0}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 12,
                    background: sendingOtp || otpData.timer > 0 ? "#9ca3af" : "#003BFF",
                    color: "white",
                    border: "none",
                    fontWeight: "600",
                    fontSize: 14,
                    cursor: sendingOtp || otpData.timer > 0 ? "not-allowed" : "pointer",
                    whiteSpace: "nowrap"
                  }}
                >
                  {sendingOtp ? "Sending..." : otpData.timer > 0 ? formatTime(otpData.timer) : "Send OTP"}
                </button>
              )}
              {otpData.isVerified && (
                <div style={{
                  padding: "10px 16px",
                  borderRadius: 12,
                  background: "#10b981",
                  color: "white",
                  fontWeight: "600",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center"
                }}>
                  ✓ Verified
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="phone" style={labelStyle}>
              Phone Number<span style={{ color: "red" }}> *</span>
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
              style={{ ...inputStyle, marginBottom: 0 }}
            />
          </div>
        </div>

        {otpData.isOtpSent && !otpData.isVerified && (
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="otp" style={labelStyle}>
              Enter OTP<span style={{ color: "red" }}> *</span>
            </label>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="text"
                id="otp"
                value={otpData.otp}
                onChange={handleOtpChange}
                placeholder="Enter 6-digit OTP"
                maxLength="6"
                style={{ ...inputStyle, marginBottom: 0, flex: 1 }}
              />
              <button
                type="button"
                onClick={verifyOtp}
                disabled={sendingOtp}
                style={{
                  padding: "10px 16px",
                  borderRadius: 12,
                  background: sendingOtp ? "#9ca3af" : "#10b981",
                  color: "white",
                  border: "none",
                  fontWeight: "600",
                  fontSize: 14,
                  cursor: sendingOtp ? "not-allowed" : "pointer"
                }}
              >
                {sendingOtp ? "Verifying..." : "Verify"}
              </button>
            </div>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
          <div>
            <label htmlFor="totalDebt" style={labelStyle}>
              Total Debt Amount (₹)<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="number"
              id="totalDebt"
              name="totalDebt"
              value={formData.totalDebt}
              onChange={handleChange}
              placeholder="50,000"
              required
              min="10000"
              disabled={submitting}
              style={{ ...inputStyle, marginBottom: 0 }}
            />
          </div>
          <div>
            <label htmlFor="monthlyIncome" style={labelStyle}>
              Monthly Income (₹)<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="number"
              id="monthlyIncome"
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              placeholder="25,000"
              required
              min="5000"
              disabled={submitting}
              style={{ ...inputStyle, marginBottom: 0 }}
            />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
          <div>
            <label htmlFor="loanType" style={labelStyle}>
              Debt Type<span style={{ color: "red" }}> *</span>
            </label>
            <select
              id="loanType"
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              disabled={submitting}
              style={{ ...inputStyle, marginBottom: 0 }}
            >
              <option value="personal">Personal Loan</option>
              <option value="credit-card">Credit Card Debt</option>
              <option value="medical">Medical Bills</option>
              <option value="business">Business Debt</option>
              <option value="multiple">Multiple Debts</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="employmentStatus" style={labelStyle}>
              Employment Status<span style={{ color: "red" }}> *</span>
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              disabled={submitting}
              style={{ ...inputStyle, marginBottom: 0 }}
            >
              <option value="employed">Employed</option>
              <option value="self-employed">Self Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="retired">Retired</option>
              <option value="student">Student</option>
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
          <div>
            <label htmlFor="city" style={labelStyle}>
              City<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Mumbai"
              required
              disabled={submitting}
              style={{ ...inputStyle, marginBottom: 0 }}
            />
          </div>
          <div>
            <label htmlFor="pincode" style={labelStyle}>
              Pincode<span style={{ color: "red" }}> *</span>
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="400001"
              required
              disabled={submitting}
              style={{ ...inputStyle, marginBottom: 0 }}
            />
          </div>
        </div>

        <label htmlFor="message" style={labelStyle}>
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your debt situation..."
          disabled={submitting}
          rows={4}
          style={{
            ...inputStyle,
            resize: "none",
            fontFamily: "var(--font-primary)"
          }}
        />

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", cursor: "pointer" }}>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              required
              disabled={submitting}
              style={{ marginTop: "2px" }}
            />
            <span style={{ fontSize: "14px", color: "#333333", lineHeight: 1.4 }}>
              I agree to the <a href="#" style={{ color: "#003BFF", textDecoration: "underline" }}>Terms and Conditions</a> and <a href="#" style={{ color: "#003BFF", textDecoration: "underline" }}>Privacy Policy</a>. I consent to be contacted by debt relief specialists.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={submitting || !otpData.isVerified}
          style={{
            padding: "14px 32px",
            borderRadius: 12,
            background: submitting || !otpData.isVerified ? "#9ca3af" : "#003BFF",
            color: "white",
            border: "none",
            fontWeight: "700",
            fontSize: 16,
            cursor: submitting || !otpData.isVerified ? "not-allowed" : "pointer",
            boxShadow: submitting || !otpData.isVerified ? "none" : "0px 4px 16px rgba(0, 59, 255, 0.2)",
            transition: "all 0.3s ease",
            width: "100%"
          }}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </main>
  );
};

const mainStyle = {
  fontFamily: "var(--font-primary)",
  maxWidth: 800,
  margin: "auto",
  padding: "80px 24px",
  color: "var(--text-primary)"
};

const headingStyle = {
  fontSize: "2.25rem",
  fontWeight: "800",
  color: "#0D0D0D",
  textAlign: "center",
  marginBottom: 16
};

const subHeadingStyle = {
  fontSize: "1.125rem",
  textAlign: "center",
  maxWidth: 600,
  margin: "0 auto 48px",
  lineHeight: 1.6,
  color: "#333333"
};

const formStyle = {
  backgroundColor: "#FFFFFF",
  padding: 32,
  borderRadius: 16,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
  border: "1px solid #E0E0E0",
  marginBottom: 50
};

const labelStyle = {
  fontWeight: "600",
  display: "block",
  marginBottom: 8,
  fontSize: 14,
  color: "#0D0D0D"
};

const inputStyle = {
  fontSize: 16,
  padding: "12px 16px",
  width: "100%",
  maxWidth: "100%",
  borderRadius: 10,
  border: "1px solid #E0E0E0",
  boxSizing: "border-box",
  marginBottom: 20,
  fontFamily: "var(--font-primary)",
  backgroundColor: "#FFFFFF",
  color: "#0D0D0D"
};

export default ApplyForm;
