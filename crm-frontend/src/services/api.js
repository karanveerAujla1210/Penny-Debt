import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (email, password) => api.post('/crm/auth/login', { email, password }),
  getCurrentUser: () => api.get('/crm/auth/user'),
};

// Cases API
export const casesAPI = {
  getAll: (params = {}) => api.get('/crm/cases', { params }),
  getById: (id) => api.get(`/crm/cases/${id}`),
  create: (data) => api.post('/crm/cases', data),
  update: (id, data) => api.put(`/crm/cases/${id}`, data),
  addNote: (id, content) => api.post(`/crm/cases/${id}/notes`, { content }),
};

// Communications API
export const communicationsAPI = {
  getAll: (params = {}) => api.get('/crm/communications', { params }),
  create: (data) => api.post('/crm/communications', data),
  update: (id, data) => api.put(`/crm/communications/${id}`, data),
};

// Payments API
export const paymentsAPI = {
  getAll: (params = {}) => api.get('/crm/payments', { params }),
  create: (data) => api.post('/crm/payments', data),
  updateStatus: (id, status, notes = '') => 
    api.put(`/crm/payments/${id}/status`, { status, notes }),
};

export default api;
