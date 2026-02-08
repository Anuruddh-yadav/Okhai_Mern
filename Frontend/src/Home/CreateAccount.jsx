import React from 'react';
import { Link } from 'react-router-dom';
import createaccount from './createaccount.webp'; 

const CreateAccount = () => {
  return (
    /* Main Wrapper: increased horizontal padding (lg:px-40) to create more white space on sides */
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-white py-12 px-6 md:px-20 lg:px-40 gap-12 pt-41">
      
      {/* LEFT SIDE: Image Container */}
      {/* h-full and no vertical padding ensures the image fills the vertical space of this div */}
      <div className="relative w-full md:w-225 overflow-hidden">
        {/* Background Image */}
        <img 
          src={createaccount} 
          alt="Fashion Model" 
          className="w-full h-full "
        />
        
        {/* Very Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Text Content: Shadows removed */}
        <div className="absolute  flex flex-col items-center justify-center text-center p-8">
          <h1 className=" text-5xl font-bold mb-4 tracking-wide drop-shadow-md">Hello!</h1>
          <p className="text-lg md:text-xl font-medium max-w-md leading-relaxed drop-shadow-sm">
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

          <form className="flex flex-col space-y-8">
            
            <input 
              type="text" 
              placeholder="First name" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
            />

            <input 
              type="text" 
              placeholder="Last name" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
            />

            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
            />

            <input 
              type="tel" 
              placeholder="Mobile" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
            />

            <input 
              type="password" 
              placeholder="Create Password" 
              className="w-full border-b border-gray-300 py-3 text-black font-semibold text-base outline-none focus:border-black transition-colors placeholder:text-gray-500 placeholder:font-normal"
            />

            {/* Terms Checkbox */}
            <div className="flex items-start pt-2">
              <input 
                type="checkbox" 
                id="terms" 
                className="mt-1 w-4 h-4 text-black border-gray-300 rounded focus:ring-0 cursor-pointer accent-black"
              />
              <label htmlFor="terms" className="ml-3 text-sm text-gray-700 font-medium cursor-pointer leading-tight">
                I agree to the <span className="underline text-black font-bold">Terms & Conditions*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="mt-4 w-full border-2 border-black bg-white text-black py-4 uppercase text-xs tracking-[0.2em] font-bold hover:bg-black hover:text-white transition-all duration-300"
            >
              Create Account
            </button>

          </form>
        </div>
      </div>

    </div>
  );
};

export default CreateAccount;