import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [animateForm, setAnimateForm] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimateForm(true), 100);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" 
         style={{ background: 'linear-gradient(135deg, #001F3F 0%, #3A6D8C 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-opacity-10 bg-white transform translate-y-6 translate-x-6 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-opacity-5 bg-white transform -translate-y-12 -translate-x-12 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-opacity-10 bg-white transform -translate-y-1/2 blur-xl"></div>
      </div>
      
      {/* Main content */}
      <div className={`max-w-md w-full z-10 transition-all duration-700 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        {/* Card with glass effect */}
        <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-xl shadow-2xl overflow-hidden border border-white border-opacity-20">
          {/* Header area */}
          <div className="py-8 px-6 text-center bg-gradient-to-r from-[#3A6D8C] to-[#6A9AB0]">
            <h2 className="text-3xl font-bold text-white tracking-wide">Welcome Back</h2>
            <p className="text-[#EAD8B1] mt-2 opacity-90">Sign in to your account</p>
          </div>
          
          {/* Form area */}
          <div className="p-8">
            {error && (
              <div className="bg-red-500 bg-opacity-90 text-white px-4 py-3 rounded-lg mb-6 flex items-center">
                <span className="flex-1">{error}</span>
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-[#EAD8B1] mb-2">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-[#6A9AB0]" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-10 block w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg 
                    text-white placeholder-gray-300 placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#EAD8B1] focus:border-transparent
                    transition-all duration-300"
                    placeholder="your@email.com"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* Password field */}
              <div className="group">
                <label htmlFor="password" className="block text-sm font-medium text-[#EAD8B1] mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-[#6A9AB0]" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    className="pl-10 block w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg 
                    text-white placeholder-gray-300 placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#EAD8B1] focus:border-transparent
                    transition-all duration-300"
                    placeholder="••••••••"
                    value={password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#EAD8B1] hover:text-white transition-colors"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
                <div className="flex justify-end mt-2">
                  <Link to="/forgot-password" className="text-sm text-[#EAD8B1] hover:text-white transition-colors">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              
              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 text-[#001F3F] font-bold rounded-lg bg-[#EAD8B1] hover:bg-white 
                focus:ring-4 focus:ring-[#EAD8B1] focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-[#001F3F] border-t-transparent rounded-full animate-spin mr-2"></div>
                    <span>Signing in...</span>
                  </div>
                ) : 'Sign in'}
              </button>
            </form>
            
            {/* Social login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white border-opacity-20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#001F3F] bg-opacity-50 text-[#EAD8B1]">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col">

                <button 
                  className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-white bg-opacity-10 w-full

                  hover:bg-opacity-20 border border-white border-opacity-20 transform hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="#EA4335">
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                  <span className="text-white">Google</span>
                </button>
              </div>
            </div>
            
            {/* Sign up link */}
            <p className="mt-8 text-center text-white">
              Don&apos;t have an account? {' '}
              <Link to="/signup" className="font-medium text-[#EAD8B1] hover:text-white hover:underline transition-colors">
                Create account
              </Link>
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-4 text-white text-opacity-60 text-sm">
          © {new Date().getFullYear()} Renu Sharma Healthcare and Education Foundation. 
          <br /> All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Login;
