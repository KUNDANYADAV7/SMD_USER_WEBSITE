// import { useEffect, useState } from "react";
// import { ArrowUp } from "lucide-react"; // or use any icon

// const ScrollTopButton = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [showButton, setShowButton] = useState(false);

//   const handleScroll = () => {
//     const y = window.scrollY;
//     const height = document.body.scrollHeight - window.innerHeight;
//     setScrollY(y);

//     if (y > 100) setShowButton(true);
//     else setShowButton(false);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const getBorderClass = () => {
//     const height = document.body.scrollHeight - window.innerHeight;
//     const scrollPercent = (scrollY / height) * 100;

//     if (scrollPercent > 90) return "bg-yellow-400 border-yellow-400"; // bottom
//     if (scrollPercent > 20) return "border-4 border-yellow-400"; // mid scroll
//     return "border-none"; // near top
//   };

//   return (
//     <>
//       {showButton && (
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className={`fixed bottom-5 right-5 z-50 p-3 rounded-full bg-white hover:bg-yellow-300 shadow-lg transition-all duration-300 ${getBorderClass()}`}
//         >
//           <ArrowUp className="w-5 h-5 text-black" />
//         </button>
//       )}
//     </>
//   );
// };

// export default ScrollTopButton;


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
