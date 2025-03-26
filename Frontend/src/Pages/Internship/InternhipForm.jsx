import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function InternshipForm({ card }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        const InternshipInfo = {
            name: data.name,
            college: data.college,
            number: data.number,
            email: data.email,
            skills: data.skills,
            domain: data.domain,
            tenure:data.tenure,
            motivation:data.motivation,
        };
        console.log("InternshipInfo->", InternshipInfo);
        document.getElementById("my_modal_3").close();
    };

    return (
        <>
 <dialog id="my_modal_3" className="modal">
                    <div  className="modal-box w-[75vw] max-w-none h-[80vh] overflow-y-auto 
        bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 
        rounded-lg shadow-lg p-6">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* Close Button */}
                            <Link to="/Internship">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onClick={() => document.getElementById("my_modal_3").close()}>✕
                                </button>
                            </Link>

                            {/* Modal Heading */}
                            <h1 className="font-bold text-4xl text-center">{card.name} Internship</h1>
                            <hr className="w-[75%] mt-3 mx-auto bg-gray-500 h-1 border-none" />

                               <div className="flex flex-col md:flex-row justify-center">
                            {/* Name Field */}
                            <div className="mt-2 px-4 py-1 w-full md:w-1/2">
                                <h3 className="mb-1">Name</h3>
                                <input type="text" placeholder="Enter your name" 
                                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                    {...register("name", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.name && "This field is required"}</p>
                            </div>

                            {/* Contact Number Field */}
                            <div className="mt-2 px-4 py-1 w-full md:w-1/2">
                                <h3 className="mb-1">Contact No.</h3>
                                <input type="number" placeholder="Enter your contact no." 
                                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                    {...register("number", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.number && "This field is required"}</p>
                            </div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-center">
                            {/* Email Field */}
                            <div className="mt-2 px-4 py-1 w-full w-1/2">
                                <h3 className="mb-1">Email</h3>
                                <input type="email" placeholder="Enter email" 
                                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                    {...register("email", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.email && "This field is required"}</p>
                            </div>

                            {/* College Field */}
                            <div className="mt-2 px-4 py-1 w-full w-1/2">
                                <h3 className="mb-1">College</h3>
                                <input type="text" placeholder="Enter college name" 
                                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                    {...register("college", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.college && "This field is required"}</p>
                            </div>
                            </div>

                            {/* Skills Field */}
                            <div className="mt-2 px-4 py-1">
                                <h3 className="mb-1">Skills And Achievements</h3>
                                <input type="text" placeholder="Enter your skills" 
                                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                    {...register("skills", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.skills && "This field is required"}</p>
                            </div>

                            {/* Domain Dropdown */}
                            <div className="mt-2 px-4 py-1">
                                <h3 className="mb-1">Domain</h3>
                                <select className="w-full p-2 border border-gray-300 rounded-md outline-none" 
                                    {...register("domain", { required: true })}>
                                    <option value={card.name}>{card.name}</option>
                                    <option value="WebDevelopment">Web Development</option>
                                    <option value="UI/UX Development">UI/UX Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="HR Internship">HR Internship</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Data Analyst">Data Analyst</option>
                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                    <option value="CSR">CSR</option>
                                </select>
                                <p className="text-red-600 mt-2">{errors.domain && "This field is required"}</p>
                            </div>

                            {/* Tenure Period Field */}
<div className="mt-2 px-4 py-1">
    <h3 className="mb-1">Tenure Period</h3>
    <div className="flex gap-4">
        <label className="flex items-center">
            <input type="radio" value="3 Months" {...register("tenure", { required: true })} className="mr-2" />
            3 Months
        </label>
        <label className="flex items-center">
            <input type="radio" value="6 Months" {...register("tenure", { required: true })} className="mr-2" />
            6 Months
        </label>
    </div>
    <p className="text-red-600 mt-2">{errors.tenure && "This field is required"}</p>
</div>

{/* Motivation Field */}
<div className="mt-2 px-4 py-1">
    <h3 className="mb-1">Why do you want this internship?</h3>
    <textarea placeholder="Explain in a few sentences" rows="3" 
        className="w-full p-2 border border-gray-300 rounded-md outline-none"
        {...register("motivation", { required: true })} />
    <p className="text-red-600 mt-2">{errors.motivation && "This field is required"}</p>
</div>


                            {/* Submit Button */}
                            <div className="flex justify-center mt-4 px-4 py-1">
  
    <motion.button
    type="submit"
    className="px-4 py-2 bg-blue-500 text-white rounded-md"
    whileTap={{ scale: 0.9 }} // Scales down slightly when clicked
>
    Submit
</motion.button>
    
</div>

                        </form>
                    </div>
                </dialog>
        
        </>
    );
}
