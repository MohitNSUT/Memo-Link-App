import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../services/ApiEndPoint';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/AuthSlice';
import { MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const [theme, setTheme] = useState('dark');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    border: `2px solid ${theme === 'light' ? 'grey' : '#fff'}`,
    padding: '20px',
    textAlign: 'center',
  };

  const handleLogout = async () => {
    try {
      const request = await post('/auth/logout');
      const response = request.data;
      if (response.success) {
        toast.success(response.message);
        dispatch(logout());
        navigate('/login');
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };

  return (
    <nav className="navbar position-fixed" style={styles}>
      <div className="container-fluid p-2">
        <MdDarkMode onClick={toggleTheme} className='themeChanger' >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </MdDarkMode>
        <input className="mx-3 SerachInput" type="search" placeholder="Search" />
        <button type="button" className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
