import React from "react";


export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#b4fbe3]">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center transition-transform hover:scale-95 hover:border-black hover:border-[20px]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 ">On a mission to uplift each individual</h1>
              <p className="text-xl">Making a difference in lives of needy ones</p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <section className="py-16 bg-[#cce9df]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Education Support</h3>
              <p className="text-gray-600">Providing quality education and learning resources to underprivileged children</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Skill Development</h3>
              <p className="text-gray-600">Empowering youth through vocational training and skill enhancement programs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Community Welfare</h3>
              <p className="text-gray-600">Supporting communities through healthcare and social welfare initiatives</p>
            </div>
          </div>
        </div>
      </section>

  {/* About Founder Section */}
      <section className="py-16 bg-green-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-w-4 aspect-h-5 relative">
              <div className="w-full h-[500px] rounded-lg shadow-lg bg-yellow-200 hover:bg-black " >
                <h1 className="mx-auto my-auto text-black text-4xl md:text5xl hover:text-black hover:bg-white">Renu Sharma Foundation</h1>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">About Our Founder</h2>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Dr. Renu Sharma</h3>
              <p className="text-gray-900 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officia maxime laudantium iste, voluptatibus ab omnis sequi quisquam dolore similique explicabo architecto magni. Dicta aperiam voluptates ut rerum illum quasi!</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl font-bold">20+</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-yellow-950">Years of Experience</h4>
                    <p className="text-gray-900">In Education & Social Work</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xl font-bold">15+</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-yellow-950">Awards & Recognition</h4>
                    <p className="text-gray-900">For Social Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Students Supported</p>
            </div>
            <div className="p-4 transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Schools Partnered</p>
            </div>
            <div className="p-4 transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600">Community Programs</p>
            </div>
            <div className="p-4 transition-transform hover:scale-105">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Districts Reached</p>
            </div>
          </div>
        </div>
      </section>
  
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center transition-transform hover:scale-105">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Renu Sharma</h3>
              <p className="text-gray-600">Founder & President</p>
            </div>
            <div className="text-center transition-transform hover:scale-105">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
              <p className="text-gray-600">Education Director</p>
            </div>
            <div className="text-center transition-transform hover:scale-105">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Anita Patel</h3>
              <p className="text-gray-600">Community Outreach Head</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 bg-[#b4fbe3]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black ">Testimonials</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:bg-red-400 hover:text-black transition-shadow">
            <div className="text-gray-600 italic mb-4">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit facilis officia, fugiat culpa nobis, veritatis corporis praesentium commodi quibusdam voluptatem voluptate nesciunt temporibus est facere autem aliquid quisquam totam. </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mr-4 text-centre"></div>
              <div>
                <div className="font-semibold">Utkarsh Malasi</div>
                <div className="text-gray-500 text-sm">Program Beneficiary</div>
                <div className="font-semibold">Aman Jaggernal</div>
                <div className="text-gray-500 text-sm">Program Beneficiary</div>
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Photo Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" w-full h-64 aspect-w-16 aspect-h-9 bg-gray-300 rounded-full transition-transform hover:scale-105" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")' }} >
            <img src="https://unsplash.com/photos/grayscale-photo-of-3-children-smiling-1IQJ1sB1T00"/>
            </div>
            <div className="w-full h-64 aspect-w-16 aspect-h-9 bg-gray-300 rounded-lg transition-transform hover:scale-105"></div>
            <div className="w-full h-64 aspect-w-16 aspect-h-9 bg-gray-300 rounded-full transition-transform hover:scale-105"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

