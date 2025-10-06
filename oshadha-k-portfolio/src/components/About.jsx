import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-[#0c011a] text-white py-16 sm:py-20">
      {/* STANDARDIZED CONTAINER - REMOVED max-w-6xl constraint */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 py-4 sm:py-8 md:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">About Me</h2>
        
        <div className="space-y-8 sm:space-y-10">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Passionate third-year Software Engineering undergraduate at Coventry University, with strong skills in problem-solving, 
            logical thinking, and full-stack development. Currently interning as a Software Engineer at Seylan Bank PLC, 
            where I work on real-world fintech systems and backend integrations.
          </p>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I enjoy creating innovative, user-centered software that bridges design and technology, focusing on efficiency, 
            usability, and clean code. My expertise spans across multiple programming languages, frameworks, and development 
            methodologies, always striving to deliver scalable and maintainable solutions.
          </p>
          
          <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-6 sm:mb-8 text-[#7F5FFF]">Skills</h3>
          
          {/* STANDARDIZED GRID - consistent with other sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-4 sm:p-5 hover:border-[#7F5FFF]/40 transition-all duration-300">
              <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Languages</h4>
              <ul className="space-y-2 sm:space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Java</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Python</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">C#</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">JavaScript</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">TypeScript</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">SQL</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-4 sm:p-5 hover:border-[#7F5FFF]/40 transition-all duration-300">
              <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Frameworks</h4>
              <ul className="space-y-2 sm:space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">React.js</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Next.js</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Spring Boot</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">.NET</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Tailwind CSS</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Framer Motion</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-4 sm:p-5 hover:border-[#7F5FFF]/40 transition-all duration-300">
              <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Databases</h4>
              <ul className="space-y-2 sm:space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">MySQL</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Oracle</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">SQL Server</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">SQLite</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-4 sm:p-5 hover:border-[#7F5FFF]/40 transition-all duration-300">
              <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Tools & Others</h4>
              <ul className="space-y-2 sm:space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Git/GitHub</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Figma</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Android Studio</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Power BI</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">REST APIs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  <span className="text-xs sm:text-sm">Microservices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;