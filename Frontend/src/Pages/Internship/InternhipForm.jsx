import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { useState, useEffect } from "react";

export default function InternshipForm({ card }) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // Watching the tenure input value
    const tenureValue = watch("tenure");

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'valid' | 'invalid' | null

    useEffect(() => {
        if (tenureValue !== undefined) {
            setLoading(true);
            setStatus(null);

            setTimeout(() => {
                if (tenureValue < 1 || tenureValue > 6) {
                    setStatus("invalid");
                } else {
                    setStatus("valid");
                }
                setLoading(false);
            }, 1000); // Simulate loading for 1 second
        }
    }, [tenureValue]);
    const onSubmit = (data) => {
        const InternshipInfo = {
            name: data.name,
            college: data.college,
            number: data.number,
            email: data.email,
            skills: data.skills,
            course:data.course,
            gender:data.gender,
            dob:data.dob,
            domain: data.domain,
            tenure: data.tenure,
            motivation: data.motivation,
        };
        console.log("InternshipInfo->", InternshipInfo);
        document.getElementById("my_modal_3").close();
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-[80vw] max-w-none h-[90vh] overflow-y-auto 
        bg-gradient-to-r from-gray-900 via-gray-800 to-blue-700
        rounded-lg shadow-lg p-6">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <Link to="/Internship">
                            <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2  "
                                onClick={() => document.getElementById("my_modal_3").close()}>✕
                            </button>
                        </Link>

                        {/* Modal Heading */}
                        <h1 className="text-3xl font-extrabold mb-4 text-center text-white flex items-center justify-center gap-3">{card.name} Internship</h1>
                        <hr className="w-[75%] mt-3 mx-auto bg-gray-500 h-1 border-none" />

                        <div className="flex flex-col md:flex-row justify-center">
                            {/* Name Field */}
                            <div className="mt-2 px-4 py-1 w-full md:w-1/2">
                                <h3 className="mb-1 text-white">Name</h3>
                                <input type="text" placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    {...register("name", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.name && "This field is required"}</p>
                            </div>

                            {/* Contact Number Field */}
                            <div className="mt-2 px-4 py-1 w-full md:w-1/2">
                                <h3 className="mb-1 text-white">Contact No.</h3>
                                <input type="number" placeholder="Enter your contact no."
                                    className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    {...register("number", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.number && "This field is required"}</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center">
                            {/* Gender*/}
                            <div className="mt-2 px-4 py-1 w-full md:w-1/2">
                                <h3 className="mb-1 text-white">Gender</h3>
                                <input type="text" placeholder="Enter your gender"
                                    className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    {...register("gender", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.gender && "This field is required"}</p>
                            </div>

                            {/*Date of birth Field */}
                            <div className="mt-2 px-4 py-1 w-full md:w-1/2">
                                <h3 className="mb-1 text-white">D.O.B</h3>
                                <input
                                    type="date"
                                    className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    {...register("dob", { required: true })}
                                />
                                <p className="text-red-600 mt-2">{errors.dob && "This field is required"}</p>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row justify-center">
                            {/* Email Field */}
                            <div className="mt-2 px-4 py-1 w-full w-1/2">
                                <h3 className="mb-1 text-white">Email</h3>
                                <input type="email" placeholder="Enter email"
                                    className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    {...register("email", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.email && "This field is required"}</p>
                            </div>

                            {/* College Field */}
                            <div className="mt-2 px-4 py-1 w-full w-1/2">
                                <h3 className="mb-1 text-white">College</h3>
                                <input type="text" placeholder="Enter college name"
                                    className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    {...register("college", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.college && "This field is required"}</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center">
                            {/* Course*/}
                            <div className="mt-2 px-4 py-1 w-full md:w-1/2">
                                <h3 className="mb-1 text-white">Course</h3>
                                <input type="text" placeholder="Enter your course"
                                    className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    {...register("course", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.course && "This field is required"}</p>
                            </div>

                            {/* Id NO.*/}
                            <div className="mt-2 px-4 py-1 w-full md:w-1/2">
                                <h3 className="mb-1 text-white">Id No.</h3>
                                <input type="number" placeholder="Enter your Id no."
                                    className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    {...register("id", { required: true })} />
                                <p className="text-red-600 mt-2">{errors.id && "This field is required"}</p>
                            </div>
                        </div>

                        {/* Skills Field */}
                        <div className="mt-2 px-4 py-1">
                            <h3 className="mb-1 text-white">Skills And Achievements</h3>
                            <input type="text" placeholder="Enter your skills"
                                className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                {...register("skills", { required: true })} />
                            <p className="text-red-600 mt-2">{errors.skills && "This field is required"}</p>
                        </div>

                        {/* Domain Dropdown */}
                        <div className="mt-2 px-4 py-1">
                            <h3 className="mb-1 text-white">Domain</h3>
                            <select className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
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
                            <h3 className="text-lg font-semibold text-white">Tenure Period (1 to 6 Months)</h3>

                            <div className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg shadow-lg">
                                <input
                                    type="number"
                                    min="1"
                                    max="6"
                                    {...register("tenure", { required: true, min: 1, max: 6 })}
                                    className={`p-3 text-lg font-semibold rounded-md w-24 text-gray-900 transition-all duration-300 outline-none border-2 ${status === "invalid" ? "border-red-500"
                                            : status === "valid" ? "border-green-500"
                                                : "border-gray-300"
                                        }`}
                                />

                                {/* Show loading spinner or validation icons */}
                                <div className="flex items-center justify-center w-10 h-10">
                                    {loading ? (
                                        <ImSpinner2 className="text-gray-400 text-3xl animate-spin" />
                                    ) : status === "valid" ? (
                                        <FaCheckCircle className="text-green-500 text-3xl transition-opacity duration-300 opacity-100" />
                                    ) : status === "invalid" ? (
                                        <FaTimesCircle className="text-red-500 text-3xl transition-opacity duration-300 opacity-100" />
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* Motivation Field */}
                        <div className="mt-2 px-4 py-1">
                            <h3 className="mb-1 text-white">Why do you want this internship?</h3>
                            <textarea placeholder="Explain in a few sentences" rows="3"
                                className="w-full p-3 border border-gray-400 rounded-lg shadow-sm focus:outline-none 
               focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                {...register("motivation", { required: true })} />
                            <p className="text-red-600 mt-2">{errors.motivation && "This field is required"}</p>
                        </div>


                        {/* Submit Button */}
                        <div className="flex justify-center mt-4 px-4 py-1">

                            <motion.button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white 
               font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                                whileTap={{ scale: 0.95 }} // Click effect
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
