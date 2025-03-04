import { useState } from 'react'; // Manages form input, errors, and loading state
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'; // Redirects users after logging in
import axios from 'axios'; // Used to send HTTP requests to the backend

const Login = () => {
  const [formData, setFormData] = useState({  // Stores email & password entered by the user
    email: '',
    password: ''
  });
  const [error, setError] = useState('');   // Stores any error messages
  const [loading, setLoading] = useState(false); // Shows signing in... when login is in progress
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // updates formData when user types email and password
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      // Save token to localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      // Redirect to home page
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
  
        {error && (
          <div className="bg-red-500 text-white px-4 py-3 rounded-md mt-4">{error}</div>
        )}
  
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
            />
          </div>
  
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
              <button
  type="button"
  onClick={() => setShowPassword(!showPassword)}
  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
>
  {showPassword ? <FaEyeSlash /> : <FaEye />}
</button>

            </div>
            <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 mt-2 block text-sm">Forgot Password?</Link>

          </div>
  
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-4">
          <p className="text-center text-gray-400">Or sign in with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="bg-red-600 text-white py-2 px-4 rounded-md">Google</button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Facebook</button>
          </div>
        </div>
  
        <p className="text-center text-gray-400 mt-4">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-blue-400 hover:text-blue-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
} 
export default Login;
