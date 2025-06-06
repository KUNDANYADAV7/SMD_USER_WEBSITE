

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
  duration?: number;
}

const StatItem = ({ label, value, suffix = "", duration = 2000 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, isVisible]);

  return (
    <div className="text-center" ref={countRef}>
      <div className="text-4xl font-bold mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Left image */}
          <div className="md:w-1/3 w-full flex justify-center">
            <img
              src="/photos/1.png"
              alt="Construction equipment"
              className="w-65 h-62 object-cover  shadow-md"
            />
          </div>

          {/* Right content */}
          <div className="md:w-2/3 w-full flex flex-col justify-between">
            <div>
              <div className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800 mb-4">
                ABOUT OUR COMPANY
              </div>
              {/* <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
  Welcome To The<br />
  <span className="block text-center">SMD Engineers</span>
</h2> */}
<h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6 animate-slideInLeft">
  Welcome To The<br />
  <span className="block">SMD Engineers</span>
</h2>

{/* <div className=" text-lg font-semibold text-[#ffc107] mb-4">
                Where We Build Your Visions
              </div> */}
              {/* Paragraph + image in same row, but button under paragraph only */}
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Text + button column */}
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


<Link
  to="/about"
  className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300"
>
  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
    OUR STORY
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab342] group-hover:bg-[#eab342] transition-all duration-300 transform group-hover:translate-x-2 group-active:translate-x-1">
      <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-black group-hover:text-white" />
    </span>
  </span>
  <span className="absolute inset-0 bg-[#0b3954] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
</Link>


                </div>

                {/* Right image */}
                <div className="flex-shrink-0">
                  <img
                    src="/photos/about_right.png"
                    alt="Construction right"
                    className="w-full md:w-[200px] h-[300px] object-cover "
                  />
                </div>
              </div>
            </div>

           {/* Bottom stats section */}
<div className="mt-8 flex flex-col md:flex-row gap-3 items-center">
  <div className="w-full md:w-[80%] h-20 bg-gray-50 rounded-xl flex items-center justify-around px-4">
    <StatItem label="Designing/Planning" value={80} suffix="+" />
    <StatItem label="Construction " value={11} suffix="+" />
    <StatItem label="Renovation" value={18} suffix="+" />
    <StatItem label="Interior" value={12} />
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
