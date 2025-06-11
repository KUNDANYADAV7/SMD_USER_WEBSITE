import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantly without animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // this makes it instant
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
