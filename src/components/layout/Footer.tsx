
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-builder-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="text-builder-amber">BUILD</span>PRO
            </h3>
            <p className="text-gray-300 mb-6">
              Quality construction services with over 25 years of experience. Building dreams into reality.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-builder-amber transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-builder-amber transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-builder-amber transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 heading-underline pb-3">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-builder-amber transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 heading-underline pb-3">Our Services</h3>
            <ul className="space-y-3">
              {['Residential Construction', 'Commercial Building', 'Renovation', 'Interior Design', 'Project Planning'].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-300 hover:text-builder-amber transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 heading-underline pb-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-builder-amber mt-1" />
                <span className="text-gray-300">123 Builder Street, Construction City, CC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-builder-amber" />
                <a href="tel:+11234567890" className="text-gray-300 hover:text-builder-amber transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-builder-amber" />
                <a href="mailto:info@buildpro.com" className="text-gray-300 hover:text-builder-amber transition-colors">
                  info@buildpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} BuildPro Construction. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
