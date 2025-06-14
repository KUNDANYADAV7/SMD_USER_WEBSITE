import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ClientsSection from '@/components/sections/ClientsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ConstructionVideoSection from '@/components/sections/ConstructionVideoSection';
import { Link } from 'react-router-dom';
import CountUpNumber from '@/components/CountNumberRun/CountUpNumber';
import TestimonialSlider from '../TestimonialSlider'
import AboutSection from '@/components/sections/AboutSection';
import ServiceSection from '@/components/sections/ServiceSection';
import BlogsSection from '@/components/sections/BlogsSection';
import HeroSection from '@/components/sections/HeroSection';




const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Workers' },
];

const Home = () => {
  // Auto-scroll carousel functionality
  const [api, setApi] = useState<any>(null);
  const intervalRef = useRef<number | null>(null);

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000); // Auto scroll every 5 seconds
  };

  // Stop auto scroll when user interacts with carousel
  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume auto scroll after user interaction
  const resumeAutoScroll = () => {
    setTimeout(startAutoScroll, 5000);
  };

  useEffect(() => {
    if (api) {
      startAutoScroll();
      
      const root = api.rootNode();
      if (root) {
        root.addEventListener('mouseenter', stopAutoScroll);
        root.addEventListener('mouseleave', resumeAutoScroll);
        root.addEventListener('touchstart', stopAutoScroll, { passive: true });
        root.addEventListener('touchend', resumeAutoScroll);
      }
      
      return () => {
        stopAutoScroll();
        if (root) {
          root.removeEventListener('mouseenter', stopAutoScroll);
          root.removeEventListener('mouseleave', resumeAutoScroll);
          root.removeEventListener('touchstart', stopAutoScroll);
          root.removeEventListener('touchend', resumeAutoScroll);
        }
      };
    }
  }, [api]);



  return (
    <>
      {/* Enhanced Hero Section */}
    <HeroSection />

{/* About Section */}
<AboutSection />


{/* Services Section */}
  <ServiceSection />



      {/* Clients Section */}
      <ClientsSection />

            {/* Project Portfolio Section */}
      <PortfolioSection />



{/* Testimonial Section */}
      <TestimonialSlider/>

{/* Blog Posts Section */}
<BlogsSection />

      {/* Construction Video Section */}
      <ConstructionVideoSection />

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* <span className="text-builder-amber font-medium mb-2 block">About Us</span> */}
              <h2 className="text-3xl md:text-4xl font-bold text-builder-navy mb-6">
                25+ Years of Construction Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 1998, BuildPro has grown to become one of the leading construction companies in the region. Our team of skilled professionals brings expertise and dedication to every project, ensuring high-quality results that exceed expectations.
              </p>
              <p className="text-gray-600 mb-8">
                We believe in building relationships as strong as our structures. Our commitment to quality, timeline adherence, and transparent communication has earned us a reputation for excellence in the construction industry.
              </p>
              <div className="mt-12 text-center">
 <Link
  to="/projects"
  className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] transition-colors duration-300 mx-auto"
>
  {/* Animated Background */}
  <span className="absolute inset-0 bg-[#0b3954] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out z-0 rounded-full"></span>

  {/* Foreground Text */}
  <span className="relative z-10 flex items-center gap-2 text-black group-hover:!text-white transition-colors duration-300">
    Learn More About Our Projects

    {/* Icon Circle */}
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab342] group-hover:bg-[#f2a34b] transition-all duration-300 transform group-hover:translate-x-2 group-active:translate-x-1">
      <svg
        className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-black group-hover:text-[#0f2c59]"
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
</Link>

</div>

            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/photos/1.png" 
                alt="Residential building" 
                className="rounded-lg shadow-lg h-64 object-cover w-full"
              />
              <img 
                src="/photos/15.png" 
                alt="Commercial building" 
                className="rounded-lg shadow-lg h-40 object-cover w-full"
              />
              <img 
                src="/photos/16.png" 
                alt="Construction worker" 
                className="rounded-lg shadow-lg h-40 object-cover w-full"
              />
              <img 
                src="/photos/17.png" 
                alt="Building interior" 
                className="rounded-lg shadow-lg h-64 object-cover w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>


<section
  className="relative py-20 text-white bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77')`,
  }}
>
  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

  {/* Content wrapper with relative z-index */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
            <CountUpNumber value={stat.value} />
          </div>
          <div className="text-lg text-white/80">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>





      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-builder-amber rounded-lg p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold  text-white mb-4">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and estimate. Our team is ready to bring your vision to life.
              </p>
      



<div className="text-center mt-12">
  <Link
    to="/contact"
    className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f2c59] text-white transition-colors duration-300 mx-auto"
  >
    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
      Get In Touch
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ffc107] transition-all duration-300 transform group-hover:bg-[#0f2c59] group-hover:translate-x-2 group-active:translate-x-1">
        <svg
          className="w-4 h-4 transform -rotate-45 transition-transform duration-300 text-black group-hover:text-white group-hover:rotate-0"
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
    <span className="absolute inset-0 bg-[#ffc107] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
  </Link>
</div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;




