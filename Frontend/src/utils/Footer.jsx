import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 3000);
      } else {
        alert("Please enter a valid email address");
      }
    }
  };

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

  const navigationLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Gallery", path: "/gallery" },
    { name: "Internship", path: "/internship" },
    { name: "Services", path: "/services" }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#001F3F] to-[#003366] text-white py-12 px-6 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Subscribe Section */}
        <div className="flex items-center space-x-6">
          <img
            src="/image.png"
            alt="Renu Sharma Health Care And Education Foundation Logo"
            className="h-20 w-20 md:h-24 md:w-24 object-cover border-4 border-white/20 rounded-xl"
          />
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
            <div className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none border border-gray-300 bg-white shadow-md focus:ring-2 focus:ring-yellow-400 w-full md:w-auto"
              />
              <button 
                onClick={handleSubscribe} 
                className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-500"
              >
                Subscribe
              </button>
            </div>
            {subscribed && (
              <p className="text-green-400 mt-2 animate-pulse">Thank you for subscribing! 🎉</p>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-5">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-base transition-all duration-300 hover:text-yellow-400 hover:translate-x-2 font-medium group relative"
            >
              <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 text-yellow-400">
                →
              </span>
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={`${item.name} link`}
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

      {/* Footer Bottom */}
      <div className="text-center mt-6 pt-4 border-t border-white/20">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Renu Sharma HealthCare & Education Foundation | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
