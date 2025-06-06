
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import SectionHeading from '@/components/ui/SectionHeading';
// import CustomButton from '@/components/ui/CustomButton';
// import { Link } from 'react-router-dom';

// const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation'];

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

// const PortfolioSection = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [hoveredId, setHoveredId] = useState<number | null>(null);

//   const filteredProjects = activeCategory === 'All' 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   return (
//     <section className="py-15 ">
//       <div className="container mx-auto px-4 text-black bg-white">
//         <SectionHeading
//           title="Our Projects"
//           subtitle="Explore our diverse range of construction projects across various sectors"
//           center
//         />

//         <motion.div 
//           className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {categories.map((category) => (
//             <motion.button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
//                 activeCategory === category
//                   ? 'bg-builder-amber text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <AnimatePresence>
//             {filteredProjects.map((project) => (
//               <motion.div
//                 key={project.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative rounded-lg overflow-hidden shadow-md h-64 md:h-80"
//                 onMouseEnter={() => setHoveredId(project.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//               >
//                 <motion.img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-700"
//                   animate={{ 
//                     scale: hoveredId === project.id ? 1.1 : 1
//                   }}
//                 />
                
//                 <motion.div 
//                   className="absolute inset-0 bg-gradient-to-t from-builder-navy/90 to-transparent p-6 flex flex-col justify-end"
//                   initial={{ opacity: 0.7 }}
//                   animate={{ 
//                     opacity: hoveredId === project.id ? 1 : 0.7
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.div
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ 
//                       y: hoveredId === project.id ? 0 : 20,
//                       opacity: hoveredId === project.id ? 1 : 0 
//                     }}
//                     transition={{ duration: 0.4 }}
//                     className="space-y-2"
//                   >
//                     <span className="text-builder-amber font-medium text-sm">{project.category}</span>
//                     <h3 className="text-xl font-bold text-white">{project.title}</h3>
//                     <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
//                     <p className="text-white/70 text-xs flex items-center">
//                       <span>{project.location}</span>
//                     </p>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         <div className="mt-12 text-center">
//   <Link
//     to="/projects"
//     className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
//   >
//     <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
//       View All Projects
//       <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab342] group-hover:bg-[#eab342] transition-all duration-300 transform group-hover:translate-x-2 group-active:translate-x-1">
//         <svg
//           className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-black group-hover:text-white"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//         </svg>
//       </span>
//     </span>
//     <span className="absolute inset-0 bg-[#0b3954] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
//   </Link>
// </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;







// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import SectionHeading from '@/components/ui/SectionHeading';
// import CustomButton from '@/components/ui/CustomButton';
// import { Link } from 'react-router-dom';
// import StackingCards from '@/components/StackingCards'; // <--- Custom or third-party component

// const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation'];

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

// const PortfolioSection = () => {
//   const [activeCategory, setActiveCategory] = useState('All');

//   const filteredProjects = activeCategory === 'All'
//     ? projects
//     : projects.filter(project => project.category === activeCategory);

//   return (
//     <section className="py-15 bg-white text-black">
//       <div className="container mx-auto px-4">
//         <SectionHeading
//           title="Our Projects"
//           subtitle="Explore our diverse range of construction projects across various sectors"
//           center
//         />

//         {/* Category Buttons */}
//         <motion.div 
//           className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {categories.map((category) => (
//             <motion.button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors ${
//                 activeCategory === category
//                   ? 'bg-builder-amber text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* StackingCards Component */}
//         <StackingCards>
//           <AnimatePresence>
//             {filteredProjects.map((project) => (
//               <motion.div
//                 key={project.id}
//                 layout
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 20 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative rounded-xl overflow-hidden shadow-lg bg-white"
//               >
//                 <div className="relative h-72 md:h-96">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-builder-navy/90 to-transparent p-4 flex flex-col justify-end">
//                     <span className="text-builder-amber font-medium text-sm">{project.category}</span>
//                     <h3 className="text-xl font-bold text-white">{project.title}</h3>
//                     <p className="text-white/80 text-sm">{project.description}</p>
//                     <p className="text-white/70 text-xs mt-2">{project.location}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </StackingCards>

//         {/* View All Projects Button */}
//         <div className="mt-12 text-center">
//           <Link
//             to="/projects"
//             className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
//           >
//             <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
//               View All Projects
//               <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab342] group-hover:bg-[#eab342] transition-all duration-300 transform group-hover:translate-x-2 group-active:translate-x-1">
//                 <svg
//                   className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-black group-hover:text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </span>
//             </span>
//             <span className="absolute inset-0 bg-[#0b3954] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;



import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import CustomButton from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';
// import StackingCards from '@/components/ui/StackingCards'; // adjust path as needed

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Renovation'];

const projects = [
  {
    id: 1,
    title: 'Modern Luxury Home',
    category: 'Residential',
    image: '/photos/1.png',
    description: 'Contemporary 4-bedroom luxury residence with sustainable materials and smart home integration.',
    location: 'Beverly Hills, CA'
  },
  {
    id: 2,
    title: 'Office Tower Complex',
    category: 'Commercial',
    image: '/photos/2.png',
    description: 'State-of-the-art office tower with floor-to-ceiling windows and modern amenities for corporate clients.',
    location: 'Downtown Chicago, IL'
  },
  {
    id: 3,
    title: 'Manufacturing Facility',
    category: 'Industrial',
    image: '/photos/3.png',
    description: 'Advanced manufacturing plant designed for maximum efficiency and safety.',
    location: 'Detroit, MI'
  },
  {
    id: 4,
    title: 'Historic Building Renovation',
    category: 'Renovation',
    image: '/photos/8.png',
    description: 'Careful preservation and modernization of a century-old historic landmark building.',
    location: 'Boston, MA'
  },
  {
    id: 5,
    title: 'Luxury Apartment Complex',
    category: 'Residential',
    image: '/photos/9.png',
    description: 'Premium apartment complex featuring high-end finishes and resort-style amenities.',
    location: 'Miami, FL'
  },
  {
    id: 6,
    title: 'Retail Shopping Center',
    category: 'Commercial',
    image: '/photos/4.png',
    description: 'Modern shopping destination with sustainable design elements and outdoor spaces.',
    location: 'Austin, TX'
  }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-15 bg-white text-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Projects"
          subtitle="Explore our diverse range of construction projects across various sectors"
          center
        />


        {/* StackingCards Component */}
        {/* <StackingCards /> */}

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
              View All Projects
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab342] group-hover:bg-[#eab342] transition-all duration-300 transform group-hover:translate-x-2 group-active:translate-x-1">
                <svg
                  className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-black group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </span>
            <span className="absolute inset-0 bg-[#0b3954] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
