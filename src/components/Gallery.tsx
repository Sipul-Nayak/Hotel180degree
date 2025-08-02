import  { useState } from 'react';
import { X } from 'lucide-react';
import Room1 from "./assets/Room1.png"
import Room2 from "./assets/Room2.png"
import Room7 from "./assets/Room7.png"
import Room4 from "./assets/Room4.png"
import Room5 from "./assets/Room5.png"
import Room6 from "./assets/Room6.png"


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: Room1,
      alt: 'Hotel Exterior'
    },
    {
      src: Room2,
      alt: 'Luxury Room'
    },
    {
      src: Room4,
      alt: ' AC Room'
    },
    {
      src:Room7,
      alt: 'Hotel Lobby'
    },
    {
      src: Room5,
      alt: 'Premium Suite'
    },
    {
      src: Room6,
      alt: 'Dining Area'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Photo <span className="text-amber-500">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our stunning property and discover the beauty that awaits you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Full Size
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;