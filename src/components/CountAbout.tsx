import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const CountAbout = ({ value, duration = 2000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Convert to string to handle suffixes and extract digits only
      const stringValue = value.toString();
      const number = parseInt(stringValue.replace(/\D/g, ''), 10) || 0;
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
      setCount(0); // reset when out of view
    }
  }, [isInView, value, duration]);

  // Convert to string once here for suffix check
  const stringValue = value.toString();

  return (
    <span ref={ref}>
      {count}
      {stringValue.includes('+') && '+'}
      {stringValue.includes('%') && '%'}
    </span>
  );
};

export default CountAbout;
