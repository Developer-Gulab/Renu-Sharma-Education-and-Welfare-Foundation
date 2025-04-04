import React from 'react';

const Founders = () => {
    return (
        <section className="py-16 bg-[#001F3F]" data-aos="fade-up">
            <div className="container mx-auto px-4 md:px-20">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#3A6D8C]">About Our Founder And Co-founder</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-w-4 aspect-h-5 relative" data-aos="fade-right">
                        <div className="w-[450px] h-[450px] rounded-2xl shadow-2xl overflow-hidden group">
                            <img 
                                src="https://media.licdn.com/dms/image/v2/D5603AQFmGGv20J-skg/profile-displayphoto-shrink_400_400/B56ZR_Q_lxHsAg-/0/1737301949647?e=2147483647&v=beta&t=eNli3VFB3k-XCl5aWjFDsqh33-hqZUhRH0p9IxZmdTo"  // Add your image URL here
                                alt="Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-left" className="text-center">
                        <h3 className="text-xl font-semibold mb-4">Dr. Renu Sharma</h3>
                        <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officia maxime laudantium iste...</p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-blue-600 text-xl font-bold">20+</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold">Years of Experience</h4>
                                    <p className="text-gray-200">In Education & Social Work</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-blue-600 text-xl font-bold">15+</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold">Awards & Recognition</h4>
                                    <p className="text-gray-200">For Social Impact</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Co-Founders Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div data-aos="fade-left" className="flex flex-col items-center justify-center h-full text-center">
                        <h3 className="text-xl font-semibold mb-4">Co-Founder 1</h3>
                        <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officia maxime laudantium...</p>
                        {/* Add similar experience and award sections here... */}
                    </div>
                    <div className="aspect-w-4 aspect-h-5 relative" data-aos="fade-left">
                        <div className="w-[450px] h-[450px] rounded-2xl shadow-2xl overflow-hidden group">
                            <img 
                                src="https://media.licdn.com/dms/image/v2/D5603AQFmGGv20J-skg/profile-displayphoto-shrink_400_400/B56ZR_Q_lxHsAg-/0/1737301949647?e=2147483647&v=beta&t=eNli3VFB3k-XCl5aWjFDsqh33-hqZUhRH0p9IxZmdTo" // Add your Co-founder image URL here
                                alt="Co-Founder 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <br />
                {/* Co-Founder 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-w-4 aspect-h-5 relative" data-aos="fade-right">
                        <div className="w-[450px] h-[450px] rounded-2xl shadow-2xl overflow-hidden group">
                            <img 
                                src="https://media.licdn.com/dms/image/v2/D5603AQFmGGv20J-skg/profile-displayphoto-shrink_400_400/B56ZR_Q_lxHsAg-/0/1737301949647?e=2147483647&v=beta&t=eNli3VFB3k-XCl5aWjFDsqh33-hqZUhRH0p9IxZmdTo" // Add your Co-founder 2 image URL here
                                alt="Co-Founder 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-left" className="text-center">
                        <h3 className="text-xl font-semibold mb-4">Dr. Renu Sharma</h3>
                        <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officia maxime laudantium...</p>
                        {/* Add similar experience and award sections here... */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founders;