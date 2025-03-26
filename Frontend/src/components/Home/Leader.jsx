import React from "react";

function Leader() {
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
  const image = [
    "url('https://img.freepik.com/premium-photo/modern-business-man-formal-suit-standing-with-crossed-arms-isolated-grey-background-businesspeople-concept_533057-1641.jpg')",
    "url('https://img.freepik.com/premium-photo/young-man-formal-attire-his-workplace-generative-ai_94628-10978.jpg')",
    "url('https://th.bing.com/th/id/OIP.RLcJBl8mSFJnFtcg13TGDwHaE8?rs=1&pid=ImgDetMain')",
  ];
  return (
    <div>
      <section>
        <div className="container mx-auto flex items-center justify-center flex-col py-16 px-4">
          <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {temp.map((program, index) => (
              <div
                key={index}
                className="relative text-center bg-blue-100 p-6 rounded-lg hover:shadow-lg transition duration-300"
              >
                <img
                  src={image[index].replace("url('", "").replace("')", "")}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {/* <p className="text-white text-center">{program.hoverText}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leader;
