import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1/website';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const leadService = {
  submit: (data) => api.post('/leads/submit', data),
  getAll: (params) => api.get('/leads', { params }),
};

export const contactService = {
  submit: (data) => api.post('/contacts/submit', data),
};

export const careerService = {
  submit: (data) => api.post('/careers/submit', data),
  getAll: () => api.get('/careers'),
};

export const loanApplicationService = {
  submit: (data) => api.post('/loan-applications/submit', data),
};

export const testimonialService = {
  getAll: () => api.get('/testimonials'),
};

export const serviceService = {
  getAll: () => api.get('/services'),
};

export const faqService = {
  getAll: () => api.get('/faqs'),
};

export const blogService = {
  getAll: () => api.get('/blogs'),
  getById: (id) => api.get(`/blogs/${id}`),
};

export const otpService = {
  send: (data) => api.post('/otp/send', data),
  verify: (data) => api.post('/otp/verify', data),
};

export const authService = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
};

export default api;
