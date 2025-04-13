import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function Preloader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a192f] z-50 space-y-4">
      <FaBriefcase className="text-cyan-400 text-6xl animate-bounce drop-shadow-lg" />
      <h1 className="text-white text-3xl font-bold animate-pulse text-center">
        RenuSharma Foundation
      </h1>
      <p className="text-cyan-300 text-lg animate-pulse">Loading Internship Page...</p>
    </div>
  );
}
