import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "url('https://img.freepik.com/premium-photo/big-crowd-indian-women-vector-avatars-indian-woman-representing-different-statesreligions-i_1057738-35662.jpg')",
    "url('https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg')",
    "url('https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg')",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <section className="relative bg-cover bg-center h-screen text-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: images[currentImageIndex] }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-blue-900/60"></div>

        <motion.div
          className="relative z-10 container mx-auto px-4 flex flex-col justify-center h-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              className="inline-block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Empowering Lives,
            </motion.span>
            <br />
            <motion.span
              className="inline-block mt-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Creating Change
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl mb-8 max-w-2xl text-gray-100 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Together, we can make a difference and
            <br /> transform communities through sustainable solutions.
          </motion.p>

          <motion.div
            className="space-x-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              onClick={() => navigate("/donate")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                Donate for good
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? "bg-white" : "bg-white/30"
                }`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
