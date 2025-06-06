// import { useState } from 'react';
// import FeatureCard from '@/components/FeatureCard';
// import ServiceItem from '@/components/ServicesList';
// import { Link } from 'react-router-dom';
// import { Building, Home, Wrench } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       id: 'Commercial Construction',
//       icon: <Building size={32} />,
//       title: 'Commercial Construction',
//       image: '/photos/1.png',
//       description: 'Being a leader in the industry, we are engaged in providing our clients a qualitative Commercial Construction Service.',
//       content: 'The provided service is performed by our highly experienced professionals using superior grade tools and latest technology. This service is carried out as per the variegated requirements of our valuable clients.',
//       content2: 'The offered service is highly acknowledged by our clients owing to its flawlessness and hassle-free execution. Moreover, clients can avail this service from us at pocket-friendly price..'
//     },
//     {
//       id: 'Residence Construction',
//       icon: <Home size={32} />,
//       title: 'Residence Construction',
//       image: '/photos/6.png',
//       description: 'For residential homes, flats, villas, apartments & single-family homes, we provide quality construction..',
//       content: 'Our Professional and Well Experienced team Works on all the stages of the construction, start from the plan, soil testing, procuring materials, till the final completion and stepping in the New Home. Procuring advance technological production unit towards all over the construction- civil contractors along with the Civil Engineers.  ',
//       content2: 'Building construction / House Construction at economical prices with the best planning strategy at all the working level. '
//     },
//     {
//       id: 'Renovation',
//       icon: <Wrench size={32} />,
//       title: 'Renovation',
//       image: '/photos/14.png',
//       description: 'Get professional advice on your construction projects from our experienced team. We provide expert guidance every step of the way.',
//       content: 'Our consulting services provide expert guidance for your construction projects. From feasibility studies and budget planning to material selection and contractor management, our seasoned professionals offer valuable insights to ensure your project\'s success.',
//       content2: 'We help you navigate complex regulations, identify potential issues before they arise, and make informed decisions throughout the construction process.'
//     },
//     {
//       id: 'Architect Planning',
//       icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
//       </svg>,
//       title: 'Architect Planning',
//       image: '/photos/15.png',
//       description: 'The idea behind our design is to construct an efficient, versatile, secure, enjoyable, and visually appealing future.',
//       content: 'We do Architectural Planning such way that generate genuine value for owners. Our understanding as to how people and organisations utilise and perceive space is reflected in SMD Engineer’s architecture. In order to design buildings that function exceptionally effectively upon each level, both inside and out, we collaborate with clients, communities, and end users.',
//       content2: 'We provide customers with a consistently high degree of service throughout all of our international marketplaces.'
//     },
//     {
//       id: 'interior-design',
//       icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
//       </svg>,
//       title: 'Interior Design',
//       image: '/photos/17.png',
//       description: 'Interior living and working areas are designed by SMD Engineers considering all the factors Higher productivity, better creativity and innovation, and improved revenue are some examples of how interior performance may be assessed in terms of people and organisations.',
//       content: 'To design well, consider health, comfort, adaptability, and simplicity of use in addition to visual impact. To achieve innovation, quality, and sustainable performance, our designers collaborate and plan strategically.',
//       content2: 'Our projects have a conventional scope and include everything from offices to retail spaces, civic and academic structures, conference centres, and entertainment venues.'
//     },
//     {
//       id: 'Structure Design',
//       icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//       </svg>,
//       title: 'Structure Design',
//       image: '/photos/7.png',
//       description: 'Our designers and engineers put in a lot of effort to produce a structural design that allows the building to function in the greatest way possible for its intended use and, more importantly, its users.',
//       content: 'The wide range of building types for which SMD Engineers has supplied structural design throughout the years reflects our attention to detail, relentless drive for innovation, ability to adjust to changing technology, and frugal work ethic. These behaviours and principles distinguish us from other structural consultants. These guiding principles, together with the business’ history of creative design approaches and unique design solutions, have driven SMD Engineers to the top of the structural engineering field.',
//       content2: 'Our engineers and creative designers that collaborate closely with the client, consultant, and construction teams to develop a cost-effective, buildable, and cutting-edge structure.'
//     },
//   ];

//   const [selectedService, setSelectedService] = useState(services[0]);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Page Banner */}
//       <section className="pt-32 pb-16 relative">
//         <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/photos/23.png)' }}></div>
//         <div className="container-custom relative z-10">
//           <div className="text-center text-white">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
//             <p className="text-lg">Quality construction services for all your building needs</p>
//           </div>
//         </div>
//       </section>

