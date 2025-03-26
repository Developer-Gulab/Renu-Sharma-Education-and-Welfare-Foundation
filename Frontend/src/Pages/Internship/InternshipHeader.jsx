import React from "react";
import CardStack from "./CardStack";
import cardsData from "./utils/internshipdomain.json";
import { motion } from "framer-motion";

export default function InternshipHeader() {
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

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 overflow-hidden">
      {features.map((feature, index) => {
        const isEdge = index === 0 || index === features.length - 1; // Edge cards check
        return (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              x: isEdge ? (index === 0 ? -50 : 50) : 0,  // Reduced x movement
              scale: isEdge ? 0.9 : 0.95 
            }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is in view
            className="bg-white text-gray-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl max-w-full"
          >
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </motion.div>
        );
      })}
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

      <div className="h-screen flex items-center justify-center mt-10">
        <CardStack items={cardsData} />
      </div>
      
    </div>
  );
}
