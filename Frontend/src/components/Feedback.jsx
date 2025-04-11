import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonialsCol1 = [
  {
    rating: 5.0,
    text: "Pagedone, managing my portfolio has never been easier. This powerful tool provides real-time updates.",
    name: "Mia Thompson",
    title: "Design Lead",
    image: "/assets/mia.png",
  },
  {
    rating: 4.1,
    text: "This innovative solution offers unparalleled ease of use, allowing businesses to swiftly onboard.",
    name: "Daniel Harrison",
    title: "Product and Sales Manager",
    image: "/assets/daniel.png",
  },
  {
    rating: 5.0,
    text: "Its intuitive features streamline the process, enhancing efficiency and productivity.",
    name: "Emily Johnson",
    title: "CEO",
    image: "/assets/emily.png",
  },
];

const testimonialsCol2 = [
  {
    rating: 4.8,
    text: "Pagedone simplifies this task by providing me with the tools to stay on top of my portfolio effortlessly.",
    name: "James Miller",
    title: "Sales Manager",
    image: "/assets/james.png",
  },
  {
    rating: 4.2,
    text: "Its intuitive interface allows me to make informed decisions swiftly, ensuring that I can navigate.",
    name: "Samuel Turner",
    title: "CTO",
    image: "/assets/samuel.png",
  },
  {
    rating: 4.5,
    text: "Pagedone has made it possible for me to stay on top of my portfolio and...",
    name: "Benjamin Evans",
    title: "Product Designer",
    image: "/assets/benjamin.png",
  },
];

const Feedback = ({ onOpen }) => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const scroll1 = scrollRef1.current;
    const scroll2 = scrollRef2.current;
    const scrollSpeed = 0.5;

    let animationFrameId;

    const animateScroll = () => {
      if (scroll1 && scroll2) {
        scroll1.scrollTop += scrollSpeed;
        scroll2.scrollTop -= scrollSpeed;

        // Loop back to top when bottom is reached
        if (scroll1.scrollTop >= scroll1.scrollHeight / 2) {
          scroll1.scrollTop = 0;
        }

        if (scroll2.scrollTop <= 0) {
          scroll2.scrollTop = scroll2.scrollHeight / 2;
        }
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const renderCard = (item, idx) => (
    <div
      key={idx}
      className="bg-zinc-900 text-white p-5 opacity-50 rounded-lg shadow-md mb-6 max-w-xs w-full"
    >
      <div className="text-yellow-400 font-bold text-lg mb-2">⭐ {item.rating}</div>
      <p className="text-sm mb-4">{item.text}</p>
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-gray-400 text-xs">{item.title}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#001f3f] text-white py-20 px-6 md:px-14">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase  text-2xl tracking-wide text-gray-400">Testimonial</p>
          <h2 className="text-4xl font-bold mt-2 leading-snug">
            We go above and beyond to understand and meet.
          </h2>
          <p className="text-gray-400 mt-4 max-w-md">
            Our dedication to excellence drives us to truly understand and meet the unique needs of each customer.
          </p>
          <button className="mt-6 bg-white text-black py-2 px-5 rounded-full font-medium hover:opacity-90" onClick={onOpen}>
            Get In Touch →
          </button>
        </motion.div>

        {/* Right Dual Column Scroll Section */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Column 1 - Scrolls Down */}
          <div
            className="h-[500px] overflow-y-scroll hide-scrollbar space-y-4"
            ref={scrollRef1}
          >
            {[...testimonialsCol1, ...testimonialsCol1].map(renderCard)}
          </div>

          {/* Column 2 - Scrolls Up */}
          <div
            className="h-[500px] overflow-y-scroll hide-scrollbar space-y-4"
            ref={scrollRef2}
          >
            {[...testimonialsCol2, ...testimonialsCol2].map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
