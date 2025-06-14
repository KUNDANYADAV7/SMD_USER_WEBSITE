import SectionHeading from '../ui/SectionHeading';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import FeatureCard from '../FeatureCard';
import { getIconByName } from '../ui/iconMapper';
import { Link } from 'react-router-dom';
import { useService } from '@/context/ServiceContext';
import SkeletonCard from '../layout/SkeletonCard';

type Service = {
  _id: string;
  iconName: string;
  title: string;
  description: string;
  slug: string;
};



const ServiceSection = () => {
  const { services } = useService();
  const isLoading = !services || services.length === 0;

  return (
    <section id="services" className="py-7 mb-12 bg-black text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="Our Services"
            subtitle="We offer a wide range of construction services tailored to meet the unique needs of our clients. Our team of experts is dedicated to delivering exceptional results on every project."
          />
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {isLoading
                ? Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <div className="h-full">
                        <SkeletonCard />
                      </div>
                    </CarouselItem>
                  ))
                : services.slice(0, 6).map((item) => (
                    <CarouselItem
                      key={item._id}
                      className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <div className="h-full">
                        <FeatureCard
                          icon={getIconByName(item.iconName)}
                          title={item.title}
                          description={item.description}
                          hoverEffect={true}
                          link={`/services?slug=${item.slug}`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
            </CarouselContent>

            {!isLoading && (
              <>
                <CarouselPrevious className="-left-4 md:-left-6 text-black" />
                <CarouselNext className="-right-4 md:-right-6 text-black" />
              </>
            )}
          </Carousel>
        </div>

        {!isLoading && (
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
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
