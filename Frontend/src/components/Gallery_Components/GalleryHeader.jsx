import React, { useState } from 'react';
import { motion } from 'framer-motion';
import photoes from "../../assets/headerPhotos.json";

function GalleryHeader({ scrollToRef }) {
  const [current, setCurrent] = useState(0);

  const preSlide = () => {
    setCurrent((current - 1 + photoes.length) % photoes.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % photoes.length);
  };

  const scrollToRecentEvents = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="relative h-screen w-full overflow-hidden "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      
    >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-35 z-0" />
    
      {/* Carousel Background Image */}
      <img
        src={photoes[current].img}
        alt="Gallery Slide"
        className="w-full h-screen object-cover "
      />

      {/* Left/Right Navigation Buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2 z-20">
        <button onClick={preSlide} className="btn btn-square text-white text-3xl border-none  bg-opacity-0 font-normal hover:bg-opacity-30 ">❮</button>
        <button onClick={nextSlide} className="btn btn-square text-white text-3xl border-none  bg-opacity-0 font-normal hover:bg-opacity-30">❯</button>
      </div>

      {/* Header Text Content */}
      <div className="absolute  top-1/3 left-24  text-white font-sans">
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl pb-5 font-extrabold bg-gradient-to-r from-red-600 via-orange-500 to-white bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
        >
          Our Journey in Gallery
        </motion.h1>

        <motion.p
          className="text-lg mt-4  font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Witness the Renu Sharma Foundation’s impact through powerful moments<br />captured in photos, highlighting transformation and hope in every frame.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 text-black bg-gradient-to-r from-[#CF0F47] to-[#FF0B55] hover:from-[#FF0B55] hover:to-[#CF0F47] px-6 py-3 rounded-full font-semibold text-lg shadow-lg transition duration-300"
          onClick={scrollToRecentEvents}
        >
          Explore More
        </motion.button>
      </div>
    </motion.header>
  );
}

export default GalleryHeader;












