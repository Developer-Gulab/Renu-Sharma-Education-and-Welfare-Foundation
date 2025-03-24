import React from "react";
import CardStack from "./CardStack";
import cardsData from "./utils/internshipdomain.json";
export default function InternshipHeader() {
   

  return (
    <div className="max-w-screen-2xl container mt-26 md:mt-12 mx-auto md:px-20 px-4">
      <div className="mt-24 md:mt-12 h-screen flex items-center justify-center">
        <CardStack items={cardsData} />
      </div>
    </div>
  );
}
