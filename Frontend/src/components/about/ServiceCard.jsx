// Import necessary libraries
import React from 'react';
import { MdNightShelter } from 'react-icons/md';
import { FaUtensils, FaTshirt, FaPaw, FaHospital, FaUsers } from 'react-icons/fa';

// ServiceCard Component
const ServiceCard = ({ icon, title, description, animation }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg hover-effect shadow-slate-400`} data-aos={animation}>
      <div className="flex flex-col items-center">
        {icon}
        <h3 className="text-xl font-semibold text-center mb-4 text-[#2c5169]">{title}</h3>
      </div>
      <p className="text-center">{description}</p>
    </div>
  );
};

// Main WhatWeDo Component
const WhatWeDo = () => {
  const services = [
    {
      icon: <MdNightShelter className="text-3xl mb-4" />,
      title: 'Shelter Provision',
      description: 'We provide safe and secure shelter for homeless individuals and families, ensuring they have a place to call home.',
      animation: 'fade-right',
    },
    {
      icon: <FaUtensils className="text-3xl mb-4" />,
      title: 'Food Assistance',
      description: 'Our organization distributes nutritious meals and food supplies to those in need, combating hunger in our communities.',
      animation: 'fade-up',
    },
    {
      icon: <FaTshirt className="text-3xl mb-4" />,
      title: 'Clothing Donations',
      description: 'We collect and distribute clothing to underprivileged individuals, ensuring they have access to essential garments.',
      animation: 'fade-left',
    },
    {
      icon: <FaPaw className="text-3xl mb-4" />,
      title: 'Animal Care',
      description: 'We provide care and shelter for abandoned and injured animals, promoting animal welfare in our community.',
      animation: 'fade-right',
    },
    {
      icon: <FaHospital className="text-3xl mb-4" />,
      title: 'Healthcare Services',
      description: 'Our foundation offers healthcare services, including medical check-ups and treatments for those who cannot afford them.',
      animation: 'fade-up',
    },
    {
      icon: <FaUsers className="text-3xl mb-4" />,
      title: 'Community Development',
      description: 'We engage in community development projects that empower individuals and improve living conditions in underserved areas.',
      animation: 'fade-left',
    },
  ];

  return (
    <section className="py-16 bg-[#001F3F]" data-aos="zoom-in">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              animation={service.animation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;