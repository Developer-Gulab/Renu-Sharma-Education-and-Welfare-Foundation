import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HighlightReel from "./HighlightReel";

const reelImags = [
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392246/ngo/wleduksg5avcqj8mikj9.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392246/ngo/m8b4h9jkixqxs3tdp89l.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392246/ngo/aedeouyejbmym81jx7ei.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392246/ngo/dnazefrh2p9fdlm66ldx.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392247/ngo/j9se1rtllljhapxjskdz.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392247/ngo/rbzrxi0tl5xzz1qoalby.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392247/ngo/jbkmgfwwtdzg8fmazoms.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392247/ngo/jwbwaum4qfpfsiyrf2yi.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392247/ngo/kwgeeb6i0x2iimyt1x01.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392247/ngo/wsfuwepihmjhhelm4lbz.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392247/ngo/md3alvn9rkg1zlcymxca.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392248/ngo/xe9qyrozzwiy7qlb7vsz.jpg",
  },
  {
    src: "https://res.cloudinary.com/dfhg1joox/image/upload/v1742392248/ngo/g6ycubhvld3mfwodxbra.jpg",
  },
];

const Highlights = () => {
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const inViews = refs.map((ref) =>
    useInView(ref, { once: true, margin: "-100px" })
  );

  return (
    <div className="min-h-screen mt-32 flex flex-col items-center justify-center relative">
      <h2 className="absolute text-7xl font-bold text-[#001F3F] z-10 top-[14%]">
        Highlights
      </h2>
      <div className="absolute hidden w-full justify-center xl:mx-auto 2xl:flex z-20">
        <HighlightReel
          classes="mt-20"
          baseVelocity={-0.5}
          angle={0}
          reelImg={reelImags}
        />
      </div>
      <div className="flex flex-col items-center justify-center relative text-7xl font-bold tracking-widest leading-tight">
        <motion.h1
          ref={refs[0]}
          initial={{ opacity: 0, y: 50 }}
          animate={inViews[0] ? { opacity: 0.15, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-[#001F3F]"
        >
          <span>Highlights</span> &nbsp;
          <span>Highlights</span> &nbsp;
          <span>Highlights</span>
        </motion.h1>
        <motion.h1
          ref={refs[1]}
          initial={{ opacity: 0, y: 50 }}
          animate={inViews[1] ? { opacity: 0.15, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-[#001F3F]"
        >
          <span>Highlights</span> &nbsp;
          <span>Highlights</span> &nbsp;
          <span>Highlights</span>
        </motion.h1>
        <motion.h1
          ref={refs[2]}
          initial={{ opacity: 0, y: 50 }}
          animate={inViews[2] ? { opacity: 0.15, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-[#001F3F]"
        >
          <span>Highlights</span> &nbsp;
          <span>Highlights</span> &nbsp;
          <span>Highlights</span>
        </motion.h1>
        <motion.h1
          ref={refs[3]}
          initial={{ opacity: 0, y: 50 }}
          animate={inViews[3] ? { opacity: 0.15, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-[#001F3F]"
        >
          <span>Highlights</span> &nbsp;
          <span>Highlights</span> &nbsp;
          <span>Highlights</span>
        </motion.h1>
        <motion.h1
          ref={refs[4]}
          initial={{ opacity: 0, y: 50 }}
          animate={inViews[4] ? { opacity: 0.15, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-[#001F3F]"
        >
          <span>Highlights</span> &nbsp;
          <span>Highlights</span> &nbsp;
          <span>Highlights</span>
        </motion.h1>
        <motion.h1
          ref={refs[5]}
          initial={{ opacity: 0, y: 50 }}
          animate={inViews[5] ? { opacity: 0.15, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-[#001F3F]"
        >
          <span>Highlights</span> &nbsp;
          <span>Highlights</span> &nbsp;
          <span>Highlights</span>
        </motion.h1>
        <motion.h1
          ref={refs[6]}
          initial={{ opacity: 0, y: 50 }}
          animate={inViews[6] ? { opacity: 0.15, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-[#001F3F]"
        >
          <span>Highlights</span> &nbsp;
          <span>Highlights</span> &nbsp;
          <span>Highlights</span>
        </motion.h1>
      </div>
      <button className="absolute bottom-20 bg-[#001F3F] py-2 px-6 rounded-full font-bold md:block cursor-pointer text-white p-1">
        Go to Gallery
      </button>
    </div>
  );
};

export default Highlights;
