import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollTopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;

    setScrollY(progress);
    setShowButton(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circumference = 2 * Math.PI * 26; // r = 26

  return (
    showButton && (
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-lg"
        style={{ position: 'fixed' }}
      >
        <svg width="60" height="60" viewBox="2 2 60 60" className="absolute top-0 left-0">
          <circle
            cx="30"
            cy="30"
            r="26"
            stroke="#E5E7EB"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="30"
            cy="30"
            r="26"
            stroke="#FACC15" // yellow-400
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (scrollY / 100) * circumference}
            strokeLinecap="round"
            transform="rotate(-90 30 30)"
          />
        </svg>
        {/* Big arrow inside circle */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-yellow-500 relative z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    )
  );
};

export default ScrollTopButton;
