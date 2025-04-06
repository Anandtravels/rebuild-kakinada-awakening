
import { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'Premium Gym'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thanks for contacting us. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'Premium Gym'
    });
  };

  return (
    <section id="contact" className="section-padding bg-rebuild-black">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">CONTACT US</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Have questions about our approach or ready to start your natural transformation journey? Reach out to us.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-rebuild-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bebas text-white mb-6">GET IN TOUCH</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-rebuild-darkgray text-white border border-rebuild-lightgray rounded focus:outline-none focus:border-rebuild-yellow"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-rebuild-darkgray text-white border border-rebuild-lightgray rounded focus:outline-none focus:border-rebuild-yellow"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-rebuild-darkgray text-white border border-rebuild-lightgray rounded focus:outline-none focus:border-rebuild-yellow"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="interest" className="block text-white mb-2">I'm Interested In</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full p-3 bg-rebuild-darkgray text-white border border-rebuild-lightgray rounded focus:outline-none focus:border-rebuild-yellow"
                >
                  <option value="Premium Gym">Premium Gym</option>
                  <option value="Women's Gym">Women's Gym</option>
                  <option value="Student Gym">Student Gym</option>
                  <option value="Personal Training">Personal Training</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 bg-rebuild-darkgray text-white border border-rebuild-lightgray rounded focus:outline-none focus:border-rebuild-yellow"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-rebuild-yellow text-rebuild-black font-bold py-3 px-4 rounded hover:bg-yellow-400 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div>
            <div className="bg-rebuild-gray p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bebas text-white mb-6">OUR LOCATIONS</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-rebuild-yellow mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Premium Gym</h4>
                    <p className="text-gray-300">123 Main Road, Kakinada, Andhra Pradesh, 533001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-rebuild-yellow mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Women's Gym</h4>
                    <p className="text-gray-300">456 Park Avenue, Kakinada, Andhra Pradesh, 533002</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-rebuild-yellow mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold">Student Gym</h4>
                    <p className="text-gray-300">789 College Road, Kakinada, Andhra Pradesh, 533003</p>
                  </div>
                </div>
              </div>
              
              <div className="h-px bg-rebuild-lightgray my-6"></div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-rebuild-yellow mr-3" />
                  <a href="tel:+919876543210" className="text-white hover:text-rebuild-yellow">+91 98765 43210</a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-rebuild-yellow mr-3" />
                  <a href="mailto:info@rebuildgym.com" className="text-white hover:text-rebuild-yellow">info@rebuildgym.com</a>
                </div>
                
                <div className="flex items-center">
                  <MessageSquare className="text-rebuild-yellow mr-3" />
                  <a href="https://wa.me/919876543210" className="text-white hover:text-rebuild-yellow">WhatsApp Us</a>
                </div>
              </div>
            </div>
            
            {/* Map Embed */}
            <div className="rounded-lg overflow-hidden h-64 relative yellow-border p-1">
              {/* Replace with actual Google Maps embed */}
              <div className="w-full h-full bg-rebuild-darkgray flex items-center justify-center">
                <p className="text-white">Google Maps Embed - Showing all 3 locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
