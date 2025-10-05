import React from 'react';

const About = () => {
  return (    <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-xl p-6">
              <h4 className="text-xl font-medium mb-4">Languages</h4>
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
  );
};

export default About;
