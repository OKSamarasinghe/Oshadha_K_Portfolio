import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0E0A1F] text-white min-h-screen">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
        {/* Logo graphic and animation in the middle */}
        <div className="py-32 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-36 h-36 bg-[#1A1235] rounded-full flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#1A1235"/>
              <path d="M17 7L7 12L17 17L14 12L17 7Z" stroke="#7F5FFF" strokeWidth="1.5"/>
            </svg>
          </div>
          
          {/* Orbital rings */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-64 h-64 border border-[#2A1B4A] rounded-full opacity-70"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 h-80 border border-[#2A1B4A] rounded-full opacity-50"></div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-96 border border-[#2A1B4A] rounded-full opacity-30"></div>
          
          {/* Orbital dots */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#7F5FFF] rounded-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#7F5FFF] rounded-full"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7F5FFF] rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7F5FFF] rounded-full"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
