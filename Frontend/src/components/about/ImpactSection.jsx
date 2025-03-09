import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImpactItem = ({ number, label, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(label);
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        const duration = 2000; // Duration of the counting animation
        const incrementTime = duration / number; // Time per increment
        let currentCount = 0;

        const interval = setInterval(() => {
          if (currentCount < number) {
            currentCount++;
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
  }, [number, label]);

  return (
    <div className="p-4 transition-all duration-300 hover:scale-105" data-aos="zoom-in" data-aos-delay={delay} id={label}>
      <div className="text-4xl font-bold text-blue-600 mb-2">{count}+</div>
      <p className="text-gray-600">{label}</p>
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
    <section className="py-16 bg-gradient-to-b from-[#001F3F] to-[#003366]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white" data-aos="fade-down">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <ImpactItem number={1000} label="Students Supported" delay={100} />
          <ImpactItem number={50} label="Schools Partnered" delay={200} />
          <ImpactItem number={100} label="Community Programs" delay={300} />
          <ImpactItem number={20} label="Districts Reached" delay={400} />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;