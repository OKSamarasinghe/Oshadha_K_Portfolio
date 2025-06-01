import React from 'react';

const About = () => {
  return (    <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
        <div className="space-y-8">
          <p className="text-slate-300 leading-relaxed">
            I am a dedicated software engineer and UI/UX designer with a passion for creating beautiful, 
            functional, and user-centered digital experiences. With 3+ years of experience in the tech industry,
            I specialize in designing and developing applications that solve real problems and delight users.
          </p>
          
          <p className="text-slate-300 leading-relaxed">
            My journey began as a self-taught designer, and I've continuously expanded my skillset to include 
            frontend development, mobile app design, and user research. I believe in the power of design thinking 
            and evidence-based decision making when creating digital products.
          </p>
          
          <h3 className="text-2xl font-semibold mt-10 mb-4">Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-xl p-6">
              <h4 className="text-xl font-medium mb-4">Design</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Figma
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Adobe XD
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Photoshop
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Illustrator
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  UI/UX Design
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-xl p-6">
              <h4 className="text-xl font-medium mb-4">Frontend</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  React
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  JavaScript
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Tailwind CSS
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  HTML/CSS
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  TypeScript
                </li>
              </ul>
            </div>
            
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-xl p-6">
              <h4 className="text-xl font-medium mb-4">Others</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Git/GitHub
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  MERN Stack
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  User Research
                </li>
                <li className="flex items-center">
                  <span className="text-xs mr-2">▪</span>
                  Agile/Scrum
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
