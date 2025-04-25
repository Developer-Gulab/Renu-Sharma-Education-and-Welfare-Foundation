import React, { useEffect, useRef, useState } from "react";
import events from "../../assets/events.json";

const RecentEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    // If at first event and user scrolls up → allow page scroll
    if (currentIndex === 0 && e.deltaY < 0) return;

    // If at last event and user scrolls down → allow page scroll
    if (currentIndex === events.length - 1 && e.deltaY > 0) return;

    // Prevent default scroll
    e.preventDefault();

    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0 && currentIndex < events.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentIndex]);

  const currentEvent = events[currentIndex];

  return (
    <div
      // ref={containerRef}
      className="flex h-screen bg-[#002B40] text-white overflow-hidden"
    >
      {/* Left - Scrollable Content */}
      <div className="w-1/2 flex items-center justify-center ">
        <div className="info-box p-2 rounded-lg w-full max-w-md" ref={containerRef}>
          <h2 className="text-4xl font-bold text-cyan-300">
            {currentEvent.event}
          </h2>
          <p className="mt-4 text-base text-gray-200">
            {currentEvent.description}
          </p>
          <p className="text-sm mt-4 text-gray-400">
             {currentEvent.location} | {currentEvent.date}
          </p>
        </div>
      </div>

      {/* Right - Video */}
      <div className="w-1/2 p-4 flex justify-center items-center bg-[#001A26]">
        <video
          key={currentEvent.videoUrl}
          src={currentEvent.videoUrl}
          autoPlay
          muted
          loop
          className="rounded-xl w-[90%] shadow-2xl"
        />
      </div>
    </div>
  );
};

export default RecentEvents;
