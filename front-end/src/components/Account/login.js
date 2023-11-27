// Login.js
import React, { useContext, useState } from 'react';
import './account.css';
import userdata from "../data/userdata.json";
import { cartContext } from '../../providers/cartcontext';
import { Link } from 'react-router-dom';

const Login = ({setUser}) => {
  
  const {user}=useContext(cartContext);
  console.log(user)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (send data to server, etc.)
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    userdata.userdata.map(data => {
      if (data.email===formData.email && data.password === formData.password)
      {
        setUser(true)
      }
    })
    
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit"><Link to={user?"/cart":"/signup"}>Login</Link></button>
      </form>
    </div>
  );
};

export default Login;
