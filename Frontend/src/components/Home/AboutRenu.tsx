import React from "react";
import { motion } from "framer-motion";

const AboutRenu = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 pt-60 justify-center md:space-x-32 items-center">
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold text-[#001F3F] text-center md:text-left">
          About Renu Sharma Foundation
        </h1>
        <p className="mt-8 text-base text-center md:text-left md:text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat et
          iusto possimus provident, quidem ut maiores porro odio soluta,
          similique exercitationem repellat, sit at. Voluptatum perferendis
          maxime nemo ipsum. Cumque minus totam voluptatibus soluta itaque culpa
          architecto exercitationem ducimus delectus neque. Quia inventore
          reiciendis labore, soluta enim deleniti dolore magnam praesentium
          iusto vel quo consequuntur et illo voluptas at corporis facilis
          placeat cum? Consectetur vitae, earum recusandae debitis corporis
          rerum tenetur quasi, quam laborum optio magnam sequi, iste vel animi.
          <br />
        </p>
        <button className="bg-[#001F3F] mt-8 py-2 px-6 rounded-full font-bold md:block cursor-pointer text-white p-1">
          About Us
        </button>
      </div>
      <div className="relative h-1/2 mt-32 md:mt-0">
        <motion.div
          className="absolute inset-0 rounded-full bg-[#001F3F] bg-opacity-60 m-2 md:m-4"
          animate={{
            scale: [2, 2.1, 2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#001F3F] bg-opacity-65 m-2 md:m-4"
          animate={{
            scale: [1.8, 1.9, 1.8],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#001F3F] bg-opacity-40 m-2 md:m-4"
          animate={{
            scale: [1.6, 1.7, 1.6],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#001F3F] bg-opacity-85 m-2 md:m-4"
          animate={{
            scale: [1.4, 1.5, 1.4],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="relative z-10 flex justify-center items-center p-2 md:p-6">
          <img
            src="https://res.cloudinary.com/dfhg1joox/image/upload/v1739084294/v4maaambrz0rjxe6nzkh.png"
            alt="renu"
            className="rounded-full h-40 w-40 md:h-60 md:w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutRenu;
