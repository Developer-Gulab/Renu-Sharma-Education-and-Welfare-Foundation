// import React, { useState } from 'react'
// import galleryMidCategoryImg from "../../data/galleryMidCategoryImg.json"

// function GalleryMid() {
//     const [isOpen,setIsOpen]=useState(false);
//         return (
//         <>
//             <div className='mt-10 bg-red-400 grid justify-center'>
//                 {
//                     galleryMidCategoryImg.map((item) => (


//                         <>
//                             <div className="collapse bg-base-100 border-base-300 border">
//                                 <div className="">
//                                   <div key={item.id} className="card  image-full w-7/12 bg-gray-500  flex justify-center m-20 h-80">
//                                         <figure>
//                                             <img
//                                                 src={item.image}
//                                                 alt="categoryImg"
//                                                 className='w-6/12'
//                                             />
//                                         </figure>
//                                         <div className="card-body">
//                                             <h2 className="card-title">{item.category}</h2>
//                                             <p>{item.para}</p>

//                                         </div>
//                                     </div>



//                                 </div>
//                                 <div className="collapse-content text-sm">
//                                     Click the "Sign Up" button in the top right corner and follow the registration process.
//                                 </div>
//                             </div>



//                         </>
//                     ))


//                 }

//             </div>
//         </>
//     )
// }

// export default GalleryMid


//  <div key={item.id} className="card  image-full w-7/12 bg-gray-500  flex justify-center m-20 h-80">
//     <figure>
//         <img
//             src={item.image}
//             alt="categoryImg" 
//             className='w-6/12'
//             />
//     </figure>
//     <div className="card-body">
//         <h2 className="card-title">{item.category}</h2>
//         <p>{item.para}</p>

//     </div>
// </div>





import React from 'react'

function GalleryMid() {
    return (
        <div className=' bg-red-200 justify-evenly p-12 '>
            <div className="tabs tabs-border bg-red-500 font-medium ">
                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 " aria-label="📚 Education" defaultChecked />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className='grid grid-cols-3 gap-3'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="" />
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="" />
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400 " aria-label="🏥 Healthcare" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="" />
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="" />
                    </div>
                </div>


                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400" aria-label="❤️ Internship" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVfWvzkY8GYq8LOTEJPCTGgOZyhK7VeZTTw&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrIk1C9bYu7cU8wHcU1y2g-J10aFn_hVCcQ&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrIk1C9bYu7cU8wHcU1y2g-J10aFn_hVCcQ&s" alt="" />
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrIk1C9bYu7cU8wHcU1y2g-J10aFn_hVCcQ&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrIk1C9bYu7cU8wHcU1y2g-J10aFn_hVCcQ&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrIk1C9bYu7cU8wHcU1y2g-J10aFn_hVCcQ&s" alt="" />
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400" aria-label="🤝 Volunteer" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WC4WwN4nmVBlW4rScNV7YWiaOOMOnlS76A&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgh-_gzfbCFBNPe7yWRzVKGLUjS64XnNHEA&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgh-_gzfbCFBNPe7yWRzVKGLUjS64XnNHEA&s" alt="" />
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvgh-_gzfbCFBNPe7yWRzVKGLUjS64XnNHEA&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WC4WwN4nmVBlW4rScNV7YWiaOOMOnlS76A&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WC4WwN4nmVBlW4rScNV7YWiaOOMOnlS76A&s" alt="" />
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400" aria-label="❤️ Donation" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="" />
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" alt="" />
                    </div>
                </div>




                { /*hover demo*/}
                <input type="radio" name="my_tabs_2" className="tab hover:bg-yellow-400" aria-label="📚 Education" />
                <div className="tab-content border-base-300 bg-base-100 p-10">
                    <div className='grid grid-cols-3 gap-4'>
                        <div className="relative group w-64 h-40 ">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
                                alt="Gallery"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                                <p className='text-sm font-bold '> Date : 25 Feb 2024</p>
                                <p className='text-lg font-semibold '> Project : Education Drive</p>
                                <p className='text-sm'>Event : Book Donation</p>
                                <p className='text-sm'> Impact : 500+ students benefited</p>
                            </div>
                        </div>
                        <div className="relative group w-64 h-40">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
                                alt="Gallery"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                                <p className='text-sm font-bold '> Date : 25 Feb 2024</p>
                                <p className='text-lg font-semibold '> Project : Education Drive</p>
                                <p className='text-sm'>Event : Book Donation</p>
                                <p className='text-sm'> Impact : 500+ students benefited</p>
                            </div>
                        </div><div className="relative group w-64 h-40">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
                                alt="Gallery"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                                <p className='text-sm font-bold '> Date : 25 Feb 2024</p>
                                <p className='text-lg font-semibold '> Project : Education Drive</p>
                                <p className='text-sm'>Event : Book Donation</p>
                                <p className='text-sm'> Impact : 500+ students benefited</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-4'>
                        <div className="relative group w-64 h-40">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s"
                                alt="Gallery"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 text-white opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                                <p className='text-sm font-bold '> Date : 25 Feb 2024</p>
                                <p className='text-lg font-semibold '> Project : Education Drive</p>
                                <p className='text-sm'>Event : Book Donation</p>
                                <p className='text-sm'> Impact : 500+ students benefited</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default GalleryMid