//       {/* Services Content */}
//       <section className="py-24">
//         <div className="container-custom">
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//             <div className="lg:col-span-2">
//               <div className="bg-black p-6 rounded-lg shadow-sm border border-gray-100">
//                 <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Our Solutions</h2>
//                 <div className="space-y-2">
//                   {services.map((service) => (
//                     <ServiceItem
//                       key={service.id}
//                       title={service.title}
//                       isActive={selectedService.id === service.id}
//                       icon={service.icon}
//                       onClick={() => setSelectedService(service)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-3">
//               <div className="bg-black p-8 rounded-lg shadow-md border border-gray-100">
//                 <div className="flex items-center mb-6">
//                   <div className="bg-[#fff9e6] p-4 rounded-full mr-4 text-[#ffc107]">
//                     {selectedService.icon}
//                   </div>
//                   <h2 className="text-3xl font-bold">{selectedService.title}</h2>
//                 </div>
//                 <img src={selectedService.image} alt={selectedService.title} className="w-full h-64 object-cover rounded-lg mb-6" />
//                 <p className="text-gray-600 mb-6 text-lg">{selectedService.description}</p>
//                 <p className="text-gray-700 mb-4 leading-relaxed">{selectedService.content}</p>
//                 {selectedService.content2 && (
//                   <p className="text-gray-700 leading-relaxed">{selectedService.content2}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ... (rest of your existing code: Process Section, CTA Section, etc.) */}
//     </div>
//   );
// };

// export default Services;

// const processSteps = [
//   { number: "01", title: "Initial Consultation", description: "We meet to discuss your project requirements, timeline, and budget constraints." },
//   { number: "02", title: "Planning & Design", description: "Our team develops detailed plans and designs tailored to your specific needs." },
//   { number: "03", title: "Project Execution", description: "We implement the plans with precision, quality materials, and expert craftsmanship." },
//   { number: "04", title: "Quality Assurance", description: "Rigorous inspections ensure all work meets our high standards of quality." },
//   { number: "05", title: "Project Completion", description: "Final walkthrough and handover of your completed project on time and within budget." }
// ];







import { useState } from 'react';
import FeatureCard from '@/components/FeatureCard';
import ServiceItem from '@/components/ServicesList';
import { Link } from 'react-router-dom';
import { Building, Home, Wrench, Truck, HardHat } from 'lucide-react';

