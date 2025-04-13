
import React from "react";
import vedio from "../../assets/vediomp4.mp4";
import { motion } from "framer-motion";




export default function GalleryHeader() {
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-8 ">

        {/*vedio container*/}
        <div className="">
          <motion.div initial={{ opacity: 0, scale: 1 }} whileInView={{ opacity: 1, scale: 1.1 }} transition={{ duration: 2, ease: "easeInOut" }}
            className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center group rounded-md">
            {/* Video with Smooth Zoom-in Effect */}
            <motion.video initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted >

              <source src={vedio} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>

            {/* Animated Dark Overlay */}
            <motion.div initial={{ opacity: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full h-full bg-black" ></motion.div>

            {/* Animated Text with Slide-in Effect */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute text-white text-2xl md:text-4xl  font-bold bottom-4 left-4 bg-black/20 px-4 py-2  rounded-lg border-l-8 border-blue-700 pl-4 flex flex-col md:flex-row"
            >
              <p>Capturing Moments&nbsp;</p><p>Creating Change</p>
              
            </motion.h1>
          </motion.div>
        </div>


        <div className="text-center my-44">
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-bold text-pink-900 text-4xl md:text-5xl mb-6 tracking-wide pt-5  "
          >
            Our Journey of Change & Impact
          </motion.h1>

          {/* Expanding Line */}
          <motion.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "80%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-1 bg-blue-600 mx-auto "
          ></motion.div>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed mt-4"
          >
            Every moment captured reflects our commitment to <span className="font-semibold text-blue-600">uplifting communities, empowering individuals,</span>
            and driving meaningful change. From humanitarian efforts to grassroots initiatives, our gallery showcases
            the <span className="font-semibold text-green-600">real impact of collective action and compassion.</span>
          </motion.p>
        </div>
      </div>

      
     

      
     
    </>
  );
}



