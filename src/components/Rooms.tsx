import { Users, Bed, Bath, Maximize, Star } from 'lucide-react';
import Room1 from "./assets/Room1.png";
import Room6 from "./assets/Room6.png";
import Room2 from "./assets/Room2.png";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Non AC Room ',
      price: 1550,
      originalPrice: 1800,
      image:  Room1,
      features: ['Non-Refundable','24-hour Room Service', 'Housekeeping', 'Telephone', 'Breakfast','closet','Charging Points'],
      description: 'Ideal for budget-conscious travelers without compromising on essentials.Enjoy a peaceful stay with all basic amenities and great service.',
      size: '13 sqm',
      beds: '1 Double Bed',
      bathrooms: '1 Bathroom',
      maxGuests: 2,
      rating: 4.9
    },
    {
      id: 2,
      name: 'AC Room',
      price: 1900,
      originalPrice: 2250,
      image: Room2,
      features: ['Refundable Before CheckIn', 'closet', 'Housekeeping', 'Air Conditioning', 'Premium Wifi','24-hour Room Service'],
      description: 'Experience cool comfort in our well-furnished air-conditioned room. Perfect for solo travelers or couples seeking a relaxing and peaceful stay.',
      size: '13 sqm',
      beds: '1 King Bed',
      bathrooms: '1 Luxury Bathroom',
      maxGuests: 2,
      rating: 4.8
    },
    {
      id: 3,
      name: 'AC Room',
      price: 2450,
      originalPrice: 2900,
      image: Room6,
      features: ['Refundable Before CheckIn', 'Breakfast', 'Housekeeping', 'Air Conditioning', 'Premium Wifi','24-hour Room Service'],
      description: 'Unwind in our premium AC room, designed for maximum comfort and relaxation.Ideal for couples or solo travelers looking for a quality stay.',
      size: '13 sqm',
      beds: '1 Double Bed',
      bathrooms: '1 Luxury Bathrooms',
      maxGuests: 2,
      rating: 5.0
    }
  ];
const handleSearch = () => {

const message = `Hello, I’m interested in booking a room at your hotel. Could you please provide more details regarding availability and pricing?`;

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = '6378143114'; // 🔁 Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };
  return (
    <section id="rooms" className="py-24  bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Luxury
            <span className="block bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Accommodations
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our meticulously designed rooms and suites, each offering unparalleled comfort, 
            stunning views, and world-class amenities for an unforgettable stay.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {rooms.map((room) => (
            <div key={room.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₹{room.originalPrice - room.price}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="text-amber-400 fill-current" size={14} />
                  <span className="text-sm font-semibold text-slate-700">{room.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{room.name}</h3>
                  <div className="text-right">
                    <div className="text-sm text-slate-500 line-through">₹{room.originalPrice}</div>
                    <div className="text-2xl font-bold text-amber-600">₹{room.price}</div>
                    <div className="text-sm text-slate-600">per night</div>
                  </div>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">{room.description}</p>
                
                {/* Room Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <Maximize size={16} className="text-amber-500" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-amber-500" />
                    <span>Up to {room.maxGuests} guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed size={16} className="text-amber-500" />
                    <span>{room.beds}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath size={16} className="text-amber-500" />
                    <span>{room.bathrooms}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {room.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button onClick={handleSearch} className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Reserve This Room
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;