import  { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#rooms', label: 'Rooms' },
    { href: '#amenities', label: 'Amenities' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
    const handleSearch = () => {

const message = `Hello, I’m interested in booking a room at your hotel. Could you please provide more details regarding availability and pricing?`;

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = '6378143114'; // 🔁 Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      
      <header
        className={`fixed  left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className={`text-3xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white drop-shadow-lg'
            }`}>
             Hotel   <span className="text-amber-500">180 Degree</span> 
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-all duration-300 hover:text-amber-500 relative group ${
                    isScrolled ? 'text-slate-700' : 'text-white drop-shadow-sm'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Book Now Button */}
            <button onClick={handleSearch} className="hidden lg:block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reserve Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden transition-colors duration-300 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-100">
            <nav className="flex flex-col py-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 hover:text-amber-500 py-3 px-6 text-left font-medium transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 pt-4">
                <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-full font-semibold transition-all duration-300">
                  Reserve Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;