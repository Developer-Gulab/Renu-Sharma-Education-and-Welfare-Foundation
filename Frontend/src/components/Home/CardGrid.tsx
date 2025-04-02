import React from "react";
import { WiDirectionUpRight } from "react-icons/wi";
import { BsEmojiSmile } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const CardGrid = () => {
  return (
    <motion.div
      className="flex flex-row gap-2 w-screen h-full -mt-16 px-2 items-end"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col w-full gap-2 h-full"
        variants={itemVariants}
      >
        <motion.div
          className="h-72 rounded-3xl bg-[#001F3F] w-full flex flex-col justify-between p-6"
          whileHover={{ scale: 1.02 }}
        >
          <div className="space-y-4">
            <p className="text-5xl font-bold text-white">75%</p>
            <p className="text-white/90 text-sm leading-tight">
              Of underprivileged families in our communities lack access to
              quality healthcare and education. Join us in making a difference.
            </p>
          </div>
          <button className="flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 transition-colors py-4 px-6 rounded-full text-white font-medium w-full group">
            <span>Donate now</span>
            <span className="bg-[#001F3F] rounded-full p-1 group-hover:bg-[#001F3F]/80 transition-colors">
              <WiDirectionUpRight className="text-2xl text-white" />
            </span>
          </button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="col-span-1 rounded-3xl bg-[#001F3F]/20 p-6 flex items-center gap-20"
        >
          <p className="text-[#001F3F] font-medium text-xl">
            Support our mission
          </p>
          <BsEmojiSmile className="text-4xl text-[#001F3F]" />
        </motion.div>
      </motion.div>
      <motion.div
        className="h-80 w-full rounded-3xl relative overflow-hidden"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src="/kid.webp"
          alt="Education"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full w-full bg-[#001F3F]/60 p-6 flex items-end">
          <p className="text-white/90 text-2xl text-left">
            Free Healthcare Services for 2,000+ Families
          </p>
        </div>
      </motion.div>
      <motion.div
        className="h-1/2 bg-[#001F3F]/10 w-full rounded-3xl py-12  gap-8 flex flex-col justify-center items-center"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <div className="space-y-2">
          <p className="text-xl font-bold text-[#001F3F]">
            Join 1000+ Monthly Donors
          </p>
        </div>
        <button className="flex items-center justify-between gap-2 bg-[#001F3F] hover:bg-[#001F3F]/80 transition-colors py-3 px-6 rounded-full text-white font-medium w-[80%] group">
          <span>Join community</span>
          <span className="bg-[#001F3F]/40 rounded-full p-1 group-hover:bg-[#001F3F]/60 transition-colors">
            <WiDirectionUpRight className="text-xl" />
          </span>
        </button>
      </motion.div>
      <motion.div
        className="h-80 w-full rounded-3xl relative overflow-hidden"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
      >
        <img
          src="/education.jpeg"
          alt="Education"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full w-full bg-[#001F3F]/60 p-6 flex items-end">
          <p className="text-white/90 text-2xl text-left">
            Quality Education for 1,500+ Students
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col w-full gap-2 h-full"
        variants={itemVariants}
      >
        <motion.div
          className="h-72 bg-[#001F3F] rounded-3xl flex flex-col items-center justify-between p-6"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-full h-48 overflow-hidden rounded-2xl">
            <img
              src="/meeting.png"
              alt="Our Impact"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 transition-colors py-4 px-6 rounded-full text-white font-medium w-full group">
            <span>See our services</span>
            <span className="bg-[#001F3F]/40 rounded-full p-1 group-hover:bg-[#001F3F]/60 transition-colors">
              <WiDirectionUpRight className="text-2xl" />
            </span>
          </button>
        </motion.div>
        <motion.div
          className="p-6 bg-[#001F3F]/10 rounded-3xl flex items-center justify-between gap-4"
          whileHover={{ scale: 1.02 }}
        >
          <div className="bg-[#001F3F] p-2 rounded-full">
            <FaRegHeart className="text-xl text-white" />
          </div>
          <h3 className="text-xl font-medium text-[#001F3F]">
            Transforming lives together
          </h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardGrid;
