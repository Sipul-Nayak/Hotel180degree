import { useState } from 'react';
import {  Calendar, Users, Phone } from 'lucide-react';

const SearchWidget = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1
  });

  const handleInputChange = (field: string, value: string | number) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
  const message = "Hi, I’d like to speak with someone about room availability. Please give me a call.";
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = '916378143114'; // ✅ Include country code (e.g., 91 for India)
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
};


  return (
    <div className="container mx-auto px-6 pb-48">
      <div className="bg-white rounded-2xl shadow-2xl p-8 mx-auto max-w-7xl border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          {/* Destination */}
         

          {/* Check-in */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">
              Check-in
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="date"
                value={searchData.checkIn}
                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-slate-700"
              />
            </div>
          </div>

          {/* Check-out */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">
              Check-out
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="date"
                value={searchData.checkOut}
                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-slate-700"
              />
            </div>
          </div>

          {/* Guests & Rooms */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-slate-700 uppercase tracking-wide">
              Guests & Rooms
            </label>
            <div className="flex space-x-3">
              <div className="relative flex-1">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <select
                  value={searchData.guests}
                  onChange={(e) => handleInputChange('guests', parseInt(e.target.value))}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-slate-700 appearance-none bg-white"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <select
                value={searchData.rooms}
                onChange={(e) => handleInputChange('rooms', parseInt(e.target.value))}
                className="w-24 px-3 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 text-slate-700 appearance-none bg-white text-center"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}Room</option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="lg:col-span-1">
            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg"
            >
              <Phone size={22} />
              <span>Check Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWidget;
