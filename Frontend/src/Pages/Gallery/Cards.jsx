import React from "react";
export default function Cards({item,onClick}){
    console.log(item);
    return(
        <>
    <div className="mt-4 my-3 p-3 cursor-pointer" onClick={onClick}>
  <div className="relative group w-full overflow-hidden rounded-2xl shadow-xl transition-all duration-500 
  hover:scale-[1.05] hover:shadow-3xl ">
    
    {/* Background Image with Smooth Hover Zoom */}
    <figure className="relative overflow-hidden rounded-2xl">
      <img
        className="w-full h-64 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
        src={item.image}
        alt={item.title}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-70 group-hover:opacity-80 transition-opacity duration-700"></div>
    </figure>

    {/* Glassmorphism Content Box at the Bottom */}
    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-2 shadow-lg border border-white/20 group-hover:border-white/40 transition-all duration-500">
      <h2 className="text-sm font-semibold text-white tracking-wide text-center uppercase relative">
        {item.category}
        {/* Expanding Animated Underline */}
        <span className="absolute left-1/2 bottom-[-3px] w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 opacity-80 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
      </h2>
    </div>
  </div>
</div>



        </>
    )
}