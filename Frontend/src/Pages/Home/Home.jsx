import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in by looking for token
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    // No need to redirect since we're already on the home page
  };

  return (
    <>
      {/* Header with conditional login/signup buttons */}
      <header className="bg-purple-600 p-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Team Satwik</h1>
        
        <div>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout} 
              className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100"
            >
              Logout
            </button>
          ) : (
            <div className="space-x-2">
              <Link 
                to="/login" 
                className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-5">Home Page(Team Satwik)</h1>
          
          {isLoggedIn && (
            <div className="mt-4 p-4 bg-green-100 rounded-lg">
              <p className="text-green-800 font-medium">You are successfully logged in!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}