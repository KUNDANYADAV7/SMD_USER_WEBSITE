import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CountUpNumber = ({ value, duration = 2000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const number = parseInt(value.replace(/\D/g, ''), 10); // Only digits
      let start = 0;
      const increment = number / (duration / 50);

      const timer = setInterval(() => {
        start += increment;
        if (start >= number) {
          clearInterval(timer);
          setCount(number);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);

      return () => clearInterval(timer);
    } else {
      // Reset count when out of view
      setCount(0);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {value.includes('+') && '+'}
      {value.includes('%') && '%'}
    </span>
  );
};

export default CountUpNumber;
