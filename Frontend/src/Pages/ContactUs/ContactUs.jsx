import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" w-full">
      <div className="relative w-full h-[30vh] min-h-[400px] bg-cover bg-center bg-fixed flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3')"
        }}>
        <div>
          <h1 className="text-5xl font-extrabold mb-6 shadow-lg">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-[600px] mx-auto">We'd love to hear from you. Let us know how we can help</p>
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





        <div class="w-full bg-[#6A9AB0] text-white my-12 rounded-lg">
          {/* <!-- Newsletter Section --> */}
          <div class="max-w-7xl mx-auto px-6 lg:px-12 py-6 md:py-10">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* <!-- Text Content --> */}
              <div class="text-center md:text-left">
                <h2 class="text-2xl font-bold">Subscribe to Our Newsletter</h2>
                <p class="text-gray-300">
                  Get the latest design trends, home inspiration and exclusive offers
                </p>
              </div>

              {/* <!-- Input Field --> */}
              <div class="relative w-full max-w-md">
                

                <div class="relative w-full max-w-md">
                  <input
                    type="email"
                    placeholder="Your email address"
                    class="w-full p-4 rounded-full pr-14 bg-white text-black focus:outline-none"
                  />
                  <button
                    class="absolute top-1/2 right-2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full"
                  >
                    <i class="fas fa-paper-plane text-white text-sm"></i>
                  </button>
                </div>






              </div>
            </div>
          </div>

          {/* <!-- Social Media Section --> */}
          <div class="w-full bg-gray-900 py-4 rounded-b-lg">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-12">
              <p class="text-gray-400">Connect with us</p>
              <div class="flex space-x-4 mt-2  ">
                <div class="p-2 bg-gray-800 hover:bg-gray-700 rounded-full flex justify-center w-10 h-10 cursor-pointer">
                  <i class="fab fa-facebook-f text-white text-lg"></i>
                </div>
                <div class="p-2 bg-gray-800 hover:bg-gray-700 rounded-full flex justify-center w-10 h-10 cursor-pointer">
                  <i class="fab fa-instagram text-white text-lg"></i>
                </div>
                <div class="p-2 bg-gray-800 hover:bg-gray-700 rounded-full flex justify-center w-10 h-10 cursor-pointer">
                  <i class="fab fa-twitter text-white text-lg"></i>
                </div>
                <div class="p-2 bg-gray-800 hover:bg-gray-700 rounded-full flex justify-center w-10 h-10 cursor-pointer">
                  <i class="fab fa-youtube text-white text-lg"></i>
                </div>
                <div class="p-2 bg-gray-800 hover:bg-gray-700 rounded-full flex justify-center w-10 h-10 cursor-pointer">
                  <i class="fab fa-linkedin text-white text-lg"></i>
                </div>
                <div class="p-2 bg-gray-800 hover:bg-gray-700 rounded-full flex justify-center w-10 h-10 cursor-pointer">
                  <i class="fab fa-pinterest text-white text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>






  );
};

export default ContactUs;
