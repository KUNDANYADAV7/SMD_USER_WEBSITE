import PricingCard from '@/components/PricingCard';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';

const Plans = () => {
  // Pricing plans data
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

  // FAQ data
  const faqs = [
    {
      question: "What is included in your construction services?",
      answer: "Our construction services include project planning, architectural design, material procurement, construction execution, quality control, and project management. The specific services included depend on the plan you choose."
    },
    {
      question: "How long does a typical construction project take?",
      answer: "The duration of a construction project depends on its scope and complexity. Small residential projects may take 3-6 months, while larger commercial projects can take a year or more. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you offer customized plans?",
      answer: "Yes, we understand that each project is unique. Our Premium plan is fully customizable to meet specific requirements. We also offer custom solutions for clients with special needs even on our Basic and Standard plans."
    },
    {
      question: "What payment terms do you offer?",
      answer: "We typically require a deposit to begin work, followed by milestone payments throughout the project. The specific payment schedule is outlined in the contract and varies depending on the project size and duration."
    },
    {
      question: "Are your services available nationwide?",
      answer: "Currently, we serve clients within a 100-mile radius of our main office. However, for larger commercial projects, we may consider taking on work outside this area. Contact us to discuss your specific location."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Page Banner */}
      <section className="pt-32 pb-16 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/photos/23.png)',
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Plans</h1>
            <p className="text-lg">Choose the right plan for your construction needs</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 container px-4 text-black bg-white">
            <div className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-xl font-medium text-gray-800 mb-4">
             Pricing Plans
              </div>
              <SectionHeading 
              title="Construction Solutions for Every Budget"
              subtitle="We offer a range of construction service packages designed to meet your specific needs and budget. Choose the plan that works best for your project."
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard 
                key={index}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                buttonText={plan.buttonText}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 text-gray-600">
            <p>All plans include free consultation and quote. <Link to="/contact" className="text-construction-blue font-medium hover:text-construction-yellow">Contact us</Link> for custom requirements.</p>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <SectionHeading 
              title="Compare Our Plans"
              subtitle="See how our plans stack up against each other to find the perfect fit for your construction project."
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left bg-gray-100 border-b-2 border-gray-200"></th>
                  <th className="px-6 py-4 text-center bg-gray-100 border-b-2 border-gray-200">
                    <span className="font-bold text-lg">Basic</span>
                    <p className="font-normal text-gray-500">$1,999</p>
                  </th>
                  <th className="px-6 py-4 text-center bg-construction-yellow/10 border-b-2 border-construction-yellow relative">
                    <div className="absolute top-0 left-0 right-0 transform -translate-y-full bg-construction-yellow text-construction-black text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                    <span className="font-bold text-lg">Standard</span>
                    <p className="font-normal text-gray-500">$4,999</p>
                  </th>
                  <th className="px-6 py-4 text-center bg-gray-100 border-b-2 border-gray-200">
                    <span className="font-bold text-lg">Premium</span>
                    <p className="font-normal text-gray-500">Custom</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>C
                  <td className="px-6 py-4 border-b border-gray-200 font-medium">Consultation</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">1 Session</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center bg-construction-yellow/5">3 Sessions</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 font-medium">Architectural Design</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">Basic</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center bg-construction-yellow/5">Advanced</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 font-medium">Material Quality</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">Standard</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center bg-construction-yellow/5">Premium</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">Top-tier</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 font-medium">Project Management</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center bg-construction-yellow/5">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="flex justify-center items-center">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-1">Dedicated</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 font-medium">Interior Design</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center bg-construction-yellow/5">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <div className="flex justify-center items-center">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="ml-1">+ Exterior</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 font-medium">Warranty</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">90 Days</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center bg-construction-yellow/5">1 Year</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">5 Years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 font-medium">Maintenance Plan</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center bg-construction-yellow/5">
                    <svg className="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-center">
                    <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 text-center">
                    <Link to="/contact" className="btn-primary inline-block">Choose Basic</Link>
                  </td>
                  <td className="px-6 py-4 text-center bg-construction-yellow/5">
                    <Link to="/contact" className="bg-construction-yellow text-construction-black font-medium py-3 px-6 rounded-md transition-all duration-300 hover:bg-construction-blue hover:text-white shadow-md hover:shadow-lg inline-block">Choose Standard</Link>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Link to="/contact" className="btn-primary inline-block">Contact Us</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-construction-yellow text-construction-black inline-block px-4 py-1 mb-6 rounded-md font-semibold">
              FAQs
            </div>
            <SectionHeading 
              title="Frequently Asked Questions"
              // subtitle=" Find answers to common questions about our construction plans and services."
            />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <span className="ml-6 flex-shrink-0 text-construction-blue group-open:rotate-180 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your question here? Contact us directly and we'll be happy to help.</p>
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

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-construction-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started With <span className="text-construction-yellow">BuildMaster</span>?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project needs and find the perfect plan for your construction project.
          </p>
<Link
  to="/contact"
  className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black transition-colors duration-300 mx-auto"
>
  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
    Get In Touch
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab342] group-hover:bg-white transition-all duration-300 transform group-hover:translate-x-2 group-active:translate-x-1">
      <svg
        className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-black group-hover:text-[#ffc107]"
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

  {/* Hover background fill */}
  <span className="absolute inset-0 bg-[#ffc107] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
</Link>


        </div>
      </section>

    </div>
  );
};

export default Plans;