import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone, Mail, Clock } from 'lucide-react';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" w-full bg-[#164672]">
      
      <div className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-50 via-white to-blue-100 px-4 py-10 font-poppins">
        <div className="mb-10">
          <span className="text-sm  bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold tracking-wide shadow-sm">
            Contact Us
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-6 leading-tight tracking-wide drop-shadow-md">
          Contact the Renu Sharma Foundation
        </h1>

        <p className="text-lg md:text-base text-gray-600 max-w-2xl mb-10 leading-relaxed font-medium">
          Have questions about our education, healthcare, or community development initiatives?
          Our team is ready to help you make a positive impact in Haryana.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {/* Phone */}
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg text-gray-700 font-medium md:text-base text-lg">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>+91 96714 57366</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg text-gray-700 font-medium text-lg">
            <Mail className="w-5 h-5 text-blue-600" />
            <span>official.renusharmafoundation@gmail.com</span>
          </div>

          {/* Clock */}
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg text-gray-700 font-medium text-lg">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>Mon-Fri, 9AM-6PM IST</span>
          </div>
        </div>

        <div className="mt-12 animate-bounce">
          <button className="w-12 h-12 bg-white text-blue-600 shadow-xl rounded-full flex items-center justify-center text-2xl">
            ↓
          </button>
        </div>
      </div>



      <div className=" mx-auto p-6 bg-[#164672] bg-100% px-12 ">
        <section className="container ">
          <div className=" grid md:grid-cols-2 gap-8 mt-14">

            {/* Feedback Form Section */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md text-black" data-aos="fade-right">
              <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
              <form>
                <div className="mb-4 ">
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full p-2 border rounded-lg bg-gray-50" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full p-2 border rounded-lg bg-gray-50" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="w-full p-2 border rounded-lg bg-gray-50" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit</button>
              </form>
            </div>

            {/* Company Details & Map Section */}
            <div className="bg-gray-300 p-6 rounded-lg shadow-md text-black" data-aos="fade-left">
              <h3 className="text-xl font-semibold mb-4">Our Office</h3>
              <p className="mb-2">123 Business Avenue, Delhi, India</p>
              <p className="mb-4">Email: contact@company.com | Phone: +91 98765 43210</p>
              <div className="w-full h-64 border-black">
                <iframe
                  className="w-full h-full rounded-lg border border-black"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392416641!2d77.06889999999999!3d28.527280000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a1f3c5b1e5%3A0x5f4f6f6f6f6f6f6f!2sDelhi!5e0!3m2!1sen!2sin!4v1625249639331!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
       </div> 





        <div className="w-full bg-[#6A9AB0] text-white mt-12 rounded-none">
          {/* Newsletter Section */}
          <div className="max-w-7xl mx-auto my-2 px-6 lg:px-12 py-2 md:py-6">
            <div className="flex flex-col md:flex-row items-center justify-between ">
              {/* Text Content */}
              <div className="text-center md:text-left ">
                <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
                <p className="text-gray-200">
                  Get the latest design trends, home inspiration and exclusive offers
                </p>
              </div>

              {/* Input Field */}
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-4 rounded-full pr-14 bg-white text-black focus:outline-none"
                />
                <button
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full"
                >
                  <i className="fas fa-paper-plane text-white text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="w-full bg-gray-900 py-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
              <p className="text-gray-400">Connect with us</p>
              <div className="flex space-x-4 mt-2 md:mt-0">
                {["facebook-f", "instagram", "twitter", "youtube", "linkedin", "pinterest"].map((platform) => (
                  <div key={platform} className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full flex justify-center w-10 h-10 cursor-pointer">
                    <i className={`fab fa-${platform} text-white text-lg`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    







      );
};

      export default ContactUs;
