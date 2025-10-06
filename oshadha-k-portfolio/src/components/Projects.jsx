import React from 'react';

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Purchasing Lanka International 🇱🇰",
      description: "E-commerce platform with smooth animations, advanced UI/UX, and responsive design. Built with modern web technologies focusing on user experience and performance optimization.",
      image: "/PLI.png",
      tags: ["Next.js", "Tailwind CSS", "React.js", "TypeScript", "Framer Motion"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "SPECTRA SORTER – Autonomous Color Sorting Robot",
      description: "Intelligent IoT-based color sorting robot. Selected for NIBM OBL Expo and Robotics Competition 2024. Features autonomous operation and advanced sensor integration.",
      image: "/spectraSorter.jpg",
      tags: ["C++", "Arduino", "IoT"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 3,
      title: "FoodSnap",
      description: "Mobile food ordering app with full CRUD operations and responsive UI. Built for Android with intuitive user interface and seamless ordering experience.",
      image: "/mad.png",
      tags: ["Java", "Android Studio", "SQLite", "XML"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 4,
      title: "AGRIOS – Revolutionizing Agriculture with Technology",
      description: "Smart agriculture platform connecting data-driven insights to improve efficiency. Combines IoT sensors, data analytics, and modern web technologies.",
      image: "/agrios.png",
      tags: ["React.js", "Spring Boot", "MySQL"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 5,
      title: "Taste of Ceylon Restaurant Website",
      description: "Modern restaurant website with online ordering capabilities. Features elegant design, menu management, and customer interaction systems.",
      image: "/TOC.png",
      tags: ["HTML5", "CSS3", "JavaScript", "MySQL"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 6,
      title: "Smart Parking System",
      description: "IoT-based smart parking solution with sensor integration. Real-time parking space monitoring and automated management system.",
      image: "/parkingIOT.png",
      tags: ["IoT", "Arduino"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 7,
      title: "FITNESS ARENA – Gym Management System",
      description: "Comprehensive gym management application with member tracking, billing, and workout scheduling. Built with modern desktop application technologies.",
      image: "/gym.png",
      tags: ["C#", "MySQL"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  const otherProjects = [
    {
      id: 8,
      title: "Task Management System",
      description: "Secure task management app with authentication, role-based access control, and microservices architecture.",
      tags: ["React.js", "Spring Boot", "Microservices", "JWT", "SonarQube"]
    },
    {
      id: 9,
      title: "Credit Card Fraud Detection",
      description: "Machine learning model predicting fraudulent transactions using data analytics.",
      tags: ["Python", "Machine Learning", "Google Colab"]
    },
    {
      id: 10,
      title: "Book Store Management System",
      description: "Full-stack web application for managing book inventory and sales.",
      tags: ["React.js", "Spring Boot", "Java", "MySQL"]
    },
    {
      id: 11,
      title: "Oracle PL/SQL for Online Bookstore",
      description: "Database-driven bookstore system with advanced PL/SQL procedures.",
      tags: ["Oracle Database", "PL/SQL"]
    },
    {
      id: 12,
      title: "Data Preprocessing for Hotel Booking Analysis",
      description: "Comprehensive data analysis and preprocessing for hotel booking patterns.",
      tags: ["Python", "Weka", "Power BI"]
    },
    {
      id: 13,
      title: "Predicting Diabetes Risk with Regression Analysis",
      description: "Statistical analysis and prediction model for diabetes risk assessment.",
      tags: ["R Studio", "HTML", "Statistical Analysis"]
    },
    {
      id: 14,
      title: "Predictive Analysis of House Prices",
      description: "Machine learning model for real estate price prediction.",
      tags: ["R Studio", "HTML", "Regression Analysis"]
    },
    {
      id: 15,
      title: "Melody Box Music Player",
      description: "Desktop music player application with data structures implementation.",
      tags: ["C++", "Data Structures"]
    },
    {
      id: 16,
      title: "Book Heaven – Library Management System",
      description: "Comprehensive library management system with reporting features.",
      tags: ["Java", "jQuery", "MVC", "MySQL", "Jasper Reports"]
    },
    {
      id: 17,
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with POS system.",
      tags: ["C#", ".NET", "SQL Server"]
    },
    {
      id: 18,
      title: "Library Management UI/UX Prototype",
      description: "User interface and experience design for library management system.",
      tags: ["Figma", "UI/UX Design"]
    }
  ];

  return (
    <section id="projects" className="bg-[#0c011a] text-white py-16 sm:py-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 py-4 sm:py-8 md:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Projects</h2>
        
        <div className="space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <h3 className="text-xs sm:text-sm text-slate-400 mb-1 sm:mb-2">Featured Project</h3>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{project.title}</h4>
                
                <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-6">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#2A1B4A] text-slate-300 rounded-full border border-[#7F5FFF]/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.links.demo} 
                    className="flex items-center gap-2 px-4 py-2 bg-[#7F5FFF] hover:bg-[#6B4FE6] text-white rounded-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.links.github} 
                    className="flex items-center gap-2 px-4 py-2 border border-[#2A1B4A] hover:border-[#7F5FFF]/40 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 h-80 lg:h-auto rounded-lg overflow-hidden bg-[#1A1235] border border-[#2A1B4A]">
                <div className="w-full h-full flex items-center justify-center p-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to wireframe if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-white/5 rounded-lg hidden items-center justify-center p-8 relative">
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="w-full h-full border-2 border-dashed border-gray-500/30 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">More Projects</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-6 hover:border-[#7F5FFF]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#2A1B4A] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7F5FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a href="#" className="text-slate-400 hover:text-white transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-[#2A1B4A] text-slate-300 rounded">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;