import React from "react";
import CardStack from "./CardStack";
import cardsData from "./utils/internshipdomain.json";
import { motion } from "framer-motion";
import { FaHandsHelping, FaUserTie, FaClock, FaLayerGroup,FaBriefcase } from "react-icons/fa";
import { useState } from "react";
import IntershipInfo from "./InternhipInfo";
export default function InternshipHeader() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const featureIcons = {
    "Hands-on Training": <FaHandsHelping className="text-blue-600 text-3xl" />,
    "Expert Mentorship": <FaUserTie className="text-green-600 text-3xl" />,
    "Flexible Duration": <FaClock className="text-purple-600 text-3xl" />,
    "Diverse Departments": <FaLayerGroup className="text-red-600 text-3xl" />,
  };
  
  const features = [
    {
      title: "Hands-on Training",
      description:
        "Gain real-world experience by working on live projects with industry experts.",
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn from professionals who guide you through your internship journey.",
    },
    {
      title: "Flexible Duration",
      description:
        "Choose between a 3-month or 6-month program that fits your schedule.",
    },
    {
      title: "Diverse Departments",
      description:
        "Explore opportunities in multiple domains, including healthcare and education.",
    },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-[#0a192f]">
      {/* New Intro Section */}
      <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% is in view
      className="text-center text-white py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-600 rounded-xl shadow-lg"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        viewport={{ once: false }}
        className="text-4xl md:text-5xl font-extrabold tracking-wide"
      >
        Elevate Your Career with Real-World Experience 🚀
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1, type: "spring", stiffness: 120 }}
        viewport={{ once: false }}
        className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90"
      >
        Join our prestigious internship program to gain hands-on experience in{" "}
        <span className="font-semibold">healthcare</span> and{" "}
        <span className="font-semibold">education innovation</span>. Work on
        real projects, build valuable skills, and grow under expert mentorship.
      </motion.p>

      {/* Animated Internship Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="mt-6 flex flex-wrap justify-center gap-4"
      >
        {["3-month program", "6-month program", "Remote opportunity", "Multiple departments"].map((text, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6 + index * 0.1,
              duration: 0.6,
              type: "spring",
              stiffness: 150,
            }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            viewport={{ once: false }}
            className="px-4 py-2 bg-white text-blue-700 font-semibold rounded-full shadow-md cursor-pointer transition"
          >
            {text}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>

    {/*feature cards*/}
    <div className="flex flex-wrap justify-center items-start gap-8 mt-10 w-full overflow-visible">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 300, damping: 20 }}
      viewport={{ once: true }}
      className={`
        relative flex flex-col items-center w-64 transition-transform duration-300 cursor-pointer
        ${hoveredIndex === index ? "scale-[1.2] z-40 -translate-y-3 shadow-2xl" : ""}
        ${hoveredIndex !== null && hoveredIndex !== index ? "blur-[1.5px] opacity-40" : ""}
      `}
    >
      {/* Floating Icon */}
      <motion.div
        animate={{ y: [0, -8, 0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="bg-white p-4 rounded-full shadow-md text-4xl text-gray-800 z-10"
      >
        {featureIcons[feature.title]}
      </motion.div>

      {/* Content */}
      <div className="mt-3 bg-white border border-gray-200 rounded-xl shadow-md w-full px-4 py-3 text-center z-0">
        <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
      </div>
    </motion.div>
  ))}
</div>



      {/* Card Stack Section */}
      <motion.hr
  className="w-full h-[4px] border-none bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 shadow-lg rounded-full mt-12"
  initial={{ scaleX: 0, transformOrigin: "left" }} // Start from left edge
  whileInView={{ scaleX: 1, transformOrigin: "center" }} // Expand from edges to center
  transition={{ duration: 1.5, ease: "easeInOut" }}
  whileHover={{
    scaleY: 1.8,
    boxShadow: "0px 0px 15px rgba(0, 255, 200, 0.7)",
  }}
/>
   <IntershipInfo/>

   <div className="text-center py-24 px-4 space-y-10" >
  {/* Icon */}
  <motion.div
    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: "backOut" }}
    viewport={{ once: true }}
    className="flex justify-center"
  >
    <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 p-5 rounded-full shadow-xl shadow-cyan-400/40 animate-pulse">
      <FaBriefcase className="text-white text-4xl" />
    </div>
  </motion.div>

  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-400 text-transparent bg-clip-text"
  >
    Discover Your Dream Domain
  </motion.h2>

  {/* Paragraph */}
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.1, delay: 0.4, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="text-lg max-w-2xl mx-auto text-white/85 leading-relaxed"
  >
    Dive into tailored internships built for your strengths. From creative arts to cutting-edge tech, uncover
    opportunities that fuel your passion and shape your future.
  </motion.p>

  {/* CardStack Section */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex justify-center items-center mt-10"
  >
    <CardStack items={cardsData} />
  </motion.div>
</div>

      
    </div>
  );;
}
