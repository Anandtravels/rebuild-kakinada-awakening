
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const gymLocations = [
  {
    title: "Premium Gym",
    description: "Our flagship facility featuring top-of-the-line equipment, spacious training areas, and full amenities for both men and women. Experience fitness at its finest.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    features: ["Comprehensive Equipment", "Sauna & Recovery Area", "Dedicated Training Zones", "Nutrition Guidance"]
  },
  {
    title: "Women's Gym",
    description: "A dedicated space designed by women, for women. Our female-focused gym offers a supportive, comfortable environment with specialized training programs.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    features: ["Women-Only Environment", "Specialized Equipment", "Female Trainers", "Tailored Programs"]
  },
  {
    title: "Student Gym",
    description: "Affordable, high-energy space designed for students. Get all the benefits of the Rebuild approach with flexible scheduling and budget-friendly membership options.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    features: ["Student Discounts", "Flexible Hours", "Group Training", "Study & Workout Spaces"]
  }
];

const OurGyms = () => {
  const [activeGym, setActiveGym] = useState(0);

  return (
    <section id="gyms" className="section-padding bg-rebuild-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD100' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      ></div>
      
      <div className="container relative">
        <h2 className="section-title text-center mx-auto">OUR GYMS</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Explore our three distinct gym environments, each designed to cater to specific needs while maintaining our core philosophy of natural strength building.
        </p>
        
        {/* Gym tabs */}
        <div className="flex justify-center mb-8 space-x-2">
          {gymLocations.map((gym, index) => (
            <button
              key={index}
              onClick={() => setActiveGym(index)}
              className={`px-4 py-2 font-bold transition-all ${
                activeGym === index 
                ? 'bg-rebuild-yellow text-rebuild-black' 
                : 'bg-rebuild-gray text-white hover:bg-rebuild-lightgray'
              }`}
            >
              {gym.title}
            </button>
          ))}
        </div>
        
        {/* Gym details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <div className="yellow-border p-1 rounded-lg overflow-hidden">
              <img 
                src={gymLocations[activeGym].image} 
                alt={gymLocations[activeGym].title} 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-rebuild-yellow py-2 px-4 rounded-md shadow-lg">
              <p className="text-rebuild-black font-bold">{gymLocations[activeGym].title}</p>
            </div>
          </div>
          
          {/* Content */}
          <div className="bg-rebuild-gray p-8 rounded-lg relative">
            <h3 className="text-3xl font-bebas text-white mb-4">{gymLocations[activeGym].title}</h3>
            <p className="text-gray-300 mb-6">{gymLocations[activeGym].description}</p>
            
            <div className="mb-8">
              <h4 className="text-xl font-bebas text-rebuild-yellow mb-3">KEY FEATURES</h4>
              <ul className="space-y-2">
                {gymLocations[activeGym].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-rebuild-yellow mr-2.5 rounded-full"></div>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a 
              href="#membership" 
              className="inline-flex items-center text-rebuild-yellow hover:text-white transition-colors group"
            >
              View Membership Options
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGyms;
