import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PartnerItem = ({ name, description, logo, aosAnimation, aosDelay }) => {
  return (
    <div 
      className="bg-[#6A9AB0] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center" 
      data-aos={aosAnimation} 
      data-aos-delay={aosDelay}
    >
      <img src={logo} alt={name} className="w-24 h-24 mb-4" />
      <h3 className="text-xl font-semibold text-white text-center">{name}</h3>
      <p className="text-gray-200 text-center mt-2">{description}</p>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <section className="py-16 bg-[#001F3F] px-4 md:px-20 lg:px-32" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]">Our Partners</h2>
        <p className="text-center text-gray-300 mb-8">
          We collaborate with organizations that share our vision for integrated community development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <PartnerItem 
            name="Global Health Initiative"
            description="A global organization focused on improving health outcomes in underserved communities."
            logo="https://via.placeholder.com/150" // Replace with actual logo URL
            aosAnimation="zoom-in"
            aosDelay={100}
          />
          <PartnerItem 
            name="Education First"
            description="Dedicated to ensuring quality education for all children, regardless of their background."
            logo="https://via.placeholder.com/150" // Replace with actual logo URL
            aosAnimation="zoom-in"
            aosDelay={200}
          />
          <PartnerItem 
            name="Community Alliance"
            description="Working to empower local communities through sustainable development initiatives."
            logo="https://via.placeholder.com/150" // Replace with actual logo URL
            aosAnimation="zoom-in"
            aosDelay={300}
          />
          <PartnerItem 
            name="Future Builders"
            description="Investing in the future by supporting youth development and education programs."
            logo="https://via.placeholder.com/150" // Replace with actual logo URL
            aosAnimation="zoom-in"
            aosDelay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;