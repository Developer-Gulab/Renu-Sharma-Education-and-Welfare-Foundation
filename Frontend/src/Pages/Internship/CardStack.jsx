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
    <div className="relative w-full flex flex-col items-center justify-center h-screen mb-0">
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
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[75%] bg-white/10 backdrop-blur-lg rounded-lg py-3 px-5 shadow-md border border-white/30 transition-all duration-300 group-hover:border-white/70 group-hover:scale-[1.02]">
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
              
              <button className="relative px-5 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/30 transition-all duration-300 group-hover:border-transparent 
                group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500" onClick={()=>document.getElementById("my_modal_3").showModal()}>
              <div className="flex flex-col md:flex-row items-center">
                <span className="font-bold text-2xl"> Enroll Now  </span> 
              <span className="ml-3"> <ArrowRightCircle size={30} className="text-white" /> </span></div>
              </button>
               </div>
              <InternshipForm card={card} />
             
          </motion.div>
        ))}
      </div>
      {/*next button*/}
      <div className="w-full flex justify-center mt-6"> {/* Adjusted spacing below cards */}
  <motion.button
    onClick={handleNext}
    className="flex items-center justify-center gap-4 
               w-[260px] md:w-[280px] lg:w-[300px] px-6 md:px-8 py-4 
               bg-gradient-to-r from-purple-600 to-blue-600 text-white 
               font-extrabold text-xl md:text-2xl rounded-full shadow-xl transition-all 
               hover:shadow-[0_0_20px_rgba(255,105,180,0.8)] 
               hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 mb-12"
    whileInView={{ y: [0, -5, 0] }} // Floating effect
    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    whileHover={{ scale: 1.15, boxShadow: "0px 5px 20px rgba(255, 0, 150, 0.7)" }} // Glow effect
    whileTap={{ scale: 0.95, rotate: -2 }} // Click effect
  >
    <motion.span
      initial={{ x: 0 }}
      whileTap={{ x: [0, 10, 25], opacity: [1, 1, 0] }} // Moves right & disappears on click
      transition={{ duration: 0.4 }}
    >
      <ArrowRightCircle size={30} className="text-white" /> {/* Icon slightly left */}
    </motion.span>
    <span className="tracking-wider">Next</span>
  </motion.button>
</div>



    </div>
  );
};

export default CardStack;
{/*
  
const reviews = [
    {
        username: "Aman Panwar",
        internshipName: "Web Development",
        review: "Great experience! Learned a lot about React and Node.js.",
        rating: 5,
        image: "https://img.freepik.com/free-photo/close-up-photo-young-successful-business-man-black-suit_171337-9509.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "John Doe",
        internshipName: "UI/UX Design",
        review: "Had a fantastic time working with an amazing team!",
        rating: 4,
        image: "https://img.freepik.com/free-photo/business-man-front-office-building_23-2148018576.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "Jane Smith",
        internshipName: "App Development",
        review: "Gained deep insights into API development.",
        rating: 5,
        image: "https://img.freepik.com/free-photo/elegant-man-with-folded-arms_1262-727.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "Alice Johnson",
        internshipName: "Data Analyst",
        review: "Exciting projects and great mentors!",
        rating: 4,
        image: "https://img.freepik.com/free-photo/portrait-confident-businessman_107420-74362.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "Michael Brown",
        internshipName: "Cybersecurity Analyst",
        review: "Hands-on experience with real-world security threats.",
        rating: 5,
        image: "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    },
    {
        username: "Sophia Wilson",
        internshipName: "Digital Marketing",
        review: "Learned about digital marketing and branding strategies!",
        rating: 4,
        image: "https://img.freepik.com/free-photo/businessman-with-crossed-arms_23-2147996582.jpg?ga=GA1.1.1675882604.1742791663&semt=ais_hybrid"
    }
];
  
  */ }
