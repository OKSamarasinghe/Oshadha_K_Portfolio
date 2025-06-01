import React from 'react';

const Certifications = () => {  const certifications = [
    {
      id: 1,
      title: "UI/UX Design Certification",
      provider: "Google",
      date: "May 2023",
      description: "Professional certification covering design principles, user research, wireframing, prototyping and usability testing.",
      image: "/cert-placeholder.jpg",
      color: "#4285F4"
    },
    {
      id: 2,
      title: "React Developer Certification",
      provider: "Meta",
      date: "January 2023",
      description: "Advanced React concepts including Redux, Hooks, Context API and performance optimization techniques.",
      image: "/cert-placeholder.jpg",
      color: "#61DAFB"
    },
    {
      id: 3,
      title: "Frontend Web Development",
      provider: "Udacity",
      date: "September 2022",
      description: "Comprehensive curriculum covering HTML, CSS, JavaScript, and modern web development practices.",
      image: "/cert-placeholder.jpg",
      color: "#7F5FFF"
    },
    {
      id: 4,
      title: "Agile Project Management",
      provider: "Coursera",
      date: "March 2022",
      description: "Methodologies for managing software development projects using Agile frameworks and practices.",
      image: "/cert-placeholder.jpg",
      color: "#F05032"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg overflow-hidden hover:border-[#7F5FFF]/40 transition-all duration-300"
          >
            <div 
              className="h-32 relative overflow-hidden flex items-center justify-center" 
              style={{
                backgroundColor: `${cert.color}15`, // Very light version of the color
              }}
            >
              {/* Certificate icon or badge */}
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: cert.color + '30' }} // Semi-transparent version of the color
              >
                <div 
                  className="w-10 h-10 rounded-md flex items-center justify-center text-white"
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
      
      <div className="mt-12 text-center">
        <p className="text-slate-300">More certifications available upon request</p>
      </div>
    </div>
  );
};

export default Certifications;
