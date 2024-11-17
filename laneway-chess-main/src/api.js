import axios from 'axios';

// Axios instance
const api = axios.create({
  baseURL: 'http://localhost:4505/api',
});

// Attach the token to every request if available
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken'); // Assuming you're storing the access token in local storage
    if (token) {
      config.headers['x-auth-token'] = token; // Add token to the headers
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Set up an interceptor to handle responses globally
api.interceptors.response.use(
  response => {
    // Check for a new refresh token in the response headers and store it
    const newRefreshToken = response.headers['x-refresh-token'];
    if (newRefreshToken) {
      // Only update the refresh token if a new one is received
      localStorage.setItem('refreshToken', newRefreshToken);
    }
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      // Avoid an infinite loop by checking if we are already on the login page
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
