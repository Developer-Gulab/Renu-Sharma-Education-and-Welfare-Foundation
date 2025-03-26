import React from "react";

function Feedback() {
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

  const videoSources = [
    { src: "/videos/video1.mp4", title: "Community Outreach" },
    { src: "/videos/video2.mp4", title: "Education Programs" },
    { src: "/videos/video3.mp4", title: "Environmental Efforts" },
  ];

  return (
    <div>
      <div>
        <div className="container mx-auto flex items-center justify-center flex-col py-16 px-4">
          <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
            What other says
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {temp.map((program, index) => (
              <div
                key={index}
                className="relative text-center bg-blue-100 p-6 rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="relative">
                  <video
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    autoPlay
                    loop
                    muted
                    // playsInline
                    src={videoSources[index].src}
                    controls
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0  transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
