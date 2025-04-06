
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const TransformationPhilosophy = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const philosophies = [
    {
      title: "Natural Training",
      description: "We've built our entire program around the science of natural muscle development and strength building. No shortcuts, no steroids – just hard work and proven techniques.",
      icon: "💪"
    },
    {
      title: "Experienced Trainers",
      description: "Our certified trainers have years of experience guiding members through safe, effective workouts designed for natural progress without harmful substances.",
      icon: "👨‍🏫"
    },
    {
      title: "Discipline > Steroids",
      description: "We believe the mental strength developed through consistent training is more valuable than any artificial physical enhancement. Discipline is our cornerstone.",
      icon: "⏱️"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % philosophies.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [philosophies.length]);

  return (
    <section className="py-16 bg-rebuild-black relative">
      {/* Diagonal yellow accent */}
      <div className="absolute right-0 top-0 w-1/3 h-2 bg-rebuild-yellow transform skew-y-3"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">OUR TRANSFORMATION PHILOSOPHY</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          At Rebuild, we believe in a comprehensive approach to fitness that goes beyond physical training. Our philosophy is built on these key principles:
        </p>
        
        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-16">
          {philosophies.map((philosophy, index) => (
            <div 
              key={index}
              className={`bg-rebuild-gray p-6 rounded-lg transition-all duration-500 transform ${
                activeIndex === index ? 'scale-105 border-2 border-rebuild-yellow' : 'scale-100'
              }`}
            >
              <div className="text-4xl mb-4">{philosophy.icon}</div>
              <h3 className="text-2xl font-bebas text-white mb-2">{philosophy.title}</h3>
              <p className="text-gray-300">{philosophy.description}</p>
            </div>
          ))}
        </div>
        
        {/* What We Stand Against */}
        <div className="bg-rebuild-gray p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bebas text-white mb-4 text-center">WHAT WE STAND AGAINST</h3>
          <div className="space-y-3">
            {["Steroid use and promotion", "Quick-fix fitness solutions", "Unrealistic body standards", "Unhealthy gym cultures"].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-rebuild-yellow p-1 rounded-full mr-3">
                  <Check size={16} className="text-rebuild-black" />
                </div>
                <p className="text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom diagonal yellow accent */}
      <div className="absolute left-0 bottom-0 w-1/4 h-2 bg-rebuild-yellow transform -skew-y-3"></div>
    </section>
  );
};

export default TransformationPhilosophy;
