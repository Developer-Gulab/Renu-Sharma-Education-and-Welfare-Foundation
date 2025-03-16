import React from 'react';
import { FaHeartbeat, FaSchool, FaBookOpen } from 'react-icons/fa'; // Import icons as needed
import AOS from 'aos';
import 'aos/dist/aos.css';

const KeyProgramItem = ({ title, description, stats, icon, aosAnimation, aosDelay }) => {
  return (
    <div 
      className="bg-[#6A9AB0] p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex flex-col items-center w-full" 
      data-aos={aosAnimation} 
      data-aos-delay={aosDelay}
    >
      <div className="text-4xl text-white mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-[#2c5169] text-center">{title}</h3>
      <p className="text-lg mb-4 text-center">{description}</p>
      <div className="flex justify-around w-full">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <span className="text-4xl font-bold text-blue-600">{stat.number}</span>
            <span className="text-gray-600 block">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const KeyProgramsSection = () => {
  return (
    <section className="py-16 bg-[#001F3F]" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]">Our Key Programs</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <KeyProgramItem 
            title="Community Health Initiatives"
            description="Providing preventative care, maternal health services, and chronic disease management through our network of mobile and permanent health centers. Our approach emphasizes health education alongside treatment."
            stats={[
              { number: 18, label: "Health Camps" },
              { number: "35,000+", label: "Medical Consultations" },
              { number: 120, label: "Healthcare Professionals" }
            ]}
            icon={<FaHeartbeat />} // Icon for Community Health Initiatives
            aosAnimation="fade-left" // Animation for this item
            aosDelay={100} // Delay for this item
          />
          <KeyProgramItem 
            title="Education Transformation"
            description="Implementing innovative teaching methodologies, providing learning resources, and developing curriculum that addresses both academic and life skills. Our programs focus on critical thinking and practical application."
            stats={[
              { number: 42, label: "School Programs" },
              { number: "15,000+", label: "Students Reached" },
              { number: "2000+", label: "Internships Provided" }
            ]}
            icon={<FaSchool />} // Icon for Education Transformation
            aosAnimation="zoom-in" // Animation for this item
            aosDelay={200} // Delay for this item
          />
          <KeyProgramItem 
            title="Knowledge Integration"
            description="Creating pathways between healthcare knowledge and educational outcomes through specialized programs that teach health literacy, nutrition, and preventative care within school environments."
            stats={[
              { number: 28, label: "Integrated Programs" },
              { number: "10,000+", label: "Participants" },
              { number: "65%", label: "Health Knowledge Improvement" }
            ]}
            icon={<FaBookOpen />} // Icon for Knowledge Integration
            aosAnimation="fade-right" // Animation for this item
            aosDelay={300} // Delay for this item
          />
        </div>
      </div>
    </section>
  );
};

export default KeyProgramsSection;