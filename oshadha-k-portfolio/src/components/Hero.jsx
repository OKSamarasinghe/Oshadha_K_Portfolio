import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="bg-[#0c011a] text-white relative overflow-hidden min-h-screen navbar-spacing">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#7F5FFF]/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#7F5FFF]/5 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/2 w-1 h-1 rounded-full bg-[#7F5FFF] opacity-30"></div>
      <div className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full bg-[#7F5FFF] opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#7F5FFF] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pt-16 md:pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* LEFT TEXT SECTION */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <p className="text-slate-300 text-lg mb-2 animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Hello! I Am <span className="text-[#7F5FFF] font-medium">Oshadha Nayanamith</span>
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeIn" style={{ animationDelay: '300ms' }}>
              A Designer who<br />
              Judges a book<br />
              by its <span className="text-[#7F5FFF] relative">
                cover...
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#7F5FFF]/30 rounded-full"></span>
              </span>
            </h1>
            <p className="text-slate-400 mt-4 text-sm animate-fadeIn" style={{ animationDelay: '400ms' }}>
              Because if the cover doesn't impress you, what else will?
            </p>

            <div className="mt-8 animate-fadeIn" style={{ animationDelay: '500ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold">
                I'm a Software Engineer.
              </h2>
              <p className="text-slate-300 mt-2">
                Currently I'm a Software Engineer at <span className="text-[#7F5FFF] font-medium">Microsoft</span>.
              </p>
            </div>

            <div className="mt-6 animate-fadeIn" style={{ animationDelay: '600ms' }}>
              <p className="text-slate-300 max-w-2xl">
                A self-taught UI/UX designer functioning in the industry for 3+ years now.
                I make meaningful and delightful digital products that create an equilibrium
                between user needs and business goals.
              </p>
              
              {/* Social Links */}
              <div className="mt-8 flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>          {/* RIGHT IMAGE SECTION */}
          <div className={`w-full md:w-1/2 flex justify-center md:justify-end transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -z-10 w-64 h-64 rounded-full bg-[#7F5FFF]/20 blur-3xl right-0 top-10"></div>
              
              {/* Decorative ring elements */}
              <div className="absolute -z-10 w-72 h-72 border border-[#7F5FFF]/10 rounded-full right-10 top-4 animate-pulse"></div>
              <div className="absolute -z-10 w-60 h-60 border border-[#7F5FFF]/5 rounded-full left-10 -bottom-4"></div>
              
              {/* Image with enhanced styling */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 bg-gradient-to-br from-[#1A1235] to-[#2A1B4A] rounded-3xl shadow-lg shadow-[#7F5FFF]/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7F5FFF]/10 to-transparent opacity-60 z-10"></div>
                <img 
                  src="/Kk.JPG" 
                  alt="Oshadha Nayanamith" 
                  className="w-full h-full object-cover object-top rounded-3xl hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border-4 border-[#7F5FFF]/5 rounded-3xl pointer-events-none"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#1A1235] rounded-xl rotate-12 shadow-lg shadow-[#7F5FFF]/10 z-20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#1A1235] rounded-xl -rotate-12 shadow-lg shadow-[#7F5FFF]/10 z-20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                    <line x1="12" y1="16" x2="12" y2="8"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fadeInBottom opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-sm text-white/60 mb-2">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-white/70 rounded-full mt-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
