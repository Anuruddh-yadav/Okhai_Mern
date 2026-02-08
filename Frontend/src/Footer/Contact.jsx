import React from 'react';

// Path based on your provided directory: src/Footer/aboutImages
import image1 from './aboutImages/image1.webp'; 

const Contact = () => {
  return (
    <div className="bg-white font-serif text-[#333] selection:bg-gray-100">
      
      {/* 1. Hero Image Section - Matches Original Height/Feel */}
      <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
        <img 
          src={image1} 
          alt="Contact Us Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <h1 className="text-white text-3xl md:text-4xl font-normal tracking-wide">Contact Us</h1>
        </div>
      </div>

      {/* Main Container - Constrained to 1200px for better symmetry */}
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        
        {/* Breadcrumb - Slightly tighter margin */}
        <div className="text-center text-[10px] tracking-[0.3em] uppercase mb-12 text-gray-500 font-sans">
          Home | Contact Us
        </div>

        {/* 2. Grid Layout - Using 1fr 1fr split for perfect symmetry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-start">
          
          {/* Left Column: Get In Touch Form */}
          <div className="w-full max-w-lg mx-auto lg:ml-0">
            <h2 className="text-2xl font-normal mb-6 text-gray-800 tracking-tight">Get In Touch</h2>
            <p className="text-[13px] leading-relaxed text-gray-600 mb-8">
              Please fill in the form below: If you have any feedback/queries. If you are an organisation 
              and are interested in bulk buying of our products.
            </p>

            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400 transition-colors placeholder:text-gray-400"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400 transition-colors placeholder:text-gray-400"
              />
              <input 
                type="email" 
                placeholder="Email *" 
                required
                className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400 transition-colors placeholder:text-gray-400"
              />
              <input 
                type="tel" 
                placeholder="Phone number" 
                className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400 transition-colors placeholder:text-gray-400"
              />
              <textarea 
                placeholder="Comment" 
                rows="5"
                className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none placeholder:text-gray-400"
              ></textarea>

              <button 
                type="submit"
                className="w-full bg-white border border-gray-900 py-3 text-[11px] tracking-[0.3em] font-sans uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                SEND
              </button>
              <p className="text-[10px] text-gray-400 italic mt-3 text-center lg:text-left">
                We are closed on Saturday & Sunday.
              </p>
            </form>
          </div>

          {/* Right Column: Sidebar - Vertical line added for that "perfect" separation */}
          <div className="w-full lg:border-l lg:border-gray-100 lg:pl-20 space-y-12">
            
            {/* Address */}
            <div className="flex items-start gap-5">
              <div className="mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2 text-gray-900">Address</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  Ground floor, Aban House, Next to synagogue,<br />
                  Kalaghoda, Fort, Mumbai-400001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2 text-gray-900">Phone Number</h3>
                <p className="text-sm text-gray-600 font-sans">
                  079-66131721 / +91 6359 021 222 (10 am - 06 pm)
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2 text-gray-900">Email Id</h3>
                <p className="text-sm text-gray-600 font-sans">okhaicfe@okhai.org</p>
              </div>
            </div>

            {/* Store Address */}
            <div className="flex items-start gap-5">
              <div className="mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-normal mb-2 text-gray-900">Store Address</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 font-sans">
                  4th Floor, Shivalik Point, Near Mithakhali Six Roads,<br />
                  Navrangpura, Ahmedabad - 380009
                </p>
                <button className="border border-gray-900 px-6 py-2 text-[10px] tracking-widest uppercase font-sans hover:bg-black hover:text-white transition-all">
                  VIEW STORE LOCATION
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;