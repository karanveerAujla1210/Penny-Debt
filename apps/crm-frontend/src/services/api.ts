import axios, { AxiosError, AxiosResponse } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1/crm';

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  errors?: any[];
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - attach JWT token
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

// Response interceptor - handle errors
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiResponse>) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: (email: string, password: string) =>
    axios.post(`${API_BASE_URL.replace('/crm', '')}/crm/auth/login`, { email, password }),
  
  register: (data: any) =>
    axios.post(`${API_BASE_URL.replace('/crm', '')}/crm/auth/register`, data),
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

// Lead APIs
export const leadAPI = {
  create: (data: any) => api.post('/leads', data),
  list: (params?: any) => api.get('/leads', { params }),
  update: (id: string, data: any) => api.patch(`/leads/${id}`, data),
  assign: (id: string, advisorId: string) => api.post(`/leads/${id}/assign`, { advisorId }),
};

// Case APIs
export const caseAPI = {
  create: (data: any) => api.post('/cases', data),
  list: (params?: any) => api.get('/cases', { params }),
  get: (id: string) => api.get(`/cases/${id}`),
  update: (id: string, data: any) => api.patch(`/cases/${id}`, data),
};

// Loan APIs
export const loanAPI = {
  create: (data: any) => api.post('/loans', data),
  listByCase: (caseId: string) => api.get(`/loans/case/${caseId}`),
  update: (id: string, data: any) => api.patch(`/loans/${id}`, data),
};

// Program APIs
export const programAPI = {
  create: (data: any) => api.post('/programs', data),
  list: (params?: any) => api.get('/programs', { params }),
  update: (id: string, data: any) => api.patch(`/programs/${id}`, data),
};

// Settlement APIs
export const settlementAPI = {
  create: (data: any) => api.post('/settlements', data),
  list: (params?: any) => api.get('/settlements', { params }),
  update: (id: string, data: any) => api.patch(`/settlements/${id}`, data),
  approve: (id: string) => api.post(`/settlements/${id}/approve`),
};

// Ticket APIs
export const ticketAPI = {
  create: (data: any) => api.post('/tickets', data),
  list: (params?: any) => api.get('/tickets', { params }),
  update: (id: string, data: any) => api.patch(`/tickets/${id}`, data),
};

// Mandate APIs
export const mandateAPI = {
  create: (data: any) => api.post('/mandates', data),
  list: (params?: any) => api.get('/mandates', { params }),
  update: (id: string, data: any) => api.patch(`/mandates/${id}`, data),
};

// Document APIs
export const documentAPI = {
  upload: (formData: FormData) => api.post('/documents', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  list: (params?: any) => api.get('/documents', { params }),
  verify: (id: string) => api.patch(`/documents/${id}/verify`),
};

export default api;
