// import { Gift, Calendar, Briefcase } from 'lucide-react';

// const SpecialOffers = () => {
//   const offers = [
//     {
//       icon: <Gift className="text-amber-500" size={32} />,
//       title: 'Honeymoon Package',
//       discount: '25% OFF',
//       description: 'Romantic getaway with champagne, spa treatments, and ocean view suite',
//       validUntil: 'Valid until Dec 31, 2024',
//       features: ['Champagne on arrival', 'Couples spa treatment', 'Romantic dinner', 'Late checkout']
//     },
//     {
//       icon: <Calendar className="text-blue-500" size={32} />,
//       title: 'Extended Stay',
//       discount: '30% OFF',
//       description: 'Stay 7 nights or more and enjoy significant savings with premium amenities',
//       validUntil: 'Valid until Jan 15, 2025',
//       features: ['Free breakfast', 'Airport transfer', 'Laundry service', 'Business center access']
//     },
//     {
//       icon: <Briefcase className="text-green-500" size={32} />,
//       title: 'Business Traveler',
//       discount: '20% OFF',
//       description: 'Perfect for corporate stays with meeting facilities and business services',
//       validUntil: 'Valid until Mar 31, 2025',
//       features: ['Meeting room access', 'High-speed WiFi', 'Express check-in/out', 'Business lounge']
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Special <span className="text-amber-500">Offers</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Take advantage of our exclusive packages and create unforgettable memories while saving on your luxury stay.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {offers.map((offer, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <div className="group-hover:scale-110 transition-transform duration-300">
//                   {offer.icon}
//                 </div>
//                 <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
//                   {offer.discount}
//                 </div>
//               </div>
              
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">{offer.title}</h3>
//               <p className="text-gray-600 mb-4">{offer.description}</p>
              
//               <div className="space-y-2 mb-6">
//                 {offer.features.map((feature, idx) => (
//                   <div key={idx} className="flex items-center text-sm text-gray-700">
//                     <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
//                     {feature}
//                   </div>
//                 ))}
//               </div>
              
//               <div className="border-t pt-4">
//                 <p className="text-sm text-gray-500 mb-4">{offer.validUntil}</p>
//                 <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
//                   Book This Offer
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialOffers;