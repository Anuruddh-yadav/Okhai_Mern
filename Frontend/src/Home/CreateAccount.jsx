import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createaccount from './createaccount.webp'; 

const CreateAccount = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    termsAgreed: false,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!formData.firstName.trim()) {
      setError('First name is required');
      return;
    }
    if (!formData.lastName.trim()) {
      setError('Last name is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    if (!formData.phone.trim()) {
      setError('Phone number is required');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!formData.termsAgreed) {
      setError('Please agree to Terms & Conditions');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Registration failed');
        setLoading(false);
        return;
      }

      // Success
      setSuccess('Account created successfully! Redirecting...');
      console.log('User created:', data.user);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        termsAgreed: false,
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message || 'Error connecting to server. Make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white py-12 px-6 md:px-20 lg:px-40 gap-12 pt-37">
      
      {/* LEFT SIDE: Image Container */}
      <div className="relative w-full md:w-225 overflow-hidden">
        <img 
          src={createaccount} 
          alt="Fashion Model" 
          className="w-full h-full"
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
            Create account
          </h2>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              ✗ {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
              ✓ {success}
            </div>
          )}

          <form onSubmit={handleRegister} className="flex flex-col space-y-8">
            
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First name" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
              disabled={loading}
            />

            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last name" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
              disabled={loading}
            />

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
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Mobile" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
              disabled={loading}
            />

            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create Password" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
              disabled={loading}
            />

            {/* Terms Checkbox */}
            <div className="flex items-start pt-2">
              <input 
                type="checkbox" 
                id="terms"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-0 cursor-pointer accent-black"
                disabled={loading}
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700 font-medium cursor-pointer leading-tight">
                I agree to the <span className="underline text-black font-bold">Terms & Conditions*</span>
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
              {loading ? '⏳ Creating Account...' : 'Create Account'}
            </button>

          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account? <a href="/login" className="font-bold text-black hover:underline">Login here</a>
          </p>
        </div>
      </div>

    </div>
  );
};

export default CreateAccount;