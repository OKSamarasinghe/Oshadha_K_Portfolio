import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add fade-in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="bg-[#0c011a] text-white relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#7F5FFF]/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#7F5FFF]/5 blur-3xl"></div>
      <div className="absolute top-1/4 left-1/2 w-1 h-1 rounded-full bg-[#7F5FFF] opacity-30"></div>
      <div className="absolute top-3/4 left-1/4 w-2 h-2 rounded-full bg-[#7F5FFF] opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#7F5FFF] opacity-30"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
            {/* LEFT TEXT SECTION */}
            <div className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <p className="text-slate-300 text-base lg:text-lg mb-4 animate-fadeIn" style={{ animationDelay: '200ms' }}>
                Hello! I Am <span className="text-[#7F5FFF] font-medium">Oshadha Samarasinghe</span>
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn" style={{ animationDelay: '300ms' }}>
                Turning Ideas into<br />
                Scalable and<br />
                <span className="text-[#7F5FFF] relative inline-block">
                  Beautiful Software
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#7F5FFF]/30 rounded-full"></span>
                </span>
              </h1>
              
              <p className="text-slate-400 text-sm md:text-base mb-8 animate-fadeIn max-w-lg mx-auto lg:mx-0" style={{ animationDelay: '400ms' }}>
                3rd Year Software Engineering Undergraduate | UI/UX Designer | Full Stack Developer
              </p>

              <div className="mb-8 animate-fadeIn" style={{ animationDelay: '500ms' }}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                  Intern Software Engineer
                </h2>
                <p className="text-slate-300 text-base lg:text-lg">
                  Currently working at <span className="text-[#7F5FFF] font-medium">Seylan Bank PLC</span>.
                </p>
              </div>

              <div className="mb-8 animate-fadeIn" style={{ animationDelay: '600ms' }}>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Passionate Software Engineering undergraduate at Coventry University, with strong skills in problem-solving, 
                  logical thinking, and full-stack development. I enjoy creating innovative, user-centered software that bridges 
                  design and technology.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 animate-fadeIn" style={{ animationDelay: '700ms' }}>
                <a href="https://www.linkedin.com/in/oshadha-samarasinghe" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/OKSamarasinghe" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className={`order-1 lg:order-2 flex justify-center items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              <div className="relative max-w-sm mx-auto">
                {/* Background glow */}
                <div className="absolute -inset-8 rounded-full bg-[#7F5FFF]/10 blur-3xl"></div>
                
                {/* Decorative ring elements */}
                <div className="absolute -inset-4 border border-[#7F5FFF]/20 rounded-full animate-pulse"></div>
                <div className="absolute -inset-12 border border-[#7F5FFF]/10 rounded-full"></div>
                
                {/* Main Image Container */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] bg-gradient-to-br from-[#1A1235] to-[#2A1B4A] rounded-3xl shadow-2xl shadow-[#7F5FFF]/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7F5FFF]/10 to-transparent opacity-60 z-10"></div>
                  <img 
                    src="/Kk.JPG" 
                    alt="Oshadha Samarasinghe" 
                    className="w-full h-full object-cover object-center rounded-3xl hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border-2 border-[#7F5FFF]/20 rounded-3xl pointer-events-none"></div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#1A1235] rounded-xl rotate-12 shadow-lg shadow-[#7F5FFF]/20 z-20 border border-[#2A1B4A]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#1A1235] rounded-xl -rotate-12 shadow-lg shadow-[#7F5FFF]/20 z-20 border border-[#2A1B4A]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
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
