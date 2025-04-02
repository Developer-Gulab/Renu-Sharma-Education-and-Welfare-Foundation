import { ArrowRight } from "lucide-react";

function Event() {
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
  const images = [
    "url('https://img.freepik.com/premium-photo/big-crowd-indian-women-vector-avatars-indian-woman-representing-different-statesreligions-i_1057738-35662.jpg')",
    "url('https://cdn.downtoearth.org.in/library/large/2022-02-25/0.25794500_1645773147_istock-870402320.jpg')",
    "url('https://www.smilefoundationindia.org/blog/wp-content/uploads/2022/11/Education-in-india-1024x606-1.jpg')",
  ];
  return (
    <div>
      <section>
        <div className="container mx-auto flex flex-col py-16 px-4">
          <h2 className="text-4xl text-gray-50 font-bold text-center mb-12">
            Events
          </h2>
          <div className="grid md:grid-cols-1 gap-8">
            {temp.map((program, index) => (
              <div
                key={index}
                className="flex items-center p-6 rounded-lg hover:shadow-lg transition duration-300"
              >
                <div>
                  <img
                    src={images[index].replace("url('", "").replace("')", "")}
                    alt={program.title}
                    className="w-[350px] rounded-lg"
                  />
                </div>
                <div className="pl-8">
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
}

export default Event;
