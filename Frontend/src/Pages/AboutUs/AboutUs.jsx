import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdNightShelter } from "react-icons/md";
import { FaUtensils, FaTshirt, FaPaw, FaHospital, FaUsers } from 'react-icons/fa'; // Other icons
import ImageSlider from "../../components/about/ImageSlider";
import ImpactSection from "../../components/about/ImpactSection";
import Testimonials from "../../components/about/Testimonials";
import KeyProgramsSection from "../../components/about/KeyProgramItem";
import LeadershipTeamSection from "../../components/about/LeadershipTeamSection";
import PartnersSection from "../../components/about/PartnersSection";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#001F3F] text-white"> 
    
      {/* Hero Section */}
      <div className="relative h-[75vh] bg-fixed bg-cover bg-center transition-all duration-500" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">On a mission to uplift each individual</h1>
              <p className="text-xl">Making a difference in lives of needy ones</p>
            </div>
          </div>
        </div>
      </div>
<br></br>
      {/* About Renu Sharma Foundation Section */}
      <section className="py-16 bg-[#001F3F]" data-aos="fade-up">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-center mb-6 text-[#3A6D8C]">About Renu Sharma Foundation</h2>
          <p className="text-lg text-center mb-4">
            The Renu Sharma Foundation is dedicated to uplifting individuals and communities through various initiatives. Our mission is to provide support, resources, and opportunities to those in need, ensuring a brighter future for all.
          </p>
          <p className="text-lg text-center">
            We believe in the power of community and strive to make a positive impact through education, healthcare, and social welfare programs.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-[#001F3F]" data-aos="zoom-in">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#6A9AB0] p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-right">
              <MdNightShelter className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#2c5169]">Shelter Provision</h3>
              <p>We provide safe and secure shelter for homeless individuals and families, ensuring they have a place to call home.</p>
            </div>
            <div className="bg-[#6A9AB0] p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up">
              <FaUtensils className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#2c5169]">Food Assistance</h3>
              <p>Our organization distributes nutritious meals and food supplies to those in need, combating hunger in our communities.</p>
            </div>
            <div className="bg-[#6A9AB0] p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-left">
              <FaTshirt className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#2c5169]">Clothing Donations</h3>
              <p>We collect and distribute clothing to underprivileged individuals, ensuring they have access to essential garments.</p>
            </div>
            <div className="bg-[#6A9AB0] p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-right">
              <FaPaw className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#2c5169]">Animal Care</h3>
              <p>We provide care and shelter for abandoned and injured animals, promoting animal welfare in our community.</p>
            </div>
            <div className="bg-[#6A9AB0] p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up">
              <FaHospital className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#2c5169]">Healthcare Services</h3>
              <p>Our foundation offers healthcare services, including medical check-ups and treatments for those who cannot afford them.</p>
            </div>
            <div className="bg-[#6A9AB0] p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-left">
              <FaUsers className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#2c5169]">Community Development</h3>
              <p>We engage in community development projects that empower individuals and improve living conditions in underserved areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
  <div className="container mx-auto px-20">
    <div className="bg-[#6A9AB0] p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:border-2 hover:border-[#3A6D8C] ">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#2c5169]">
        Our Mission
      </h2>
      <p className="text-lg text-center mb-4">
        At Renu Sharma Foundation, our mission is to uplift individuals and communities by providing essential resources and support. We strive to create a world where everyone has access to basic needs, education, and opportunities for personal growth.
      </p>
      <p className="text-lg text-center">
        We are committed to fostering a sense of community and belonging, empowering individuals to lead fulfilling lives and contribute positively to society.
      </p>
    </div>
  </div>
</section>

      {/* Our Impact Section */}
      <ImpactSection />

      {/* About Founder Section */}
      <section className="py-16 bg-[#001F3F]" data-aos="fade-up">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]">About Our Founder</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-w-4 aspect-h-5 relative" data-aos="fade-right">
              <div className="w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify center transform transition-all duration-500 group-hover:scale-105">
                  <h1 className="text-4xl md:text-5xl font-bold text-black group-hover:text-white transition-colors duration-300 text-center px-4">Renu Sharma Foundation</h1>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-xl font-semibold mb-4">Dr. Renu Sharma</h3>
              <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officia maxime laudantium iste, voluptatibus ab omnis sequi quisquam dolore similique explicabo architecto magni. Dicta aperiam voluptates ut rerum illum quasi!</p>
              <div className="space-y-4">
                <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-blue-600 text-xl font-bold">20+</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Years of Experience</h4>
                    <p className="text-gray-200">In Education & Social Work</p>
                  </div>
                </div>
                <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-blue-600 text-xl font-bold">15+</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Awards & Recognition</h4>
                    <p className="text-gray-200">For Social Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* key program section */}
<KeyProgramsSection/>

      {/* Team Section */}
      {/* <section className="py-16 bg-[#001F3F]" data-aos="zoom-in">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transition-transform hover:scale-105" data-aos="fade-up">
              <img src="https://i.ytimg.com/vi/isE8xCXi4Xc/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFEgWShlMA8=&rs=AOn4CLA_kb3EEtc262aHzM_ZHxAh9hlSpA" alt="Dr. Renu Sharma" className="w-32 h-32 rounded-full mx-auto mb-4" /> 
              <h3 className="text-xl font-semibold">Dr. Renu Sharma</h3>
              <p className="text-gray-400">Founder & President</p>
            </div>
            <div className="text-center transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Rajesh_kumar_colors_indian_telly_awards.jpg" alt="Rajesh Kumar" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
              <p className="text-gray-400">Education Director</p>
            </div>
            <div className="text-center transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOO4y0O3wO6NhBTnFNkAysf8BXxoS2tY0UA&s" alt="Anita Patel" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Anita Patel</h3>
              <p className="text-gray-400">Community Outreach Head</p>
            </div>
          </div>
        </div>
      </section> */}
<LeadershipTeamSection/>
<PartnersSection/>

      {/* Testimonial Section */}
 {/* <Testimonials /> */}

      {/* Image Slider */}
      <ImageSlider />

      <footer className="w-full bg-gray-800 text-white text-center p-4">
        <p>Footer Content Here</p>
      </footer>
    </div>
  );
}