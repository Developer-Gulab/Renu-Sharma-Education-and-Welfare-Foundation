import { Navigate } from 'react-router-dom';  // Used to redirect users to another page
import PropTypes from 'prop-types'; // Helps with type-checking for props
 
const ProtectedRoute = ({ children }) => {
  // Get the authentication token from local storage
  const token = localStorage.getItem('token');
  // If there's no token, redirect the user to the login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }
 // If token exists, allow access to the protected content (children)
  return children;
};
// Define the expected prop types
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;