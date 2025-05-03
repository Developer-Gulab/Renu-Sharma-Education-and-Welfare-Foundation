import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { username, email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });

      if (response.data.message === 'Email does not exist') {
        setError('No user with this email exists in our records.');
      } else {
        setSuccess(true);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please verify your email address and try again.');
    }

    setLoading(false);
  };

  const particles = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2540] to-[#103A5E] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: ['0%', '100%'],
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.5, 1]
            }}
            transition={{
              y: { duration: particle.duration, repeat: Infinity, ease: 'linear' },
              opacity: { duration: particle.duration / 2, repeat: Infinity, repeatType: 'reverse' },
              scale: { duration: particle.duration / 3, repeat: Infinity, repeatType: 'reverse' }
            }}
          />
        ))}
        
        {/* Large decorative circles */}
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#2D9F63] to-[#1E6E44] opacity-10"
          style={{ left: '-5%', top: '15%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-[#103A5E] to-[#0A2540] opacity-20"
          style={{ right: '-10%', bottom: '10%' }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative max-w-md w-full backdrop-blur-sm bg-white/95 p-8 rounded-2xl shadow-2xl border border-white/20"
      >
        {/* Logo blob background */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-32 bg-gradient-to-br from-[#0A2540] to-[#103A5E] rounded-full flex items-center justify-center shadow-lg relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-3xl font-extrabold text-[#0A2540] mt-12 mb-2"
        >
          Account Recovery
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#5A6A7A] mb-6"
        >
          We&apos;ll help you get back into your account
        </motion.p>
        
        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#2D9F63]/10 backdrop-blur-sm border border-[#2D9F63]/30 text-[#0A2540] px-6 py-8 rounded-xl mt-6 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            >
              <svg className="w-20 h-20 mx-auto text-[#2D9F63]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold mt-4 text-[#0A2540]">Recovery Email Sent!</h3>
            <p className="mt-3 text-[#5A6A7A]">We&apos;ve sent a verification code to your email. Please check your inbox, if not in inbox check in the spam folder.</p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6"
            >
              <Link to="/">
                <button className="w-full py-3 px-4 text-white font-semibold rounded-xl bg-gradient-to-r from-[#2D9F63] to-[#1E6E44] hover:from-[#1E6E44] hover:to-[#2D9F63] transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                  <span>Continue to Verification</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 text-[#0A2540] px-4 py-4 rounded-xl mb-6"
              >
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              </motion.div>
            )}

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="username" className="block text-sm font-medium text-[#0A2540] mb-1">Username (Optional)</label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-[#103A5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="pl-12 block w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[#0A2540] placeholder-gray-400 focus:ring-[#2D9F63] focus:border-[#2D9F63] transition-all duration-300"
                    placeholder="Your username"
                    value={username}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-[#0A2540] mb-1">Email Address</label>
                <div className="relative rounded-xl">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-[#103A5E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-12 block w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-[#0A2540] placeholder-gray-400 focus:ring-[#2D9F63] focus:border-[#2D9F63] transition-all duration-300"
                    placeholder="Your email address"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-2"
              >
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-4 px-4 text-white font-medium rounded-xl bg-gradient-to-r from-[#2D9F63] to-[#1E6E44] hover:from-[#1E6E44] hover:to-[#2D9F63] focus:ring-2 focus:ring-[#2D9F63]/50 transition-all duration-300 shadow-lg overflow-hidden"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Your Request...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Send Recovery Code
                    </span>
                  )}
                </motion.button>
              </motion.div>
            </form>

            <div className="mt-8 text-center">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-[#5A6A7A] flex flex-col space-y-3"
              >
                <p>
                  Remembered your password?{' '}
                  <Link to="/login" className="text-[#2D9F63] hover:text-[#1E6E44] font-medium transition-all duration-300">
                    Sign in now
                  </Link>
                </p>
                
              </motion.div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default ForgotPassword;