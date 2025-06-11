import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Tech Innovations Co.",
    content: "Working with this construction company was a game-changer for our office renovation project. Their attention to detail and commitment to deadlines made the entire process seamless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director of Operations",
    company: "Global Solutions Ltd.",
    content: "The team's expertise in sustainable construction techniques helped us achieve our green building certification. Their innovative approach and quality workmanship exceeded our expectations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "CFO",
    company: "Urban Development Inc.",
    content: "From the initial consultation to the final walkthrough, their professionalism was evident. The project was completed on budget and ahead of schedule, which is rare in the construction industry.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
         
          <SectionHeading
          title="Testimonials"
          center
        />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -top-6 left-10 text-5xl text-primary opacity-30"
            >
              <Quote size={40} />
            </motion.div>
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                initial={direction > 0 ? { x: 200, opacity: 0 } : { x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={direction > 0 ? { x: -200, opacity: 0 } : { x: 200, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="rounded-xl p-6 md:p-10"
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <div className="relative">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                              src={currentTestimonial.avatar}
                              alt={currentTestimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1 rounded-full shadow-md">
                            <Quote size={16} />
                          </div>
                        </div>
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="flex mb-1"
                        >
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                        </motion.div>
                        
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-lg md:text-xl italic text-gray-600 mb-4"
                        >
                          "{currentTestimonial.content}"
                        </motion.p>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <h4 className="font-semibold text-lg">{currentTestimonial.name}</h4>
                          <p className="text-gray-500">
                            {currentTestimonial.role}, {currentTestimonial.company}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;