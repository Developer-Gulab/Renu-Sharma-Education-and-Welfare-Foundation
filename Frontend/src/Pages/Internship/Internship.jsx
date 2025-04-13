import React, { useState, useEffect } from "react";
import InternshipHeader from "./InternshipHeader";
import InternshipTitle from "./InternshipTitle";
import InternshipReview from "./InternshipReviews";
import Preloader from "./Preloader";

export default function Internship() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (like fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-[#0a192f] min-h-screen">
      <InternshipTitle />
      <InternshipHeader />
      <InternshipReview />
    </div>
  );
}
