import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-[#0c011a] text-white py-16 sm:py-20">
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 py-4 sm:py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">About Me</h2>
        <div className="space-y-8">
          <p className="text-slate-300 leading-relaxed">
            Passionate third-year Software Engineering undergraduate at Coventry University, with strong skills in problem-solving, 
            logical thinking, and full-stack development. Currently interning as a Software Engineer at Seylan Bank PLC, 
            where I work on real-world fintech systems and backend integrations.
          </p>
          
          <p className="text-slate-300 leading-relaxed">
            I enjoy creating innovative, user-centered software that bridges design and technology, focusing on efficiency, 
            usability, and clean code. My expertise spans across multiple programming languages, frameworks, and development 
            methodologies, always striving to deliver scalable and maintainable solutions.
          </p>
          
          <h3 className="text-2xl font-semibold mt-10 mb-4">Skills</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-xl p-4 sm:p-5 md:p-6">
              <h4 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Languages</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Java
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  C#
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  JavaScript
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  TypeScript
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  SQL
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-xl p-6">
              <h4 className="text-xl font-medium mb-4">Frameworks</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  React.js
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Next.js
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Spring Boot
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  .NET
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Framer Motion
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-xl p-6">
              <h4 className="text-xl font-medium mb-4">Databases</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  MySQL
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Oracle
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  SQL Server
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  SQLite
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-xl p-6">
              <h4 className="text-xl font-medium mb-4">Tools & Others</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Git/GitHub
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Figma
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Android Studio
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Power BI
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  REST APIs
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Microservices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
