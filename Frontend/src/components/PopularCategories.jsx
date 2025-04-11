import { motion } from "framer-motion";
import Content from "../assets/Content.jpg";
import Graphic from "../assets/Graphic.jpg";
import Logo from "../assets/Logo.jpg";
import SEO from "../assets/SEO.jpg";
import WEB from "../assets/WEB.jpg";

const services = [
  {
    title: "Content Writing",
    subtitle: "Engage your community",
    image: Content,
    description:
      "From storytelling to strategy—words that spark imagination, emotion, and connection.",
  },
  {
    title: "SEO",
    subtitle: "Boost your traffic",
    image: SEO,
    description:
      "Climb the ranks with clever keywords and cutting-edge optimization magic.",
  },
  {
    title: "Website Development",
    subtitle: "Build your site",
    image: WEB,
    description:
      "Pixel-perfect, lightning-fast websites that speak your brand's language.",
  },
  {
    title: "Logo Design",
    subtitle: "Elevate your brand",
    image: Logo,
    description:
      "Turn ideas into iconic visuals—make your mark with memorable designs.",
  },
  {
    title: "Graphic Design",
    subtitle: "Tell your story",
    image: Graphic,
    description:
      "Visual poetry in pixels—express your story through design brilliance.",
  },
];

const PopularCategories = () => {
  return (
    <section className="px-8 py-16 bg-[#001f3f]">
      <style>
        {`
          .popular-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -75%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              120deg,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0.1) 100%
            );
            transform: skewX(-25deg);
            z-index: 30;
            transition: all 0.6s ease;
          }

          .popular-card:hover::before {
            left: 125%;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .desc-slide {
            transform: translateY(100%);
            opacity: 0;
            transition: transform 0.6s ease, opacity 0.6s ease;
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
          }

          .group:hover .desc-slide {
            transform: translateY(0%);
            opacity: 1;
          }

          .fancy-text {
            background: linear-gradient(90deg, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: bold;
          }
        `}
      </style>

      <motion.h2
        className="text-3xl text-white font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Most Popular Categories
      </motion.h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="popular-card relative w-72 h-96 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />

            {/* Subtitle & Title */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 z-10">
              <p className="text-sm text-gray-300">{service.subtitle}</p>
              <h3 className="text-white text-xl font-bold">{service.title}</h3>
            </div>

            {/* Creative Slide-in Description */}
            <div className="desc-slide absolute inset-0 p-5 flex items-center justify-center text-center text-white z-20 rounded-lg">
              <p className="text-md fancy-text">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
