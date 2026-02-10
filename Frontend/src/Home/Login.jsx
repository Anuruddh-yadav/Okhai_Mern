import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import createaccount from './createaccount.webp'; // Using the same image for consistency

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    keepLoggedIn: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (error) setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed');
        setLoading(false);
        return;
      }

      setSuccess('Login successful! Redirecting...');
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError(err.message || 'Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white py-12 px-6 md:px-20 lg:px-40 gap-12 pt-37">
      
      {/* LEFT SIDE: Image Container (Matches CreateAccount) */}
      <div className="relative w-full md:w-225 overflow-hidden">
        <img 
          src={createaccount} 
          alt="Fashion Model" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="absolute flex flex-col items-center justify-center text-center p-8 w-full h-full">
          <h1 className="text-5xl font-bold mb-4 tracking-wide drop-shadow-md text-white">Hello!</h1>
          <p className="text-lg md:text-xl font-medium max-w-md leading-relaxed drop-shadow-sm text-white">
            Be a part of our tribe to be the first one to explore new collections and discover surprises.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Form Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-10">
            Sign In
          </h2>

          {/* Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              ✗ {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
              ✓ {success}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col space-y-8">
            
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
              disabled={loading}
            />

            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
              disabled={loading}
            />

            {/* Keep Logged In Checkbox */}
            <div className="flex items-start pt-2">
              <input 
                type="checkbox" 
                id="keepLoggedIn"
                name="keepLoggedIn"
                checked={formData.keepLoggedIn}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-0 cursor-pointer accent-black"
                disabled={loading}
              />
              <label htmlFor="keepLoggedIn" className="ml-3 text-sm text-gray-700 font-medium cursor-pointer leading-tight">
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className={`mt-4 w-full border-2 border-black py-4 uppercase text-xs tracking-[0.2em] font-bold transition-all duration-300 ${
                loading 
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              {loading ? '⏳ Signing In...' : 'Sign In'}
            </button>

          </form>

          {/* Footer Links */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            <Link to="/forgot-password" size="sm" className="text-sm text-gray-600 font-bold hover:underline">
              Forgot your password?
            </Link>
            <p className="text-sm text-gray-600">
              Don't have an account? <Link to="/create-account" className="font-bold text-black hover:underline">Create account</Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;