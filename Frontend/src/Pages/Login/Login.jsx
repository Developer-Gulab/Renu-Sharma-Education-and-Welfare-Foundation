import { useState, useEffect, useRef } from 'react';
import { FaEye, FaEyeSlash, FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import SimpleMarquee from "@/fancy/components/blocks/simple-marquee";


const exampleImages = [
  "https://thumbs.dreamstime.com/z/team-young-diversity-volunteer-worker-group-enjoy-charitable-social-work-outdoor-tree-forest-planting-ngo-fighting-273224918.jpg",
  "https://images.hindustantimes.com/img/2023/01/03/550x309/NGO-workers-distribute-milk-at-a-village-during-th_1672757437713.jpg",
  "https://th.bing.com/th/id/OIP.a_wx8SzLV-LK7Z_JBV1aJAHaEK?rs=1&pid=ImgDetMain",
  "https://www.asianngo.org/upload/magzine/articles/background/1549433185.jpg",
  "https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg",
  "https://th.bing.com/th/id/R.7bed5ab30e6e11912c19540f0a0880cf?rik=OITj868ArnNDbw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-s_kRUy0n5Ys%2fTky1ByKEvsI%2fAAAAAAAAAB4%2fRn0PBiulTP8%2fs1600%2fPICT7872.JPG&ehk=kWUU1a%2bJAc3Hfi%2bFLTQs6ysRx3BkOhE62Hf5EJkHMtA%3d&risl=&pid=ImgRaw&r=0",
  "https://renuhealthcare.vercel.app/static/media/img4.f90c8d8c51757abddbe2.png",
  "https://renuhealthcare.vercel.app/static/media/img9.1cedfa3eb2d9480e4b20.jpg",
  "https://th.bing.com/th/id/OIP.76kbZ0BRMI_eAnFgvsNWUAHaEO?rs=1&pid=ImgDetMain",
  "https://rebirthcaretrust.org/wp-content/uploads/2020/08/28102016045204284ingoodcompany.jpg",
  "https://careerninja.in/wp-content/uploads/2017/10/ngo-meals.jpg",
  "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh6.googleusercontent.com/3Qvbk1LUgWD_TXDtqkbYllHsoJKM_Im9QIPngz57_e9J_rxZHM7guiBkfHRfvMddtdof2gWQkHsKsqwtSnrRTIUsfx8JgHuK6RJu57i8_B2-hSmuzFxayXwJ1WQ1Xvugjg",
  "https://th.bing.com/th/id/OIP.ucR51GK8oOBPB6JUwU9RhwHaEK?rs=1&pid=ImgDetMain",
  "https://d1ebi6y8mvowaj.cloudfront.net/wp-content/uploads/2020/10/October2020_NGO-1350x1766.jpg",
  "https://portfolio-79e1.kxcdn.com/wp-content/uploads/2019/03/3-4.jpg",
  "https://helplocal.in/blog/wp-content/uploads/2022/10/larm-rmah-AEaTUnvneik-unsplash.jpg",
];

const MarqueeItem = ({ children }) => (
  <div className="mb-4 hover:scale-105 cursor-pointer duration-300 ease-in-out rounded overflow-hidden">
    {children}
  </div>
);

MarqueeItem.propTypes = {
  children: PropTypes.node.isRequired
};

const Login = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
  const containerRef = useRef(null);

  // Custom exponential ease function for the marquee
  const easeFn = (x) => {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 
      ? Math.pow(2, 20 * x - 10) / 2 
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
  };

  // Handle image click for the modal
  const handleImageClick = (src) => {
    console.log("Image clicked:", src); // Add this for debugging
    setSelectedImage(src);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    // Add a class to body to prevent scrolling
    document.body.style.overflow = 'hidden';
    setTimeout(() => setAnimateForm(true), 100);
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
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

  // Divide images into three groups for the three marquee columns
  const firstThird = exampleImages.slice(0, Math.floor(exampleImages.length / 3));
  const secondThird = exampleImages.slice(
    Math.floor(exampleImages.length / 3),
    Math.floor((2 * exampleImages.length) / 3)
  );
  const lastThird = exampleImages.slice(Math.floor((2 * exampleImages.length) / 3));

  return (
    <div 
      className="flex h-screen w-screen fixed inset-0 overflow-hidden bg-gradient-to-br from-white via-blue-950 to-green-950" 
      ref={containerRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmZmZmYwOCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-500 opacity-5 blur-3xl"></div>
        <div className="absolute top-24 right-24 w-64 h-64 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-teal-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-indigo-500 opacity-5 blur-3xl"></div>
      </div>
      
      <div className="h-full w-full flex flex-row items-center">
        {/* Marquee section - fixed width on larger screens, hidden on mobile */}
        <div className="hidden md:flex w-1/2 h-full flex-row space-x-8 px-20 justify-end items-center">
          <SimpleMarquee 
            className="h-full" 
            baseVelocity={20} 
            repeat={4} 
            easing={easeFn} 
            direction="up"
            draggable={true}
            grabCursor={true}
            dragSensitivity={0.3}
          >
            {firstThird.map((src, i) => (
              <MarqueeItem key={i}>
                {src ? (
                  <img 
                    src={src} 
                    alt={`Community work ${i + 1}`} 
                    draggable={false} 
                    className="w-28 md:w-32 object-cover rounded-lg shadow-lg cursor-pointer" 
                    onClick={() => handleImageClick(src)}
                  />
                ) : null}
              </MarqueeItem>
            ))}
          </SimpleMarquee>

          <SimpleMarquee 
            className="h-full" 
            baseVelocity={22} 
            repeat={4} 
            easing={easeFn} 
            direction="down"
            draggable={true}
            grabCursor={true}
            dragSensitivity={0.3}
          >
            {secondThird.map((src, i) => (
              <MarqueeItem key={i}>
                {src ? (
                  <img 
                    src={src} 
                    draggable={false} 
                    alt={`Community work ${i + firstThird.length}`} 
                    className="w-28 md:w-32 object-cover rounded-lg shadow-lg cursor-pointer" 
                    onClick={() => handleImageClick(src)}
                  />
                ) : null}
              </MarqueeItem>
            ))}
          </SimpleMarquee>

          <SimpleMarquee 
            className="h-full" 
            baseVelocity={15} 
            repeat={4} 
            easing={easeFn} 
            direction="up"
            draggable={true}
            grabCursor={true}
            dragSensitivity={0.3}
          >
            {lastThird.map((src, i) => (
              <MarqueeItem key={i}>
                {src ? (
                  <img 
                    src={src} 
                    draggable={false} 
                    alt={`Community work ${i + firstThird.length + secondThird.length}`} 
                    className="w-28 md:w-32 object-cover rounded-lg shadow-lg cursor-pointer" 
                    onClick={() => handleImageClick(src)}
                  />
                ) : null}
              </MarqueeItem>
            ))}
          </SimpleMarquee>
        </div>

        {/* Modal for image preview - FIXED VERSION */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img 
                src={selectedImage} 
                alt="Selected" 
                className="max-h-[90vh] max-w-full object-contain shadow-2xl"
              />
            </div>
          </div>
        )}
  
        {/* Login Form Section - always visible */}
        <div className="w-full md:w-1/2 px-4 md:px-12 lg:px-20 py-6 flex items-center justify-center">
          <div className={`max-w-md w-full z-10 transition-all duration-700 transform ${animateForm ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Mobile marquee images shown only on small screens */}
            <div className="block md:hidden h-32 relative overflow-hidden rounded-xl mb-6">
              <SimpleMarquee 
                className="absolute inset-0" 
                baseVelocity={15} 
                repeat={2} 
                direction="right"
              >
                {exampleImages.slice(0, 6).map((src, i) => (
                  <div key={i} className="mx-1">
                    {src ? (
                      <img 
                        src={src} 
                        alt={`Community work ${i + 1}`} 
                        draggable={false} 
                        className="h-24 object-cover rounded-lg shadow-md cursor-pointer" 
                        onClick={() => handleImageClick(src)}
                      />
                    ) : null}
                  </div>
                ))}
              </SimpleMarquee>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950 opacity-70"></div>
            </div>

            {/* Heading and subheading */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-2 text-shadow">
                Welcome To <br />
                Renu Sharma Foundation
              </h2>
             
            </div>
            
            {/* Form content with backdrop blur */}
            <div className="relative backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
              
              {error && (
                <div className="bg-red-500/80 text-white px-4 py-3 rounded-lg mb-6 flex items-center">
                  <span className="flex-1">{error}</span>
                </div>
              )}
              
              <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                {/* Email field */}
                <div className="group">
                  <label htmlFor="email" className="text-sm font-medium text-green-200 mb-2 flex items-center">
                    <FaUser className="text-xs mr-2" />
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full px-4 py-3.5 bg-white/10 border border-teal-300/20 rounded-lg 
                    text-white placeholder-teal-100/60 focus:outline-none focus:ring-2 focus:ring-green-400/30 focus:border-transparent
                    transition-all duration-300"
                    placeholder="your@email.com"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Password field */}
                <div className="group">
                  <label htmlFor="password" className="text-sm font-medium text-green-200 mb-2 flex items-center">
                    <FaLock className="text-xs mr-2" />
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="block w-full px-4 py-3.5 bg-white/10 border border-teal-300/20 rounded-lg 
                      text-white placeholder-teal-100/60 focus:outline-none focus:ring-2 focus:ring-green-400/30 focus:border-transparent
                      transition-all duration-300"
                      placeholder="••••••••"
                      value={password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-teal-200 hover:text-white transition-colors"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Link to="/forgot-password" className="text-sm text-teal-200 hover:text-white transition-colors">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                
                {/* Submit button with enhanced styling */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center py-3.5 px-4 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 w-full
                  hover:from-green-400 hover:to-teal-400 transform hover:-translate-y-1 transition-all duration-300 text-white font-semibold
                  disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      <span>Signing in...</span>
                    </div>
                  ) : 'Sign in'}
                </button>
              </form>

              {/* Divider with improved styling */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-teal-500/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-blue-900/30 text-teal-200 flex items-center rounded-full">
                    <span className="mx-2 text-xs">OR</span>
                  </span>
                </div>
              </div>
              
              {/* Google login with enhanced styling */}
              <div className="space-y-3">
                <button 
                  className="flex items-center justify-center py-3.5 px-4 rounded-lg bg-white w-full
                  hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="#EA4335">
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                  <span className="text-gray-800 font-medium">Continue with Google</span>
                </button>
              </div>
              
              {/* Sign up link with animated hover effect */}
              <div className="mt-8 text-center">
                <p className="text-white">
                  Don&apos;t have an account?{' '}
                  <Link to="/signup" className="font-medium text-green-300 hover:text-white transition-colors relative group">
                    Create account
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;