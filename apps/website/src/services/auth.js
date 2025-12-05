const API_BASE = process.env.REACT_APP_API_BASE || '';

async function postJson(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const err = new Error(`Request failed: ${res.status} ${text}`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

export async function loginCustomer({ phone }) {
  try {
    const payload = await postJson(`${API_BASE}/api/auth/customer-login`, { phone });
    // Expecting { token, role }
    if (payload && payload.token && payload.role) {
      localStorage.setItem('token', payload.token);
      localStorage.setItem('role', payload.role);
      return payload;
    }
  } catch (err) {
    // fallback to mock local auth for development
    console.warn('Customer login API failed, falling back to mock:', err.message);
    const mock = { token: 'mock-customer-token', role: 'customer' };
    localStorage.setItem('token', mock.token);
    localStorage.setItem('role', mock.role);
    return mock;
  }
}

export async function loginEmployee({ email }) {
  try {
    const payload = await postJson(`${API_BASE}/api/auth/employee-login`, { email });
    if (payload && payload.token && payload.role) {
      localStorage.setItem('token', payload.token);
      localStorage.setItem('role', payload.role);
      return payload;
    }
  } catch (err) {
    console.warn('Employee login API failed, falling back to mock:', err.message);
    const mock = { token: 'mock-employee-token', role: 'employee' };
    localStorage.setItem('token', mock.token);
    localStorage.setItem('role', mock.role);
    return mock;
  }
}

export async function loginAdmin({ username }) {
  try {
    const payload = await postJson(`${API_BASE}/api/auth/admin-login`, { username });
    if (payload && payload.token && payload.role) {
      localStorage.setItem('token', payload.token);
      localStorage.setItem('role', payload.role);
      return payload;
    }
  } catch (err) {
    console.warn('Admin login API failed, falling back to mock:', err.message);
    const mock = { token: 'mock-admin-token', role: 'admin' };
    localStorage.setItem('token', mock.token);
    localStorage.setItem('role', mock.role);
    return mock;
  }
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
}

export function getRole() {
  return localStorage.getItem('role');
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export default { loginCustomer, loginEmployee, loginAdmin, logout, getRole, isAuthenticated };
