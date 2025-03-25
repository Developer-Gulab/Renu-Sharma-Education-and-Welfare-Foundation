import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

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
        };
        console.log("InternshipInfo->", InternshipInfo);
    };

    return (
        <>

                <dialog id="my_modal_3" className="modal">
                    <div  className="modal-box w-[75vw] h-[75vh] overflow-y-auto">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* Close Button */}
                            <Link to="/Internship">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                    onClick={() => document.getElementById("my_modal_3").close()}>✕
                                </button>
                            </Link>

                            {/* Modal Heading */}
                            <h1 className="font-bold text-4xl text-center">{card.name} Internship</h1>

                            {/* Name Field */}
                            <div className="mt-2 px-4 py-1">
                                <h3 className="mb-1">Name</h3>
                                <input type="text" placeholder="Enter your name" 
                                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                    {...register("name", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.name && "This field is required"}</p>
                            </div>

                            {/* Contact Number Field */}
                            <div className="mt-2 px-4 py-1">
                                <h3 className="mb-1">Contact No.</h3>
                                <input type="number" placeholder="Enter your contact no." 
                                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                    {...register("number", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.number && "This field is required"}</p>
                            </div>

                            {/* Email Field */}
                            <div className="mt-2 px-4 py-1">
                                <h3 className="mb-1">Email</h3>
                                <input type="email" placeholder="Enter email" 
                                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                    {...register("email", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.email && "This field is required"}</p>
                            </div>

                            {/* College Field */}
                            <div className="mt-2 px-4 py-1">
                                <h3 className="mb-1">College</h3>
                                <input type="text" placeholder="Enter college name" 
                                    className="w-full p-2 border border-gray-300 rounded-md outline-none"
                                    {...register("college", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.college && "This field is required"}</p>
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

                            {/* Submit Button */}
                            <div className="flex justify-between mt-4 px-4 py-1">
                                <Link to="/Internship">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                                        Submit
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </dialog>
        
        </>
    );
}
