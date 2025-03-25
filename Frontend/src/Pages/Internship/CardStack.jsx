import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "./utils/cn.js"; // Import cn utility
import InternshipForm from "./InternhipForm.jsx";

const CardStack = ({ items, scaleFactor = 0.05 }) => {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()); // Moves last card to front
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  const offset = 30 / items.length; // ✅ Dynamic offset to fit all cards in 60vh

  return (
    <div
      className="relative w-full flex justify-center items-center overflow-visible"
      style={{ height: `${60 + (items.length - 1) * offset}vh` }} // ✅ Adjust container height dynamically
    >
      {cards.map((card, index) => (
    <motion.div
    key={card.id}
    className={cn(
      "absolute dark:bg-black bg-white h-[65vh] w-[90%] rounded-3xl p-4",
      "shadow-xl border border-neutral-200 dark:border-white/[0.1]",
      "shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between",
      "bg-cover bg-center group overflow-hidden" // ✅ Prevents hover overflow
    )}
    style={{
      backgroundImage: `url(${card.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      transformOrigin: "top center",
      zIndex: cards.length - index,
    }}
    animate={{
      top: `${index * offset}vh`,
      scale: 1 - index * scaleFactor,
      opacity: 1,
    }}
    transition={{ duration: 0.5 }}
  >
    {/* ✅ Glassmorphism Box with Fixed Height */}
    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[75%] bg-white/10 backdrop-blur-lg rounded-lg py-3 px-5 shadow-md border border-white/30 transition-all duration-300 group-hover:border-white/70 group-hover:scale-[1.02]">
      <h2 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 tracking-[2px] text-center uppercase relative drop-shadow-lg transition-all duration-500 ease-in-out group-hover:text-white">
        {card.name}
        {/* 🔥 Expanding Underline */}
        <span className="absolute left-1/2 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 opacity-90 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
      </h2>
    </div>
  
    {/* ⭐ Rating Box at Bottom-Left */}
    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2 border border-white/30 transition-all duration-300 group-hover:border-white/70 group-hover:scale-[1.05]">
      <span className="text-yellow-400 text-lg font-semibold">{card.rating}</span>
      <span className="text-yellow-400 text-lg">⭐</span>
    </div>
  
    {/* 📌 Buttons at Bottom-Right */}
    <div className="absolute bottom-4 right-4 flex space-x-4">
      <button className="relative px-5 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/30 transition-all duration-300 group-hover:border-transparent 
        group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500">
        Know More
      </button>
  
      <button className="relative px-5 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/30 transition-all duration-300 group-hover:border-transparent 
        group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500" onClick={()=>document.getElementById("my_modal_3").showModal()}>
        Enroll
      </button>
      <InternshipForm card={card}  />
    </div>
  </motion.div>
      ))}
    </div>
  );
};

export default CardStack;
