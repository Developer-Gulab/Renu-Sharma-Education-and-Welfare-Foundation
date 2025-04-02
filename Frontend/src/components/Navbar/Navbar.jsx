import { useState } from "react";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="pt-6 px-2">
      <div className="flex flex-row items-center justify-between rounded-3xl sm:mx-12 p-2 px-6 backdrop-blur-2xl bg-white bg-opacity-80 shadow-lg z-10">
        <div className="flex flex-row gap-4 items-center">
          <img
            src="/image.png"
            height={60}
            width={60}
            className="rounded-full"
          />
          <h1 className="text-[#001F3F] font-semibold text-xl sm:block hidden ">
            Renu Sharma Foundation
          </h1>
        </div>
        <ul className="hidden text-[#001F3F] xl:flex flex-row items-center justify-center xl:space-x-12">
          <li>Home</li>
          <li>Gallery</li>
          <li>Services</li>
          <li>Internship</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <button className="bg-[#001F3F] py-2 px-4 font-semibold text-white hidden md:block cursor-pointer rounded-full">
          Register
        </button>
        {isMenuOpen ? (
          <CgClose
            className="text-[#001F3F] text-3xl opacity-90 md:hidden z-10"
            onClick={() => setIsMenuOpen(true)}
          />
        ) : (
          <CgMenuRightAlt
            className="text-[#001F3F] text-3xl opacity-90 md:hidden z-10"
            onClick={() => {
              setIsMenuOpen(true);
              console.log("dfdf");
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
