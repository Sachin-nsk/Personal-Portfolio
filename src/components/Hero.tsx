import React from 'react';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LCAxMzAsIDI0NiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl border-4 border-white/20">
            <div className="text-white text-4xl font-bold">SK</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Sachin Kumar N
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light">
            Computer Science Engineering Student & Full-Stack Developer
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative solutions with modern technologies. 
            Experienced in cloud computing, AI integration, and scalable web applications.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:sachinkumar.n08@gmail.com"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a
            href="linkedin.com/in/sachin-kumar-n/"
            className="p-3 bg-slate-800/50 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Sachin-nsk"
            className="p-3 bg-slate-800/50 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:sachinkumar.n08@gmail.com"
            className="p-3 bg-slate-800/50 hover:bg-blue-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;