import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post('/logout');
        localStorage.removeItem('token');
        navigate('/');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };
    logout();
  }, [navigate]);
  return null; 
};

export default Logout;