import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import list from "../../assets/categorylist.json";
import Cards from "./Cards"; // Adjust path based on your folder structure
import PhotoGallerySection from "./PhotoGallerySection"
import VideoGallerySection from "./VideoGallerySection"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function GalleryMid() {
  const [selectedCategory, setSelectedCategory] = useState("Education");
  const [active, setActive] = useState("photos");
  const sectionRef = useRef(null);

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };

  useEffect(() => {
    console.log("Rendering GalleryContent for category:", selectedCategory);
  }, [selectedCategory]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" container mx-auto w-full overflow-hidden">
      {/* Carousel Section */}
      <div className="px-9 mt-4 bg-white">
        <div className="slider-container">
          <Slider {...settings}>
            {list.map((el, index) => (
              <motion.div
                key={el.id}
                initial={{ opacity: 0, y: 20, rotateY: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
                style={{ perspective: 1000 }}
              >
                <Cards item={el} onClick={() => handleCardClick(el.category)} />
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>

      <hr className="w-1/2 mx-auto mt-14 bg-black-700 h-1" />

      {/* Toggle Buttons */}
      <div className="flex gap-4 justify-center mt-12">
        <button
          onClick={() => setActive("photos")}
          className={`px-6 py-2 rounded-full border transition font-medium ${
            active === "photos"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border-blue-500"
          }`}
        >
          Show Photos
        </button>
        <button
          onClick={() => setActive("videos")}
          className={`px-6 py-2 rounded-full border transition font-medium ${
            active === "videos"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500 border-blue-500"
          }`}
        >
          Show Videos
        </button>
      </div>

      {/* Conditional Rendering */}
      {active === "photos" && selectedCategory && (
        <PhotoGallerySection selectedCategory={selectedCategory} scrollToRef={sectionRef} />
      )}
      {active === "videos" && selectedCategory && (
        <VideoGallerySection selectedCategory={selectedCategory} scrollToRef={sectionRef} />
  
      )}
    </div>
  );
}

export default GalleryMid;
