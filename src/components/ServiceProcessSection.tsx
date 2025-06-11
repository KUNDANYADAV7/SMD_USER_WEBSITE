// import { useEffect, useRef, useState } from "react";

// interface WorkStep {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

// const workSteps: WorkStep[] = [
//   {
//     id: 1,
//     title: "Technical Consultation",
//     description: "Share your vision for your dream home with our experienced architects. Leveraging advanced technology and extensive...",
//     image: "/lovable-uploads/41093d38-123e-4947-9cb4-cf4aeab8c369.png"
//   },
//   {
//     id: 2,
//     title: "Booking",
//     description: "Secure your building construction project with us by paying a nominal booking fee of just 0.5% of the total construction cost. This ensures a...",
//     image: "/lovable-uploads/5eb528bd-7340-4191-a0ed-b358900adf26.png"
//   },
//   {
//     id: 3,
//     title: "Design and Planning",
//     description: "Collaborate with the our highly skilled architects to design your home that reflects your personal style and functional needs...",
//     image: "/lovable-uploads/f8c9084b-e894-4cd9-a33d-f7f9b4831f37.png"
//   },
//   {
//     id: 4,
//     title: "Home Construction",
//     description: "Experience the construction of your dream home with our skilled team, utilizing state-of-the-art technology to ensure the highest standards...",
//     image: "/lovable-uploads/7a0e4929-85d8-480f-a357-623bd0284240.png"
//   }
// ];

// export const ServiceProcessSection = () => {
//   const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
//   const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const observers = stepRefs.current.map((ref, index) => {
//       if (!ref) return null;
      
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setVisibleSteps((prev) => 
//                 prev.includes(index) ? prev : [...prev, index].sort()
//               );
//             }
//           });
//         },
//         { threshold: 0.3 }
//       );
      
//       observer.observe(ref);
//       return observer;
//     });

//     return () => {
//       observers.forEach((observer) => observer?.disconnect());
//     };
//   }, []);

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//             How We <span style={{ color: '#ffc107' }}>Work</span>
//           </h2>
//           <p className="text-muted-foreground max-w-3xl mx-auto text-base">
//             with simple building construction steps, we ensure transparent and hassle free experience during your home construction. Book- Track & Monitor - Settle.
//           </p>
//         </div>

//         {/* Vertical Timeline */}
//         <div className="relative max-w-6xl mx-auto">
//           {/* Main Vertical Dashed Line */}
//           <div 
//             className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0"
//             style={{ 
//               width: '2px',
//               backgroundImage: 'repeating-linear-gradient(to bottom, #ffc107 0px, #ffc107 10px, transparent 10px, transparent 20px)',
//             }}
//           />

//           {workSteps.map((step, index) => {
//             const isVisible = visibleSteps.includes(index);
//             const isOdd = index % 2 === 1;
            
//             return (
//               <div
//                 key={step.id}
//                 ref={(el) => (stepRefs.current[index] = el)}
//                 className={`relative flex items-center justify-center mb-32 transition-all duration-700 ${
//                   isVisible 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-10'
//                 }`}
//                 style={{ 
//                   transitionDelay: `${index * 200}ms` 
//                 }}
//               >
//                 {/* Content Layout */}
//                 <div className="w-full flex items-center">
//                   {/* Left Content */}
//                   <div className={`w-5/12 ${isOdd ? 'text-right pr-12' : 'order-2 text-left pl-12'}`}>
//                     {isOdd ? (
//                       // Text content on left
//                       <div>
//                         <h3 className="text-2xl font-bold text-foreground mb-4">
//                           {step.title}
//                         </h3>
//                         <p className="text-muted-foreground text-base leading-relaxed mb-4">
//                           {step.description}{" "}
//                           <button className="text-blue-500 hover:underline font-medium">
//                             read more
//                           </button>
//                         </p>
//                       </div>
//                     ) : (
//                       // Image on left
//                       <div className="w-full max-w-md ml-auto">
//                         <img 
//                           src={step.image}
//                           alt={step.title}
//                           className="w-full h-auto object-contain"
//                         />
//                       </div>
//                     )}
//                   </div>

//                   {/* Center Circle */}
//                   <div className="relative z-10 flex-shrink-0">
//                     <div 
//                       className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
//                       style={{ backgroundColor: '#ffc107' }}
//                     >
//                       {step.id.toString().padStart(2, '0')}
//                     </div>
//                   </div>

//                   {/* Right Content */}
//                   <div className={`w-5/12 ${isOdd ? 'order-2 text-left pl-12' : 'text-right pr-12'}`}>
//                     {!isOdd ? (
//                       // Text content on right
//                       <div>
//                         <h3 className="text-2xl font-bold text-foreground mb-4">
//                           {step.title}
//                         </h3>
//                         <p className="text-muted-foreground text-base leading-relaxed mb-4">
//                           {step.description}{" "}
//                           <button className="text-blue-500 hover:underline font-medium">
//                             read more
//                           </button>
//                         </p>
//                       </div>
//                     ) : (
//                       // Image on right
//                       <div className="w-full max-w-md mr-auto">
//                         <img 
//                           src={step.image}
//                           alt={step.title}
//                           className="w-full h-auto object-contain"
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };





