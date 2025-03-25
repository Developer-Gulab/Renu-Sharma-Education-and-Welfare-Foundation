import { useState, useEffect } from "react";
import { ArrowRight, Heart, Users, Globe, Trees } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [donationAmount, setDonationAmount] = useState(10);
  const [customAmount, setCustomAmount] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const impactStats = [
    {
      icon: <Users className="text-blue-600 w-12 h-12" />,
      number: "5000+",
      label: "educate childrens",
    },
    {
      icon: <Globe className="text-green-600 w-12 h-12" />,
      number: "20+",
      label: "States Served",
    },
    {
      icon: <Heart className="text-red-600 w-12 h-12" />,
      number: "100+",
      label: "Active Programs",
    },
    {
      icon: <Trees className="text-green-600 w-12 h-12" />,
      number: "10000+",
      label: "trees planted",
    },
  ];

  const temp = [
    {
      title: "community",
      description: "connect with people and build community",
      hoverText: "Community",
    },
    {
      title: "Connecting with people",
      description: "Visiting various places to connect with the peoples",
      hoverText: "connect with people",
    },
    {
      title: "Education",
      description: "Providing quality education to underprivileged children",
      hoverText: "Education",
    },
  ];

  const programInitiatives = [
    {
      title: "Education",
      description: "Providing quality education to underprivileged children",
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9z" />
        </svg>
      ),
    },
    {
      title: "Women Empowerment",
      description:
        "Offers skill development and financial independence programs for women",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-user-round w-12 h-12 text-blue-600"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      ),
    },
    {
      title: "Hunger & Nutrition Support",
      description:
        "Distributes free meals, food kits to underprivileged families.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-utensils-crossed w-12 h-12 text-orange-600"
        >
          <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
          <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
          <path d="m2.1 21.8 6.4-6.3" />
          <path d="m19 5-7 7" />
        </svg>
      ),
    },
    {
      title: "Environmental Conservation",
      description:
        "Runs tree plantation drives, waste management initiatives, and clean-up campaigns.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-tree-deciduous w-12 h-12 text-green-600"
        >
          <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
          <path d="M7 16v6" />
          <path d="M13 19v3" />
          <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
        </svg>
      ),
    },
    {
      title: "Healthcare",
      description: "Ensuring accessible medical support",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-hospital w-12 h-12 text-red-600"
        >
          <path d="M12 6v4" />
          <path d="M14 14h-4" />
          <path d="M14 18h-4" />
          <path d="M14 8h-4" />
          <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
          <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
        </svg>
      ),
    },
    {
      title: "Community Development",
      description: "Empowering local communities",
      icon: (
        <svg
          className="w-12 h-12 text-gray-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5s-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
    },
  ];

  const donationAmounts = [25, 50, 100, 250];
  const images = [
    "url('https://img.freepik.com/premium-photo/big-crowd-indian-women-vector-avatars-indian-woman-representing-different-statesreligions-i_1057738-35662.jpg')",
    "url('https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg')",
    "url('https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg')",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-[#001F3F] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[98vh] text-white"
        style={{
          backgroundImage: images[currentImageIndex],
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Empowering Lives, <br /> Creating Change
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-gray-300 animate-fade-in">
            Together, we can make a difference and
            <br /> transform communities through sustainable solutions.
          </p>
          <div className="space-x-4 animate-fade-in">
            <button
              onClick={() => navigate("/donate")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
            >
              Donate for good
              <ArrowRight className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* About us */}
      <section className="mt-20 py-16">
        <div className="container mx-auto flex items-center justify-center flex-col md:flex-row px-4">
          <div className="md:w-1/2">
            <img
              src="https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg'"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-4xl text-gray-50 font-bold text-center md:text-left mb-6">
              Who are we?
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae labore, iusto quasi quisquam quo numquam illum id nemo
              laboriosam dicta dolorum. Est veniam magnam deserunt qui! Hic
              voluptatibus eum facilis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eos repellat omnis, asperiores magnam ad,
              reprehenderit nostrum porro architecto reiciendis ullam iure
              minima voluptatem exercitationem illo suscipit earum nobis
              perferendis aliquam. Consequuntur dolor expedita distinctio
              exercitationem, provident odit, officia ut vero molestias deleniti
              voluptatibus iste quae quod incidunt modi ipsum?
            </p>
            <button
              onClick={() => navigate("/about")}
              className="bg-blue-600  hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Know more
            </button>
          </div>
        </div>
      </section>

      {/* Impact  */}
      <section className="container mx-auto h-[500px] mt-10 py-16 px-4">
        <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
          Our Impact
        </h2>
        <div className="grid md:grid-cols-4 mt-24 gap-8 ">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center flex justify-center items-center  flex-col p-6 "
            >
              {stat.icon}
              <h3 className="text-4xl font-bold text-gray-100 mt-4 ">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs  */}
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
            Our Program
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programInitiatives.map((program, index) => (
              <div
                key={index}
                className="text-center  p-6  transition duration-300"
              >
                <div className="flex justify-center mb-4">{program.icon}</div>
                <h3 className="text-xl text-gray-200 font-semibold mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-400">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* stories */}
      <section>
        <div className="container mx-auto flex items-center justify-center flex-col py-16 px-4">
          <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
            Our Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {temp.map((program, index) => (
              <div
                key={index}
                className="relative text-center bg-blue-100 p-6 rounded-lg hover:shadow-lg transition duration-300"
              >
                <img
                  src={images[index].replace("url('", "").replace("')", "")}
                  alt={program.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center">{program.hoverText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
            Support Our Mission
          </h2>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-6 space-x-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setDonationAmount(amount)}
                  className={`px-4 py-2 rounded-full ${
                    donationAmount === amount
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-blue-700 hover:text-white transition duration-300`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setDonationAmount(Number(e.target.value));
                }}
                className="w-[600px] px-4 py-2 border rounded-l-full"
              />

              <button className="w-[300px] bg-green-600  hover:bg-green-700 text-white font-bold py-3 rounded-r-full transition duration-300">
                Donate ${donationAmount}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Events */}
      <section>
        <div className="container mx-auto flex flex-col py-16 px-4">
          <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
            Events
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {temp.map((program, index) => (
              <div
                key={index}
                className="flex items-center  p-6 rounded-lg hover:shadow-lg transition duration-300"
              >
                <div className="">
                  <img
                    src={images[index].replace("url('", "").replace("')", "")}
                    alt={program.title}
                    className="  w-[350px] rounded-lg"
                  />
                </div>
                <div className=" pl-8">
                  <h3 className="text-xl font-semibold mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 flex items-center transition duration-300">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
