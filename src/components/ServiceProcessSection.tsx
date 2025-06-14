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
    image: "/service-branch/9.avif"
  },
  {
    id: 3,
    title: "Design and Planning",
    description: "Collaborate with our highly skilled architects to design your home that reflects your personal style and functional needs...",
    image: "/service-branch/3.avif"
  },
  {
    id: 4,
    title: "Home Construction",
    description: "Experience the construction of your dream home with our skilled team, utilizing state-of-the-art technology to ensure the highest standards...",
    image: "/service-branch/12.avif"
  }
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

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line for desktop */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 z-0"
            style={{
              width: '2px',
              backgroundImage:
                'repeating-linear-gradient(to bottom, #f0a04b 0px, #f0a04b 10px, transparent 10px, transparent 20px)',
            }}
          />

          {workSteps.map((step, index) => {
            const isVisible = visibleSteps.includes(index);
            const isEven = (index + 1) % 2 === 0;

            return (
              <div
                key={step.id}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative mb-24 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Mobile Layout */}
                <div className="flex flex-col md:hidden items-center text-center px-4">
                  {isEven ? (
                    <>
                      {/* Image */}
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto object-contain mb-6"
                      />
                      {/* Line & Number */}
                      <div className="flex flex-col items-center my-4">
                        <div
                          className="w-1 h-12"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(to bottom, #f0a04b 0px, #f0a04b 10px, transparent 10px, transparent 20px)',
                          }}
                        />
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                          style={{ backgroundColor: '#f0a04b' }}
                        >
                          {step.id.toString().padStart(2, '0')}
                        </div>
                        <div
                          className="w-1 h-12"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(to bottom, #f0a04b 0px, #f0a04b 10px, transparent 10px, transparent 20px)',
                          }}
                        />
                      </div>
                      {/* Content */}
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content */}
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {/* Line & Number */}
                      <div className="flex flex-col items-center my-4">
                        <div
                          className="w-1 h-12"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(to bottom, #f0a04b 0px, #f0a04b 10px, transparent 10px, transparent 20px)',
                          }}
                        />
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                          style={{ backgroundColor: '#f0a04b' }}
                        >
                          {step.id.toString().padStart(2, '0')}
                        </div>
                        <div
                          className="w-1 h-12"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(to bottom, #f0a04b 0px, #f0a04b 10px, transparent 10px, transparent 20px)',
                          }}
                        />
                      </div>
                      {/* Image */}
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto object-contain mt-6"
                      />
                    </>
                  )}
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between w-full relative z-10">
                  {isEven ? (
                    <>
                      <div className="w-5/12 pr-12">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      <div className="flex-shrink-0 z-10">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                          style={{ backgroundColor: '#f0a04b' }}
                        >
                          {step.id.toString().padStart(2, '0')}
                        </div>
                      </div>
                      <div className="w-5/12 pl-12">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12 pr-12">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 z-10">
                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                          style={{ backgroundColor: '#f0a04b' }}
                        >
                          {step.id.toString().padStart(2, '0')}
                        </div>
                      </div>
                      <div className="w-5/12 pl-12">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
