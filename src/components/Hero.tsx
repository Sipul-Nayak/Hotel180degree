import { ChevronDown, Star } from 'lucide-react';
import SearchWidget from './SearchWidget';
import backgroundImage from './assets/Logo.png';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 max-w-6xl mx-auto flex flex-col justify-center items-center text-center pb-24">
        {/* Rating Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4 animate-fade-in-up">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-amber-400 fill-current" size={16} />
            ))}
          </div>
          <span className="text-sm font-medium">5-Star Luxury Resort</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in-up animation-delay-200 leading-tight">
          Experience
          <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Pure Luxury
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in-up animation-delay-400 max-w-3xl mx-auto leading-relaxed">
          Discover unparalleled elegance and world-class hospitality in the heart of paradise.
          Where every moment becomes an extraordinary memory.
        </p>

        {/* 
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600 mb-20">
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Book Your Escape
          </button>
          <button className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
            Explore Suites
          </button>
        </div>
        */}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-amber-400 transition-colors duration-300"
      >
        <ChevronDown size={36} />
      </button>

      {/* Search Widget */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20">
        <SearchWidget />
      </div>
      {/* Call Now Floating Button */}
<div className="fixed bottom-6 right-6 z-30">
  <a
    href="tel:+916370957399" // Replace with your actual number
    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h1.5a1 1 0 011 1v2.5a1 1 0 01-1 1H5.5a1 1 0 00-.991 1.142A11.017 11.017 0 0012 21a11.017 11.017 0 008.349-11.358A1 1 0 0019.5 8.5H17a1 1 0 01-1-1V5a1 1 0 011-1H19a2 2 0 012 2v2a9.01 9.01 0 01-9 9 9.01 9.01 0 01-9-9V5z"
      />
    </svg>
    <span className="font-semibold">Call Now</span>
  </a>
</div>

    </section>
  );
};

export default Hero;
