import React from "react";

const KnowMore = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className=" sm:px-20  lg:py-2 bg-white py-2 mx-4  md:mx-24 rounded-3xl font-bold border-2 border-[#001F3F]  md:block cursor-pointer text-white bg-opacity-20 p-1">
        <div className="flex flex-col md:flex-row rounded-3xl px-4 w-full mx-auto bg-cover h-64 items-center md:justify-around justify-evenly">
          <div className="text-3xl md:text-2xl lg:text-2xl xl:text-4xl text-center md:text-left text-white font-bold">
            Delve deeper into who we are and
            <br /> what we do.{" "}
          </div>
          <button className="bg-[#001F3F] py-2 px-6 rounded-xl font-bold  md:block cursor-pointer text-white p-1 text-sm lg:text-base">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
