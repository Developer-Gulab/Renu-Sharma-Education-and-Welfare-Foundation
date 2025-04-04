import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PartnerItem = ({ name, description, logo, aosAnimation, aosDelay }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center"
      data-aos={aosAnimation}
      data-aos-delay={aosDelay}
    >
      <img src={logo} alt={name} className="w-24 h-24 mb-4" />
      <h3 className="text-xl font-semibold text-[#001F3F] text-center">
        {name}
      </h3>
      <p className="text-gray-700 text-center mt-2">{description}</p>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <section
      className="py-16 bg-[#E8F4F8] px-4 md:px-20 lg:px-32"
      data-aos="fade-up"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#001F3F]">
          Our Partners
        </h2>
        <p className="text-center text-gray-700 mb-8">
          We collaborate with organizations that share our vision for integrated
          community development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <PartnerItem
            name="ILEARN Institute"
            description="A leading educational institution focused on innovative learning solutions. ILEARN Institute is dedicated to transforming education through technology and personalized learning experiences. Our programs are designed to empower students with critical thinking skills, creativity, and the ability to adapt to a rapidly changing world. We offer a range of courses that cater to diverse learning needs, ensuring that every student has the opportunity to succeed."
            logo="https://content3.jdmagicbox.com/comp/malappuram/g6/9999px483.x483.240216115756.q8g6/catalogue/ilearn-institute-of-it-education-valanchery-malappuram-institutes-for-distance-education-zdm03geyol.jpg" // Replace with actual logo URL
            aosAnimation="zoom-in"
            aosDelay={100}
          />
          <PartnerItem
            name="Pregrade Learning Institute"
            description="Dedicated to providing quality education and resources for early learners. Pregrade Learning Institute focuses on developing foundational skills in children through innovative teaching methods and engaging learning materials. Our programs are designed to foster a love for learning and prepare students for future academic success."
            logo="https://framerusercontent.com/images/cCTBuhN2veXZbg4devKwcUW9394.png?scale-down-to=512" // Replace with actual logo URL
            aosAnimation="zoom-in"
            aosDelay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
