
import { ArrowRight } from 'lucide-react';

const trainers = [
  {
    name: "John Davis",
    specialty: "Strength Training",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "True strength begins with proper form and mental discipline."
  },
  {
    name: "Sarah Chen",
    specialty: "Women's Fitness",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "I believe in empowering women through natural fitness approaches."
  },
  {
    name: "Raj Patel",
    specialty: "Functional Training",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "Building bodies that perform as good as they look - naturally."
  },
  {
    name: "Maria Rodriguez",
    specialty: "Nutrition & Weight Loss",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote: "Sustainable transformation comes from both training and nutrition."
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="section-padding bg-rebuild-darkgray">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">MEET THE TRAINERS</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Our experienced trainers are dedicated to your natural transformation journey. Each trainer is certified, experienced, and committed to the steroid-free approach.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trainers.map((trainer, index) => (
            <div 
              key={index}
              className="bg-rebuild-gray rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rebuild-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bebas text-white">{trainer.name}</h3>
                  <p className="text-rebuild-yellow font-medium text-sm">{trainer.specialty}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white text-sm italic">"{trainer.quote}"</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-rebuild-yellow px-6 py-4 rounded-lg">
            <h3 className="text-2xl font-bebas text-rebuild-black mb-2">JOIN A FREE TRAINING SESSION</h3>
            <p className="text-rebuild-black mb-4">Experience our approach firsthand with a complimentary session</p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-rebuild-black font-bold hover:underline group"
            >
              Book Your Session
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
