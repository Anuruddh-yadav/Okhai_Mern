import React from 'react';

const PartnerOnBoarding = () => {
  return (
    <div className="min-h-screen bg-white text-[#333] font-serif py-12 px-4 selection:bg-gray-100">
      
      {/* Container for Centered Layout */}
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Top Breadcrumb */}
        <nav className="mb-10">
          <span className="text-xs tracking-widest text-gray-500 font-sans">
            Home | Partner On-boarding
          </span>
        </nav>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl leading-snug mb-10 text-gray-800 font-normal max-w-3xl mx-auto">
          Partnering with Okhai can get you access to customers across the world who 
          appreciate Indian Handcrafted products
        </h1>

        {/* Sub-content Section */}
        <div className="space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
          <p>
            Please fill the form and one of us will get in touch with you or you can also 
            mail the details at <a href="mailto:onboarding@okhai.org" className="hover:underline">onboarding@okhai.org</a>
          </p>

          <p className="pt-4">
            Partner Interest form : {' '}
            <a 
              href="https://forms.gle/rSEgyERDC3g5xtANA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-black transition-colors"
            >
              https://forms.gle/rSEgyERDC3g5xtANA
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default PartnerOnBoarding;