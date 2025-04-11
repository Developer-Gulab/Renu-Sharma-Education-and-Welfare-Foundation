import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Feedback Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-right">
          <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full p-2 border rounded-lg" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full p-2 border rounded-lg" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full p-2 border rounded-lg" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit</button>
          </form>
        </div>

        {/* Company Details & Map Section */}
        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-left">
          <h3 className="text-xl font-semibold mb-4">Our Office</h3>
          <p className="mb-2">123 Business Avenue, Pune, India</p>
          <p className="mb-4">Email: contact@company.com | Phone: +91 98765 43210</p>
          <div className="w-full h-64">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509105!2d144.95592831531563!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDE4JzE3LjYiUyAxNDTCsDU3JzE3LjIiRQ!5e0!3m2!1sen!2sin!4v1625249639331!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* New Section - Bottom Section */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-md" data-aos="fade-up">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {/* Vision */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-sm text-gray-700">
              To create a world where all individuals have equal access to basic human rights, education, healthcare, and opportunities for sustainable livelihoods.
            </p>
          </div>
          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center gap-2">
                <img src="assets\instagram-icon.png" alt="Instagram" className="w-6 h-6" /> Instagram
              </li>
              <li className="flex items-center justify-center gap-2">
                <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" /> LinkedIn
              </li>
              <li className="flex items-center justify-center gap-2">
                <img src="/twitter-icon.png" alt="Twitter" className="w-6 h-6" /> Twitter
              </li>
              <li className="flex items-center justify-center gap-2">
                <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" /> Facebook
              </li>
            </ul>
          </div>
          {/* Suggestions */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Any Suggestions</h3>
            <input type="text" className="w-full p-2 border rounded-lg mb-2" placeholder="Your Name" />
            <input type="email" className="w-full p-2 border rounded-lg mb-2" placeholder="Your Email-ID" />
            <textarea className="w-full p-2 border rounded-lg mb-2" rows="2" placeholder="Feedback/Suggestions"></textarea>
            <div className="flex justify-center gap-2">
              <button className="bg-black text-white px-4 py-2 rounded-lg">Send</button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg">Reset</button>
            </div>
          </div>
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              📍 Gurugram, Haryana - 122503, India
            </p>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              ✉️ Info@Admedusociety.Org
            </p>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              📞 +91-9958586721
            </p>
            <p className="text-sm text-gray-700 flex items-center gap-2">
              📞 +91-9671457355
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
