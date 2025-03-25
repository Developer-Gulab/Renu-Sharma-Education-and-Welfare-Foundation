import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
    <div className="relative h-[75vh]">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center">
          <div className="text-white text-center p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow " data-aos="fade-down" data-aos-duration="1000">About Us</h1>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">{images[currentIndex].title}</h2>
              <p className="text-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{images[currentIndex].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;