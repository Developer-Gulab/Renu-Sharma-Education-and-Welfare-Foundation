/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="w-[300px] md:w-[400px] flex-shrink-0 relative"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 20,
    }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <motion.img
          src={testimonial.url}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
          transition={{ duration: 0.5 }}
        />
        <div>
          <p className="font-bold text-lg">{testimonial.name}</p>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
    </div>
  </motion.div>
);

const Feedback = () => {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  const testimonials = [
    {
      quote:
        "This foundation transformed our village school with new facilities and qualified teachers.",
      name: "Rahul Sharma",
      role: "Parent",
      url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "The health camp saved my mother's life through early cancer detection.",
      name: "Priya Patel",
      role: "Beneficiary",
      url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60",
    },
    {
      quote:
        "Our community lake was revived through their environmental initiative.",
      name: "Amit Singh",
      role: "Volunteer",
      url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60",
    },
  ];

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  useEffect(() => {
    controlsLeft.start({
      x: "-100%",
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });

    controlsRight.start({
      x: "0%",
      transition: {
        duration: 60,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controlsLeft, controlsRight]);

  return (
    <motion.section
      className="py-16 px-4 w-full min-h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-6xl text-[#001F3F] font-bold text-center mb-20">
        What Others Says
      </h2>

      <div className="overflow-hidden w-full">
        {/* First row - scrolling left */}
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={controlsLeft}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragTransition={{ power: 0.6 }}
            onDragStart={() => controlsLeft.stop()}
            onDragEnd={() =>
              controlsLeft.start({
                x: "-100%",
                transition: {
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              })
            }
            style={{ width: "200%" }}
          >
            {/* First copy of testimonials */}
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`row1-a-${index}`}
                testimonial={testimonial}
              />
            ))}

            {/* Second copy to ensure continuous loop */}
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`row1-b-${index}`}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </div>

        {/* Second row - scrolling right */}
        <div className="relative mt-6">
          <motion.div
            className="flex gap-8"
            initial={{ x: "-100%" }}
            animate={controlsRight}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragTransition={{ power: 0.6 }}
            onDragStart={() => controlsRight.stop()}
            onDragEnd={() =>
              controlsRight.start({
                x: "0%",
                transition: {
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              })
            }
            style={{ width: "200%" }}
          >
            {/* First copy of reversed testimonials */}
            {[...duplicatedTestimonials].reverse().map((testimonial, index) => (
              <TestimonialCard
                key={`row2-a-${index}`}
                testimonial={testimonial}
              />
            ))}

            {/* Second copy to ensure continuous loop */}
            {[...duplicatedTestimonials].reverse().map((testimonial, index) => (
              <TestimonialCard
                key={`row2-b-${index}`}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Feedback;
