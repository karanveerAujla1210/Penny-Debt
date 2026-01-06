const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const sendEmail = async ({ to, subject, html, text }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Penny & Debt" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html
    });
    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: error.message };
  }
};

const templates = {
  welcome: (name) => ({
    subject: 'Welcome to Penny & Debt',
    html: `<h1>Welcome ${name}!</h1><p>Thank you for choosing Penny & Debt for your debt relief journey.</p>`,
    text: `Welcome ${name}! Thank you for choosing Penny & Debt.`
  }),
  
  programEnrollment: (name, sipAmount, duration) => ({
    subject: 'Program Enrollment Confirmed',
    html: `<h1>Congratulations ${name}!</h1><p>Your debt relief program is confirmed.</p><p>SIP Amount: ₹${sipAmount}</p><p>Duration: ${duration} months</p>`,
    text: `Congratulations ${name}! Your program is confirmed. SIP: ₹${sipAmount}, Duration: ${duration} months`
  }),
  
  sipReminder: (name, amount, date) => ({
    subject: 'SIP Payment Reminder',
    html: `<h1>Hi ${name}</h1><p>Your SIP of ₹${amount} is scheduled for ${date}.</p><p>Please ensure sufficient balance.</p>`,
    text: `Hi ${name}, Your SIP of ₹${amount} is scheduled for ${date}. Please ensure sufficient balance.`
  }),
  
  settlementOffer: (name, lender, amount, savings) => ({
    subject: 'Settlement Offer Received',
    html: `<h1>Great News ${name}!</h1><p>We have a settlement offer from ${lender}.</p><p>Amount: ₹${amount}</p><p>Savings: ₹${savings}</p><p>Login to approve.</p>`,
    text: `Great News ${name}! Settlement offer from ${lender}. Amount: ₹${amount}, Savings: ₹${savings}. Login to approve.`
  })
};

module.exports = { sendEmail, templates };
