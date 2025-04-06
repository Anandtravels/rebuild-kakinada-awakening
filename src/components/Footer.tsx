
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rebuild-black text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bebas mb-4">
              REBUILD <span className="text-rebuild-yellow">GYM</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Rebuild Gym Kakinada is committed to transforming lives through natural fitness. 
              No steroids, no shortcuts - just real results through discipline and science-backed training.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-rebuild-darkgray p-2 rounded hover:bg-rebuild-yellow hover:text-rebuild-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-rebuild-darkgray p-2 rounded hover:bg-rebuild-yellow hover:text-rebuild-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-rebuild-darkgray p-2 rounded hover:bg-rebuild-yellow hover:text-rebuild-black transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bebas mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Our Gyms', 'Trainers', 'Gallery', 'Contact'].map(link => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-rebuild-yellow transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bebas mb-4">OPENING HOURS</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>6:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-rebuild-gray text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Rebuild Gym Kakinada. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Founded by Sagar Akula | Natural Strength Revolution
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
