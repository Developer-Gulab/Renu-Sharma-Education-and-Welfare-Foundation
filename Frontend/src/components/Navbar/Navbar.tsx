import React, { useState } from "react";
import { CgMenuRightAlt, CgClose  } from "react-icons/cg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="pt-6 px-2">
      <div className="flex flex-row items-center justify-between rounded-3xl sm:mx-12 p-5 backdrop-blur-2xl bg-white bg-opacity-20">
        <div className="flex flex-row gap-4">
          <img src="/vite.svg" />
          <h1 className="text-white font-semibold text-xl sm:block hidden">Renu Sharma Foundation</h1>
        </div>
        <ul className="hidden text-white xl:flex flex-row items-center justify-center xl:space-x-12">
          <li>Home</li>
          <li>Gallery</li>
          <li>Services</li>
          <li>Internship</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <button className="bg-white py-2 px-4 rounded-xl font-semibold text-black hidden md:block cursor-pointer">
          Register
        </button>
        {
        isMenuOpen ? (
          <CgClose  className="text-white text-3xl opacity-90 md:hidden z-10" onClick={()=> setIsMenuOpen((true))} />
        ) : (
          <CgMenuRightAlt className="text-white text-3xl opacity-90 md:hidden z-10" onClick={()=> {setIsMenuOpen(true); console.log("dfdf")} } />
        )
        }
      </div>
    </nav>
  );
};

export default Navbar;
