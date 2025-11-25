// Production Configuration
export const PRODUCTION_CONFIG = {
  // Google Sheets Integration
  GOOGLE_SHEETS: {
    SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwoWxfBaztcXnazEYzJi5XkFwlZBzuWlFQnqT2NBnROClHubO_1fATLgeRa3MJvuilI/exec',
    SPREADSHEET_ID: '1mRtDJ8EGWGNj7j_bQ4nNEVdk1W4F83OwfLICCvgACLs',
    SHEETS: {
      DEBT_APPLICATIONS: 'Debt Applications',
      CAREER_APPLICATIONS: 'Career Applications', 
      CONTACT_FORMS: 'Contact Forms',
      OTP_LOGS: 'OTP Logs'
    }
  },

  // Website Configuration
  WEBSITE: {
    URL: 'https://pennyanddebt.in',
    TITLE: 'Penny Debt CRM',
    EMAIL: 'care@pennyanddebt.in',
    PHONE: '+91-7814447895'
  },

  // Demo Configuration
  DEMO: {
    OTP_CODE: '123456',
    ENABLE_REAL_OTP: false,
    ENABLE_EMAIL_NOTIFICATIONS: false
  },

  // Security Configuration
  SECURITY: {
    ENABLE_CODE_PROTECTION: true,
    ENABLE_FORM_VALIDATION: true,
    ENABLE_RATE_LIMITING: true
  }
};

export default PRODUCTION_CONFIG;