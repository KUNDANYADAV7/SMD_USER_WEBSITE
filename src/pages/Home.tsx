import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home as HomeIcon, Shield, Wrench, Clock } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import CustomCard from '@/components/ui/CustomCard';
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
import { Building, MapPin, Phone, Mail, Truck, HardHat, Ruler, Compass, Hammer } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import CountUpNumber from '@/components/CountUpNumber';
// import StickyScrollCards from '@/components/StackingCards';
import PricingCard from '@/components/PricingCard';
import { blogs } from '@/data/blogData';
import TestimonialSlider from './TestimonialSlider'
import AboutSection from '@/components/AboutSection';




const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Workers' },
];

const Home = () => {


const services = [
    {
      icon: <Building size={32} />,
      title: 'Building Construction',
      description: 'From residential homes to commercial buildings, we handle construction projects of all sizes.',
      link: '/services'
    },
    {
      icon: <HomeIcon size={32} />,
      title: 'House Renovation',
      description: 'Transform your existing space with our expert renovation and remodeling services.',
      link: '/services'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Consulting',
      description: 'Get professional advice on your construction projects from our experienced team.',
      link: '/services'
    },
    {
      icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>,
      title: 'Architecture Design',
      description: 'Our architectural services combine creativity with functionality to design spaces.',
      link: '/services'
    },
    {
      icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>,
      title: 'Interior Design',
      description: 'Create stunning interiors that reflect your style and meet your functional needs.',
      link: '/services'
    },
    {
      icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>,
      title: 'Foundation Repair',
      description: 'We provide expert foundation repair services to ensure structural integrity.',
      link: '/services'
    },
    {
      icon: <Truck size={32} />,
      title: 'Material Supply',
      description: 'High-quality construction materials delivered directly to your project site.',
      link: '/services'
    },
    {
      icon: <HardHat size={32} />,
      title: 'Plumbing Services',
      description: 'Professional plumbing installation, repair, and maintenance for all your needs.',
      link: '/services'
    },
    {
      icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      title: 'Electrical Work',
      description: 'Complete electrical solutions for residential and commercial properties.',
      link: '/services'
    },
    {
      icon: <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      title: 'Safety Inspections',
      description: 'Comprehensive safety inspections to ensure your property meets all regulations.',
      link: '/services'
    }
  ];

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

    const pricingPlans = [
    {
      title: "Basic",
      price: "₹1,999",
      description: "Perfect for small residential projects",
      features: [
        "Free consultation",
        "Architecture design",
        "Material sourcing",
        "Construction services",
        "90-day warranty",
      ],
      isPopular: false,
      buttonText: "Contact Us"
    },
    {
      title: "Standard",
      price: "₹4,999",
      description: "Ideal for medium-sized projects",
      features: [
        "Everything in Basic",
        "Extended consultation",
        "Premium materials",
        "Project management",
        "Interior design",
        "1-year warranty",
      ],
      isPopular: true,
      buttonText: "Contact Us"
    },
    {
      title: "Premium",
      price: "Custom",
      description: "For large commercial projects",
      features: [
        "Everything in Standard",
        "Unlimited consultations",
        "Top-tier materials",
        "Dedicated project manager",
        "Interior & exterior design",
        "5-year warranty",
        "Maintenance plan"
      ],
      isPopular: false,
      buttonText: "Contact Us"
    }
  ];

  return (
    <>
      {/* Enhanced Hero Section */}
     <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
  <div className="absolute inset-0 z-0">
   
    <motion.div
  className="absolute inset-0 overflow-hidden"

>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
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

<AboutSection />


{/* Services Section */}
      {/* <section className="py-7 mb-12">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionHeading
          title="Our Services"
          subtitle=" We offer a wide range of construction services tailored to meet the unique needs of our clients.
              Our team of experts is dedicated to delivering exceptional results on every project."
          center
        />
          </div>    
          <div className="relative px-4 sm:px-6 lg:px-8">
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {services.map((service, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="h-full">
                      <FeatureCard 
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        hoverEffect={true}
                        link={service.link}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-6" />
              <CarouselNext className="-right-4 md:-right-6" />
            </Carousel>
          </div>
          
          <div className="text-center mt-12">
<div className="mt-12 text-center">
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
        </div>
      </section> */}


<section className="py-7 mb-12 bg-black text-white">
  <div className="container-custom">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <SectionHeading
        title="Our Services"
        subtitle=" We offer a wide range of construction services tailored to meet the unique needs of our clients.
        Our team of experts is dedicated to delivering exceptional results on every project."
        center
      />
    </div>    
    <div className="relative px-4 sm:px-6 lg:px-8">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.map((service, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="h-full">
                <FeatureCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  hoverEffect={true}
                  link={service.link}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-6" />
        <CarouselNext className="-right-4 md:-right-6" />
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



            {/* Portfolio Section */}
      <PortfolioSection />


      {/* Clients Section */}
      <ClientsSection />

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
      {blogs.slice(0, 3).map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div className="relative overflow-hidden h-56">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-builder-amber text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>{blog.date}</span>
              <span className="mx-2">•</span>
              <span>{blog.readTime}</span>
            </div>
            <h3 className="text-xl font-bold text-builder-navy mb-3 line-clamp-2">{blog.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
            
            <Link 
              to={`/blog/${blog.id}`} 
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
    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
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
    className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
  >
    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
      Learn More About Our Projects
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and estimate. Our team is ready to bring your vision to life.
              </p>
              <div className="mt-12 text-center">
  <Link
    to="/contact"
    className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black transition-colors duration-300 mx-auto"
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
    </>
  );
};

export default Home;




