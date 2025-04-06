
import { Users, Award, Dumbbell } from 'lucide-react';

const FounderVision = () => {
  return (
    <section id="about" className="section-padding bg-rebuild-darkgray">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Founder Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-md yellow-border p-1">
              <img 
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80" 
                alt="Sagar Akula - Founder of Rebuild Gym" 
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-rebuild-yellow p-4 rounded-md shadow-lg">
              <h3 className="text-rebuild-black font-bebas text-2xl">Sagar Akula</h3>
              <p className="text-rebuild-black text-sm font-bold">Founder & Visionary</p>
            </div>
          </div>
          
          {/* Vision Content Side */}
          <div>
            <h2 className="section-title">FOUNDER'S VISION</h2>
            <div className="mb-6 relative pl-4 border-l-2 border-rebuild-yellow">
              <p className="text-xl italic text-white opacity-90">
                "We don't believe in shortcuts. We believe in rebuilding strength the natural way."
              </p>
            </div>
            <p className="text-gray-300 mb-6">
              As the founder of Rebuild Gym, Sagar Akula envisioned a revolution in fitness - one where real strength is developed through discipline, science-backed training, and a complete rejection of performance-enhancing drugs.
            </p>
            <p className="text-gray-300 mb-8">
              His mission is to build a community where members transform naturally, focusing on sustainable progress rather than quick, harmful shortcuts. The Rebuild philosophy emphasizes that true strength comes not just from physical prowess, but from the mental discipline required to pursue fitness the right way.
            </p>
            
            {/* Key Vision Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center bg-rebuild-gray p-4 rounded-md">
                <Users className="text-rebuild-yellow mb-3" size={32} />
                <h4 className="font-bold text-white">Community</h4>
                <p className="text-sm text-center text-gray-300">Supporting each other's natural journey</p>
              </div>
              <div className="flex flex-col items-center bg-rebuild-gray p-4 rounded-md">
                <Dumbbell className="text-rebuild-yellow mb-3" size={32} />
                <h4 className="font-bold text-white">Natural Training</h4>
                <p className="text-sm text-center text-gray-300">Science-backed, steroid-free approach</p>
              </div>
              <div className="flex flex-col items-center bg-rebuild-gray p-4 rounded-md">
                <Award className="text-rebuild-yellow mb-3" size={32} />
                <h4 className="font-bold text-white">Excellence</h4>
                <p className="text-sm text-center text-gray-300">Committed to the highest standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderVision;
