
import React from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import CustomButton from '@/components/ui/CustomButton';
import SectionHeading from '@/components/ui/SectionHeading';
import CustomCard from '@/components/ui/CustomCard';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Modern Residence',
      category: 'Residential',
      imageUrl: '/photos/9.png',
    },
    {
      id: 2,
      title: 'Commercial Office Space',
      category: 'Commercial',
      imageUrl: '/photos/3.png',
    },
    {
      id: 3,
      title: 'Luxury Villa',
      category: 'Residential',
      imageUrl: '/photos/1.png',
    },
    {
      id: 4,
      title: 'Retail Storefront',
      category: 'Commercial',
      imageUrl: '/photos/10.png',
    },
    {
      id: 5,
      title: 'Apartment Complex',
      category: 'Residential',
      imageUrl: '/photos/11.png',
    },
    {
      id: 6,
      title: 'Office Renovation',
      category: 'Commercial',
      imageUrl: '/photos/6.png',
    },
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" />
          <div className="absolute inset-0 
          bg-[url('/photos/22.png')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-white/90 text-lg mb-6">
              Explore our diverse portfolio of construction projects, showcasing our commitment to quality and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <SectionHeading 
              title="Explore Our Work"
              subtitle="A showcase of our completed construction projects"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <CustomCard key={project.id} className="overflow-hidden">
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-builder-navy mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-builder-navy mb-4">
                Interested in Working With Us?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for new and exciting projects to work on. Contact us today to discuss your construction needs.
              </p>
              <div className="mt-12 text-center">
   <Link
      to="/contact"
      className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#eab342] text-black transition-colors duration-300 mx-auto"
    >
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
        Get In Touch
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

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
