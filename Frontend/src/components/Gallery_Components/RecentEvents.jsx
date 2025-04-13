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
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          src={current.videoUrl}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />


        <h1 className="text-white font-bold absolute right-3 top-2 text-lg">
          RECENT EVENTS

        </h1>
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 lg:top-40 md:top-80">
          <p className="text-white absolute md:bottom-48 bg-slate-600  px-4 py-1 sm:px-1  rounded font-dancing ">
            {current.description}
          </p>
          <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 bg-slate-500  text-white px-4 py-1 rounded flex flex-wrap gap-x-4 text-sm font-normal text-center font-dancing ">
            <span className="font-semibold">{current.event}</span>
            <span>📍 {current.location}</span>
            <span>📅 {current.date}</span>
          </div>

        </div>

        {/* Bottom SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full ">
       
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,224L60,224C120,224,240,224,360,213.3C480,203,600,181,720,192C840,203,960,245,1080,245.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
       

           </div>

      </div>

    </>

  );
};

export default RecentEvents;


