
import React, { useEffect, useState } from "react";
import events from "../../assets/events.json";

const RecentEvents = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  const current = events[index];

  return (
    <div className="w-full h-screen flex flex-col md:flex-row bg-base-200">
      {/* Left: Video */}
      <div className="w-full md:w-3/5 h-1/2 md:h-full">
        <video
          src={current.videoUrl}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Info */}
      <div className="w-full md:w-2/5 h-1/2 md:h-full p-8 flex flex-col justify-center gap-4 bg-base-100">
        <h2 className="text-3xl font-bold">{current.title}</h2>
        <p className="text-base text-gray-600">{current.description}</p>
      </div>
    </div>
  );
};

export default RecentEvents;
