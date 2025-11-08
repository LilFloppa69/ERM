import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LogoutButton({ className = '', children = 'Logout' }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.post(
        'http://localhost:8000/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem('user');
      localStorage.removeItem('token');

      navigate('/login');
    } catch (error) {
      console.error('Logout gagal:', error.response?.data || error.message);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className={`px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
