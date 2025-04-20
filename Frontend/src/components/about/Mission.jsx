import React from 'react';

const Mission = () => {
  return (
    <section className="py-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row p-6 rounded-lg shadow-xl hover-effect shadow-slate-800">
          {/* Image Column */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0" data-aos="zoom-in" data-aos-duration="1000">
            <img 
              src="https://media.licdn.com/dms/image/v2/D5603AQFmGGv20J-skg/profile-displayphoto-shrink_400_400/B56ZR_Q_lxHsAg-/0/1737301949647?e=2147483647&v=beta&t=eNli3VFB3k-XCl5aWjFDsqh33-hqZUhRH0p9IxZmdTo" 
              alt="Description of Image" 
              className="w-3/4 h-auto rounded-lg" 
            /> 
          </div>
          {/* Text Column */}
          <div className="w-full md:w-1/2 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#2c5169]">Our Mission</h2>
            <p className="text-lg text-center mb-4">
              At Renu Sharma Foundation, our mission is to uplift individuals and communities by providing essential resources and support. 
              We strive to create a world where everyone has access to basic needs, education, and opportunities for personal growth.
            </p>
            <p className="text-lg text-center">
              We are committed to fostering a sense of community and belonging, empowering individuals to lead fulfilling lives and contribute positively to society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;