import { useEffect, useRef, useState } from "react";

interface WorkStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

const workSteps: WorkStep[] = [
  {
    id: 1,
    title: "Technical Consultation",
    description: "Share your vision for your dream home with our experienced architects. Leveraging advanced technology and extensive...",
    image: "/service-branch/8.avif"
  },
  {
    id: 2,
    title: "Booking",
    description: "Secure your building construction project with us by paying a nominal booking fee of just 0.5% of the total construction cost. This ensures a...",
image: "/service-branch/9.avif"  },
  {
    id: 3,
    title: "Design and Planning",
    description: "Collaborate with the our highly skilled architects to design your home that reflects your personal style and functional needs...",
    image: "/service-branch/3.avif"
  },
  {
    id: 4,
    title: "Home Construction",
    description: "Experience the construction of your dream home with our skilled team, utilizing state-of-the-art technology to ensure the highest standards...",
image: "/service-branch/12.avif"  }
];

export const ServiceProcessSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) =>
                prev.includes(index) ? prev : [...prev, index].sort()
              );
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    

    <section className="py-20 bg-background">
  <div className="container mx-auto px-6 md:px-12">
    {/* Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        How We <span style={{ color: '#f0a04b' }}>Work</span>
      </h2>
      <p className="text-muted-foreground max-w-3xl mx-auto text-base">
        With simple building construction steps, we ensure transparent and hassle-free experience during your home construction. Book - Track & Monitor - Settle.
      </p>
    </div>

    {/* Vertical Timeline */}
    <div className="relative max-w-6xl mx-auto">
      {/* Main Vertical Dashed Line */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0"
        style={{
          width: '2px',
          backgroundImage: 'repeating-linear-gradient(to bottom, #ffc107 0px, #ffc107 10px, transparent 10px, transparent 20px)',
        }}
      />

      {workSteps.map((step, index) => {
        const isVisible = visibleSteps.includes(index);
        const isEven = (index + 1) % 2 === 0;

        return (
          <div
            key={step.id}
            ref={(el) => (stepRefs.current[index] = el)}
            className={`relative flex items-center justify-center mb-32 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {/* Step Row */}
            <div className="w-full flex items-center">
              {/* Left Column */}
              <div className={`w-5/12 ${isEven ? 'pr-12' : 'order-2 pl-12'}`}>
                {isEven ? (
                  <div className="w-full max-w-md ml-auto">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-contain scale-100  // 110% zoom"
                    />
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Center Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{ backgroundColor: '#f0a04b' }}
                >
                  {step.id.toString().padStart(2, '0')}
                </div>
              </div>

              {/* Right Column */}
              <div className={`w-5/12 ${isEven ? 'pl-16' : 'order-2 pr-12'}`}>
                {!isEven ? (
                  <div className="w-full max-w-md mr-auto md:translate-x-20">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto object-contain scale-110  // 110% zoom"
                    />
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
};
