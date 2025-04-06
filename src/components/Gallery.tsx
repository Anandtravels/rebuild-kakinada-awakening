
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Modern gym equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Weight training area"
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Cardio section"
  },
  {
    src: "https://images.unsplash.com/photo-1637666135449-c0297539bcf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Women's training area"
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Premium equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Training session"
  },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section id="gallery" className="section-padding bg-rebuild-black">
      <div className="container mx-auto">
        <h2 className="section-title text-center mx-auto">OUR FACILITY</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Take a tour of our state-of-the-art facilities designed to support your natural fitness journey.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-rebuild-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bebas text-xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  VIEW LARGER
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-rebuild-black bg-opacity-95 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-rebuild-yellow"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rebuild-yellow"
            onClick={() => navigateImage('prev')}
          >
            <ChevronLeft size={40} />
          </button>
          
          <img 
            src={galleryImages[currentImageIndex].src} 
            alt={galleryImages[currentImageIndex].alt}
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-rebuild-yellow"
            onClick={() => navigateImage('next')}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
