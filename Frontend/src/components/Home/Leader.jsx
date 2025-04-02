import React from "react";
import { motion } from "framer-motion";

function Leader() {
  const teamMembers = [
    {
      title: "John Doe",
      designation: "CEO",
      description: "Connect with people and build community",
      hoverText: "Community",
      image:
        "https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg",
    },
    {
      title: "Michael Johnson",
      designation: "Founder",
      description: "Visiting various places to connect with the peoples",
      hoverText: "Connect with people",
      image:
        "https://img.freepik.com/premium-photo/young-man-formal-attire-his-workplace-generative-ai_94628-10978.jpg",
    },
    {
      title: "David Williams",
      designation: "Director",
      description: "Providing quality education to underprivileged children",
      hoverText: "Education",
      image:
        "https://th.bing.com/th/id/OIP.RLcJBl8mSFJnFtcg13TGDwHaE8?rs=1&pid=ImgDetMain",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      <section>
        <div className="container mx-auto flex items-center justify-center flex-col pt-32 px-4">
          <motion.h2
            className="text-7xl text-[#001F3F] font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Team
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative text-center bg-white p-6 rounded-3xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.img
                  src={member.image}
                  alt={member.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                  initial={{ filter: "grayscale(100%)" }}
                  whileHover={{ filter: "grayscale(0%)" }}
                  transition={{ duration: 0.3 }}
                />

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#001F3F]">
                    {member.title}
                  </h3>
                  <p className="text-gray-600">{member.designation}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Leader;
