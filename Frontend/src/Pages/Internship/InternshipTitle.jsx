import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, HeartHandshake, BookOpen, Stethoscope } from "lucide-react";

export default function InternshipTitle() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center relative px-4">
      {/* Floating Icons in Circular Motion */}
      <motion.div
        className="absolute left-12 top-1/3 text-yellow-400"
        animate={{ x: [0, -10, 0, 10, 0], y: [0, 10, 20, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Award size={70} className="drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute right-12 bottom-1/3 text-blue-400"
        animate={{ x: [0, 10, 0, -10, 0], y: [0, -10, -20, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Briefcase size={70} className="drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute left-1/4 bottom-1/4 text-green-400"
        animate={{ x: [0, -10, 0, 10, 0], y: [0, -15, -25, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <HeartHandshake size={70} className="drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute right-1/4 top-1/4 text-purple-400"
        animate={{ x: [0, 10, 0, -10, 0], y: [0, 15, 25, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <BookOpen size={70} className="drop-shadow-lg" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-16 text-red-400"
        animate={{ x: [0, 10, 0, -10, 0], y: [0, 20, 30, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Stethoscope size={70} className="drop-shadow-lg" />
      </motion.div>

      {/* Heading with Scale Animation */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Explore Our Exciting Internship Domains!
      </motion.h1>

      {/* Gradient Underline Animation */}
      <motion.div
        className="h-1 w-32 mx-auto mt-3 bg-gradient-to-r from-pink-500 to-blue-500"
        initial={{ width: 0 }}
        animate={{ width: "128px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      ></motion.div>

      {/* Description with Fade-In Animation */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 mt-5 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        Join us at <span className="font-bold text-white">Renusharma Foundation</span> to gain hands-on experience in{" "}
        <span className="font-semibold text-white">healthcare, education, social work, and leadership</span>. 
        Work on <span className="font-semibold text-white">real-world projects</span>, collaborate with industry experts, and{" "}
        <span className="font-semibold text-white">make a difference</span> in people’s lives while enhancing your career opportunities.
      </motion.p>
    </div>
  );
}
