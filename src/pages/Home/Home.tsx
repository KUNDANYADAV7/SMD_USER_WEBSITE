import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home as HomeIcon, Shield, Wrench, Clock } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import SectionHeading from '@/components/ui/SectionHeading';
import ClientsSection from '@/components/sections/ClientsSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ConstructionVideoSection from '@/components/sections/ConstructionVideoSection';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import FeatureCard from '@/components/FeatureCard';
import CountUpNumber from '@/components/CountNumberRun/CountUpNumber';
import TestimonialSlider from '../TestimonialSlider'
import AboutSection from '@/components/sections/AboutSection';
import { useService } from '@/context/ServiceContext';
import { getIconByName } from '@/components/ui/iconMapper';
import { useBlog } from '@/context/BlogProvider';
import config from '@/config';
import { format } from 'date-fns';




const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Workers' },
];

const Home = () => {

const { services } = useService();
const MyIcon = getIconByName("Hammer");
const { allblogs } = useBlog();
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
      
      // Add event listeners to stop auto scroll on user interaction
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
     <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-builder-navy">
  <div className="absolute inset-0 z-0">
   
    <motion.div
  className="absolute inset-0 overflow-hidden"

>
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="w-full h-full object-cover"
    poster="/hero.webp" 
  >
    <source src="hero-video.webm" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>

    <div className="absolute inset-0 z-10" />
  </div>

  <div className="container mx-auto px-4 relative z-20">
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.span 
        className="text-builder-amber text-xl mb-4 block"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 4, x: 0 }}
        transition={{ duration: 2.0, delay: 1.0 }}
      >
        Professional Construction Services
      </motion.span>

      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.0 }}
      >
        <span className="inline-block">Building </span>
        <motion.span
          className="inline-block text-builder-amber"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 4.0, delay: 2.0, type: "spring" }}
        >
          Dreams
        </motion.span>
        <span className="inline-block"> Into Reality</span>
      </motion.h1>

      <motion.p 
        className="text-white/90 text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        We're dedicated to providing superior construction services with quality, integrity, and excellence. From concept to completion, we build with precision.
      </motion.p>

      <motion.div 
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 1.0 }}
      >
        <CustomButton to="/contact" size="lg">
          Get a Quote
        </CustomButton>
        <CustomButton to="/projects" variant="outline" size="lg">
          View Our Projects
        </CustomButton>
      </motion.div>
    </motion.div>
  </div>
</section>

{/* About Section */}
<AboutSection />


{/* Services Section */}
  <section id="services" className="py-7 mb-12 bg-black text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a wide range of construction services tailored to meet the unique needs of our clients. Our team of experts is dedicated to delivering exceptional results on every project."
            // align="center"
          />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <Carousel
            className="w-full"
            opts={{ align: 'start', loop: true }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {(services || []).slice(0, 6).map((service, index) => (
                <CarouselItem
                  key={service._id}
                  className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="h-full">
                    <FeatureCard
                      icon={getIconByName(service.iconName)}
                      title={service.title}
                      description={service.description}
                      hoverEffect={true}
                      link={`/services?slug=${service.slug}`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-4 md:-left-6 text-black" />
            <CarouselNext className="-right-4 md:-right-6 text-black" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
              View All Services
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



      {/* Clients Section */}
      <ClientsSection />

            {/* Project Portfolio Section */}
      <PortfolioSection />



{/* Testimonial Section */}
      <TestimonialSlider/>

{/* Blog Posts Section */}
<section className="py-15 mt-10 bg-gray-50  ">
  <div className="container mx-auto px-4">
    
    {/* Heading Centered */}
 <SectionHeading
          title="Update News & Blogs"
          center
        />
    {/* Only first 3 blogs */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
      {allblogs.slice(0, 3).map((blog, index) => (
        <motion.div
          key={blog._id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="relative overflow-hidden h-56">
            <img
              src={`${config.apiUrl}/${blog.photo}`}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-builder-amber text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
                 <span>{format(new Date(blog.createdAt), 'dd MMM, yyyy')}</span>
              <span className="mx-2">•</span>
              <span>{blog.readTime}</span>
            </div>
            <h3 className="text-xl font-bold text-builder-navy mb-3 line-clamp-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
            
            <Link 
              to={`/blog/${blog.slug}`} 
              className="inline-flex items-center text-builder-amber font-medium hover:text-builder-amber/80 transition-colors"
            >
              Read More <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>

    {/* See All Blogs Button */}
    <div className="text-center mt-10">
     <div className="mt-12 text-center">
  <Link
    to="/blog"
    className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
  >
<span className="relative z-10 flex items-center gap-2 text-black group-hover:!text-white transition-colors duration-300">
      See All Blogs
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

  </div>
</section>

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




