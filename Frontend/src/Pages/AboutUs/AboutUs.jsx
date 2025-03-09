import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSlider from "../../components/about/ImageSlider";
import ImpactSection from "../../components/about/ImpactSection";
import Testimonials from "../../components/about/Testimonials";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#001F3F]"> 
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

      {/* What We Do Section */}
      <section className="py-16 bg-gradient-to-b from-[#001F3F] to-[#003366]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#ffffff]" data-aos="fade-down">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Shelter Provision</h3>
              <p className="text-[#34495e]">We provide safe and secure shelter for homeless individuals and families, ensuring they have a place to call home.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Food Assistance</h3>
              <p className="text-[#34495e]">Our organization distributes nutritious meals and food supplies to those in need, combating hunger in our communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Clothing Donations</h3>
              <p className="text-[#34495e]">We collect and distribute clothing to underprivileged individuals, ensuring they have access to essential garments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Animal Care</h3>
              <p className="text-[#34495e]">We provide care and shelter for abandoned and injured animals, promoting animal welfare in our community.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Healthcare Services</h3>
              <p className="text-[#34495e]">Our foundation offers healthcare services, including medical check-ups and treatments for those who cannot afford them.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-xl font-semibold mb-4 text-[#2c3e50]">Community Development</h3>
              <p className="text-[#34495e]">We engage in community development projects that empower individuals and improve living conditions in underserved areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <ImpactSection />

      {/* About Founder Section */}
      <section className="py-16 bg-gradient-to-b from-[#001F3F] to-[#003366]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-w-4 aspect-h-5 relative" data-aos="fade-right">
              <div className="w-full h-[500px] rounded-2xl shadow-2xl overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center transform transition-all duration-500 group-hover:scale-105">
                  <h1 className="text-4xl md:text-5xl font-bold text-black group-hover:text-white transition-colors duration-300 text-center px-4">Renu Sharma Foundation</h1>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <h2 class Name="text-3xl font-bold mb-6 text-white">About Our Founder</h2>
              <h3 className="text-xl font-semibold text-white mb-4">Dr. Renu Sharma</h3>
              <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officia maxime laudantium iste, voluptatibus ab omnis sequi quisquam dolore similique explicabo architecto magni. Dicta aperiam voluptates ut rerum illum quasi!</p>
              <div className="space-y-4">
                <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-blue-600 text-xl font-bold">20+</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-black">Years of Experience</h4>
                    <p className="text-gray-200">In Education & Social Work</p>
                  </div>
                </div>
                <div className="flex items-center transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-blue-600 text-xl font-bold">15+</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-black">Awards & Recognition</h4>
                    <p className="text-gray-200">For Social Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
     {/* Team Section */}
<section className="py-16 bg-gradient-to-b from-[#001F3F] to-[#003366]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center transition-transform hover:scale-105" data-aos="fade-up">
        <img src="https://i.ytimg.com/vi/isE8xCXi4Xc/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFEgWShlMA8=&rs=AOn4CLA_kb3EEtc262aHzM_ZHxAh9hlSpA" alt="Dr. Renu Sharma" className="w-32 h-32 rounded-full mx-auto mb-4" /> 
        <h3 className="text-xl font-semibold text-white">Dr. Renu Sharma</h3>
        <p className="text-gray-400">Founder & President</p>
      </div>
      <div className="text-center transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="100">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Rajesh_kumar_colors_indian_telly_awards.jpg"   alt="Rajesh Kumar" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Rajesh Kumar</h3>
        <p className="text-gray-400">Education Director</p>
      </div>
      <div className="text-center transition-transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOO4y0O3wO6NhBTnFNkAysf8BXxoS2tY0UA&s" alt="Anita Patel" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Anita Patel</h3>
        <p className="text-gray-400">Community Outreach Head</p>
      </div>
    </div>
  </div>
</section>

      {/* Testimonial Section */}
      <Testimonials />

      {/* Image Slider */}
      <ImageSlider />

      <footer className="w-full bg-gray-800 text-white text-center p-4">
        <p>Footer Content Here</p>
      </footer>
    </div>
  );
}