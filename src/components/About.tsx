import React from 'react';
import { User, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-slate-900" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <User size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">Who I Am</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              A passionate Computer Science Engineering student at VIT Vellore, with a strong foundation in 
              full-stack development and cloud technologies. Always eager to learn and implement cutting-edge solutions.
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">What I Do</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              I specialize in building scalable web applications, integrating AI solutions, and working with 
              cloud platforms. From frontend React applications to backend APIs and DevOps implementations.
            </p>
          </div>
          
          <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Award size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">My Goals</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              To contribute to innovative projects that make a real impact, continuously grow my technical skills, 
              and collaborate with talented teams to build the future of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;