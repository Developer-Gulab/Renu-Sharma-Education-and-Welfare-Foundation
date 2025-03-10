import React, { useState } from 'react'
import educationGalleryImg from "../../data/educationGalleryImg.json";
import healthCareGallery from "../../data/healthCareGallery.json"
import donationGallery from "../../data/donationGallery.json"
import volunteersGallery from "../../data/volunteersGallery.json"
import internshipGallery from "../../data/internshipGallery.json"


function GalleryMid() {
    return (
        <div className=' bg-blue-950 justify-evenly p-20  '>
            <div className="tabs tabs-border bg-purple-600 font-medium rounded-md">
                <input type="radio" name="my_tabs_2" className="tab  text-white hover:text-black hover:bg-yellow-400  hover:rounded-l-md flex " aria-label="📚 Education " defaultChecked />
                <div className="tab-content border-base-300  p-10 bg-blue-50 rounded-b-md">
                    <h1 className=" text-3xl  text-center font-semibold font-ubuntu ">🎓 Empowering Education for a <span className='text-red-700'>Brighter Future!</span></h1>
                    <div className=' gap-6 bg-blue-50 p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                        {
                            educationGalleryImg.map((item) => (

                                <div key={item.id} className="relative group w-80 h-60 my-1">
                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl transition-all duration-500 group-hover:scale-105 shadow-lg group-hover:brightness-75 "
                                    />
                                    <div className="absolute  bottom-4 left-4 font-serif text-shadow-md flex flex-col items-start  p-3 text-white  rounded-xl transition-all duration-500">
                                        <p className='text-lg font-semibold opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100'>{item.project}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 '>{item.event}</p>
                                        <p className='text-sm opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 '>{item.impact}</p>
                                        <p className='text-sm font-bold opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 '>{item.date}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 text-white hover:text-black " aria-label="🏥 Healthcare" />
                <div className="tab-content border-base-300  p-10 bg-blue-50 rounded-b-md">
                    <h1 className=" text-3xl  text-center font-semibold font-ubuntu ">❤️ Health & Wellness Initiatives:<span className='text-green-700'>  Care for All!</span></h1>
                    <div className=' gap-6 bg-blue-50 p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                        {
                            healthCareGallery.map((item) => (

                                <div key={item.id} className="relative group w-80 h-60 my-1">
                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg group-hover:brightness-75 "
                                    />
                                    <div className="absolute  bottom-4 left-4 font-serif text-shadow-md flex flex-col items-start  p-3 text-white  rounded-xl transition-all duration-500">
                                        <p className='text-lg font-semibold opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100'>{item.initiative}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 '>{item.event}</p>
                                        <p className='text-sm opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 '>{item.impact}</p>
                                        <p className='text-sm font-bold opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 '>{item.date}</p>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>

                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 text-white hover:text-black " aria-label="🚀 Internship" />
                <div className="tab-content border-base-300  p-10 bg-blue-50 rounded-b-md">
                    <h1 className=" text-3xl  text-center font-semibold font-ubuntu ">💼 Unlock Your Potential with  <span className='text-yellow-700'> Internship!</span></h1>
                    <div className=' gap-6 bg-blue-50 p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                        {
                            internshipGallery.map((item) => (

                                <div key={item.id} className="relative group w-80 h-60 my-1">
                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg group-hover:brightness-75"
                                    />
                                    <div className="absolute  bottom-4 left-4 font-serif text-shadow-md flex flex-col items-start  p-3 text-white  rounded-xl transition-all duration-500">

                                        <p className='text-lg font-semibold opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 '>{item.company}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100'>{item.role}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100'>{item.impact}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 font-bold'>{item.date}</p>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>
                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 text-white hover:text-black " aria-label="🤝 Volunteer" />
                <div className="tab-content border-base-300  p-10 bg-blue-50 rounded-b-md">
                    <h1 className=" text-3xl  text-center font-semibold font-ubuntu ">🌍 Explore the World of <span className='text-pink-700'>Volunteering!</span></h1>
                    <div className='gap-6 bg-blue-50 p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                        {
                            volunteersGallery.map((item) => (

                                <div key={item.id} className="relative group w-80 h-60 my-1">
                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg group-hover:brightness-75" />

                                    <div className="absolute  bottom-4 left-4 font-serif text-shadow-md flex flex-col items-start  p-3 text-white  rounded-xl transition-all duration-500">

                                        <p className='text-lg font-semibold opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 '>{item.organization}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100'>{item.event}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100'>{item.impact}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 font-bold '>{item.date}</p>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>

                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 text-white hover:text-black "  aria-label="❤️ Donation" />
                <div className="tab-content border-base-300  p-10 bg-blue-50 rounded-b-md">
                    <h1 className=" text-3xl  text-center font-semibold font-ubuntu ">🍽️ Spreading Smiles Through<span className='text-cyan-700'> Donation!</span></h1>
                    <div className='gap-6 bg-blue-50 p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                        {
                            donationGallery.map((item) => (


                                <div key={item.id} className="relative group  w-80 h-60 my-1 ">

                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl  transition-all duration-500 group-hover:scale-105  group-hover:brightness-75 shadow-lg"
                                    />
                                    <div className="absolute  bottom-4 left-4 font-serif text-shadow-md flex flex-col items-start  p-3 text-white  rounded-xl transition-all duration-500 ">

                                        <p className='text-lg font-semibold opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 '>{item.cause}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100'>{item.event}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100'>{item.impact}</p>
                                        <p className='text-sm  opacity-0 -translate-x-11 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 font-bold '>{item.date}</p>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>




            </div>

        </div>
    )
}

export default GalleryMid