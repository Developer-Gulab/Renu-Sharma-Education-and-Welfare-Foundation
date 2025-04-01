import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Users,
  Globe,
  Trees,
  Target,
  MapPin,
} from "lucide-react";

const AnimatedNumber = ({ value, className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      const interval = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.h3
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {count}+
    </motion.h3>
  );
};

const imapctStats = [
  {
    icon: <Users className="text-blue-600 w-8 h-8" />,
    stat: 15,
    title: "LAC",
    description: "children and their families are impacted every year",
    x: 500,
    y: 20,
    rotate: 10,
  },
  {
    icon: <Globe className="text-green-600 w-8 h-8" />,
    stat: 2000,
    title: "VILLAGES",
    description: "and slums are reached out to across the country",
    x: 200,
    y: 20,
    rotate: 10,
  },
  {
    icon: <Target className="text-red-600 w-8 h-8" />,
    stat: 400,
    title: "PROJECTS",
    description: "focused on education, healthcare, and women empowerment ",
    x: -300,
    y: 20,
    rotate: 0,
  },
  {
    icon: <MapPin className="text-green-600 w-8 h-8" />,
    stat: 25,
    title: "STATES",
    description: "are reached including the remotest areas ",
    x: -500,
    y: 20,
    rotate: -10,
  },
];
const Impact = () => {
  const cardRef = useRef(null);
  const cardInview = useInView(cardRef, { once: true });

  return (
    <div className="">
      <h2 className="text-6xl md:text-7xl font-bold text-center pt-20 text-[#001F3F]">
        Our Impact
      </h2>
      <motion.div className="flex flex-col md:flex-row  justify-center gap-8 px-10 md:mt-12">
        {imapctStats.map((stat, index) => (
          <motion.div
            key={index}
            ref={cardRef}
            initial={{ x: stat.x, y: stat.y, rotate: stat.rotate }}
            animate={
              cardInview
                ? { x: 0, y: 0, rotate: 0 }
                : { x: stat.x, y: stat.y, rotate: stat.rotate }
            }
            transition={{ duration: 1.5 }}
            className="flex flex-col  items-center gap-2 px-8 md:px-12 py-8 bg-white text-center rounded-3xl font-bold md:block cursor-pointer shadow-lg"
          >
            <div className="flex justify-center items-center text-sm my-1">
              <span>{stat.icon}</span>
            </div>
            <AnimatedNumber
              value={stat.stat}
              className="text-6xl font-bold text-[#001F3F]"
            />
            <h4 className="text-xl md:text-3xl font-semibold md:mt-4 text-[#001F3F]">
              {stat.title}
            </h4>
            <p className="text-sm mt-2 font-normal text-gray-700">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Impact;
