import React from "react";
import TestimonialContent from "./widgets/TestimonialContent";
import TestimonialLoopSection from "./widgets/Testimonial/TestimonialLoopSection";

const Testimonials = () => {
  return (
    <div className="w-full min-h-screen center-column max-width my-10 max-md:my-5">
      <TestimonialContent/>
      <TestimonialLoopSection/>
      <div className="center mt-5">
        <button className="border border-gray-800 rounded-full p-3 py-2 capitalize">View all</button>
      </div>
    </div>
  );
}

export default Testimonials;
