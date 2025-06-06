



import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Home } from "lucide-react";
import { useEffect, useState } from "react";
import ContactInfos from "./ContactInfos";

const navLinks = [
  { title: "HOME", path: "/" },
  { title: "ABOUT", path: "/about" },
  { title: "SERVICES", path: "/services" },
  { title: "PROJECTS", path: "/projects" },
  // { title: "PLANS", path: "/plans" },
  { title: "BLOG", path: "/blog" },
  { title: "CONTACT", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-black" />
          <span className="text-xl font-bold text-black">
            Build<span className="text-construction-yellow">Go</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav
  className={`hidden lg:flex space-x-8 px-14 py-4 rounded-full shadow-lg transition-colors duration-300 ${
    scrolled
      ? "bg-transparent backdrop-blur-md"  // transparent + blur when scrolled
      : "bg-yellow/10 backdrop-blur-md"
  }`}
>

          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.title}
                to={link.path}
                className="relative group px-3 py-1 text-md  text-black"
              >
                <span
                  className={`relative z-10 transition-colors ${
                    isActive ? "border-b-2 border-yellow-400" : ""
                  }`}
                >
                  {link.title}
                </span>

                {/* Hover corners */}
                <span className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-yellow-500 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-yellow-500 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                </span>
              </NavLink>
            );
          })}
        </nav>

        {/* Contact Info (desktop only) */}
        <div className="hidden lg:block">
          <ContactInfos />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
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

