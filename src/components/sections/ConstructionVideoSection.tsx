import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const ConstructionVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-10 mt-10 ">
      <div className="container mx-auto px-2">
        <SectionHeading
          title="See Our Work in Action"
          subtitle="Watch our team transform concepts into stunning real-world structures"
          center
        />

        <div className="mt-12">
          <motion.div
            className="relative rounded-xl overflow-hidden shadow-2xl bg-black/5 max-h-[90vh] md:max-h-[700px]"
            // initial={{ opacity: 0, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Video Wrapper */}
            <div className="relative w-full aspect-video max-h-[80vh]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-xl"
                poster="6.png"
                onEnded={() => setIsPlaying(false)}
              >
                <source src="construction.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button Overlay */}
              <motion.button
                className={cn(
                  "absolute inset-0 flex items-center justify-center  transition-opacity z-20",
                  isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                )}
                onClick={togglePlayPause}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
  className="w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-builder-amber rounded-full flex items-center justify-center text-white"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  {isPlaying ? (
    <Pause
      className="ml-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
    />
  ) : (
    <Play
      className="ml-1 w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
    />
  )}
</motion.div>

              </motion.button>

              {/* Text Content Overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 md:p-8 pointer-events-none"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sappu sm:text-lg md:text-2xl font-bold  mb-1">
                  Building Excellence: Our Journey
                </h3>
                <p className="text-sappu text-xs sm:text-sm md:text-base max-w-2xl">
                  This time-lapse showcases our commitment to quality and precision throughout the construction process. From foundation to finishing touches, witness how we transform architectural visions into reality.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Video Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Expert Craftsmanship",
                description:
                  "See our skilled team in action, demonstrating years of experience and attention to detail.",
              },
              {
                title: "Modern Techniques",
                description:
                  "Witness innovative construction methods that ensure efficiency without compromising quality.",
              },
              {
                title: "Quality Materials",
                description:
                  "We only use premium materials that guarantee durability and stand the test of time.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionVideoSection;
