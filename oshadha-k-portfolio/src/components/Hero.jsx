import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      
      {/* Main Content - CENTERED CONTAINER WITH NAVBAR SPACING */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto w-full ml-4 sm:ml-6 lg:ml-31">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          
            {/* LEFT TEXT SECTION */}
            <div className={`order-2 lg:order-1 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 animate-fadeIn" style={{ animationDelay: '200ms' }}>
                Hello! I Am <span className="text-[#7F5FFF] font-medium">Oshadha Samarasinghe</span>
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-6 animate-fadeIn" style={{ animationDelay: '300ms' }}>
                Crafting Innovative<br />
                Solutions Through<br />
                <span className="text-[#7F5FFF] relative inline-block">
                  Code & Design
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 sm:h-1 bg-[#7F5FFF]/30 rounded-full"></span>
                </span>
              </h1>
              
              <p className="text-slate-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 animate-fadeIn max-w-xl mx-auto lg:mx-0" style={{ animationDelay: '400ms' }}>
                Software Engineering Undergraduate | UI/UX Designer | Full Stack Developer
              </p>

              <div className="mb-6 sm:mb-8 animate-fadeIn" style={{ animationDelay: '500ms' }}>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                  Intern Software Engineer
                </h2>
                <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
                  Currently working at <span className="text-[#7F5FFF] font-medium">Seylan Bank PLC</span>.
                </p>
              </div>

              <div className="mb-8 sm:mb-10 animate-fadeIn" style={{ animationDelay: '600ms' }}>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Passionate Software Engineering undergraduate at Coventry University, with strong skills in problem-solving, 
                  logical thinking, and full-stack development. I enjoy creating innovative, user-centered software that bridges 
                  design and technology.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 animate-fadeIn flex-wrap" style={{ animationDelay: '700ms' }}>
                <a href="https://www.linkedin.com/in/oshadha-samarasinghe" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 border border-[#2A1B4A]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF] sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://github.com/OKSamarasinghe" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 border border-[#2A1B4A]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF] sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/oshadhaa_k?igsh=MXA0d2twaG82bXc2bQ==" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 border border-[#2A1B4A]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF] sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/19haMW9Dr4/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 border border-[#2A1B4A]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#7F5FFF] sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://x.com/oshadhaaa_k?t=rzR0sHJaBHRn2K90HfCIyQ&s=09" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 border border-[#2A1B4A]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#7F5FFF] sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://medium.com/@oshadakaveensamarasinghe" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#1A1235] hover:bg-[#2A1B4A] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 border border-[#2A1B4A]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#7F5FFF] sm:w-5 sm:h-5 md:w-6 md:h-6">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className={`order-1 lg:order-2 flex justify-center items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              <div className="relative">
                {/* Background glow */}
                <div className="absolute -inset-8 sm:-inset-10 rounded-full bg-[#7F5FFF]/10 blur-3xl"></div>
                
                {/* Decorative ring elements */}
                <div className="absolute -inset-4 sm:-inset-5 border border-[#7F5FFF]/20 rounded-full animate-pulse"></div>
                <div className="absolute -inset-10 sm:-inset-14 border border-[#7F5FFF]/10 rounded-full"></div>
                
                {/* Main Image Container */}
                <div className="relative w-72 h-90 sm:w-80 sm:h-[26rem] md:w-96 md:h-[30rem] lg:w-80 lg:h-[26rem] xl:w-96 xl:h-[30rem] bg-gradient-to-br from-[#1A1235] to-[#2A1B4A] rounded-3xl shadow-2xl shadow-[#7F5FFF]/20 overflow-hidden mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7F5FFF]/10 to-transparent opacity-60 z-10"></div>
                  <img 
                    src="/osh.jpg" 
                    alt="Oshadha Samarasinghe" 
                    className="w-full h-full object-cover object-center rounded-3xl hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border-2 border-[#7F5FFF]/20 rounded-3xl pointer-events-none"></div>
                </div>
                
                {/* Floating accent elements */}
                <div className="absolute -top-5 -left-5 w-16 h-16 sm:w-18 sm:h-18 bg-[#1A1235] rounded-xl rotate-12 shadow-lg shadow-[#7F5FFF]/20 z-20 border border-[#2A1B4A]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7F5FFF]">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 sm:w-22 sm:h-22 bg-[#1A1235] rounded-xl -rotate-12 shadow-lg shadow-[#7F5FFF]/20 z-20 border border-[#2A1B4A]">
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
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fadeInBottom opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-sm text-white/60 mb-2">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-white/70 rounded-full mt-1 animate-bounce"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;