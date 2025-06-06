import { useState, useEffect, useRef } from "react";

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
      <div className="text-5xl font-bold mb-1 text-white">
        {count}
        {suffix}
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          <StatItem label="Complete Projects" value={678} suffix="+" />
          <StatItem label="Team Members" value={120} suffix="+" />
          <StatItem label="Client Reviews" value={635} suffix="+" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
