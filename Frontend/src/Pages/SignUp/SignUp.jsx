import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaPhone, FaRocket, FaHeart, FaHandsHelping } from "react-icons/fa";
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
  const [formFocus, setFormFocus] = useState(null);
  const [animateForm, setAnimateForm] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const navigate = useNavigate();

  const { name, email, password, confirmPassword, phone } = formData;

  // Background images that will rotate
  const backgroundImages = [
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1170&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469571486292-b53376e58b09?q=80&w=1170&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509099652299-30938b0aeb63?q=80&w=1170&auto=format&fit=crop'
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setAnimateForm(true), 100);
  
    const handleMouseMove = (e) => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    // Change background image every 8 seconds
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 8000);

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(bgInterval);
    };
  }, [backgroundImages.length]);

  const validateFullName = (name) => /^[A-Za-z\s]+$/.test(name);
  const validatePhoneNumber = (phone) => /^\d{10}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate all fields
    if (!validateFullName(name)) {
      return setError('Full name must contain only letters');
    }
    if (!validateEmail(email)) {
      return setError('Please enter a valid email address');
    }
    if (!validatePhoneNumber(phone)) {
      return setError('Phone number must be 10 digits');
    }
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
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

  const handleFocus = (field) => {
    setFormFocus(field);
  };

  const handleBlur = () => {
    setFormFocus(null);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Left side - Form */}
      <div className="md:w-1/2 flex items-center justify-center py-10 px-8 md:px-16 relative">

        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        <div className="w-full max-w-md z-10">
          {/* Logo and Title */}
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg mr-4">
              <FaHandsHelping className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Renu Sharma Foundation
              </h1>
              <p className="text-gray-600">Create your account</p>
            </div>
          </div>
          
          {/* Error message */}
          {error && (
            <div className="bg-red-500 bg-opacity-90 text-white px-4 py-3 rounded-lg mb-6 transform transition-all duration-300 hover:scale-105">
              <span>{error}</span>
            </div>
          )}
          
          {/* Form */}
          <form onSubmit={handleSubmit} className={`transition-all duration-1000 delay-300 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className={`mb-5 transition-all duration-300 ${formFocus === 'name' ? 'transform scale-102' : ''}`}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className={`transition-colors duration-300 ${formFocus === 'name' ? 'text-indigo-500' : 'text-gray-400'}`} />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="pl-10 block w-full px-4 py-3 border border-gray-200 rounded-lg 
                  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                  transition-all duration-300 shadow-sm bg-white"
                  placeholder="John Doe"
                  value={name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            
            <div className={`mb-5 transition-all duration-300 ${formFocus === 'email' ? 'transform scale-102' : ''}`}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className={`transition-colors duration-300 ${formFocus === 'email' ? 'text-indigo-500' : 'text-gray-400'}`} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="pl-10 block w-full px-4 py-3 border border-gray-200 rounded-lg 
                  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                  transition-all duration-300 shadow-sm bg-white"
                  placeholder="your@email.com"
                  value={email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            
            <div className={`mb-5 transition-all duration-300 ${formFocus === 'phone' ? 'transform scale-102' : ''}`}>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className={`transition-colors duration-300 ${formFocus === 'phone' ? 'text-indigo-500' : 'text-gray-400'}`} />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  className="pl-10 block w-full px-4 py-3 border border-gray-200 rounded-lg 
                  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                  transition-all duration-300 shadow-sm bg-white"
                  placeholder="1234567890"
                  value={phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phone')}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            
            <div className={`mb-5 transition-all duration-300 ${formFocus === 'password' ? 'transform scale-102' : ''}`}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className={`transition-colors duration-300 ${formFocus === 'password' ? 'text-indigo-500' : 'text-gray-400'}`} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="pl-10 block w-full px-4 py-3 border border-gray-200 rounded-lg 
                  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                  transition-all duration-300 shadow-sm bg-white"
                  placeholder="••••••••"
                  value={password}
                  onChange={handleChange}
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters long</p>
            </div>
            
            <div className={`mb-6 transition-all duration-300 ${formFocus === 'confirmPassword' ? 'transform scale-102' : ''}`}>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className={`transition-colors duration-300 ${formFocus === 'confirmPassword' ? 'text-indigo-500' : 'text-gray-400'}`} />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  className="pl-10 block w-full px-4 py-3 border border-gray-200 rounded-lg 
                  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                  transition-all duration-300 shadow-sm bg-white"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={handleChange}
                  onFocus={() => handleFocus('confirmPassword')}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            
            <div className="flex flex-col mt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-blue-700
                focus:ring-4 focus:ring-indigo-300 transform hover:scale-102 transition-all duration-300 shadow-md
                flex items-center justify-center"
              >
                <span className="flex items-center">
                  {loading ? 'Creating Account...' : 'Create Account'}
                  <FaRocket className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <div className="text-center mt-2">
                <p className="text-gray-600">
                  Already have an account? 
                  <a href="/login" className="ml-1 font-medium text-indigo-600 hover:text-indigo-500 transition-colors">Log In</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Right side - Visual elements */}
      <div className="md:w-1/2 relative overflow-hidden hidden md:block">
        {backgroundImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBgIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-blue-900/80"></div>
          </div>
        ))}
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
          <div className="max-w-lg text-center">
            <div className="inline-block p-3 mb-6 rounded-full bg-white/20 backdrop-blur-md">
              <FaHeart className="text-white text-4xl" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Make a Difference Today</h2>
            <p className="text-white text-xl mb-8 drop-shadow-md">Join our mission to create positive change in communities across the world.</p>
            
            {/* Impact stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-3xl font-bold text-white">12K+</h3>
                <p className="text-white/90 text-sm">Volunteers</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-3xl font-bold text-white">50+</h3>
                <p className="text-white/90 text-sm">Communities</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-3xl font-bold text-white">8M+</h3>
                <p className="text-white/90 text-sm">Lives Impacted</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <p className="text-white text-center drop-shadow-md">
                To keep things secure and private, please sign up before donating. 
                It&apos;s quick and easy — and it helps us a lot!
              </p>
              <div className="mt-4 text-center">
                <a 
                  href="/" 
                  className="text-white hover:text-indigo-200 transition-colors font-medium underline"
                >
                  Have A Nice Day
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-20 parallax" data-speed="2">
          <div className="w-20 h-20 rounded-full bg-pink-500/30 backdrop-blur-md animate-float" style={{animationDuration: '8s'}}></div>
        </div>
        <div className="absolute bottom-40 right-20 parallax" data-speed="3">
          <div className="w-32 h-32 rounded-full bg-blue-800 backdrop-blur-md animate-float" style={{animationDuration: '10s', animationDelay: '1s'}}></div>
        </div>
        <div className="absolute top-1/2 right-1/3 parallax" data-speed="1.5">
          <div className="w-16 h-16 rounded-full bg-indigo-500/30 backdrop-blur-md animate-float" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
