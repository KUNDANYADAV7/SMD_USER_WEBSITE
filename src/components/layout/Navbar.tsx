import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { useEffect, useState } from "react";
import ContactInfos from "./ContactInfos";

const navLinks = [
  { title: "HOME", path: "/" },
  { title: "ABOUT", path: "/about" },
  { title: "SERVICES", path: "/services" },
  { title: "PROJECTS", path: "/projects" },
  { title: "BLOG", path: "/blog" },
  { title: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onDarkSection, setOnDarkSection] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const services = document.getElementById('services');
      const portfolio = document.getElementById('portfolio');

      const navbarHeight = 80;
      const isOverDarkSection = [services, portfolio].some((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = rect.bottom + window.scrollY;
        const navbarTop = scrollY;
        const navbarBottom = scrollY + navbarHeight;
        return navbarBottom > top && navbarTop < bottom;
      });

      setOnDarkSection(isOverDarkSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = onDarkSection ? "text-white" : "text-black";

  return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//       {/* <div className="container mx-auto px-4 py-4 flex items-center justify-between"> */}
// <div className="container mx-auto px-4 py-4 flex items-center justify-between space-x-6">

//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <Home className={`h-6 w-6 ${textColor}`} />
//           <span className={`text-xl font-bold ${textColor}`}>
//             SMD<span className="text-construction-yellow">Engineer</span>
//           </span>
//         </div>

//         {/* Desktop Nav */}
//         <nav
//   className={`hidden lg:flex space-x-8 px-14 py-4 rounded-full shadow-lg transition-colors duration-300 ${
//     onDarkSection
//       ? "bg-white/10 backdrop-blur-md"
//       : scrolled
//       ? "bg-white/80 backdrop-blur-md"
//       : "bg-yellow/10 backdrop-blur-md"
//   }`}
// >

//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.path;
//             return (
//               <NavLink
//                 key={link.title}
//                 to={link.path}
//                 className={`relative group px-3 py-1 text-md ${textColor}`}
//               >
//                 <span
//                   className={`relative z-10 transition-colors ${
//                     isActive ? "border-b-2 border-yellow-400" : ""
//                   }`}
//                 >
//                   {link.title}
//                 </span>
//                 <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
//                   <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-500 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
//                   <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-500 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
//                 </span>
//               </NavLink>
//             );
//           })}
//         </nav>

//         {/* Contact Info (desktop only) */}
//         <div className="hidden lg:block">
//           <ContactInfos />
//         </div>


//         {/* <div className="hidden xl:block lg:w-full lg:mt-4">
//   <ContactInfos />
// </div> */}


//         {/* Mobile Menu Toggle */}
//         <button
//           className={`lg:hidden ${textColor}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Nav Dropdown */}
//       <div
//         className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-500 ${
//           menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <nav className="flex flex-col px-6 py-4 space-y-3">
//           {navLinks.map((link) => {
//             const isActive = location.pathname === link.path;
//             return (
//               <NavLink
//                 key={link.title}
//                 to={link.path}
//                 end={link.path === "/"}
//                 onClick={() => setMenuOpen(false)}
//                 className={`relative text-sm font-medium text-black py-2 transition-all duration-300 hover:text-construction-yellow ${
//                   isActive ? "border-b-2 border-yellow-400" : ""
//                 }`}
//               >
//                 {link.title}
//               </NavLink>
//             );
//           })}
//         </nav>
//       </div>
//     </header>


<header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
  <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-y-4">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <Home className={`h-6 w-6 ${textColor}`} />
      <span className={`text-xl font-bold ${textColor}`}>
        SMD<span className="text-construction-yellow">Engineer</span>
      </span>
    </div>

    {/* Desktop Nav */}
    <nav
      className={`hidden lg:flex flex-wrap items-center space-x-4 xl:space-x-8 px-6 xl:px-14 py-4 rounded-full shadow-lg transition-colors duration-300 ${
        onDarkSection
          ? "bg-white/10 backdrop-blur-md"
          : scrolled
          ? "bg-white/80 backdrop-blur-md"
          : "bg-yellow/10 backdrop-blur-md"
      }`}
    >
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <NavLink
            key={link.title}
            to={link.path}
            className={`relative group px-3 py-1 text-md ${textColor}`}
          >
            <span
              className={`relative z-10 transition-colors ${
                isActive ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              {link.title}
            </span>
            <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-500 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-500 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
            </span>
          </NavLink>
        );
      })}
    </nav>

    {/* Contact Info - now shown from md and up */}
    <div className="hidden lg:block">
      <ContactInfos />
    </div>

    {/* Mobile Menu Toggle */}
    <div>
    <button
      className={`lg:hidden ${textColor}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
    </div>


    
  </div>

  {/* Mobile Nav */}
  <div
    className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-500 ${
      menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <nav className="flex flex-col px-6 py-4 space-y-3">
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <NavLink
            key={link.title}
            to={link.path}
            end={link.path === "/"}
            onClick={() => setMenuOpen(false)}
            className={`relative text-sm font-medium text-black py-2 transition-all duration-300 hover:text-construction-yellow ${
              isActive ? "border-b-2 border-yellow-400" : ""
            }`}
          >
            {link.title}
          </NavLink>
        );
      })}
    </nav>
  </div>
</header>

  );
};

export default Navbar;


