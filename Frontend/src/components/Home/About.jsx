import { useState, useEffect } from "react";
import { ArrowRight, Heart, Users, Globe, Trees } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
function About() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="mt-20 py-16">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto flex items-center justify-center flex-col md:flex-row px-4"
          >
            <motion.div
              className="md:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <img
                src="https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg'"
                alt="About Us"
                className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            <motion.div
              className="md:w-1/2 md:pl-12 mt-8 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, staggerChildren: 0.1 }}
            >
              <motion.h2
                className="text-4xl text-gray-50 font-bold text-center md:text-left mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Who are we?
              </motion.h2>

              <motion.p
                className="text-gray-200 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae labore, iusto quasi quisquam quo numquam illum id nemo
                laboriosam dicta dolorum. Est veniam magnam deserunt qui! Hic
                voluptatibus eum facilis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </motion.p>

              <motion.button
                onClick={() => navigate("/about")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Know more
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}

export default About;
