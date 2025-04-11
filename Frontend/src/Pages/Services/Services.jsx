import React, { useState } from "react";
import Reachus from "../../components/Reachus";
import HomePage from "../../components/HomePage";
import ServicesProvided from "../../components/ServicesProvided";
import PreviousWork from "../../components/PreviousWork";
import PopularCategories from "../../components/PopularCategories";
import Rating from "../../components/Rating";
import Feedback from "../../components/Feedback";

function Services() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#001f3f] relative">
      <HomePage onOpen={() => setShowModal(true)} />
      <ServicesProvided />
      <PreviousWork />
      <PopularCategories />
      <Rating />
      <Feedback onOpen={() => setShowModal(true)} />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-3xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>
            <Reachus onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
