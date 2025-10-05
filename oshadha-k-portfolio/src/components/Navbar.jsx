import React, { useState, useEffect, useRef, useCallback } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "certifications", name: "Certifications" },
    { id: "contact", name: "Contact" },
  ];

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle clicks outside mobile menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  // Debounce function to limit how often an event handler is called
  const debounce = (func, delay) => {
    let timeoutId;
    return function(...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };
    // Handle scroll for active section and navbar background with better performance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 200; // Increased offset to account for navbar height

      // Change navbar background when scrolled
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(link.id);
          }
        }
      });
    };

    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedScroll);
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, [navLinks]);
  return (
    <nav      className={`fixed w-full text-white py-3 md:py-4 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0c011a]/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
      style={{ height: 'auto' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Left: Logo and Name */}
        <a 
          href="#home" 
          className="flex items-center space-x-2 group relative z-50"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("home");
          }}
        >
          {/* Logo with animated gradient border */}
          <div className="relative h-10 w-10 flex items-center justify-center bg-[#1A1235] rounded-full group-hover:bg-[#2A1B4A] transition-colors duration-300 overflow-hidden shadow-lg shadow-[#7F5FFF]/10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7F5FFF] to-[#925FFF] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#7F5FFF] relative z-10 group-hover:scale-110 transition-transform duration-300">
              <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#1A1235"/>
              <path d="M17 7L7 12L17 17L14 12L17 7Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#7F5FFF] to-[#925FFF] opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
          </div>
          <div className="relative">
            <span className="text-xl font-bold bg-gradient-to-r from-white to-[#7F5FFF]/80 bg-clip-text text-transparent whitespace-nowrap">
              Oshadha S.
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7F5FFF] to-[#925FFF] group-hover:w-full transition-all duration-300 rounded-full"></span>
          </div>
        </a>

        {/* Desktop Navigation Links with animated indicators */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group
                ${
                  activeSection === link.id
                    ? "text-[#7F5FFF]"
                    : "text-white/70 hover:text-white"
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-[#7F5FFF] rounded-full transition-all duration-300
                ${activeSection === link.id ? "w-6" : "group-hover:w-4"}
              `} />
            </a>
          ))}
          <a href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("contact");
            }}
            className="ml-2 px-4 py-1.5 bg-gradient-to-r from-[#7F5FFF] to-[#925FFF] rounded-full text-white text-sm font-medium hover:shadow-lg hover:shadow-[#7F5FFF]/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button with improved animation */}
        <button
          className="md:hidden mobile-menu-button p-2 rounded-lg bg-[#1A1235]/80 hover:bg-[#2A1B4A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7F5FFF]/50 relative z-50 backdrop-blur-sm shadow-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
            <span 
              className={`bg-white block h-0.5 w-5 rounded-sm transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            ></span>
            <span 
              className={`bg-white block h-0.5 w-5 rounded-sm transition-all duration-300 ease-out ${
                isMobileMenuOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`bg-white block h-0.5 w-5 rounded-sm transition-all duration-300 ease-out ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            ></span>
          </div>
        </button>
      </div>      {/* Mobile Menu with improved animations and layout */}
      <div
        ref={mobileMenuRef}
        className={`fixed inset-0 bg-gradient-to-b from-[#0c011a]/98 to-[#0c011a]/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
        style={{ top: '57px' }}
      >
        <div className="flex flex-col items-center justify-center h-full pb-20">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className={`relative px-5 py-4 text-xl font-medium transition-all duration-300
                ${activeSection === link.id ? "text-[#7F5FFF]" : "text-white/80 hover:text-white"}
                ${isMobileMenuOpen ? 'animate-fadeIn' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-10 bg-gradient-to-r from-[#7F5FFF] to-[#925FFF] rounded-full" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("contact");
            }}
            className={`mt-8 px-6 py-2.5 bg-gradient-to-r from-[#7F5FFF] to-[#925FFF] rounded-full text-white text-base font-medium shadow-lg shadow-[#7F5FFF]/20 hover:shadow-xl hover:shadow-[#7F5FFF]/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 ${
              isMobileMenuOpen ? 'animate-fadeIn' : ''
            }`}
            style={{ animationDelay: `${navLinks.length * 100}ms` }}
          >
            Get In Touch
          </a>
        </div>
        
        {/* Mobile menu decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 opacity-20">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-[#7F5FFF]/30 rounded-full"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-[#7F5FFF]/30 rounded-full"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-[#7F5FFF]/30 rounded-full"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
