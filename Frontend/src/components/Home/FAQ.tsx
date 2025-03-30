import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import { IoAddSharp, IoCloseOutline } from "react-icons/io5";

const faqData = [
  {
    id: 1,
    question: "What is the purpose of the Renu Sharma Foundation?",
    answer:
      "The Renu Sharma Foundation is a non-profit organization that aims to provide education and support to underprivileged children.",
  },
  {
    id: 2,
    question: "When was the Renu Sharma Foundation founded?",
    answer:
      "The Renu Sharma Foundation is a non-profit organization that aims to provide education and support to underprivileged children.",
  },
  {
    id: 3,
    question: "Who is the founder of the Renu Sharma Foundation?",
    answer:
      "The Renu Sharma Foundation is a non-profit organization that aims to provide education and support to underprivileged children.",
  },
  {
    id: 4,
    question: "What is the mission of the Renu Sharma Foundation?",
    answer:
      "The Renu Sharma Foundation is a non-profit organization that aims to provide education and support to underprivileged children.",
  },
  {
    id: 5,
    question: "What is the vision of the Renu Sharma Foundation?",
    answer:
      "The Renu Sharma Foundation is a non-profit organization that aims to provide education and support to underprivileged children.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleActiveIndex = (id: number) => {
    if (activeIndex.includes(id)) {
      setActiveIndex(activeIndex.filter((index) => index != id));
    } else {
      setActiveIndex([...activeIndex, id]);
    }
  };

  return (
    <div
      className="flex flex-col px-4 pt-32 justify-center items-center z-20"
      ref={ref}
    >
      <div className="">
        <h1 className="text-3xl md:text-6xl font-bold text-[#001F3F] text-center">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex flex-col gap-4 w-3/5 mt-16">
        {faqData.map((data, index) => {
          return (
            <motion.div
              className="bg-white p-8 rounded-2xl cursor-pointer transition-all duration-300 shadow-lg"
              key={data.id}
              onClick={() => handleActiveIndex(data.id)}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-[#001F3F] text-xl font-semibold">
                  {data.question}
                </h1>
                <span className="text-[#001F3F] text-2xl font-bold cursor-pointer transition-all duration-500">
                  {activeIndex.includes(data.id) ? (
                    <IoCloseOutline />
                  ) : (
                    <IoAddSharp />
                  )}
                </span>
              </div>
              {activeIndex.includes(data.id) && (
                <p className="text-gray-700 text-base font-medium mt-4">
                  {data.answer}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
