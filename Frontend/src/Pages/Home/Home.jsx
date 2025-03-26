import React, { useRef } from "react";
import Reel from "../../components/Home/HomeReel";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import Impact from "../../components/Home/Impact";
import KnowMore from "../../components/Home/KnowMore";
import AboutRenu from "../../components/Home/AboutRenu";
import Highlights from "../../components/Home/Highlights";
import FAQ from "../../components/Home/FAQ";
import FooterTitle from "../../components/Home/FooterTitle";
import Offer from "../../components/Home/Offer";

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

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yPos = useTransform(scrollYProgress, [0, 1], ["-90%", "-15%"]);
  const mainRef = useRef(null);

  return (
    <div ref={mainRef} className="min-h-screen flex flex-col">
      <div className="relative">
        <div className="fixed inset-0 min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-white/10 to-transparent opacity-50"></div>
        <div className="fixed inset-0 min-h-screen bg-[linear-gradient(to_right,#ffffff0f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0f_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative">
          <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold text-center md:mt-40 mt-32 text-white">
            Renu Sharma Foundation
          </h1>
          <h2 className="text-sm sm:text-xl md:text-lg font-semibold text-center mt-8 text-white border-[0px] rounded-badge bg-white bg-opacity-10 p-1 px-4 w-fit mx-auto">
            Join us in our mission to create a better future for underprivileged
            communities
          </h2>
        </div>
        <div className="flex justify-center gap-8 pt-10">
          <button className="bg-white py-2 px-6 rounded-full font-bold  md:block cursor-pointer text-white bg-opacity-20 p-1">
            Register
          </button>
          <button className="bg-white py-2 px-6 rounded-full font-bold hidden md:block cursor-pointer text-white bg-opacity-20 p-1">
            Donate Now
          </button>
        </div>
      </div>
      <div className="min-w-full md:mt-[-100px] max-w-7xl xl:mx-auto min-h-[50vh] sm:min-h-[70vh] lg:min-h-screen items-center flex overflow-hidden">
        <div className="flex min-h-[50vh] min-w-full max-w-7xl items-center overflow-hidden sm:min-h-[70vh] lg:min-h-screen xl:mx-auto">
          <div className="mb-20 flex w-full justify-center sm:mb-24 md:mb-64 lg:mb-72 xl:mx-auto">
            <Reel
              classes="blur-sm opacity-[0.47] md:opacity-100"
              baseVelocity={0.5}
              angle={12}
              reelImg={reelImags}
            />
            <Reel
              classes=""
              baseVelocity={-0.75}
              angle={-12}
              reelImg={reelImags}
            />
          </div>
          {/* <div className="hidden w-full justify-center xl:mx-auto 2xl:flex">
            <Reel
              classes=""
              baseVelocity={-1.5}
              angle={0}
              reelImg={reelImags}
            />
          </div> */}
        </div>
      </div>
      <Impact />
      <AboutRenu />
      {/* <Offer /> */}
      <Highlights />
      <FAQ />
      <KnowMore />
      <FooterTitle />
    </div>
  );
}
