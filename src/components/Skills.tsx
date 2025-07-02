import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C", "C++", "R"],
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      title: "Backend & Cloud",
      skills: ["Node.js", "AWS", "Google Cloud Platform", "Docker", "Lambda"],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10"
    },
    {
      title: "Database & Storage",
      skills: ["MongoDB", "MySQL", "Supabase", "Prisma ORM"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    {
      title: "Tools & Libraries",
      skills: ["Git", "pandas", "NumPy", "Matplotlib", "MATLAB"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-900 relative overflow-hidden" id="skills">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Technical Expertise</h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Comprehensive skill set spanning full-stack development, cloud technologies, and data science
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Card Background */}
              <div className={`
                relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm border border-slate-700/50
                bg-gradient-to-br ${category.bgGradient}
                hover:border-slate-600/70 transition-all duration-500
                hover:transform hover:scale-105 hover:rotate-1
                shadow-xl hover:shadow-2xl
              `}>
                {/* Category Header */}
                <div className="mb-4 sm:mb-6">
                  <div className={`
                    inline-block px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white
                    bg-gradient-to-r ${category.gradient}
                    shadow-lg
                  `}>
                    {category.title}
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group/skill flex items-center justify-between p-2 sm:p-3 rounded-lg bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/30 hover:border-slate-600/50"
                      style={{
                        animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      <span className="text-white font-medium text-sm sm:text-base group-hover/skill:text-blue-300 transition-colors duration-300">
                        {skill}
                      </span>
                      <div className={`
                        w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}
                        group-hover/skill:scale-150 transition-transform duration-300
                        shadow-lg
                      `}></div>
                    </div>
                  ))}
                </div>
                
                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500
                  bg-gradient-to-br ${category.gradient} blur-xl -z-10
                `}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Technology Stack Summary */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-slate-600/50">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Technology Stack Overview</h3>
            <p className="text-gray-300 text-sm sm:text-base">A comprehensive skill set across multiple domains</p>
          </div>
          
          {/* Responsive Grid for Overview Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">25+</span>
              </div>
              <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Technologies</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Across all categories</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">6</span>
              </div>
              <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Languages</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Programming expertise</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">3</span>
              </div>
              <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Cloud Platforms</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Infrastructure knowledge</p>
            </div>
            
            <div className="text-center group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">5+</span>
              </div>
              <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Frameworks</h4>
              <p className="text-gray-400 text-xs sm:text-sm">Modern development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;