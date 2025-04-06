
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with zoom effect */}
      <div 
        className="absolute inset-0 bg-rebuild-black overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-rebuild-black bg-opacity-75 animate-zoom-in"></div>
      </div>
      
      {/* Diagonal yellow line decoration */}
      <div className="absolute left-0 w-full h-8 bg-rebuild-yellow transform -skew-y-3 opacity-80"></div>
      <div className="absolute right-0 bottom-32 w-64 h-2 bg-rebuild-yellow transform -skew-y-3 opacity-90"></div>
      
      {/* Content container */}
      <div className="container relative z-10 px-4 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bebas text-white mb-4 tracking-wider">
          REBUILD <span className="text-rebuild-yellow">GYM KAKINADA</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Where Strength is Built Naturally. <span className="text-rebuild-yellow font-bold">No Steroids.</span> Just Transformation.
        </h2>
        <a 
          href="#about" 
          className="cta-button inline-flex items-center group animate-pulse-yellow"
        >
          Join the Natural Revolution
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-rebuild-black to-transparent"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-1 h-10 bg-rebuild-yellow rounded-full animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
