import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('tourex_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (credentials: any) => api.post('/admin/login', credentials),
  register: (data: any) => api.post('/admin/register', data),
};

export const packages = {
  getAll: () => api.get('/admin/packages'),
  create: (data: any) => api.post('/admin/packages', data),
  update: (id: string, data: any) => api.put(`/admin/packages/${id}`, data),
  delete: (id: string) => api.delete(`/admin/packages/${id}`),
};

export const leads = {
  getAll: () => api.get('/admin/leads'),
  update: (id: string, data: any) => api.put(`/admin/leads/${id}`, data),
};

export const chats = {
  getAll: () => api.get('/admin/chats'),
  getById: (customerId: string) => api.get(`/admin/chats/${customerId}`),
  send: (data: any) => api.post('/admin/chats/send', data),
  updateStatus: (customerId: string, status: string) => api.put(`/admin/chats/status/${customerId}`, { status }),
};

export const analytics = {
  get: () => api.get('/admin/analytics'),
};

export default api;
