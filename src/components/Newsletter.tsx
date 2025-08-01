import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-10 p-4 rounded-full">
              <Mail className="text-white" size={32} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Updated with <span className="text-amber-400">Exclusive Offers</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about special packages, events, and luxury experiences at Hotel 180 Degree.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="bg-amber-500 hover:bg-amber-600 disabled:bg-green-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 min-w-[140px]"
              >
                {isSubscribed ? (
                  <>
                    <span>✓ Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="text-blue-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;