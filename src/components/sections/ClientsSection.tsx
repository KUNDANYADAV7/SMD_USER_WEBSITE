
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const clients = [
  {
    name: 'TechBuild Inc.',
    logo: '/photos/30.png',
    description: 'Leading tech company specializing in smart building solutions.',
    projects: 'Office Headquarters, Research Facility',
  },
  {
    name: 'EcoHomes',
    logo: '/photos/29.png',
    description: 'Sustainable housing developer focused on eco-friendly construction.',
    projects: 'Green Residential Complex, Solar Integration',
  },
  {
    name: 'UrbanScape',
    logo: '/photos/28.png',
    description: 'Urban planning and architectural design firm for modern cities.',
    projects: 'City Center Renovation, Urban Park Development',
  },
  {
    name: 'RetailPrime',
    logo: '/photos/27.png',
    description: 'Retail space development company with nationwide presence.',
    projects: 'Shopping Mall, Flagship Store Designs',
  },
  {
    name: 'IndustrialTech',
    logo: '/photos/26.png',
    description: 'Manufacturing facilities and industrial complex developer.',
    projects: 'Factory Expansion, Warehouse Complex',
  },
  {
    name: 'ArchitectPlus',
    logo: '/photos/25.png',
    description: 'Award-winning architectural design studio for innovative structures.',
    projects: 'Museum Design, Modern Library',
  },
  {
    name: 'CityDevelopers',
    logo: '/photos/24.png',
    description: 'Urban development and city planning experts for sustainable growth.',
    projects: 'Downtown Revitalization, Smart City Integration',
  },
];

const ClientsSection = () => {
  const [api, setApi] = useState<any>(null);
  
  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // 5 seconds interval
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-10 mt-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Trusted Clients"
          subtitle="We're proud to work with industry-leading companies across various sectors"
          center
           className="text-white"
        />

        <div className="mt-12 relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="relative w-full h-[300px] rounded-xl overflow-hidden perspective-1000 group transform-gpu"
                    whileHover={{ 
                      rotateY: 5,
                      rotateX: 5,
                      scale: 1.02,
                      transition: { duration: 0.4 }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Full-size image background */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay with hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-builder-navy/80 via-builder-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-xl text-sappu">{client.name}</h4>
                        <p className="text-sappu text-sm mb-2">{client.description}</p>
                        <div>
                          <span className="text-xs font-medium text-sappu">Projects:</span>
                          <p className="text-sm text-white/90 text-sappu">{client.projects}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* 3D effect elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
                      <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/10 to-transparent opacity-40"></div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex mt-8 justify-center">
              <CarouselPrevious className="relative left-0 right-auto mr-2" />
              <CarouselNext className="relative right-0 left-auto" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
