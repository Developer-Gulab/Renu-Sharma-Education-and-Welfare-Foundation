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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001F3F] to-[#3A6D8C] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-[#6A9AB0] opacity-10"
          style={{ left: '10%', top: '20%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-[#EAD8B1] opacity-10"
          style={{ right: '5%', bottom: '15%' }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-md w-full backdrop-blur-sm bg-[#3A6D8C]/80 p-8 rounded-2xl shadow-2xl border border-[#6A9AB0]/30"
      >
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 bg-gradient-to-br from-[#3A6D8C] to-[#6A9AB0] rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-[#EAD8B1]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <h2 className="text-center text-3xl font-extrabold text-[#EAD8B1] mt-8">Recover Your Password</h2>
        
        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#6A9AB0]/20 backdrop-blur-sm border border-[#6A9AB0] text-[#EAD8B1] px-4 py-6 rounded-xl mt-6 text-center"
          >
            <svg className="w-16 h-16 mx-auto text-[#EAD8B1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold mt-4">OTP Sent Successfully!</h3>
            <p className="mt-2">Please check your email for the verification code.</p>
            <Link to="/login">
              <button className="mt-4 w-full py-3 px-4 text-[#001F3F] font-medium rounded-xl bg-[#EAD8B1] hover:bg-[#EAD8B1]/80 transition-all duration-300 shadow-lg">
                Continue to Verification
              </button>
            </Link>
          </motion.div>
        ) : (
          <>
            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 backdrop-blur-sm border border-red-500 text-white px-4 py-3 rounded-xl mt-6"
              >
                {error}
              </motion.div>
            )}

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="username" className="block text-sm font-medium text-[#EAD8B1]">Username</label>
                <div className="mt-1 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-[#6A9AB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="pl-10 block w-full px-4 py-3 bg-[#3A6D8C]/20 border border-[#6A9AB0]/30 rounded-xl text-[#ffffff] placeholder-[#EAD8B1]/50 focus:ring-[#EAD8B1] focus:border-[#EAD8B1] transition-all duration-300"
                    placeholder="Your username"
                    value={username}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-[#EAD8B1]">Email</label>
                <div className="mt-1 relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-[#6A9AB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-10 block w-full px-4 py-3 bg-[#3A6D8C]/20 border border-[#6A9AB0]/30 rounded-xl text-[#ffffff] placeholder-[#EAD8B1]/50 focus:ring-[#EAD8B1] focus:border-[#EAD8B1] transition-all duration-300"
                    placeholder="Your email address"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full py-3 px-4 text-[#001F3F] font-medium rounded-xl bg-gradient-to-r from-[#EAD8B1] to-[#EAD8B1]/80 hover:from-[#EAD8B1]/90 hover:to-[#FFFFFF]/70 focus:ring-2 focus:ring-[#EAD8B1]/50 transition-all duration-300 shadow-lg overflow-hidden group"
                >
                  <span className="relative z-10">
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#001F3F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending OTP...
                      </span>
                    ) : (
                      'Send Recovery Code'
                    )}
                  </span>
                  <span className="absolute inset-0 h-full w-0 bg-[#6A9AB0]/20 transform transition-all duration-300 group-hover:w-full"></span>
                </button>
              </motion.div>
            </form>

            <div className="mt-8 text-center">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[#EAD8B1]/80"
              >
                Remembered your password?{' '}
                <Link to="/login" className="text-[#EAD8B1] hover:text-[#EAD8B1]/80 font-medium underline decoration-[#6A9AB0] decoration-2 underline-offset-4 transition-all duration-300">
                  Sign in
                </Link>
              </motion.p>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default ForgotPassword;