import { useState, useEffect } from "react";
import { ArrowRight, Heart, Users, Globe, Trees } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
function Impact() {
  const impactStats = [
    {
      icon: <Users className="text-blue-600 w-12 h-12" />,
      number: 5000,
      suffix: "+",
      label: "educate childrens",
    },
    {
      icon: <Globe className="text-green-600 w-12 h-12" />,
      number: 20,
      suffix: "+",
      label: "States Served",
    },
    {
      icon: <Heart className="text-red-600 w-12 h-12" />,
      number: 100,
      suffix: "+",
      label: "Active Programs",
    },
    {
      icon: <Trees className="text-green-600 w-12 h-12" />,
      number: 10000,
      suffix: "+",
      label: "trees planted",
    },
  ];
  return (
    <div>
      <section className="container mx-auto h-[500px] mt-10 py-16 px-4">
        <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
          Our Impact
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 mt-24 gap-8 "
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center flex justify-center items-center flex-col p-6 hover:bg-white/5 rounded-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                className="text-4xl font-bold text-gray-100 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {stat.number}
                <span className="text-xl">{stat.suffix}</span>
              </motion.h3>
              <motion.p
                className="text-gray-400 font-medium mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Impact;
