import React from "react";
import vedio from "../../assets/vediomp4.mp4";

export default function GalleryHeader() {
  return (
    <div className="md:px-4 md:mt-8 mt-4">
      {/*vedio container*/}
      <div className="relative w-full h-[50vh] overflow-hidden flex items-center justify-center group">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
          <source src={vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/*on hover the vedio*/}
        <div className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-500 group-hover:opacity-70 opacity-20"></div>
      {/* text emerge from negative to positive axis*/}
       <h1 className="absolute text-white text-2xl md:text-4xl font-bold  transition-all duration-500 transform -translate-x-full opacity-0
       bottom-4 left-4   group-hover:translate-x-0 group-hover:opacity-100 bg-black/50 px-4 py-2 rounded-lg border-l-8 border-red-700 pl-4 flex  flex-col md:flex-row">
   <p>Capturing Moments&nbsp;</p><p>Creating Change</p>
  </h1>
      </div>
    </div>
  );
}
