import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamMember = ({ name, title, description, image, aosAnimation, aosDelay }) => {
  return (
    <div 
      className=" p-6 rounded-lg  transition-transform duration-300 shadow-xl hover-effect shadow-slate-800" 
      data-aos={aosAnimation} 
      data-aos-delay={aosDelay}
    >
      <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg hover-effect shadow-slate-800" />
      <h3 className="text-xl font-semibold text-[#358fcb] text-center">{name}</h3>
      <p className="text-[#4c8ab4]  text-center">{title}</p>
      <p className="text-black mt-2 text-center">{description}</p>
    </div>
  );
};

const LeadershipTeamSection = () => {
  return (
    <section className="py-16 bg-white px-4 md:px-20 lg:px-32" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
          <TeamMember 
            name="Dr. Sarah Johnson"
            title="Medical Director"
            description="With over 15 years of experience in public health systems, Dr. Johnson leads our healthcare initiatives with expertise in preventative care models."
            image="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-1024.png" // Replace with actual image URL
            aosAnimation="zoom-in"
            aosDelay={100}
          />
          <TeamMember 
            name="Prof. James Nguyen"
            title="Education Strategist"
            description="Former university dean with a passion for accessible education, developing our innovative learning frameworks and teacher training programs."
            image="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-1024.png" // Replace with actual image URL
            aosAnimation="zoom-in"
            aosDelay={200}
          />
          <TeamMember 
            name="Priya Sharma"
            title="Community Engagement Lead"
            description="Specializing in participatory development approaches, Priya ensures our programs are culturally appropriate and community-driven."
            image="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-1024.png" // Replace with actual image URL
            aosAnimation="zoom-in"
            aosDelay={300}
          />
          <TeamMember 
            name="Michael Okonkwo"
            title="Technology Innovation Head"
            description="Bringing extensive experience in digital health platforms, Michael develops technological solutions that extend our reach to remote communities."
            image="https://cdn2.iconfinder.com/data/icons/business-hr-and-recruitment/100/account_blank_face_dummy_human_mannequin_profile_user_-1024.png" // Replace with actual image URL
            aosAnimation="zoom-in"
            aosDelay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamSection;