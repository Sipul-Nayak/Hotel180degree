import { Waves, Utensils, Dumbbell, Car, Wifi, Coffee, Sparkles, Shield, Plane, Users } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <Waves className="text-blue-500" size={32} />,
      title: 'Infinity Pool',
      description: 'Olympic-sized infinity pool with panoramic ocean views and poolside service'
    },
    {
      icon: <Utensils className="text-amber-500" size={32} />,
      title: 'Michelin Dining',
      description: 'Award-winning restaurants featuring world-renowned chefs and cuisine'
    },
    {
      icon: <Sparkles className="text-purple-500" size={32} />,
      title: 'Luxury Spa',
      description: 'Full-service spa with therapeutic treatments and wellness programs'
    },
    {
      icon: <Dumbbell className="text-green-500" size={32} />,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with personal trainers and fitness classes'
    },
    {
      icon: <Car className="text-gray-600" size={32} />,
      title: 'Valet Service',
      description: 'Complimentary valet parking with luxury vehicle care'
    },
    {
      icon: <Wifi className="text-indigo-500" size={32} />,
      title: 'Premium WiFi',
      description: 'High-speed internet throughout the property and rooms'
    },
    {
      icon: <Coffee className="text-amber-600" size={32} />,
      title: '24/7 Room Service',
      description: 'Gourmet dining delivered to your room at any hour'
    },
    {
      icon: <Shield className="text-red-500" size={32} />,
      title: 'Concierge',
      description: 'Personal concierge service for all your needs and requests'
    },
    {
      icon: <Plane className="text-blue-600" size={32} />,
      title: 'Airport Transfer',
      description: 'Luxury transportation to and from the airport'
    },
    {
      icon: <Users className="text-pink-500" size={32} />,
      title: 'Event Planning',
      description: 'Professional event coordination for special occasions'
    }
  ];

  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            World-Class
            <span className="block bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Amenities
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in luxury with our comprehensive collection of premium amenities, 
            each designed to elevate your experience and create unforgettable moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{amenity.title}</h3>
              <p className="text-slate-600 leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=1400&h=600&fit=crop"
            alt="Luxury Pool Area"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl text-white">
                <h3 className="text-4xl font-bold mb-6">Experience Pure Indulgence</h3>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Every amenity is meticulously crafted to provide you with the ultimate luxury experience. 
                  From our infinity pool to our world-class spa, discover a new level of comfort and elegance.
                </p>
                <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore All Amenities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;