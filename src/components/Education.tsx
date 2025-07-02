import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Vellore Institute of Technology",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Vellore, Tamil Nadu",
      period: "2022 - 2026",
      type: "current"
    },
    {
      institution: "Peepal Prodigy School",
      degree: "Senior Secondary Examination CBSE - Class XII",
      location: "Coimbatore, Tamil Nadu",
      period: "2020 - 2022",
      type: "completed"
    },
    {
      institution: "Peepal Prodigy School",
      degree: "Higher Secondary Examination CBSE - Class X",
      location: "Coimbatore, Tamil Nadu",
      period: "2018 - 2020",
      type: "completed"
    }
  ];

  return (
    <section className="py-20 bg-slate-800" id="education">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Education</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    edu.type === 'current' 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-700' 
                      : 'bg-gradient-to-br from-slate-600 to-slate-700'
                  }`}>
                    <GraduationCap size={32} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 bg-gradient-to-r from-slate-700/50 to-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-300">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-3 font-medium">{edu.degree}</p>
                  
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  
                  {edu.type === 'current' && (
                    <div className="mt-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                        Currently Pursuing
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;