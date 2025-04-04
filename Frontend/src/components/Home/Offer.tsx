import React from "react";

const services = [
  {
    title: "Graphic Designer",
    description: "Description 1",
  },
  {
    title: "Video Editor",
    description: "Description 2",
  },
  {
    title: "Content Writer",
    description: "Description 3",
  },
  {
    title: "Human Resources",
    description: "Description 4",
  },
  {
    title: "Social Media Marketing",
    description: "Description 4",
  },
  {
    title: "Web Developer",
    description: "Description 4",
  },
];

const Offer = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32 w-full">
      <h1 className="text-7xl font-bold text-white">What we Offer?</h1>
      <h1 className="text-2xl font-bold mt-4">
        We offer a range of services to help you achieve your goals.
      </h1>
      {/* <div className="flex flex-row flex-wrap  items-center justify-center mt-12 space-y-12 ">
        {services.map((service) => (
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white bg-opacity-10 py-20 px-12">
            <h1 className="text-lg font-bold text-white">
              {service.description}
            </h1>
            <h1 className="text-lg font-bold text-white">{service.title}</h1>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Offer;
