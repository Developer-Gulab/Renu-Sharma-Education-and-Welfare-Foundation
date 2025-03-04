import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaPhone, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [animateForm, setAnimateForm] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();

  const { name, email, password, confirmPassword, phone } = formData;

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimateForm(true), 100);
  }, []);

  const validateFullName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validatePhoneNumber = (phone) => /^\d{10}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    setError('');
  };

  const goToNextStep = () => {
    if (activeStep === 1) {
      // Validate first step
      if (!validateFullName(name)) {
        return setError('Full name must contain only letters');
      }
      if (!validateEmail(email)) {
        return setError('Please enter a valid email address');
      }
      if (!validatePhoneNumber(phone)) {
        return setError('Phone number must be 10 digits');
      }
    }
    setActiveStep(2);
  };

  const goToPrevStep = () => {
    setActiveStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Check if passwords match
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    // Validate password strength
    if (!validatePassword(password)) {
      return setError('Password must be at least 8 characters long');
    }

    setLoading(true);

    try {
      // Check if email already exists
      const emailRes = await axios.get(`http://localhost:5000/api/auth/check-email?email=${email}`);
      if (emailRes.data.exists) {
        setLoading(false);
        return setError('Email already exists');
      }

      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        phone
      });
      
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
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-opacity-10 bg-white transform translate-y-6 -translate-x-6 blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-opacity-5 bg-white transform -translate-y-12 translate-x-12 blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-opacity-10 bg-white transform -translate-y-1/2 blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full bg-opacity-15 bg-[#EAD8B1] transform translate-y-1/2 blur-lg"></div>
      </div>
      
      {/* Main content */}
      <div className={`max-w-md w-full z-10 transition-all duration-700 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        {/* Card with glass effect */}
        <div className="backdrop-blur-md bg-white bg-opacity-10 rounded-xl shadow-2xl overflow-hidden border border-white border-opacity-20">
          {/* Header area */}
          <div className="py-8 px-6 text-center bg-gradient-to-r from-[#3A6D8C] to-[#6A9AB0]">
            <h2 className="text-3xl font-bold text-white tracking-wide">Create Account</h2>
            <p className="text-[#EAD8B1] mt-2 opacity-90">Join our community today</p>
            
            {/* Progress indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep === 1 ? 'bg-[#EAD8B1] text-[#001F3F]' : 'bg-white bg-opacity-20 text-white'}`}>
                  1
                </div>
                <div className={`w-12 h-1 ${activeStep === 2 ? 'bg-[#EAD8B1]' : 'bg-white bg-opacity-20'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep === 2 ? 'bg-[#EAD8B1] text-[#001F3F]' : 'bg-white bg-opacity-20 text-white'}`}>
                  2
                </div>
              </div>
            </div>
          </div>
          
          {/* Form area */}
          <div className="p-8">
            {error && (
              <div className="bg-red-500 bg-opacity-90 text-white px-4 py-3 rounded-lg mb-6 flex items-center">
                <span className="flex-1">{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              <div className={`space-y-6 ${activeStep === 1 ? 'block' : 'hidden'}`}>
                {/* Name field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-[#EAD8B1] mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-[#6A9AB0]" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="pl-10 block w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg 
                      text-white placeholder-gray-300 placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#EAD8B1] focus:border-transparent
                      transition-all duration-300"
                      placeholder="John Doe"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                {/* Email field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-[#EAD8B1] mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-[#6A9AB0]" />
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
                
                {/* Phone field */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-[#EAD8B1] mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-[#6A9AB0]" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      required
                      className="pl-10 block w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg 
                      text-white placeholder-gray-300 placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#EAD8B1] focus:border-transparent
                      transition-all duration-300"
                      placeholder="1234567890"
                      value={phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                {/* Next button */}
                <button
                  type="button"
                  onClick={goToNextStep}
                  className="w-full py-3 px-4 text-[#001F3F] font-bold rounded-lg bg-[#EAD8B1] hover:bg-white 
                  focus:ring-4 focus:ring-[#EAD8B1] focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300
                  flex items-center justify-center"
                >
                  <span>Continue</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
              
              {/* Step 2: Password */}
              <div className={`space-y-6 ${activeStep === 2 ? 'block' : 'hidden'}`}>
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
                  <p className="mt-2 text-xs text-[#EAD8B1] opacity-80">Password must be at least 8 characters long</p>
                </div>
                
                {/* Confirm Password field */}
                <div className="group">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#EAD8B1] mb-2">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-[#6A9AB0]" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      className="pl-10 block w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg 
                      text-white placeholder-gray-300 placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-[#EAD8B1] focus:border-transparent
                      transition-all duration-300"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#EAD8B1] hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
                
                {/* Back and Submit buttons */}
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={goToPrevStep}
                    className="w-1/3 py-3 px-4 text-white font-bold rounded-lg bg-transparent border border-white border-opacity-30
                    hover:bg-white hover:bg-opacity-10 focus:ring-2 focus:ring-white focus:ring-opacity-30 
                    transition-all duration-300 flex items-center justify-center"
                  >
                    <FaArrowLeft className="mr-2" />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-2/3 py-3 px-4 text-white font-bold rounded-lg bg-[#EAD8B1] hover:bg-white 
                    focus:ring-4 focus:ring-[#EAD8B1] focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300
                    flex items-center justify-center"
                  >
                    {loading ? 'Submitting...' : 'Sign Up'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;