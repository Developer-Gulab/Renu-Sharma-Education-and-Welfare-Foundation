import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SuccessItem = ({ number, title, label, delay }) => {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(label);
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
        setHasAnimated(true);

        const duration = 2000; // Default duration
        const incrementTime = duration / number;
        let currentCount = 0;
        const incrementStep = number > 1000 ? Math.ceil(number / 100) : 1;

        const interval = setInterval(() => {
          if (currentCount < number) {
            currentCount += incrementStep;
            if (currentCount > number) {
              currentCount = number;
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
    <div className="bg-white p-4 rounded-lg shadow-xl hover-effect shadow-slate-800" data-aos="fade-down" data-aos-delay={delay} id={label}>
      <h3 className="text-xl font-semibold text-[#2c5169] mb-2">{title}</h3>
      <div className="text-4xl font-bold text-[#3fa1e3] mb-2">{count}+</div>
      <p className="text-[#2c5169]">{label}</p>
    </div>
  );
};

const SuccessSection = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="py-16 bg-dark-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]" data-aos="fade-down">
          Our Proven Impact Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <SuccessItem number={9} title="Years of Service" label="Years" delay={100} />
          <SuccessItem number={400} title="Beneficiaries Reached" label="Beneficiaries" delay={200} />
          <SuccessItem number={125} title="Community Projects" label="Projects" delay={300} />
          <SuccessItem number={80} title="Satisfaction Rating %" label="Satisfaction" delay={400} />
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;