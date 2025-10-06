import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Diploma in Software Engineering Certificate",
      provider: "NIBM",
      date: "2023",
      description: "Foundation in programming fundamentals, database design, and web development technologies.",
      image: "/nibm.png",
      color: "#1E3A8A", // NIBM Blue
      credentials: "https://www.linkedin.com/in/oshadha-samarasinghe"
    },
    {
      id: 2,
      title: "Higher National Diploma in Software Engineering Certificate",
      provider: "NIBM",
      date: "2024",
      description: "Comprehensive curriculum covering software development lifecycle, project management, and enterprise applications.",
      image: "/nibm.png",
      color: "#1E3A8A", // NIBM Blue
      credentials: "https://www.linkedin.com/in/oshadha-samarasinghe"
    },
    {
      id: 3,
      title: "Oracle Database Foundations Learner Certificate",
      provider: "Oracle",
      date: "2024",
      description: "Comprehensive understanding of database fundamentals, SQL basics, and Oracle database architecture and management.",
      image: "/Oracle.png",
      color: "#F80000", // Oracle Red
      credentials: "https://www.linkedin.com/in/oshadha-samarasinghe"
    },
    {
      id: 4,
      title: "Oracle Database Design Learner Certificate",
      provider: "Oracle",
      date: "2024",
      description: "Advanced database design concepts, normalization, entity-relationship modeling, and database optimization techniques.",
      image: "/Oracle.png",
      color: "#F80000", // Oracle Red
      credentials: "https://www.linkedin.com/in/oshadha-samarasinghe"
    },
    {
      id: 5,
      title: "IBM Cloud Pak for Business Automation - Tech Jam Certificate",
      provider: "IBM",
      date: "2024",
      description: "Enterprise automation solutions, workflow management, and business process optimization using IBM Cloud technologies.",
      image: "/IBM.png",
      color: "#1261FE", // IBM Blue
      credentials: "https://www.credly.com/badges/5594ba87-8f1e-40e0-839a-52aa41605798/linked_in_profile"
    },
    {
      id: 6,
      title: "IBM FileNet Content Manager - Tech Jam Certificate",
      provider: "IBM",
      date: "2024",
      description: "Enterprise content management, document workflow, and information governance using IBM FileNet platform.",
      image: "/IBM.png",
      color: "#1261FE", // IBM Blue
      credentials: "https://www.credly.com/badges/04dc25b6-cc83-4bc1-9cde-5103af1f4bd5/linked_in_profile"
    },
    {
      id: 7,
      title: "NIBM OBL EXPO Robotic Competition 2024 Certificate",
      provider: "NIBM",
      date: "2024",
      description: "Participated in robotics competition showcasing innovative automation solutions and IoT-based projects.",
      image: "/nibm.png",
      color: "#1E3A8A", // NIBM Blue
      credentials: "https://www.linkedin.com/in/oshadha-samarasinghe"
    },
    {
      id: 8,
      title: "NIBM REACH TALENT SHOW 2023 Certificate",
      provider: "NIBM",
      date: "2023",
      description: "Selected participant showcasing creative talents and skills in inter-university cultural competition.",
      image: "/nibm.png",
      color: "#1E3A8A", // NIBM Blue
      credentials: "https://www.linkedin.com/in/oshadha-samarasinghe"
    }
  ];

  return (
    <section id="certifications" className="bg-[#0c011a] text-white py-16 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 py-4 sm:py-8 md:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg overflow-hidden hover:border-[#7F5FFF]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className="h-20 sm:h-24 relative overflow-hidden flex items-center justify-center p-4" 
                style={{
                  backgroundColor: `${cert.color}10`, // Very light version of the color
                }}
              >
                {/* Certificate logo */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                  <img 
                    src={cert.image} 
                    alt={`${cert.provider} logo`}
                    className="w-full h-full object-contain filter brightness-110"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full rounded-lg hidden items-center justify-center text-white text-lg font-bold"
                    style={{ backgroundColor: cert.color }}
                  >
                    {cert.provider.charAt(0)}
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-semibold mb-2 leading-tight">{cert.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium" style={{ color: cert.color }}>{cert.provider}</span>
                  <span className="text-xs text-slate-400">{cert.date}</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm mb-4 leading-relaxed">{cert.description}</p>
                
                <div className="mt-4">
                  <a
                    href={cert.credentials}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-medium hover:opacity-80 transition duration-300"
                    style={{ color: cert.color }}
                  >
                    Show credential
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Organizations & Activities */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-[#7F5FFF] text-center">Organizations & Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-4 sm:p-6 hover:border-[#7F5FFF]/40 transition-all duration-300">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">AIESEC in NIBM</h4>
              <p className="text-slate-400 text-xs sm:text-sm mb-2">Member • 2023</p>
              <p className="text-slate-300 text-xs sm:text-sm">Active participation in global youth leadership programs and cultural exchange initiatives.</p>
            </div>
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-4 sm:p-6 hover:border-[#7F5FFF]/40 transition-all duration-300">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Rotaract Club in NIBM</h4>
              <p className="text-slate-400 text-xs sm:text-sm mb-2">Member • 2023</p>
              <p className="text-slate-300 text-xs sm:text-sm">Community service projects and leadership development through rotary initiatives.</p>
            </div>
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-4 sm:p-6 hover:border-[#7F5FFF]/40 transition-all duration-300">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Computer Society in NIBM</h4>
              <p className="text-slate-400 text-xs sm:text-sm mb-2">Member • 2024 – Present</p>
              <p className="text-slate-300 text-xs sm:text-sm">Active involvement in technical workshops and programming competitions.</p>
            </div>
            <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-4 sm:p-6 hover:border-[#7F5FFF]/40 transition-all duration-300">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">IEEE Student Branch NIBM</h4>
              <p className="text-slate-400 text-xs sm:text-sm mb-2">Member • 2023 – Present</p>
              <p className="text-slate-300 text-xs sm:text-sm">Professional development through IEEE networking and technical events.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-slate-300 text-sm sm:text-base">Passionate about continuous learning and professional development</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;