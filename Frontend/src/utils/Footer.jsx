import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { 
      name: "Instagram", 
      link: "https://instagram.com", 
      icon: FaInstagram, 
      bgColor: "bg-pink-500",
      outlineColor: "group-hover:border-pink-500",
      textColor: "group-hover:text-pink-500"
    },
    { 
      name: "Twitter", 
      link: "https://twitter.com", 
      icon: FaTwitter, 
      bgColor: "bg-blue-400",
      outlineColor: "group-hover:border-black",
      textColor: "group-hover:text-black"
    },
    { 
      name: "LinkedIn", 
      link: "https://linkedin.com", 
      icon: FaLinkedin, 
      bgColor: "bg-blue-600",
      outlineColor: "group-hover:border-blue-400",
      textColor: "group-hover:text-blue-400"
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white py-12 px-6 shadow-2xl">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="relative">
            <img
              src="/image.png"
              alt="Renu Sharma Health Care And Education Foundation Logo"
              className="h-32 w-32 object-cover border-4 border-white/20 rounded-xl transition-transform duration-300  cursor-pointer"
            />
          </div>
          
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "About Us", link: "/about-us" },
              { name: "Contact Us", link: "/contact-us" },
              { name: "Gallery", link: "/gallery" },
              { name: "Internship", link: "/internship" },
              { name: "Services", link: "/services" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-base transition-all duration-300 hover:text-yellow-400 hover:translate-x-2 font-medium group relative"
              >
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-yellow-400">
                  →
                </span>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-1 bg-white/10 group-hover:bg-white/20 rounded-full transition-all duration-300"></div>
                <div className={`
                  relative z-10 p-3 rounded-full border-2 border-transparent 
                  transition-all duration-300 
                  ${item.outlineColor}
                  group-hover:border-2 
                  group-hover:bg-white/10
                `}>
                  <item.icon 
                    className={`
                      h-6 w-6 text-white 
                      transition-all duration-300 
                      ${item.textColor}
                      group-hover:scale-125
                    `} 
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 pt-4 border-t border-white/20">
        <p className="text-sm opacity-80 flex items-center justify-center space-x-2">
          <span>© 2025 Renu Sharma HealthCare & Education Foundation | </span>
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
