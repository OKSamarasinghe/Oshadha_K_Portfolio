import React from 'react';

const Certifications = () => {  const certifications = [
    {
      id: 1,
      title: "Oracle Database Foundations Learner Certificate",
      provider: "Oracle",
      date: "2024",
      description: "Comprehensive understanding of database fundamentals, SQL basics, and Oracle database architecture and management.",
      image: "/cert-placeholder.jpg",
      color: "#F80000"
    },
    {
      id: 2,
      title: "Oracle Database Design Learner Certificate",
      provider: "Oracle",
      date: "2024",
      description: "Advanced database design concepts, normalization, entity-relationship modeling, and database optimization techniques.",
      image: "/cert-placeholder.jpg",
      color: "#F80000"
    }
  ];

  return (
    <section id="certifications" className="bg-[#0c011a] text-white py-16 sm:py-20">
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 py-4 sm:py-8 md:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg overflow-hidden hover:border-[#7F5FFF]/40 transition-all duration-300"
          >
            <div 
              className="h-24 sm:h-28 md:h-32 relative overflow-hidden flex items-center justify-center" 
              style={{
                backgroundColor: `${cert.color}15`, // Very light version of the color
              }}
            >
              {/* Certificate icon or badge */}
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: cert.color + '30' }} // Semi-transparent version of the color
              >
                <div 
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md flex items-center justify-center text-white text-sm sm:text-base"
                  style={{ backgroundColor: cert.color }}
                >
                  {cert.provider.charAt(0)}
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <div className="flex justify-between mb-3">
                <span className="text-xs" style={{ color: cert.color }}>{cert.provider}</span>
                <span className="text-xs text-slate-400">{cert.date}</span>
              </div>
              <p className="text-slate-300 text-sm">{cert.description}</p>
              
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-medium hover:opacity-80 transition duration-300"
                  style={{ color: cert.color }}
                >
                  Show credential
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Organizations & Activities */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold mb-8 text-[#7F5FFF]">Organizations & Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-3">AIESEC in NIBM</h4>
            <p className="text-slate-400 text-sm mb-2">Member • 2023</p>
            <p className="text-slate-300 text-sm">Active participation in global youth leadership programs and cultural exchange initiatives.</p>
          </div>
          <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-3">Rotaract Club in NIBM</h4>
            <p className="text-slate-400 text-sm mb-2">Member • 2023</p>
            <p className="text-slate-300 text-sm">Community service projects and leadership development through rotary initiatives.</p>
          </div>
          <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-3">Computer Society in NIBM</h4>
            <p className="text-slate-400 text-sm mb-2">Member • 2024 – Present</p>
            <p className="text-slate-300 text-sm">Active involvement in technical workshops and programming competitions.</p>
          </div>
          <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-3">NIBM Reach Talent Show</h4>
            <p className="text-slate-400 text-sm mb-2">Selected Participant • 2023</p>
            <p className="text-slate-300 text-sm">Showcased musical talents and creative skills in inter-university competition.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 sm:mt-10 md:mt-12 text-center">
        <p className="text-slate-300 text-sm sm:text-base">Passionate about continuous learning and professional development</p>
      </div>
    </div>
    </section>
  );
};

export default Certifications;
