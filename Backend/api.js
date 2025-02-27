import axios from 'axios';

// Set base URL for all requests
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// Add auth token to requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');  // Before sending a request, this checks if the user has a token stored in localStorage.
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;   // If a token exists, it adds it to the Authorization header.
  }
  return req;
});

export default API;