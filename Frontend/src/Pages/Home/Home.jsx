import { useRef } from "react";
import { useState } from "react";
import KnowMore from "../../components/Home/KnowMore";
import AboutRenu from "../../components/Home/AboutRenu";
import Highlights from "../../components/Home/Highlights.tsx";
import Impact from "../../components/Home/Impact";
import FAQ from "../../components/Home/FAQ";
import FooterTitle from "../../components/Home/FooterTitle";
import { Link } from "react-router-dom";
import Programs from "../../components/Home/Programs";
import Donate from "../../components/Home/Donate";
import Leader from "../../components/Home/Leader";
import Feedback from "@/components/Home/Feedback";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const mainRef = useRef(null);

  return (
    <div ref={mainRef} className="min-h-screen flex flex-col">
      <div className="relative min-h-screen">
        {/* Background elements with lower z-index */}
        <div className="fixed inset-0 min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#001F3F]/10 via-[#001F3F]/5 to-transparent opacity-50 z-0"></div>
        <div className="fixed inset-0 min-h-screen bg-[linear-gradient(to_right,#001F3F0f_1px,transparent_1px),linear-gradient(to_bottom,#001F3F0f_1px,transparent_1px)] bg-[size:4rem_4rem] z-0"></div>

        {/* Content with higher z-index */}
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold text-center md:mt-40 mt-32 text-[#001F3F]">
            Renu Sharma Foundation
          </h1>
          <h2 className="text-sm sm:text-xl md:text-lg font-semibold text-center mt-8 text-[#001F3F] border-[0px] rounded-badge bg-[#001F3F] bg-opacity-10 p-1 px-4 w-fit mx-auto">
            Join us in our mission to create a better future for underprivileged
            communities
          </h2>

          <div className="flex justify-center gap-8 pt-10">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Logout
              </button>
            ) : (
              <div className="space-x-2">
                <Link
                  to="/login"
                  className="bg-[#001F3F] text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#001F3F] text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <Impact />
      <AboutRenu />
      <Programs />
      <Highlights />
      <Donate />
      <FAQ />
      <Leader />
      <Feedback />
      <KnowMore />
      <FooterTitle />
    </div>
  );
}
