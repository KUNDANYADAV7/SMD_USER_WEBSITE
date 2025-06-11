import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, Star, Mail, Phone } from 'lucide-react';
import CustomCard from '@/components/ui/CustomCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CountAbout from '@/components/CountNumberRun/CountAbout';

const About = () => {
const location = useLocation();
const [renderKey, setRenderKey] = useState(0);

useEffect(() => {
  // This runs every time you navigate to this page
  setRenderKey(prev => prev + 1);
}, [location.pathname]);

const stats = [
  { icon: <Award size={40} className="text-builder-amber" />, value: 25, suffix: '+', label: 'Designing/Planning' },
  { icon: <Users size={40} className="text-builder-amber" />, value: 50, suffix: '+', label: 'Construction' },
  { icon: <Clock size={40} className="text-builder-amber" />, value: 1000, suffix: '+', label: 'Renovation' },
  { icon: <Star size={40} className="text-builder-amber" />, value: 99, suffix: '%', label: 'Interior' },
];

  const testimonials = [
    {
      quote: "BuildPro exceeded our expectations with their professionalism and quality of work. Our new office space is a testament to their dedication.",
      author: "John Smith, CEO of TechCorp",
      image: "/photos/31.jpeg"
    },
    {
      quote: "From planning to execution, BuildPro's team was exceptional. They delivered our project on time and within budget, with no compromise on quality.",
      author: "Emily Johnson, Project Manager at Global Solutions",
      image: "/photos/32.jpeg"
    },
  ];

  const teamMembers = [
    {
      name: 'Smit Shah',
      role: 'Co-Founder',
      image: "/photos/33.jpeg",
      bio: 'Smit Shah has been actively engaged in the construction industry since 2017 and has overseen the construction of 20+ of single-family homes.',
      email: 'john@buildpro.com',
      phone: '+1 (555) 123-4567'
    },
    {
      name: 'Mahesh Baria',
      role: 'Co-Founder',
      image: "/photos/34.jpeg",
      bio: 'Over his career of well over 6+ years, Mahesh Bariya has designed a wide range of structures. Apart from hotels, hospitals, textile mills, high rise commercial and residential towers, shopping centres and malls , Mahesh Bariya has an extensive experience with Earthquake resistant design and analysis.',
      email: 'sarah@buildpro.com',
      phone: '+1 (555) 234-5678'
    },
    {
      name: 'Dharmendra Baria',
      role: 'Co-Founder',
      image: "/photos/35.jpeg",
      bio: 'Dharmendra has been in the home building industry for over 6+ years. He has executed the construction of numerous single homes, commercial buildings & multi-residential projects in and around Godhra and Vadodara.',
      email: 'michael@buildpro.com',
      phone: '+1 (555) 345-6789'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-builder-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-builder-navy/0 z-10" />
          <div className="absolute inset-0 bg-[url('/photos/30.png')] bg-cover bg-center" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-white/90 text-lg mb-6">
              Learn more about our company, our mission, and our commitment to quality construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
           <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <SectionHeading 
    title="Our Story"
    // subtitle="Founded in 1998, BuildPro has been at the forefront of construction innovation and quality."
  />
  

  {/* Your custom content added here */}
  <div className="flex flex-col max-w-2xl">
    <p className="text-gray-600 mb-4">
      <span className="font-bold underline uppercase">SMD Engineers</span> is a custom home builder. We’ve spent nearly 
      <span className="font-bold underline px-1">4+ years</span> experience and are specialized in residential and commercial 
      projects including new interior designs and renovation of structure. We provide full service with a strong team which includes 
      certified designers and professional contractors. At 
      <span className="font-bold underline uppercase px-1">SMD Engineers</span>, we’re committed to making the process of 
      building your dream home as enjoyable, simple, and hassle-free as possible.
      <br /><br />
      <span className="font-bold underline uppercase">SMD Engineers</span> also known as a Home Renovation company, helps 
      homeowners all across India in making well-informed decisions and finding the right professionals for their renovation projects. 
      We are known for great customer service, honest advice, and dependable action.
    </p>
  </div>

  {/* Existing contact button */}
  <div className="mt-12 text-center">
    <Link
      to="/contact"
      className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
    >
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
        Contact Us
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/photos/29.png"
                alt="Construction team" 
                className="rounded-lg shadow-lg" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/photos/1.png" 
                alt="Construction site" 
                className="rounded-lg shadow-lg" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                title="Our Mission"
                subtitle="To deliver exceptional construction services that exceed client expectations through innovation, quality, and integrity."
              />
              <p className="text-gray-600 mb-6">
                We are committed to providing our clients with the highest level of service, quality, and professionalism. Our mission is to build lasting relationships and create spaces that inspire and endure.
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8">
                <li>Exceeding client expectations through superior service</li>
                <li>Maintaining the highest standards of quality and safety</li>
                <li>Fostering a culture of innovation and continuous improvement</li>
                <li>Operating with integrity, transparency, and accountability</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Achievements"
            subtitle="Over two decades of building excellence, marked by significant milestones and achievements."
            center
          />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {stats.map((stat, index) => (
    <motion.div
      key={index}
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4">{stat.icon}</div>
      <div className="text-4xl font-bold text-builder-navy">
        <CountAbout value={stat.value} duration={2000} />+
      </div>
      <div className="text-gray-600">{stat.label}</div>
    </motion.div>
  ))}
</div>
</div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Clients Say"
            subtitle="Hear from our satisfied clients about their experiences working with BuildPro."
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <CustomCard key={index} className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4" 
                    />
                    <div>
                      <h4 className="font-semibold text-builder-navy">{testimonial.author}</h4>
                    </div>
                  </div>
                </motion.div>
              </CustomCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section with HoverCard Effect */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Expert Team"
            subtitle="Meet the dedicated professionals who bring expertise and passion to every project."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer transition-transform hover:scale-105">
                      <img 
                        src={member.image}
                        alt={member.name} 
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
                      />
                      <h4 className="text-xl font-semibold text-builder-navy">{member.name}</h4>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold">{member.name}</h4>
                        <p className="text-sm text-builder-amber font-medium">{member.role}</p>
                        <p className="text-sm text-gray-600">{member.bio}</p>
                        <div className="pt-2">
                          <div className="flex items-center text-sm text-gray-700">
                            <Mail className="mr-2 h-4 w-4 text-builder-amber" />
                            <span>{member.email}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-700 mt-2">
                            <Phone className="mr-2 h-4 w-4 text-builder-amber" />
                            <span>{member.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-builder-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to discuss your project and discover how BuildPro can bring your vision to life.
            </p>
            <div className="mt-12 text-center">
  <Link
    to="/contact"
    className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
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
      </section>
    </div>
  );
};

export default About;
