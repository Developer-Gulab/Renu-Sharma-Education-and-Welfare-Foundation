import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImpactItem = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if the animation has already occurred

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(label);
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
        setHasAnimated(true); // Set to true to prevent re-animation

        const duration = 2000; // Default duration of the counting animation
        const incrementTime = duration / number; // Time per increment
        let currentCount = 0;

        // Determine the increment step based on the number
        const incrementStep = number > 1000 ? Math.ceil(number / 100) : 1; // Larger step for counts over 1000

        const interval = setInterval(() => {
          if (currentCount < number) {
            currentCount += incrementStep; // Increment by the determined step
            if (currentCount > number) {
              currentCount = number; // Ensure we don't exceed the target number
            }
            setCount(currentCount);
          } else {
            clearInterval(interval);
          }
        }, incrementTime);

        return () => clearInterval(interval);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [number, label, hasAnimated]);

  return (
    <div className="p-4 transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay={delay} id={label}>
      <div className="text-4xl font-bold text-blue-600 mb-2">{count}+</div>
      <p className="text-white">{label}</p>
    </div>
  );
};

const ImpactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <section className="py-16 bg-[#001F3F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]" data-aos="fade-down">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <ImpactItem number={10000} label="Lives Impacted" delay={100} />
          <ImpactItem number={50} label="Communities Served" delay={200} />
          <ImpactItem number={100} label="Education Programs" delay={300} />
          <ImpactItem number={20} label="Healthcare Initiatives" delay={400} />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;