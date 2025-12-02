import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, Shield, Clock, ArrowRight, User, Mail, Phone, 
  DollarSign, FileText, Upload, X, Check, ArrowLeft, AlertCircle, 
  Briefcase, Info, AlertTriangle, Printer, MessageCircle 
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import { v4 as uuidv4 } from 'uuid';

// Alias Info icon for consistency
const InformationCircleIcon = Info;
const ExclamationTriangleIcon = AlertTriangle;
const PrinterIcon = Printer;

// Form steps configuration
const STEPS = [
  { id: 'personal', title: 'Personal Info', icon: User },
  { id: 'employment', title: 'Employment', icon: Briefcase },
  { id: 'debt', title: 'Debt Details', icon: FileText },
  { id: 'documents', title: 'Documents', icon: Upload },
  { id: 'review', title: 'Review', icon: CheckCircle }
];

// Form validation rules
const VALIDATION_RULES = {
  fullName: { required: true, minLength: 3 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { required: true, pattern: /^[0-9]{10}$/ },
  dateOfBirth: { required: true },
  panNumber: { required: true, pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/ },
  employmentStatus: { required: true },
  monthlyIncome: { required: true, min: 1000 },
  totalDebtAmount: { required: true, min: 1000 },
  contactMethod: { required: true },
  documents: { required: true, minFiles: 1 }
};

const ApplyForm = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  
  // Add missing state for tracking file uploads
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(() => {
    // Load saved form data from localStorage if available
    const savedData = typeof window !== 'undefined' ? localStorage.getItem('loanApplication') : null;
    return savedData ? JSON.parse(savedData) : {
      // Personal Info
      fullName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      panNumber: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      // Employment
      employmentStatus: '',
      monthlyIncome: '',
      companyName: '',
      yearsInJob: '',
      // Debt Info
      totalDebtAmount: '',
      numberOfCreditors: '',
      debtTypes: [],
      monthlyEMI: '',
      anyDefaults: '',
      // Additional Info
      hearAboutUs: '',
      contactMethod: '',
      bestTimeToCall: '',
      // Documents
      documents: []
    };
  });
  
  const [validationErrors, setValidationErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('loanApplication', JSON.stringify(formData));
    }
  }, [formData]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    // Scroll to top on step change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  // Validate form fields
  const validateField = (name, value) => {
    const rules = VALIDATION_RULES[name];
    if (!rules) return true;
    
    if (rules.required && !value) return 'This field is required';
    if (rules.minLength && value.length < rules.minLength) 
      return `Must be at least ${rules.minLength} characters`;
    if (rules.pattern && !rules.pattern.test(value)) 
      return 'Invalid format';
    if (rules.min && parseFloat(value) < rules.min) 
      return `Must be at least ${rules.min}`;
    if (name === 'documents' && rules.minFiles && value.length < rules.minFiles)
      return `Please upload at least ${rules.minFiles} document`;
      
    return '';
  };

  const handleChange = async (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'file' && files && files.length > 0) {
      setIsUploading(true);
      
      // Process each file
      const uploadPromises = Array.from(files).map(file => {
        return new Promise((resolve) => {
          const fileId = uuidv4();
          const reader = new FileReader();
          
          // Update progress
          setUploadProgress(prev => ({
            ...prev,
            [fileId]: 0
          }));
          
          // Simulate upload progress
          const interval = setInterval(() => {
            setUploadProgress(prev => {
              const current = prev[fileId] || 0;
              const newProgress = Math.min(current + 10, 100);
              return {
                ...prev,
                [fileId]: newProgress
              };
            });
          }, 100);
          
          // Simulate file processing
          setTimeout(() => {
            clearInterval(interval);
            const fileData = {
              id: fileId,
              file,
              name: file.name,
              size: file.size,
              type: file.type,
              status: 'uploaded',
              uploadTime: new Date().toISOString()
            };
            resolve(fileData);
          }, 1500);
        });
      });
      
      try {
        const uploadedFiles = await Promise.all(uploadPromises);
        setFormData(prev => ({
          ...prev,
          documents: [...prev.documents, ...uploadedFiles]
        }));
      } catch (error) {
        console.error('Error uploading files:', error);
      } finally {
        setIsUploading(false);
      }
      
      return;
    } else if (type === 'number') {
      const newValue = value.replace(/\D/g, ''); // Remove non-numeric characters
      setFormData(prev => ({
        ...prev,
        [name]: newValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    if (error) setError('');
  };
  
  const removeDocument = (id) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter(doc => doc.id !== id)
    }));
    
    // Clean up progress tracking
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
  };

  // Validate current step before proceeding
  const validateStep = (step) => {
    const errors = {};
    let isValid = true;
    
    // Fields to validate in each step
    const stepFields = {
      0: ['fullName', 'email', 'phone', 'dateOfBirth', 'panNumber'],
      1: ['employmentStatus', 'monthlyIncome', 'companyName'],
      2: ['totalDebtAmount', 'debtTypes'],
      3: ['documents'],
      4: [] // Review step doesn't need validation
    };
    
    stepFields[step].forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        errors[field] = error;
        isValid = false;
      }
    });
    
    setValidationErrors(errors);
    return isValid;
  };
  
  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < STEPS.length - 1) {
        setCurrentStep(prev => prev + 1);
      }
    } else {
      // Scroll to the first error
      const firstError = Object.keys(validationErrors)[0];
      if (firstError) {
        const element = document.getElementById(firstError);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        }
      }
    }
  };
  
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) {
      return;
    }
    
    setSubmitting(true);
    
    try {
      // Simulate API call with form data
      const response = await fetch('/api/loan-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Submission failed');
      
      // Clear saved form data on successful submission
      if (typeof window !== 'undefined') {
        localStorage.removeItem('loanApplication');
      }
      
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };
  
  // Format currency
  const formatCurrency = (value) => {
    if (!value) return '₹0';
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  // Save progress and exit
  const saveAndExit = () => {
    if (isSaving) return;
    
    setIsSaving(true);
    
    // Save current progress to a specific key for resuming later
    const saveData = {
      ...formData,
      lastSaved: new Date().toISOString(),
      currentStep
    };
    
    try {
      localStorage.setItem('loanApplicationDraft', JSON.stringify(saveData));
      
      // Show success feedback
      alert('Your progress has been saved. You can return later to complete your application.');
      
      // Navigate away after a short delay
      setTimeout(() => {
        navigate('/');
      }, 500);
    } catch (error) {
      console.error('Error saving progress:', error);
      alert('Failed to save your progress. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  // Success state
  if (submitted) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center px-4" data-aos="fade-in">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-2xl w-full"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for choosing Penny & Debt. Your application number is: 
            <span className="font-semibold text-blue-600"> PD-{Math.floor(100000 + Math.random() * 900000)}</span>
          </p>
          
          <div className="bg-blue-50 p-6 rounded-xl text-left mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">What Happens Next?</h3>
            <ol className="space-y-4">
              {[
                'Our debt relief specialist will review your application within 24 hours.',
                'You\'ll receive a confirmation email with next steps and required documents.',
                'A dedicated advisor will contact you to discuss your personalized debt relief plan.',
                'We\'ll work with your creditors to negotiate on your behalf.'
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> Contact Support
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need immediate assistance? Call us at{' '}
              <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91 1234567890</a>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Load saved draft on component mount
  useEffect(() => {
    const savedDraft = localStorage.getItem('loanApplicationDraft');
    if (savedDraft) {
      try {
        const parsed = JSON.parse(savedDraft);
        setFormData(prev => ({
          ...prev,
          ...parsed
        }));
        if (parsed.currentStep) {
          setCurrentStep(parsed.currentStep);
        }
      } catch (error) {
        console.error('Error loading saved draft:', error);
      }
    }
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      // Clean up any pending uploads or timeouts
      setUploadProgress({});
      setIsUploading(false);
    };
  }, []);

  return (
    <div className="pt-20" data-aos="fade-in">
      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-6 pb-4">
            <div className="flex justify-between items-center mb-2">
              {STEPS.map((step, index) => (
                <div 
                  key={step.id}
                  className={`flex flex-col items-center flex-1 relative z-10 ${index < STEPS.length - 1 ? 'pr-4' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => index < currentStep && setCurrentStep(index)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                      index === currentStep
                        ? 'bg-blue-600 text-white border-2 border-white shadow-md'
                        : index < currentStep
                        ? 'bg-green-100 text-green-700 border-2 border-white'
                        : 'bg-gray-100 text-gray-500 border-2 border-white'
                    }`}
                    disabled={index > currentStep}
                    aria-label={`Step ${index + 1}: ${step.title}`}
                  >
                    {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
                  </button>
                  <span 
                    className={`text-xs mt-2 text-center ${
                      index === currentStep ? 'font-semibold text-blue-700' : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-0">
              <div 
                className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
                style={{ 
                  width: `${(currentStep / (STEPS.length - 1)) * 100}%`,
                  borderRadius: '0 4px 4px 0'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <form ref={formRef} onSubmit={handleSubmit} className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXNuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  {currentStep === 0 && 'Personal Information'}
                  {currentStep === 1 && 'Employment Details'}
                  {currentStep === 2 && 'Debt Information'}
                  {currentStep === 3 && 'Upload Documents'}
                  {currentStep === 4 && 'Review & Submit'}
                </h1>
                
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  {currentStep === 0 && 'Tell us a bit about yourself to help us understand your situation better.'}
                  {currentStep === 1 && 'Share your employment details to help us evaluate your financial standing.'}
                  {currentStep === 2 && 'Provide information about your current debts and financial obligations.'}
                  {currentStep === 3 && 'Upload required documents to verify your information.'}
                  {currentStep === 4 && 'Review your information before submitting your application.'}
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center text-sm">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-700/30 rounded-full">
                    <Shield className="w-4 h-4 text-blue-200" />
                    <span>Bank-level Security</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-700/30 rounded-full">
                    <Clock className="w-4 h-4 text-blue-200" />
                    <span>5-7 minutes to complete</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-700/30 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                    <span>Saves automatically</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      {/* Form Steps */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div 
              className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg"
              role="alert"
            >
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            </div>
          )}
          
          {/* Step 1: Personal Information */}
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Personal Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label 
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className={`w-full px-4 py-3 pr-10 border ${
                            validationErrors.fullName ? 'border-red-500' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                          aria-describedby={validationErrors.fullName ? 'fullName-error' : undefined}
                        />
                        {validationErrors.fullName && (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          </div>
                        )}
                      </div>
                      {validationErrors.fullName && (
                        <p id="fullName-error" className="mt-1 text-sm text-red-600">
                          {validationErrors.fullName}
                        </p>
                      )}
                    </div>
                
                    <div>
                      <label 
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className={`w-full px-4 py-3 pr-10 border ${
                            validationErrors.email ? 'border-red-500' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                          aria-describedby={validationErrors.email ? 'email-error' : undefined}
                        />
                        {validationErrors.email && (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          </div>
                        )}
                      </div>
                      {validationErrors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-600">
                          {validationErrors.email}
                        </p>
                      )}
                    </div>
                
                    <div>
                      <label 
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">+91</span>
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="9876543210"
                          required
                          maxLength="10"
                          className={`w-full px-4 py-3 pl-12 pr-10 border ${
                            validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                          } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                          aria-describedby={validationErrors.phone ? 'phone-error' : undefined}
                        />
                        {validationErrors.phone && (
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          </div>
                        )}
                      </div>
                      {validationErrors.phone && (
                        <p id="phone-error" className="mt-1 text-sm text-red-600">
                          {validationErrors.phone}
                        </p>
                      )}
                    </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    PAN Number
                  </label>
                  <input
                    type="text"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    placeholder="ABCDE1234F"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Mumbai"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

      {/* Step 2: Employment Details */}
      {currentStep === 1 && (
        <motion.div
          key="step-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Employment Details
            </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Employment Status *
                  </label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select employment status</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Income (₹) *
                  </label>
                  <input
                    type="number"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    placeholder="50,000"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Years in Current Job
                  </label>
                  <select
                    name="yearsInJob"
                    value={formData.yearsInJob}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select years</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>
          </motion.div>
        )}

      {/* Step 3: Debt Information */}
      {currentStep === 2 && (
        <motion.div
          key="step-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Debt Information
            </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Total Debt Amount (₹) *
                  </label>
                  <input
                    type="number"
                    name="totalDebtAmount"
                    value={formData.totalDebtAmount}
                    onChange={handleChange}
                    placeholder="500,000"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Creditors
                  </label>
                  <select
                    name="numberOfCreditors"
                    value={formData.numberOfCreditors}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select number</option>
                    <option value="1">1</option>
                    <option value="2-3">2-3</option>
                    <option value="4-5">4-5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly EMI Amount (₹)
                  </label>
                  <input
                    type="number"
                    name="monthlyEMI"
                    value={formData.monthlyEMI}
                    onChange={handleChange}
                    placeholder="25,000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Any Defaults?
                  </label>
                  <select
                    name="anyDefaults"
                    value={formData.anyDefaults}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Types of Debt (Select all that apply)
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {['Credit Card', 'Personal Loan', 'Home Loan', 'Car Loan', 'Business Loan', 'Other'].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="debtTypes"
                        value={type}
                        checked={formData.debtTypes.includes(type)}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
          </motion.div>
        )}

      {/* Step 4: Documents */}
      {currentStep === 3 && (
        <motion.div
          key="step-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Upload className="w-5 h-5 text-blue-600" />
              Upload Documents
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Required Documents *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleChange}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Files
                  </button>
                  <p className="text-sm text-gray-500 mt-2">PDF, JPG, PNG (Max 5MB each)</p>
                </div>
                
                {formData.documents.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {formData.documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">{doc.name}</span>
                          <span className="text-xs text-gray-500">({formatFileSize(doc.size)})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeDocument(doc.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Step 5: Review */}
      {currentStep === 4 && (
        <motion.div
          key="step-5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Review Your Application
            </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select option</option>
                    <option value="google">Google Search</option>
                    <option value="facebook">Facebook</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select method</option>
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Best Time to Call
                  </label>
                  <select
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Navigation */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
              <div>
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </button>
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={saveAndExit}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save & Exit
                </button>
                
                {currentStep < STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                    {!submitting && <Check className="h-4 w-4 ml-2" />}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      </form>
    </div>
  );
};

export default ApplyForm;