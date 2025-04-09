import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaRocket } from "react-icons/fa";
import { useInView, motion } from "framer-motion";

export default function IntershipInfo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 75;
      const duration = 1000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const features = [
    {
      title: "Ignite Your Learning",
      desc: "Kickstart your journey with a dynamic curriculum that equips you with the tools to thrive in real-world environments.",
    },
    {
      title: "Explore New Dimensions",
      desc: "Step into diverse domains and gain insights from different teams to broaden your perspective and sharpen your versatility.",
    },
    {
      title: "Guided by Trailblazers",
      desc: "Learn from mentors who’ve walked the path — guiding your growth and helping you navigate your career trajectory.",
    },
    {
      title: "Elevate Your Skillset",
      desc: "Join hands-on workshops that fuel your leadership, creativity, and communication — the essentials for success.",
    },
    {
      title: "Thrive Together",
      desc: "Build lasting connections with a community of ambitious interns through projects, collaborations, and shared goals.",
    },
    {
      title: "Ready for Liftoff",
      desc: "From resume polish to interview prep — we’ve got your back as you prepare to make your mark in the professional world.",
    },
  ];

  return (
    <div className="mx-auto w-full px-4 my-10 mb-0">
      <div className="flex flex-col md:flex-row gap-6">

        {/* Text Part */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#001f3f] text-white p-8 rounded-2xl shadow-xl w-full md:w-[65%]"
        >
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Launchpad to Your Career</h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            This isn’t just an internship — it’s your runway to growth. With every challenge, collaboration, and mentor session, you’re building the momentum to launch into a meaningful career.
          </p>
          <ul className="space-y-5 pl-5 border-l-4 border-blue-500">
            {features.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 hover:translate-x-2 transition-all duration-200"
              >
                <FaCheckCircle className="text-blue-400 mt-1 text-xl" />
                <div>
                  <p className="font-semibold text-lg text-white">{item.title}</p>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Hero Part */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 rounded-2xl flex items-center justify-center p-8 shadow-xl bg-gradient-to-r from-[#001f3f] via-blue-700 to-indigo-600 text-white"
        >
          <div className="text-center space-y-4" ref={countRef}>
            <FaRocket className="text-white text-6xl mx-auto mb-2 drop-shadow-lg animate-bounce" />
            <h3 className="text-6xl font-extrabold">{count}%</h3>
            <p className="text-lg font-medium max-w-md mx-auto text-gray-200">
              Over two-thirds of our interns transition into full-time roles — a testament to the quality, support, and impact of our program.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
