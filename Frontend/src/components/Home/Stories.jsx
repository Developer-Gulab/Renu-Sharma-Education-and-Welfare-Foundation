import { motion } from "framer-motion";

function Stories() {
  const temp = [
    {
      title: "community",
      description: "connect with people and build community",
      hoverText: "Community",
    },
    {
      title: "Connecting with people",
      description: "Visiting various places to connect with the peoples",
      hoverText: "connect with people",
    },
    {
      title: "Education",
      description: "Providing quality education to underprivileged children",
      hoverText: "Education",
    },
  ];

  const images = [
    "url('https://img.freepik.com/premium-photo/big-crowd-indian-women-vector-avatars-indian-woman-representing-different-statesreligions-i_1057738-35662.jpg')",
    "url('https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg')",
    "url('https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg')",
  ];

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto flex items-center justify-center flex-col py-16 px-4">
          <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
            Our Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {temp.map((program, index) => (
              <motion.div
                key={index}
                className="relative text-center bg-blue-100 p-6 rounded-lg hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={images[index].replace("url('", "").replace("')", "")}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center">{program.hoverText}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Stories;
