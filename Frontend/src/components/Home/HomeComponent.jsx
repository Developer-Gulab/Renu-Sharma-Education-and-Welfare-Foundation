import Hero from "./Hero";
import About from "./About";
import Impact from "./Impact";
import Programs from "./Programs";
import Stories from "./Stories";
import Donate from "./Donate";
import Event from "./Event";
import Leader from "./Leader";
import Feedback from "./Feedback";

const HomeComponent = () => {
  return (
    <div className="bg-[#001F3F] min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* About us */}
      <About />
      {/* Impact  */}
      <Impact />
      {/* Programs  */}
      <Programs />
      {/* stories */}
      <Stories />
      {/* Donate Section */}
      <Donate />
      {/* Events */}
      <Event />
      {/* Our Leaders */}
      <Leader />
      {/* feedback */}
      <Feedback />
    </div>
  );
};

export default HomeComponent;
