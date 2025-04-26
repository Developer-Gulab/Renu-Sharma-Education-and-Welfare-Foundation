import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "./utils/cn.js"; 
import InternshipForm from "./InternhipForm.jsx";
import { ArrowRightCircle } from "lucide-react"; 

const CardStack = ({ items, scaleFactor = 0.05 }) => {
  const [cards, setCards] = useState(items);

  const handleNext = () => {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()); // Moves the first card to the back
      return newArray;
    });
  };

  const offset = 35 / items.length;

  return (
    <div className="relative w-full flex flex-col items-center justify-center h-screen ">
      <div className="relative w-full flex justify-center items-center overflow-visible" style={{ height: `${60 + (items.length - 1) * offset}vh` }}>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={cn(
              "absolute dark:bg-black bg-white h-[75vh] w-[95%] rounded-3xl p-4",
              "shadow-xl border border-neutral-200 dark:border-white/[0.1]",
              "shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between",
              "bg-cover bg-center group overflow-hidden"
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
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[85%] bg-white/10 backdrop-blur-lg rounded-lg py-3 px-5 shadow-md border border-white/30 transition-all duration-300 group-hover:border-white/70 group-hover:scale-[1.02]">
              <h2 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 tracking-[2px] text-center uppercase relative drop-shadow-lg transition-all duration-500 ease-in-out group-hover:text-white">
                {card.name}
                <span className="absolute left-1/2 bottom-[-4px] w-0 h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 opacity-90 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </h2>
            </div>

            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2 border border-white/30 transition-all duration-300 group-hover:border-white/70 group-hover:scale-[1.05]">
              <span className="text-yellow-400 text-lg font-semibold">{card.rating}</span>
              <span className="text-yellow-400 text-lg">⭐</span>
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-4">
              
            <motion.button
      className="relative px-5 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/30 transition-all duration-300 group-hover:border-transparent 
      group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500"
      onClick={() => document.getElementById("my_modal_3").showModal()}
      whileTap={{ scale: 0.9 }}  // Shrink on click
      transition={{ type: "spring", stiffness: 300, damping: 20 }}  // Smooth transition
    >
      <div className="flex flex-col md:flex-row items-center">
        <span className="font-bold text-2xl">Enroll Now</span>
        <span className="ml-3">
          <ArrowRightCircle size={30} className="text-white" />
        </span>
      </div>
    </motion.button>
               </div>
              <InternshipForm card={card} />
             
          </motion.div>
        ))}
      </div>
      {/*next button*/}
      <div className="w-full flex justify-center mt-6"> {/* Adjusted spacing below cards */}
      <motion.button
  onClick={handleNext}
  className="flex items-center justify-center gap-3
             w-[240px] md:w-[270px] lg:w-[300px] px-6 py-3
             bg-gradient-to-r from-purple-600 to-blue-600
             text-white font-semibold text-lg md:text-xl
             rounded-full shadow-xl transition-all duration-300 ease-in-out
             hover:from-pink-500 hover:to-red-500 hover:shadow-[0_0_25px_rgba(255,105,180,0.7)]
             focus:outline-none focus:ring-4 focus:ring-pink-300"
  whileInView={{ y: [0, -5, 0] }}
  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95, rotate: -3 }}
  aria-label="Navigate to new domain"
>
  <motion.span
    initial={{ x: 0 }}
    whileTap={{ x: [0, 10, 25], opacity: [1, 1, 0] }}
    transition={{ duration: 0.4 }}
  >
    <ArrowRightCircle size={26} className="text-white" />
  </motion.span>
  <span className="tracking-wide font-bold">Explore More</span>
</motion.button>

</div>



    </div>
  );
};

export default CardStack;
 
