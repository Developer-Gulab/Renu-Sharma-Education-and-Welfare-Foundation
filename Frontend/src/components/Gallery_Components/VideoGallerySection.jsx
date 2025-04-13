import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";

// Import video JSONs
import educationVideos from "../../data/video/educationVideos.json";
import donationVideos from "../../data/video/donationVideo.json";
import healthCareVideos from "../../data/video/healthCareVideo.json";
import internshipVideos from "../../data/video/internshipVideo.json";
import volunteersVideos from "../../data/video/volunteersVideo.json";

const categoryData = {
  Education: educationVideos,
  Healthcare: healthCareVideos,
  Donation: donationVideos,
  Volunteer: volunteersVideos,
  Internship: internshipVideos,
};

function VideoGallerySection({ selectedCategory, scrollToRef }) {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (selectedCategory in categoryData) {
      setLoading(true);
      setVideos([]);
      setTimeout(() => {
        const updated = categoryData[selectedCategory].map((item) => ({
          ...item,
          likes: item.likes || 0,
        }));
        setVideos(updated);
        setLoading(false);
      }, 500);
    }
  }, [selectedCategory]);

  const handleLike = () => {
    const updated = [...videos];
    updated[lightboxIndex].likes += 1;
    setVideos(updated);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16 pb-36 bg-yellow-50" ref={scrollToRef}>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] leading-relaxed mt-4 pt-10 pb-2"
      >
        {selectedCategory} Videos
      </motion.h1>

      {/* Grid Gallery */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12"
      >
        {loading ? (
          <div className="col-span-full flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-yellow-500"></div>
          </div>
        ) : videos.length > 0 ? (
          videos.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
              }}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <video
                src={item.video}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 rounded-md"
                loop
                muted
                autoPlay
                controls={false}

              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 text-white">

                <div>
                  <p className="text-md">{item.event}</p>
                  <p className="text-sm">{item.location}</p>
                  <p className="text-sm font-bold">{item.date}</p>
                </div>
                <div className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-70 px-2 py-1 rounded-lg text-sm flex items-center">
                  <FaHeart className="text-red-500" /> &nbsp;{item.likes}
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500 col-span-full">
            No videos available for {selectedCategory}
          </p>
        )}
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 backdrop-blur-md z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-black bg-opacity-40 border border-gray-700 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] w-full max-w-3xl mx-4 flex flex-col items-center overflow-hidden"
            >
              <button
                className="absolute top-4 right-4 text-white  z-50 text-3xl font-bold hover:text-red-400 transition-all cursor-pointer"
                onClick={() => setLightboxIndex(null)}
              >
                ✖
              </button>
              <video
                src={videos[lightboxIndex]?.video}
                className="max-w-full w-full max-h-[80vh] object-fill rounded-lg"
                controls
                autoPlay
                disablePictureInPicture
              />
              <motion.button
                onClick={handleLike}
                whileTap={{ scale: 1.2 }}
                whileHover={{ scale: 1.1 }}
                className="absolute left-2 top-2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full text-xl flex items-center gap-2 hover:bg-opacity-70"
              >
                <motion.div
                  key={videos[lightboxIndex]?.likes}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1.3, opacity: 1, color: "#ff0000" }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                {videos[lightboxIndex]?.likes}
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default VideoGallerySection;




