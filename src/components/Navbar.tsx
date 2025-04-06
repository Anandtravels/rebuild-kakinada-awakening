
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Our Gyms', href: '#gyms' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-rebuild-black bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-white font-bebas text-3xl">
            REBUILD <span className="text-rebuild-yellow">GYM</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-rebuild-yellow transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#membership"
              className="bg-rebuild-yellow text-rebuild-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-colors"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white hover:text-rebuild-yellow"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-rebuild-darkgray py-4 px-2 rounded-md animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-rebuild-yellow transition-colors duration-300 py-2 px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#membership"
                className="bg-rebuild-yellow text-rebuild-black px-4 py-2 rounded font-bold hover:bg-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
