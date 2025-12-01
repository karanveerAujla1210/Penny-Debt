// Shared validation schemas (can be used with Zod or Joi)

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^[6-9]\d{9}$/;
export const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
export const aadhaarRegex = /^\d{12}$/;
export const pinCodeRegex = /^\d{6}$/;

export const validationRules = {
  email: {
    required: 'Email is required',
    pattern: {
      value: emailRegex,
      message: 'Invalid email format',
    },
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value: phoneRegex,
      message: 'Invalid phone number (10 digits starting with 6-9)',
    },
  },
  pan: {
    required: 'PAN is required',
    pattern: {
      value: panRegex,
      message: 'Invalid PAN format (e.g., ABCDE1234F)',
    },
  },
  aadhaar: {
    required: 'Aadhaar is required',
    pattern: {
      value: aadhaarRegex,
      message: 'Invalid Aadhaar (12 digits)',
    },
  },
  pinCode: {
    required: 'PIN code is required',
    pattern: {
      value: pinCodeRegex,
      message: 'Invalid PIN code (6 digits)',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
  },
  amount: {
    required: 'Amount is required',
    min: {
      value: 0,
      message: 'Amount must be positive',
    },
  },
};

export const validateEmail = (email) => emailRegex.test(email);
export const validatePhone = (phone) => phoneRegex.test(phone);
export const validatePAN = (pan) => panRegex.test(pan);
export const validateAadhaar = (aadhaar) => aadhaarRegex.test(aadhaar);
export const validatePinCode = (pinCode) => pinCodeRegex.test(pinCode);
