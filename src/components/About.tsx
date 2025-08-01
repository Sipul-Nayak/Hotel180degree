import {  Shield, Heart } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Shield className="text-blue-600" size={24} />, title: 'Premium Security', desc: '24/7 surveillance and concierge' },
    { icon: <Heart className="text-red-500" size={24} />, title: 'Personalized Service', desc: 'Tailored to your preferences' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Redefining
                <span className="block bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Luxury Hospitality
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mb-8"></div>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              For nearly four decades,  Hotel 180 Degree has stood as a beacon of excellence in luxury hospitality. 
              Nestled in an idyllic setting, we've perfected the art of creating extraordinary experiences that transcend 
              ordinary accommodation.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Every detail, from our meticulously designed suites to our world-class amenities, reflects our unwavering 
              commitment to providing guests with memories that last a lifetime. Our dedicated team ensures that your 
              every need is anticipated and exceeded.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury Hotel Lobby"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-2">
                  Since 2012
                </div>
                <div className="text-slate-600 font-medium">Luxury Redefined</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
       
      </div>
    </section>
  );
};

export default About;