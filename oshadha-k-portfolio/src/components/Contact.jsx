import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0c011a] text-white pt-8 sm:pt-12 pb-16 sm:pb-20">
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-12 xl:px-16 py-4 sm:py-8 md:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Contact</h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-lg text-slate-300 mb-8">
          Let's build something <span className="text-[#7F5FFF] font-medium">impactful together</span> — feel free to reach out! Whether you have a project in mind or just want to connect, I'd love to hear from you.
        </p>
        
        <div className="text-center mb-12 space-y-2">
          <div>
            <a href="mailto:oshadakaveensamarasinghe@gmail.com" className="text-lg text-slate-300 hover:text-[#7F5FFF] transition duration-300">
              oshadakaveensamarasinghe@gmail.com
            </a>
          </div>
          <div>
            <a href="tel:+94766392356" className="text-lg text-slate-300 hover:text-[#7F5FFF] transition duration-300">
              +94 76-639-2356
            </a>
          </div>
        </div>
        <form className="space-y-4 sm:space-y-6 bg-[#1A1235] border border-[#2A1B4A] rounded-xl p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-[#0E0A1F] border border-[#2A1B4A] text-white text-sm rounded-lg focus:ring-[#7F5FFF] focus:border-[#7F5FFF] block w-full p-2.5 sm:p-3"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#0E0A1F] border border-[#2A1B4A] text-white text-sm rounded-lg focus:ring-[#7F5FFF] focus:border-[#7F5FFF] block w-full p-2.5 sm:p-3"
                placeholder="name@example.com"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-[#0E0A1F] border border-[#2A1B4A] text-white text-sm rounded-lg focus:ring-[#7F5FFF] focus:border-[#7F5FFF] block w-full p-2.5 sm:p-3"
              placeholder="Let me know how I can help you"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-300">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="bg-[#0E0A1F] border border-[#2A1B4A] text-white text-sm rounded-lg focus:ring-[#7F5FFF] focus:border-[#7F5FFF] block w-full p-2.5 sm:p-3 sm:rows-6"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#7F5FFF] to-[#925FFF] text-white font-medium rounded-lg text-sm px-6 py-2.5 sm:px-8 sm:py-3 hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#7F5FFF]/20 w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
        
        <div className="flex justify-center mt-12 space-x-6">
          <a href="https://github.com/OKSamarasinghe" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#7F5FFF] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/oshadha-samarasinghe" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#7F5FFF] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/oshadhaa_k?igsh=MXA0d2twaG82bXc2bQ==" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#7F5FFF] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/share/19haMW9Dr4/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#7F5FFF] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://x.com/oshadhaaa_k?t=rzR0sHJaBHRn2K90HfCIyQ&s=09" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#7F5FFF] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://medium.com/@oshadakaveensamarasinghe" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[#7F5FFF] transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