const Services = () => {
  // Services data - Adding more services to match the homepage
  const services = [
    {
      id: 'building-construction',
      icon: <Building size={32} />,
      title: 'Building Construction',
       image: '/photos/1.png',
      description: 'From residential homes to commercial buildings, we handle construction projects of all sizes with precision and quality craftsmanship.',
      content: 'Our building construction services cover everything from initial planning and design to the final execution. We work closely with architects, engineers, and other specialists to ensure your project meets the highest standards of quality and safety. Whether you\'re looking to build a new home, office building, or commercial space, our team of experienced professionals is ready to bring your vision to life.'
    },
    {
      id: 'house-renovation',
      icon: <Home size={32} />,
      title: 'House Renovation',
      image: '/photos/6.png',
      description: 'Transform your existing space with our expert renovation and remodeling services tailored to meet your specific needs and budget.',
      content: 'Our house renovation services are designed to breathe new life into your existing space. We can handle everything from minor updates to complete home transformations. Our team works efficiently to minimize disruption to your daily life while delivering exceptional results. Whether you want to update a kitchen, remodel a bathroom, or renovate your entire home, we have the expertise to make it happen.'
    },
    {
      id: 'consulting',
      icon: <Wrench size={32} />,
      title: 'Consulting',
      image: '/photos/14.png',
      description: 'Get professional advice on your construction projects from our experienced team. We provide expert guidance every step of the way.',
      content: 'Our consulting services provide expert guidance for your construction projects. From feasibility studies and budget planning to material selection and contractor management, our seasoned professionals offer valuable insights to ensure your project\'s success. We help you navigate complex regulations, identify potential issues before they arise, and make informed decisions throughout the construction process.'
    },
    {
      id: 'architecture-design',
      icon: <svg className="w-8 h-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>,
      title: 'Architecture Design',
      image: '/photos/15.png',
      description: 'Our architectural services combine creativity with functionality to design spaces that are both beautiful and practical for your needs.',
      content: 'Our architectural design services blend creativity with practicality to create spaces that are both visually stunning and highly functional. Our architects work closely with you to understand your vision, preferences, and requirements, translating them into detailed plans and specifications. We consider factors like natural light, space efficiency, energy performance, and aesthetic appeal to design buildings that truly enhance how people live and work.'
    },
    {
      id: 'interior-design',
      icon: <svg className="w-8 h-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>,
      title: 'Interior Design',
      image: '/photos/17.png',
      description: 'Create stunning interiors that reflect your style and meet your functional needs with our comprehensive interior design services.',
      content: 'Our interior design services transform spaces into beautiful, functional environments that reflect your personal style and meet your practical needs. From space planning and color selection to furniture arrangement and decorative elements, our designers pay attention to every detail. We consider factors like lighting, acoustics, and flow to create harmonious interiors that enhance the quality of your living or working environment.'
    },
    {
      id: 'foundation-repair',
      icon: <svg className="w-8 h-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>,
      title: 'Foundation Repair',
      image: '/photos/7.png',
      description: 'We provide expert foundation repair services to ensure the structural integrity and stability of your building.',
      content: 'Our foundation repair services address issues that compromise the structural integrity of your building. Our team of specialists diagnoses the root cause of foundation problems—be it soil settlement, water damage, or poor initial construction—and implements effective solutions. Using state-of-the-art technology and proven methods, we stabilize and strengthen foundations to prevent further damage and ensure your building remains safe and secure for years to come.'
    },
    {
      id: 'material-supply',
      icon: <Truck size={32} />,
      title: 'Material Supply',
      image: '/photos/28.png',
      description: 'High-quality construction materials delivered directly to your project site when you need them.',
      content: 'Our material supply service provides top-quality construction materials directly to your project site, ensuring you always have what you need when you need it. We source materials from trusted manufacturers and suppliers to guarantee durability and performance. Our inventory includes everything from basic building materials to specialized products for unique applications. With our efficient logistics system, we help you avoid project delays and maintain smooth operations throughout the construction process.'
    },
    {
      id: 'plumbing-services',
      icon: <HardHat size={32} />,
      title: 'Plumbing Services',
      image: '/photos/19.png',
      description: 'Professional plumbing installation, repair, and maintenance for all your residential and commercial needs.',
      content: 'Our professional plumbing services cover installation, repair, and maintenance for both residential and commercial properties. Our licensed plumbers are experienced in handling everything from routine fixes to complex system installations. We use quality materials and follow industry best practices to ensure reliable, long-lasting solutions. Whether you\'re dealing with a leaky faucet, need a new water heater installed, or require a complete plumbing system for a new construction, our team provides prompt, efficient service with minimal disruption.'
    },
    {
      id: 'electrical-work',
      icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      title: 'Electrical Work',
      image: '/photos/20.png',
      description: 'Complete electrical solutions for residential and commercial properties with safety as our top priority.',
      content: 'Our electrical services provide comprehensive solutions for all your power needs, from minor repairs to full system installations. Our team of certified electricians ensures all work meets or exceeds local codes and safety standards. We handle residential and commercial projects of all sizes, including wiring, lighting installation, panel upgrades, generator installation, and smart home electrical systems. We prioritize safety, efficiency, and reliability in every project, giving you peace of mind that your electrical systems are in good hands.'
    },
    {
      id: 'safety-inspections',
      icon: <svg className="w-8 h-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      title: 'Safety Inspections',
      image: '/photos/26.png',
      description: 'Comprehensive safety inspections to ensure your property meets all regulations and safety standards.',
      content: 'Our safety inspection services provide thorough evaluations of your property to identify potential hazards and ensure compliance with all relevant regulations. Our certified inspectors examine structural elements, electrical systems, plumbing, fire safety measures, and more to create a comprehensive assessment of your property\'s safety status. We provide detailed reports with clear recommendations for addressing any issues found. Regular safety inspections help prevent accidents, avoid costly repairs, and may even reduce insurance premiums. Protect your investment and the people who use your property with our professional safety inspection services.'
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Page Banner */}
      <section className="pt-32 pb-16  relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/photos/23.png)'
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg">Quality construction services for all your building needs</p>
          </div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Sidebar - Services List - Now taking 2/5 of the grid */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Our Solutions</h2>
                <div className="space-y-2">
                  {services.map((service) => (
                    <ServiceItem
                      key={service.id}
                      title={service.title}
                      isActive={selectedService.id === service.id}
                      icon={service.icon}
                      onClick={() => setSelectedService(service)}

                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Content - Selected Service - Now taking 3/5 of the grid */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-[#fff9e6] p-4 rounded-full mr-4">
                    <div className="text-[#ffc107]">
                      {selectedService.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                </div>
                
                <div className="mb-8">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{selectedService.description}</p>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {selectedService.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-[#ffc107] text-construction-black inline-block px-4 py-1 mb-6 rounded-md font-semibold">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Work
            </h2>
            <p className="text-gray-600">
              Our streamlined process ensures efficiency, transparency, and quality at every stage of your construction project.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#ffc107] -translate-x-1/2"></div>
          
            <div className="space-y-8 md:space-y-0">
              {processSteps.map((step, index) => (
                <div key={index} className={`relative md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Step Number - Mobile */}
                  <div className="md:hidden flex items-center mb-4">
                    <div className="bg-[#ffc107] text-construction-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="ml-4 font-bold text-xl">{step.title}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:px-8 pb-8 md:pb-16">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                      {/* Step Number - Desktop */}
                      <div className="hidden md:block mb-4 font-bold text-xl">{step.title}</div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Circle on Timeline */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="bg-[#ffc107] text-construction-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-construction-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-construction-yellow">Construction Project</span>?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project requirements and get a free quote. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link to="/plans" className="py-3 px-6 rounded-md bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors shadow-md">
              View Our Plans
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