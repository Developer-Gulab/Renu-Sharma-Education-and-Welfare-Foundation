import React from "react";
import InternshipHeader from "./InternshipHeader";
import InternshipTitle from "./InternshipTitle";
import InternshipReview from "./InternshipReviews";
 
export default function Internship() {
  return (
    <div className="bg-[#001f3f] min-h-screen">
        <InternshipTitle/>
      <InternshipHeader />
      <InternshipReview/>
    </div>
  );
}
