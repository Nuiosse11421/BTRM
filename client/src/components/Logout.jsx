import React from 'react';
import axios from 'axios';

const Logout = ({ setUser }) => {
  const handleLogout = async () => {
    try {
      // Send a request to the backend to logout
      await axios.post('http://localhost:8000/api/logout');

      // Clear local storage
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      // Update the logged-in state
      setUser(null)
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle any errors
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;