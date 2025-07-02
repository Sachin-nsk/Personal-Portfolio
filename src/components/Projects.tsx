import React from 'react';
import { ExternalLink, Github, Zap, TrendingUp, MessageSquare, Car, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Trackify",
      description: "AI-Powered Expense and Income Tracker with personalized financial suggestions",
      techStack: ["Next.js", "Clerk", "Supabase", "Prisma", "Gemini", "GCP"],
      icon: Zap,
      githubLink: "https://github.com/Sachin-nsk/trackify",
      liveLink: "https://trackify-app-999910686309.asia-south1.run.app/",
      color: "from-green-500 to-green-700"
    },
    {
      title: "CryptoGraphi",
      description: "Real-time cryptocurrency tracker monitoring 100+ cryptocurrencies with live updates",
      techStack: ["React.js", "Chart.js", "REST APIs", "Netlify"],
      icon: TrendingUp,
      githubLink: "https://github.com/Sachin-nsk/CryptoGraphi",
      liveLink: "https://sachin-cryptographi.netlify.app/",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      title: "LinkedIn Post Generator",
      description: "AI-powered content creation tool using Llama-3.3 and ChatGroq",
      techStack: ["Python", "Llama-3.3", "ChatGroq", "AI/ML"],
      icon: MessageSquare,
      githubLink: "https://github.com/Sachin-nsk/Linkedin_Post_Generator",
      liveLink: "https://github.com/Sachin-nsk/Linkedin_Post_Generator",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "RideShare Application",
      description: "Smart ride matching system with dynamic pricing and emergency SOS features",
      techStack: ["React", "Flask", "scikit-learn", "ML"],
      icon: Car,
      githubLink: "https://github.com/Sachin-nsk/Car-Pooling",
      liveLink: "https://github.com/Sachin-nsk/Car-Pooling",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Weather Application",
      description: "Real-time weather information app for cities worldwide",
      techStack: ["JavaScript", "Weather API", "HTML", "CSS"],
      icon: Cloud,
      githubLink: "https://github.com/Sachin-nsk/Weather-Website",
      liveLink: "https://weathertellerforcity.netlify.app/",
      color: "from-cyan-500 to-cyan-700"
    }
  ];

  return (
    <section className="py-20 bg-slate-800" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => window.open(project.liveLink, '_blank')}
              className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-slate-600/50 text-blue-300 px-2 py-1 rounded-full border border-slate-500/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform"
                >
                  <Github size={16} />
                  Code
                </a>
                <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300 hover:scale-105 transform">
                  <ExternalLink size={16} />
                  Live Demo
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;