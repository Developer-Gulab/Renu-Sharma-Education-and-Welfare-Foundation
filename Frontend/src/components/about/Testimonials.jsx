import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Utkarsh Malasi",
    role: "Program Beneficiary",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit facilis officia, fugiat culpa nobis, veritatis corporis praesentium commodi quibusdam voluptatem voluptate nesciunt temporibus est facere autem aliquid quisquam totam.",
    image: "https://plus.unsplash.com/premium_photo-1688891564708-9b2247085923?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
  },
  {
    name: "Aman Jaggernal",
    role: "Program Beneficiary",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officia maxime laudantium iste, voluptatibus ab omnis sequi quisquam dolore similique explicabo architecto magni.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
  },
  {
    name: "Sita Sharma",
    role: "Community Volunteer",
    text: "The support from this NGO has changed my life. I am now able to help others in my community.",
    image: "https://img.freepik.com/free-photo/man-having-video-call-with-his-family_23-2149120895.jpg"
  },
  {
    name: "Rajesh Kumar",
    role: "Education Director",
    text: "Working with this organization has been a fulfilling experience. Together, we are making a difference.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAYWm7TwxYUYqAhnpQNgd92209vu4Kgg_8yQ&s"
  },
  {
    name: "Priya Singh",
    role: "Donor",
    text: "I am proud to support this NGO. Their work is truly impactful and makes a difference in many lives.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8RLe_OOzKzgfcfMly6PVFQf6h92g8gxpPQ&s"
  },
  {
    name: "Anil Verma",
    role: "Community Leader",
    text: "The initiatives taken by this organization have brought positive changes in our community.",
    image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
  },
  {
    name: "Neha Gupta",
    role: "Volunteer",
    text: "Volunteering here has been one of the most rewarding experiences of my life. I highly recommend it!",
    image: "https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWd5cHRpYW4lMjBtYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Ravi Mehta",
    role: "Beneficiary",
    text: "Thanks to this NGO, I have access to education and resources that I never thought possible.",
    image: "https://thumbs.dreamstime.com/b/portrait-happy-egyptian-man-old-city-market-sharm-el-sheikh-egypt-sharm-el-sheikh-egypt-may-portrait-happy-egyptian-man-old-125519755.jpg"
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000); // Change testimonial every 7 seconds for a slower effect

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="py-16  bg-[#001F3F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Testimonials</h2>
        <div className="flex justify-center space-x-4">
          {/* First Testimonial */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-80"
            key={currentIndex} // Key to trigger animation on index change
            initial={{ opacity: 0, x: -100 }} // Start from the left
            animate={{ opacity: 1, x: 0 }} // Move to center
            exit={{ opacity: 0, x: 100 }} // Exit to the right
            transition={{ duration: 1 }} // Animation duration
          >
            <div className="flex flex-col items-center mb-4">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-24 h-24 rounded-full mb-4" />
              <div className="text-gray-600 italic mb-4">{testimonials[currentIndex].text}</div>
              <div className="font-semibold text-black">{testimonials[currentIndex].name}</div>
              {/* <div className="text-gray-500 text-sm">{test testimonials[currentIndex].role}</div> */}
            </div>
          </motion.div>

          {/* Second Testimonial */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-80"
            key={(currentIndex + 1) % testimonials.length} // Key for the next testimonial
            initial={{ opacity: 0, x: 100 }} // Start from the right
            animate={{ opacity: 1, x: 0 }} // Move to center
            exit={{ opacity: 0, x: -100 }} // Exit to the left
            transition={{ duration: 1 }} // Animation duration
          >
            <div className="flex flex-col items-center mb-4">
              <img src={testimonials[(currentIndex + 1) % testimonials.length].image} alt={testimonials[(currentIndex + 1) % testimonials.length].name} className="w-24 h-24 rounded-full mb-4" />
              <div className="text-gray-600 italic mb-4">{testimonials[(currentIndex + 1) % testimonials.length].text}</div>
              <div className="font-semibold text-black">{testimonials[(currentIndex + 1) % testimonials.length].name}</div>
              <div className="text-gray-500 text-sm">{testimonials[(currentIndex + 1) % testimonials.length].role}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;