import React from "react";
 import { useRef,useState,useEffect } from "react";
 import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const review1 = [
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
    },]
    const review2=[
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

export default function InternshipReview() {
    const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  // Infinite scrolling effect
  useEffect(() => {
    const scroll1 = scrollRef1.current;
    const scroll2 = scrollRef2.current;
    const speed = 1.3;
    let frame;

    const animate = () => {
      if (scroll1 && scroll2) {
        scroll1.scrollTop += speed;
        scroll2.scrollTop -= speed;

        if (scroll1.scrollTop >= scroll1.scrollHeight / 2) scroll1.scrollTop = 0;
        if (scroll2.scrollTop <= 0) scroll2.scrollTop = scroll2.scrollHeight / 2;
      }
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Review card component
  const renderCard = (item, idx) => (
    <div
      key={idx}
      className="bg-zinc-900 text-white p-5 rounded-lg shadow-md mb-6  w-full opacity-70"
    >
         <div className="flex items-center justify-between mt-3 ">
      <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.username}
        className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500 shadow-sm"
      />
      <div>
        <p className="font-semibold text-lg text-white">{item.username}</p>
        <p className="text-xs text-gray-400">{item.internshipName}</p>
      </div>
    </div>
  
      <div className="text-yellow-400 font-bold text-xl mb-2">
        ⭐ {item.rating}
      </div>
      </div>
      <p className="text-gray-300 text-base leading-relaxed italic text-lg mb-3">
    "{item.review}"
  </p>
      
  </div>
 
  );
    return (
        <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95, skewY: 5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, skewY: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false }}
      className="w-full max-w-7xl mx-auto   p-10 rounded-2xl shadow-2xl text-gray-900 flex flex-col items-center"
    >
     <motion.h2
  initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: false }}
  className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-white flex items-center justify-center gap-3"
>
  <motion.div
    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="flex justify-center"
  >
    <div className="bg-gradient-to-br from-emerald-400 to-cyan-500 p-5 rounded-full shadow-xl shadow-cyan-400/40 animate-pulse">
      {/* Optional icon, adjust as needed */}
      <FaQuoteLeft className="text-white text-3xl" />
    </div>
  </motion.div>
  What Our Past Interns Say About Their Experience
</motion.h2>

<motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
  viewport={{ once: false }}
  className="text-lg max-w-3xl mx-auto text-white/85 leading-relaxed mb-10"
>
  Hear from our past interns about how their internships helped them grow and gain valuable skills in the industry.
</motion.p>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        <div
          className="h-[500px] overflow-y-scroll hide-scrollbar space-y-4"
          ref={scrollRef1}
        >
          {[...review1, ...review2].map(renderCard)}
        </div>
        <div
          className="h-[500px] overflow-y-scroll hide-scrollbar space-y-4"
          ref={scrollRef2}
        >
          {[...review1, ...review2].map(renderCard)}
        </div>
      </div>
    </motion.div>
    );
}
/*
 <div className="absolute bottom-4 right-4 flex space-x-4">
              
              <button className="relative px-5 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/30 transition-all duration-300 group-hover:border-transparent 
                group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500" onClick={()=>document.getElementById("my_modal_3").showModal()}>
              <div className="flex flex-col md:flex-row items-center">
                <span className="font-bold text-2xl"> Enroll Now  </span> 
              <span className="ml-3"> <ArrowRightCircle size={30} className="text-white" /> </span></div>
              </button>
               </div>
              <InternshipForm card={card} />

              */
