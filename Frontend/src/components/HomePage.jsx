import { useState } from "react";
import { motion } from "framer-motion";
import Hs1 from "../assets/Hs1.png";
import Hs2 from "../assets/Hs2.png";
import Hs3 from "../assets/Hs3.png";
import Hs4 from "../assets/Hs4.png";

const HomePage = ({onOpen}) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-between bg-[#001f3f] overflow-hidden px-10">
      {/* Left Content */}
      <div className="relative z-10 text-white text-left max-w-lg">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Empowering your growth through internships and freelancing.
        </motion.h1>

        {/* Interactive Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col items-start max-w-lg border border-white/20"
        >
          <p className="text-sm text-gray-200 mb-6">
            At Renu Sharma Foundation, we connect passionate learners with
            real-world opportunities in internships and freelancing. Let’s build
            your future together!
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full border border-blue-300 shadow-md transition-all duration-300"
            onClick={onOpen}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Right Content – Floating Images */}
      <motion.div
        className="relative w-[40%] h-[80%] grid grid-cols-2 grid-rows-2 gap-3 p-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {[Hs1, Hs2, Hs3, Hs4].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-md"
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HomePage;
