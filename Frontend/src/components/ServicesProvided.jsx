import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AF1 from "../assets/AF1.jpeg";
import SMB2 from "../assets/SMB2.jpeg";
import PDF1 from "../assets/PDF1.jpeg";

const featuresData = [
  { imgSrc: AF1, altText: "DataOps", title: "DataOps" },
  { imgSrc: SMB2, altText: "Smart Analytics", title: "Smart Analytics" },
  { imgSrc: PDF1, altText: "Governance & Strategy", title: "Governance & Strategy" },
  { imgSrc: SMB2, altText: "Blockchain Solutions", title: "Blockchain Solutions" },
  { imgSrc: PDF1, altText: "Big Data Analytics", title: "Big Data Analytics" },
  { imgSrc: AF1, altText: "IoT Solutions", title: "IoT Solutions" },
  { imgSrc: SMB2, altText: "Cloud Migration", title: "Cloud Migration" },
  { imgSrc: AF1, altText: "Cybersecurity", title: "Cybersecurity" },
  { imgSrc: PDF1, altText: "AI Integration", title: "AI Integration" },
  { imgSrc: SMB2, altText: "DevOps Automation", title: "DevOps Automation" },
  { imgSrc: AF1, altText: "Data Governance", title: "Data Governance" },
  { imgSrc: PDF1, altText: "Edge Computing", title: "Edge Computing" },
];

const ServicesProvided = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    if (startIndex + itemsPerPage < featuresData.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const currentItems = featuresData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-[#001f3f] text-center py-20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6"
      >
        <h2 className="text-white text-4xl md:text-5xl font-bold">
          Our <span className="text-indigo-400">Services</span>
        </h2>
      </motion.div>

      {/* Arrows + Cards */}
      <div className="flex items-center justify-center gap-6 mt-16 px-4">
        {/* Left Arrow (Always Visible) */}
        <button
          onClick={handlePrev}
          className={`text-white p-3 rounded-full shadow-md transition-all duration-300 bg-[#012a52] hover:bg-indigo-500 ${
            startIndex === 0 ? "opacity-30 cursor-not-allowed pointer-events-none" : ""
          }`}
        >
          <IoIosArrowBack size={30} />
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-[90rem]">
          {currentItems.map((feature, index) => (
            <motion.div
              key={index}
              className="w-[260px] md:w-[300px] lg:w-[320px] xl:w-[340px] p-8 rounded-lg shadow-lg text-white flex flex-col items-center transition duration-300 ease-in-out bg-[#012a52]"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={feature.imgSrc}
                alt={feature.altText}
                className="w-16 h-16 mb-4 rounded-full object-cover border-2 border-white"
              />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow (Always Visible) */}
        <button
          onClick={handleNext}
          className={`text-white p-3 rounded-full shadow-md transition-all duration-300 bg-[#012a52] hover:bg-indigo-500 ${
            startIndex + itemsPerPage >= featuresData.length
              ? "opacity-30 cursor-not-allowed pointer-events-none"
              : ""
          }`}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </section>
  );
};

export default ServicesProvided;
