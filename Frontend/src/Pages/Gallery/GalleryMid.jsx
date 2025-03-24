import React, { useState, useEffect } from "react";
import educationGalleryImg from "../../data/educationGalleryImg.json";
import healthCareGallery from "../../data/healthCareGallery.json";
import donationGallery from "../../data/donationGallery.json";
import volunteersGallery from "../../data/volunteersGallery.json";
import internshipGallery from "../../data/internshipGallery.json";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa"; // Import a like icon

const categoryData = {
  Education: educationGalleryImg,
  Healthcare: healthCareGallery,
  Donation: donationGallery,
  Volunteer: volunteersGallery,
  Internship: internshipGallery,
};

function GalleryMid({ selectedCategory }) {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (selectedCategory in categoryData) {setLoading(true); setImages([]);
    setTimeout(() => { 
      const updatedImages = categoryData[selectedCategory].map((item) => ({ ...item, likes: item.likes || 0, // Default to 0 if no likes field exists
      }));
      setImages(updatedImages); setLoading(false);}, 500);  // Smooth transition
    } }, [selectedCategory]);

    //handle like button functionality
  const handleLike = (index) => {
    if (lightboxIndex !== null) {
      const updatedImages = [...images];
      updatedImages[lightboxIndex].likes += 1;
      setImages(updatedImages);
    }
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-4 mb-8">
    <motion.h1 initial={{ opacity: 0, x: -100, }}  whileInView={{ x: 0, opacity: 1 }} 
    transition={{ duration: 1.5, ease: "easeOut", }}
  className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] leading-relaxed mt-4"
     >{selectedCategory} Gallery </motion.h1>

   {/* Masonry Grid */}
      <motion.div initial="hidden" animate="visible"
        variants={{
         hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-12"  >

        {loading ? (
  <div className="flex justify-center items-center h-40">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
  </div>):
  ( images.length > 0 ? (
       images.map((item, index) => (
       <motion.div  key={item.id} variants={{
         hidden: { opacity: 0, scale: 0.8 },
         visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }, }}
        className="relative mb-4 group overflow-hidden rounded-lg cursor-pointer"
        onClick={() => setLightboxIndex(index)} >
        
       <motion.img src={item.image} alt="Gallery"
  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 text-white">
       <p className="text-lg font-semibold">{item.project}</p>
         <div>
          <p className="text-sm">{item.event}</p>
           <p className="text-sm font-bold">{item.date}</p>
        </div>
           {/*show likes count on images */}
           <div className="absolute bottom-2 right-2 bg-gray-900 bg-opacity-70 text-white px-2 py-1 rounded-lg text-sm flex flex-row items-center">
           <FaHeart className="text-red-500" />&nbsp;{item.likes} 
              </div>
            
        </div>
        </motion.div>
          ))
        ) :
         ( <p className="text-center text-lg text-gray-500">No images available for {selectedCategory}</p> ) )
        }
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 backdrop-blur-md z-50"  >

       <motion.div initial={{ scale: 0.8, opacity: 0 }}  animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
     className="relative bg-black bg-opacity-40 border border-gray-700 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] w-full max-w-3xl mx-4 flex flex-col items-center overflow-hidden"
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400 transition-all"
                onClick={() => setLightboxIndex(null)}
              >
                ✖
              </button>
              <motion.img
                src={images[lightboxIndex]?.image}
                alt="Gallery"
                className="max-w-full w-full max-h-[80vh] object-fill rounded-lg"
              />
              {/* Like Button Overlaid on Image */}
              <motion.button
          onClick={handleLike}
          whileTap={{ scale: 1.2 }} // Slight zoom effect when clicked
          whileHover={{ scale: 1.1 }} // Slight scale on hover
          className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full text-xl flex items-center gap-2 hover:bg-opacity-70 transition-all"
        >
          <motion.div
            key={images[lightboxIndex]?.likes} // Ensures animation triggers on every update
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.3, opacity: 1, color: "#ff0000" }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <FaHeart className="text-red-500" />
          </motion.div>
          {images[lightboxIndex]?.likes}
        </motion.button>
        
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default GalleryMid;