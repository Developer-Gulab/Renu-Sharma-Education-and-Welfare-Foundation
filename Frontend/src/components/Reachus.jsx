import { motion } from "framer-motion";
import { useState } from "react";

const Reachus = ({ onClose }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    domain: "",
    duration: "",
    additional: "",
  });

  const options = [
    {
      title: "I'm a client, hiring for a project",
      icon: "💼",
      id: "client",
    },
    {
      title: "I'm a freelancer, looking for work",
      icon: "💻",
      id: "freelancer",
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#001f3f]/90 px-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white hover:text-gray-300 text-2xl"
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-bold mb-6 text-center"
            >
              Select Your Role
            </motion.h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-6">
              {options.map((opt) => (
                <motion.div
                  key={opt.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelected(opt.id)}
                  className={`w-[260px] cursor-pointer border ${
                    selected === opt.id
                      ? "border-cyan-400 bg-white/20 shadow-lg"
                      : "border-white/20"
                  } rounded-xl p-5 text-center transition-all duration-300`}
                >
                  <div className="text-3xl mb-2">{opt.icon}</div>
                  <p className="text-lg font-medium">{opt.title}</p>
                  <div className="mt-3">
                    <div
                      className={`h-4 w-4 rounded-full inline-block border-2 ${
                        selected === opt.id
                          ? "border-cyan-400 bg-cyan-400"
                          : "border-white"
                      }`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {selected && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
                <input
                  type="text"
                  name="domain"
                  placeholder={
                    selected === "client"
                      ? "Which domain do you need talent for?"
                      : "Which domain are you skilled in?"
                  }
                  value={formData.domain}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
                <input
                  type="number"
                  name="duration"
                  placeholder={
                    selected === "client"
                      ? "For how many months do you need to hire?"
                      : "For how many months are you available?"
                  }
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
                <textarea
                  name="additional"
                  placeholder={
                    selected === "client"
                      ? "Describe your project or expectations"
                      : "Describe your experience or availability"
                  }
                  value={formData.additional}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/10 text-white placeholder-gray-300 border border-white/20 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    background:
                      "linear-gradient(90deg, #38bdf8, #06b6d4)",
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-cyan-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
                >
                  Submit
                </motion.button>
              </form>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center p-6"
          >
            <h2 className="text-3xl font-semibold text-cyan-400 mb-3">
              Thank you!
            </h2>
            <p className="text-white text-opacity-90">
              We’ll get back to you as soon as possible.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Reachus;
