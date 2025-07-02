import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University",
      link: "https://www.coursera.org/account/accomplishments/verify/U6GQU8MB7UKT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/2d6e16eb-e8ae-4a40-bd1b-5b7fef15879e/linked_in_profile"
    },
    {
      title: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=691C0FA069C51F301886F6D06A45F78B9FC9955E3809398B549B9DD95796F878"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      link: "https://www.credly.com/badges/42b3ba6c-f4ec-4e64-a5ca-4069a5f7c7a6/public_url"
    }
  ];

  return (
    <section className="py-20 bg-slate-800" id="certificates">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Certificates</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              onClick={() => window.open(cert.link, '_blank')}
              className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award size={24} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-blue-300 text-sm font-medium mb-4">
                    {cert.issuer}
                  </p>
                  <div className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300">
                    <ExternalLink size={16} />
                    View Certificate
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;