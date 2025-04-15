import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://give.do/blog/wp-content/uploads/2023/08/The-role-of-the-education-NGO-in-India-enthusiastic-children-beneficiaries-education-classroom-preview.jpg",
  "https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=612x612&w=0&k=20&c=2JlS1vqg4pU5lCp8oiFXjVgMPlHbhrmH4wmtRJdq384=",
  "https://www.shutterstock.com/image-photo/new-delhi-indiaoct-10-2021-260nw-2057187539.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8Jxrp2G5SK88GJebOIu8RMrjm66CZY-Te_xydeEByrByLgeo0M9Jc_3rJExG5afs0fg&usqp=CAU",
  "https://www.devamitra.org/wp-content/uploads/2019/01/1.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-[#001F3F]">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Picture </h2>
      <div className="relative w-full max-w-4xl h-64 overflow-hidden mx-auto my-8 rounded-lg shadow-lg p-4 bg-gray-100"> {/* Subtle background color */}
        <motion.div
          className="absolute inset-0 flex"
          initial={{ x: '0%' }}
          animate={{ x: `-${currentIndex * (100 / 3)}%` }} // Move based on current index
          transition={{ duration: 0.5 }}
        >
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover mx-1" // Added small margin for spacing between images
            />
          ))}
        </motion.div>
      </div>

     
    </div>
  );
};

export default ImageSlider;