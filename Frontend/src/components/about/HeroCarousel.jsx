import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/Navbar";

const images = [
  {
    src: 'https://miro.medium.com/v2/resize:fit:1200/1*0_TJTrY1D3i9CAvxwpZvdQ.jpeg',
    title: 'On a mission to uplift each individual',
    description: 'Making a difference in the lives of needy ones.',
  },
  {
    src: 'https://aibafoundation.com/wp-content/uploads/2022/07/NGOs_helping.jpg',
    title: 'Empowering Communities',
    description: 'Building a better future together.',
  },
  {
    src: 'https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/175000/175558/image/5e7c50b26920e.jpeg',
    title: 'Innovative Solutions for Change',
    description: 'Transforming lives through education and health.',
  },
  {
    src: 'https://img.freepik.com/premium-photo/elderly-woman-hands-small-plant-child-representing-passing-wisdom-nurturing-new-life-hope-future-generations-generative-ai_262708-49100.jpg',
    title: 'Nurturing Future Generations',
    description: 'Investing in the potential of our youth.',
  },
  {
    src: 'https://mediniz-images-2018-100.s3.ap-south-1.amazonaws.com/post-images/ngo_1639673545.png',
    title: 'Health and Wellness for All',
    description: 'Providing essential health services to underserved communities.',
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative h-[95vh]">
    <div
      className="absolute inset-0 bg-fixed bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${images[currentIndex].src})` }}
    >
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-r  flex items-center justify-center">
        <div className="text-white text-center p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-800" data-aos="fade-down" data-aos-duration="1000" style={{ textShadow: '2px 2px 6px black' }}>About Us</h1>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" style={{ textShadow: '2px 2px 4px black' }}>{images[currentIndex].title}</h2>
            <p className="text-xl mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" style={{ textShadow: '1px 1px 6px black' }}>{images[currentIndex].description}</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300" data-aos="fade-up" data-aos-duration="1000">Donate Now ❤️</button>
              <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition duration-300" data-aos="fade-up" data-aos-duration="1000">Get Involved →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeroCarousel;