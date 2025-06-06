




// import React, { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const StackingCards: React.FC = () => {
//   useEffect(() => {
//     const cards = gsap.utils.toArray<HTMLDivElement>(".card");
//     const spacer = 20;
//     const minScale = 0.8;
//     const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

//     cards.forEach((card, index) => {
//       const scaleVal = distributor(index, card, cards);

//       gsap.to(card, {
//         scrollTrigger: {
//           trigger: card,
//           start: "top top",
//           scrub: true,
//           invalidateOnRefresh: true,
//           // markers: true, // Uncomment for debugging
//         },
//         ease: "none",
//         scale: scaleVal,
//       });

//       ScrollTrigger.create({
//         trigger: card,
//         start: `top-=${index * spacer} top`,
//         endTrigger: ".cards",
//         end: `bottom top+=${200 + cards.length * spacer}`,
//         pin: true,
//         pinSpacing: false,
//         id: `pin-${index}`,
//         invalidateOnRefresh: true,
//         // markers: true, // Uncomment for debugging
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

// const projects = [
//   {
//     id: 1,
//     title: 'Modern Luxury Home',
//     category: 'Residential',
//     image: '/photos/1.png',
//     description: 'Contemporary 4-bedroom luxury residence with sustainable materials and smart home integration.',
//     location: 'Beverly Hills, CA'
//   },
//   {
//     id: 2,
//     title: 'Office Tower Complex',
//     category: 'Commercial',
//     image: '/photos/2.png',
//     description: 'State-of-the-art office tower with floor-to-ceiling windows and modern amenities for corporate clients.',
//     location: 'Downtown Chicago, IL'
//   },
//   {
//     id: 3,
//     title: 'Manufacturing Facility',
//     category: 'Industrial',
//     image: '/photos/3.png',
//     description: 'Advanced manufacturing plant designed for maximum efficiency and safety.',
//     location: 'Detroit, MI'
//   },
//   {
//     id: 4,
//     title: 'Historic Building Renovation',
//     category: 'Renovation',
//     image: '/photos/8.png',
//     description: 'Careful preservation and modernization of a century-old historic landmark building.',
//     location: 'Boston, MA'
//   },
//   {
//     id: 5,
//     title: 'Luxury Apartment Complex',
//     category: 'Residential',
//     image: '/photos/9.png',
//     description: 'Premium apartment complex featuring high-end finishes and resort-style amenities.',
//     location: 'Miami, FL'
//   },
//   {
//     id: 6,
//     title: 'Retail Shopping Center',
//     category: 'Commercial',
//     image: '/photos/4.png',
//     description: 'Modern shopping destination with sustainable design elements and outdoor spaces.',
//     location: 'Austin, TX'
//   }
// ];

//   return (
//     <div className="font-signika-negative font-light bg-white overflow-x-hidden right-5">
//       <div className="container mx-auto px-800 py-220">
//         <div className="">
//           <div className="cards flex flex-col items-center">
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className={`card w-full h-screen flex flex-col md:flex-row mb-[50px] bg-white  shadow-lg overflow-hidden ${
//                   index === 0 ? "shadow-2xl" : ""
//                 }`}
//               >
//                 {/* Left side - Image */}
//                 <div className="md:w-8/4 w-full h-2/8 md:h-full">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>

//                 {/* Right side - Content */}
//                 <div className="md:w-1/2 w-full h-8/8 md:h-full p-8 flex flex-col justify-center">
//                   <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
//                   <h3 className="text-lg text-gray-600">{project.category}</h3>
//                   <p className="text-lg text-gray-600">{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Spacer at the bottom */}
//         <div className="w-full h-[10vh] border-t border-red-500 mt-20" />
//       </div>
//     </div>
//   );
// };

// export default StackingCards;
