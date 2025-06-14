import { useState, useEffect } from 'react';
import ServiceItem from '@/components/ServicesList';
import { Link } from 'react-router-dom';
import {
  Building,
  Home,
  Wrench,
  Truck,
  HardHat,
  PuzzleIcon as Puzzle,
  PaintBucket,
  Building2,
  Hammer,
  Drill,
  Ruler,
  Bolt,
  Fence,
  Shovel,
  Briefcase,
  Scissors
} from 'lucide-react';
import { useService } from '@/context/ServiceContext';
import config from '@/config';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceProcessSection } from '@/components/ServiceProcessSection';
import SkeletonServiceSidebar from '@/components/layout/ServiceSkelton/SkeletonServiceSidebar';
import SkeletonServiceDetail from '@/components/layout/ServiceSkelton/SkeletonServiceDetail';


// Updated icon mapper to sync with admin panel
const getIconByName = (name) => {
  const icons = {
    Building: <Building size={32} />,
    Home: <Home size={32} />,
    Wrench: <Wrench size={32} />,
    Truck: <Truck size={32} />,
    HardHat: <HardHat size={32} />,
    Puzzle: <Puzzle size={32} />,
    PaintBucket: <PaintBucket size={32} />,
    Building2: <Building2 size={32} />,
    Hammer: <Hammer size={32} />,
    Drill: <Drill size={32} />,
    Ruler: <Ruler size={32} />,
    Bolt: <Bolt size={32} />,
    Fence: <Fence size={32} />,
    Shovel: <Shovel size={32} />,
    Briefcase: <Briefcase size={32} />,
    Scissors: <Scissors size={32} />
  };
  return icons[name] || <Wrench size={32} />;
};

const Services = () => {
  const { services } = useService();
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);

    const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const slugFromQuery = queryParams.get("slug");

  useEffect(() => {
  if (services && services.length > 0) {
    const matched = services.find(service => service.slug === slugFromQuery);
    setSelectedService(matched || services[0]);
     setLoading(false);
  }
}, [services, slugFromQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Banner */}


         <section className="relative py-20 md:py-28 bg-builder-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-builder-navy/0 z-10" />
          <div className="absolute inset-0 bg-[url('/photos/23.png')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-white/90 text-lg mb-6">
              Quality construction services for all your building needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
     <section className="py-20">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      
      {/* Sidebar */}
      <div className="lg:col-span-2">
        {loading ? (
          <SkeletonServiceSidebar />
        ) : (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 h-full">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">
              Our Solutions
            </h2>
            <div className="space-y-2 overflow-y-auto max-h-[370px] pr-2">
              {services.map((service) => (
                <ServiceItem
                  key={service._id}
                  title={service.title}
                  isActive={selectedService?.slug === service.slug}
                  icon={getIconByName(service.iconName)}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3">
        {loading || !selectedService ? (
          <SkeletonServiceDetail />
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-6 flex-wrap sm:flex-nowrap">
              <div className="bg-[#fff9e6] p-4 rounded-full mr-4 text-[#ffc107]">
                {getIconByName(selectedService.iconName)}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold break-words max-w-full whitespace-normal">
                {selectedService.title}
              </h2>
            </div>

            <div className="mb-8">
              <img
                src={`${config.apiUrl}/${selectedService.serviceImage}`}
                alt={selectedService.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <p className="text-gray-600 mb-6 text-lg">{selectedService.description}</p>
            <p className="text-gray-700 mb-8 leading-relaxed">{selectedService.content}</p>
          </div>
        )}
      </div>
    </div>
  </div>
</section>


            {/* Process Section */}
   <ServiceProcessSection/>

      {/* CTA Section */}
      <section className="py-16 bg-[#f6a241] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your{' '}
            <span className="text-[#0f2c59]">Construction Project</span> ?
          </h2>
          <p className="text-white/100 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project requirements and get a free quote. Our team is
            ready to bring your vision to life.
          </p>
          <div className="text-center mt-12">
  <Link
    to="/contact"
    className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#0f2c59] text-white transition-colors duration-300 mx-auto"
  >
    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black ">
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
        </div>
      </section>




    </div>
  );
};

export default Services;


const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We meet to discuss your project requirements, timeline, and budget constraints."
    },
    {
      number: "02",
      title: "Planning & Design",
      description: "Our team develops detailed plans and designs tailored to your specific needs."
    },
    {
      number: "03",
      title: "Project Execution",
      description: "We implement the plans with precision, quality materials, and expert craftsmanship."
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Rigorous inspections ensure all work meets our high standards of quality."
    },
    {
      number: "05",
      title: "Project Completion",
      description: "Final walkthrough and handover of your completed project on time and within budget."
    }
  ];
