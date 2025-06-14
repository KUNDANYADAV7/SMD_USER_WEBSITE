import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useTrustedClient } from '@/context/TrustedClientContext';
import config from '@/config';
import SkeletonCard from '../layout/SkeletonCard';

const ClientsSection = () => {
  const [api, setApi] = useState<any>(null);
  const { trustedClients } = useTrustedClient();
  const isLoading = trustedClients.length === 0;

  // ⛳ Set an estimated number of skeletons before data arrives, or adjust later
  const skeletonCount = isLoading ? 8 : trustedClients.length;

  useEffect(() => {
    if (api && trustedClients.length > 0) {
      const interval = setInterval(() => {
        api.scrollNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [api, trustedClients]);

  return (
    <section className="py-10 mt-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Trusted Clients"
          subtitle="We're proud to work with industry-leading companies across various sectors"
          center
          className="text-white"
        />

        <div className="mt-12 relative">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {(isLoading ? Array.from({ length: skeletonCount }) : trustedClients).map((client: any, index: number) => (
                <CarouselItem key={client?._id || index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  {isLoading ? (
                    <SkeletonCard className="h-[300px]" />
                  ) : (
                    <motion.div
                      className="relative w-full h-[300px] rounded-xl overflow-hidden perspective-1000 group transform-gpu"
                      whileHover={{
                        rotateY: 5,
                        rotateX: 5,
                        scale: 1.02,
                        transition: { duration: 0.4 },
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {/* Image */}
                      <div className="absolute inset-0 w-full h-full">
                        <img
                          src={`${config.apiUrl}/${client.image}`}
                          alt={client.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-builder-navy/80 via-builder-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h4 className="text-xl text-sappu">{client.category}</h4>
                          <p className="text-sappu text-sm mb-2 max-h-24 md:max-h-32 overflow-y-auto pr-1 custom-scroll">
                            {client.description}
                          </p>
                          <div>
                            <span className="text-xs font-medium text-sappu">Projects:</span>
                            <p className="text-sm text-white/90 text-sappu">{client.title}</p>
                          </div>
                        </div>
                      </div>

                      {/* Border Effects */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 border border-white/10 rounded-xl"></div>
                        <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/10 to-transparent opacity-40"></div>
                      </div>
                    </motion.div>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>

            {!isLoading && (
              <div className="hidden md:flex mt-8 justify-center">
                <CarouselPrevious className="relative left-0 right-auto mr-2" />
                <CarouselNext className="relative right-0 left-auto" />
              </div>
            )}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
