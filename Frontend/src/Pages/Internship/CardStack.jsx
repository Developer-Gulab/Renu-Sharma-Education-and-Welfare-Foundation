import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "./utils/cn.js"; // Import cn utility

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
            "absolute dark:bg-black bg-white h-[60vh] w-[80%] rounded-3xl p-4",
            "shadow-xl border border-neutral-200 dark:border-white/[0.1]",
            "shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          )}
          style={{
            transformOrigin: "top center",
            zIndex: cards.length - index, // ✅ Ensures correct stacking order
          }}
          animate={{
            top: `${index * offset}vh`, // ✅ Dynamic offset to spread cards evenly
            scale: 1 - index * scaleFactor, // ✅ Ensures smooth scaling
            opacity: 1, // ✅ Keep all cards visible
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-normal text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 font-medium dark:text-white">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardStack;
