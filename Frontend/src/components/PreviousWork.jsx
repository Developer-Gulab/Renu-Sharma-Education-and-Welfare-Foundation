import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

// Import images from assets
import PW1 from "../assets/PW1.jpeg";
import PW2 from "../assets/PW2.jpeg";
import PW3 from "../assets/PW3.jpeg";
import PW4 from "../assets/PW4.jpeg";
import PW5 from "../assets/PW5.jpeg";
import PW6 from "../assets/PW6.jpeg";
import PW7 from "../assets/PW7.gif";
import PW8 from "../assets/PW8.jpeg";

const WhyUsCard = ({ imageSrc, direction }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative group bg-[#001f3f] p-4 rounded-xl shadow-md max-w-xs w-full h-52 flex items-center justify-center overflow-hidden"
    >
      <a
        href="https://github.com/anjubhargavi1224"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-full"
      >
        <img
          src={imageSrc}
          alt="Why Us"
          className="w-full h-full object-cover rounded-lg"
        />
      </a>

      {/* Glossy Sweep Effect */}
      <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-white opacity-20 transform rotate-12 group-hover:animate-sweep" />
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  const imageSets = [
    [PW1, PW2, PW3, PW4],
    [PW5, PW6, PW7, PW8],
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % imageSets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-[#001f3f] overflow-hidden"
    >
      {/* Heading */}
      <div className="relative text-center mb-24 z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Previous Works
        </motion.h2>
      </div>

      {/* Circle Background with Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[500px] h-[500px] rounded-full border-2 border-gray-200 flex items-center justify-center">
          <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-gray-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-gray-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-center text-base md:text-lg font-semibold text-white px-4 z-10"
          >
            Explore our finest creations
          </motion.p>
        </div>
      </div>

      {/* Images */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-14 place-items-center max-w-6xl mx-auto px-6 z-10">
        <AnimatePresence mode="wait">
          {imageSets[currentSet].map((src, idx) => (
            <WhyUsCard
              key={`${currentSet}-${idx}`}
              imageSrc={src}
              direction={idx % 2 === 0 ? "left" : "right"}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WhyUs;
