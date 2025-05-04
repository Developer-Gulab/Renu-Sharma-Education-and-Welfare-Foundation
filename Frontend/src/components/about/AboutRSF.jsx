import React from 'react';

const AboutRSF = () => {
  return (
    <div>
      {/* About Renu Sharma Foundation Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#3A6D8C]" data-aos="fade-down" data-aos-duration="1000">
            About Renu Sharma Foundation
          </h2>
          <p className="text-lg text-center mb-4 text-black" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            The Renu Sharma Foundation is dedicated to uplifting individuals and communities through various initiatives. Our mission is to provide support, resources, and opportunities to those in need, ensuring a brighter future for all.
          </p>
          <p className="text-lg text-center text-black" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            We believe in the power of community and strive to make a positive impact through education, healthcare, and social welfare programs.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutRSF;