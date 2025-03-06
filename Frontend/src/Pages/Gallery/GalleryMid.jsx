
import React from 'react'
import educationGalleryImg from "../../data/educationGalleryImg.json";
import healthCareGallery from "../../data/healthCareGallery.json"
import donationGallery from "../../data/donationGallery.json"
import volunteersGallery from "../../data/volunteersGallery.json"
import internshipGallery from "../../data/internshipGallery.json"

function GalleryMid() {
    return (
        <div className=' bg-white-200 justify-evenly p-12 '>
            <div className="tabs tabs-border bg-blue-700 font-medium rounded-md"> 
                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 text-white hover:text-black   flex " aria-label="📚 Education " defaultChecked />
                <div className="tab-content border-base-300  p-10 bg-blue-50">
                <h1 className=" text-4xl font-serif ">Explore the World of Education!</h1>

                    <div className='grid grid-cols-3 gap-6 bg-blue-50 p-10'>

                        {
                            educationGalleryImg.map((item) => (

                                <div key={item.id} className="relative group w-80 h-80 my-4">
                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg"
                                    />
                                    <div className="absolute inset-0 font-serif text-shadow-md flex flex-col items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 rounded-xl   transition-all duration-500 group-hover:scale-105 shadow-lg hover:shadow-xl">
                                        <p className='text-sm font-bold '>{item.date}</p>
                                        <p className='text-lg font-semibold '>{item.project}</p>
                                        <p className='text-sm'>{item.event}</p>
                                        <p className='text-sm'>{item.impact}</p>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>

                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 text-white hover:text-black " aria-label="🏥 Healthcare" />
                <div className="tab-content border-base-300  p-10 bg-blue-50">
                    <h1 className='text-4xl font-serif'>Explore Healthcare! </h1>
                    <div className='grid grid-cols-3 gap-6 bg-blue-50 p-10 '>

                        {
                            healthCareGallery.map((item) => (

                                <div key={item.id} className="relative group w-80 h-80 my-4 ">
                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg"
                                    />
                                    <div className="absolute inset-0 font-serif text-shadow-md flex flex-col items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg hover:shadow-xl">
                                        <p className='text-sm font-bold '>{item.date}</p>
                                        <p className='text-lg font-semibold '>{item.project}</p>
                                        <p  className='text-sm'>{item.initiative}</p>
                                        <p className='text-sm'>{item.event}</p>
                                        <p className='text-sm'>{item.impact}</p>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>

                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 text-white hover:text-black " aria-label="❤️ Internship" />
                <div className="tab-content border-base-300  p-10 bg-blue-50">
                    <h1 className='text-4xl font-serif'>Explore Internships! </h1>
                    <div className='grid grid-cols-3 gap-6 bg-blue-50 p-10'>

                        {
                            internshipGallery.map((item) => (

                                <div key={item.id} className="relative group w-80 h-80 my-4">
                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg"
                                    />
                                    <div className="absolute inset-0 font-serif text-shadow-md flex flex-col items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100  rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg hover:shadow-xl">
                                        <p className='text-sm font-bold '>{item.date}</p>
                                        <p className='text-lg font-semibold '>{item.company}</p>
                                        <p className='text-sm'>{item.role}</p>
                                        <p className='text-sm'>{item.impact}</p>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>
                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 text-white hover:text-black " aria-label="🤝 Volunteer" />
                <div className="tab-content border-base-300  p-10 bg-blue-50">
                    <h1 className='text-4xl font-serif'>Meet Our Amazing Volunteers!</h1>
                    <div className='grid grid-cols-3 gap-6 bg-blue-50 p-10'>

                        {
                            volunteersGallery.map((item) => (

                                <div key={item.id} className="relative group w-80 h-80 my-4 ">
                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg"
                                    />
                                    <div className="absolute inset-0 font-serif text-shadow-md flex flex-col items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 rounded-xl  transition-all duration-500 group-hover:scale-105 shadow-lg hover:shadow-xl">
                                        <p className='text-sm font-bold '>{item.date}</p>
                                        <p className='text-lg font-semibold '>{item.organization}</p>
                                        <p className='text-lg font-semibold '>{item.project}</p>
                                        <p className='text-sm'>{item.event}</p>
                                        <p className='text-sm'>{item.impact}</p>
                                    </div>
                                </div>

                            ))
                        }

                    </div>

                </div>

                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 text-white hover:text-black " aria-label="❤️ Donation" />
                <div className="tab-content border-base-300  p-10 bg-blue-50">
                    <h1 className='text-4xl font-serif '>Explore Donation! </h1>
                    <div className='grid grid-cols-3 gap-6 bg-blue-50 p-10'>

                        {
                            donationGallery.map((item) => (
                                

                                <div key={item.id} className="relative group w-80 h-80 my-4">
                                    
                                    <img
                                        src={item.image}
                                        alt="Gallery"
                                        className="w-full h-full object-fill rounded-xl transition-all duration-500 group-hover:scale-105 shadow-lg"
                                    />
                                    <div className="absolute inset-0 font-serif text-shadow-md flex flex-col items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100  rounded-xl transition-all duration-500 group-hover:scale-105 shadow-lg hover:shadow-xl  ">
                                        <p className='text-sm font-bold '>{item.date}</p>
                                        <p className='text-lg font-semibold  '>{item.project}</p>
                                        <p className='text-sm'>{item.cause}</p>
                                        <p className='text-sm'>{item.event}</p>
                                        <p className='text-sm'>{item.impact}</p>
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