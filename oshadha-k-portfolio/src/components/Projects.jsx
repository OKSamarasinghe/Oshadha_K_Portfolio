import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project-placeholder.jpg",
      tags: ["React", "Node.js"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      id: 2,
      title: "Example Project",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      image: "/project-placeholder.jpg",
      tags: ["React", "TailwindCSS"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        <div className="space-y-32">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-sm text-slate-400 mb-2">Featured Project</h3>
              <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
              
              <div className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-6 mb-6">
                <p className="text-slate-300">
                  {project.description}
                </p>
              </div>
              
              <div className="flex items-center space-x-5 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <span className="w-3 h-3 rounded-full bg-[#7F5FFF]"></span>
                  </div>
                  <span className="text-sm text-slate-300">Light</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full bg-[#1A1235] flex items-center justify-center border border-white/30">
                    <span className="w-3 h-3 rounded-full bg-[#2A1B4A]"></span>
                  </div>
                  <span className="text-sm text-slate-300">Dark</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                {project.tags.map((tag, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-sm text-slate-300">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 h-80 md:h-auto rounded-lg overflow-hidden bg-[#1A1235] border border-[#2A1B4A]">
              {/* Project wireframe mockup like in the design */}
              <div className="w-full h-full flex items-center justify-center p-6">
                {index % 2 === 0 ? (
                  <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center p-8 relative">
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="w-full h-full border-2 border-dashed border-gray-500/30 rounded flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-white/5 rounded-lg flex flex-col p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 border border-gray-500/20 rounded-md mb-3"></div>
                    <div className="h-24 border border-gray-500/20 rounded-md"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-6">More Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="bg-[#1A1235] border border-[#2A1B4A] rounded-lg p-6 hover:border-[#7F5FFF]/40 transition-all duration-300"
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
              
              <h3 className="text-xl font-semibold mb-3">Authentication System</h3>
              <p className="text-slate-300 mb-6">A secure user authentication system with JWT, password reset, email verification and OAuth options.</p>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-[#2A1B4A] text-slate-300 rounded">Node.js</span>
                <span className="text-xs px-2 py-1 bg-[#2A1B4A] text-slate-300 rounded">Express</span>
                <span className="text-xs px-2 py-1 bg-[#2A1B4A] text-slate-300 rounded">MongoDB</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
