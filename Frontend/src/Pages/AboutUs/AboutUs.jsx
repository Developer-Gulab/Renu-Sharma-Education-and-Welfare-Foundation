import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdNightShelter } from "react-icons/md";
import {
  FaUtensils,
  FaTshirt,
  FaPaw,
  FaHospital,
  FaUsers,
} from "react-icons/fa"; // Other icons

import ImageSlider from "../../components/about/ImageSlider";
import ImpactSection from "../../components/about/ImpactSection";
import KeyProgramsSection from "../../components/about/KeyProgramItem";
import LeadershipTeamSection from "../../components/about/LeadershipTeamSection";
import PartnersSection from "../../components/about/PartnersSection";
import HeroCarousel from "../../components/about/HeroCarousel";
import ServiceCard from "../../components/about/ServiceCard";
import Mission from "../../components/about/Mission";
import AboutRSF from "../../components/about/AboutRSF";
import Founders from "../../components/about/Founders";
import Footer from "@/components/Home/Footer";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#001F3F] text-white">
    <div className="min-h-screen bg-white text-black"> 
    
      {/* Hero Section */}
      <HeroCarousel />

      <br />
      <br />

    
{/* About Renu Sharma Foundation Section */}
<AboutRSF/>

    
{/* What We Do Section */}
<ServiceCard/>

{/* our Mission */}
<Mission/>
 
{/* Our Impact Section */}
<ImpactSection />

    
{/* About Founder Section */}
      <Founders/>

      {/* Key Program Section */}
      <KeyProgramsSection />

      {/* Team Section */}
      <LeadershipTeamSection />

      {/* Our partner companys */}
      <PartnersSection />

      {/* Image Slider */}
      <ImageSlider />
{/* footer */}
     <Footer/>
    </div>
    </div>
  );
}
