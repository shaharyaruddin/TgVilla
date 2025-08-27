"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { Star } from "lucide-react";
import ResortTestimonialCard from "./widgets/ResortTestimonialCard";
import TestimonialLoopSection from "../home/testimonials/widgets/Testimonial/TestimonialLoopSection";
import TestimonialReviewSection from "../home/testimonials/widgets/Testimonial/TestimonialReviewSection";

const ResortTestimonials = () => {
  // Separate JSON data for top and bottom marquees
  const topTestimonials = [
    {
      text: "Fantastic workmanship! The team renovated our bathroom with precision and care. It now feels like a luxury space. Would definitely use Refit again.",
      name: "Oliver Bennett",
      rating: 5,
    },
    {
      text: "Refit did an incredible job on our kitchen. The craftsmanship was top-notch, and the team was professional from start to finish. Highly recommend!",
      name: "Emily Carter",
      rating: 5,
    },
    {
      text: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
      name: "James Richardson",
      rating: 5,
    },
    {
      text: "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
      name: "Sophie Williams",
      rating: 5,
    },
    {
      text: "Fantastic workmanship! The team renovated our bathroom with precision and care. It now feels like a luxury space. Would definitely use Refit again.",
      name: "Oliver Bennett",
      rating: 5,
    },
  ];

  const bottomTestimonials = [
    {
      text: "From the first consultation to the final touches, Refit delivered on every promise. Our home extension is exactly what we wanted—spacious, modern, and beautifully finished!",
      name: "Charlotte Harris",
      rating: 5,
    },
    {
      text: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
      name: "Daniel Foster",
      rating: 5,
    },
    {
      text: "I couldn't be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
      name: "Sophie Williams",
      rating: 5,
    },
    {
      text: "Brilliant service! The team was communicative and exceeded my expectations. My new bathroom looks amazing!",
      name: "James Bennett",
      rating: 5,
    },
    {
      text: "Fantastic workmanship! The team renovated our bathroom with precision and care. It now feels like a luxury space. Would definitely use Refit again.",
      name: "Oliver Bennett",
      rating: 5,
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/resort/section2/image-4.avif')",
      }}
    >
      <div className="w-full min-h-screen bg-black/30 bg-opacity-50 flex flex-col items-center justify-center p-10 max-md:p-0">
      
      <TestimonialReviewSection/>


        {/* View All Button */}
        <button className="mt-10 border border-white text-white font-outfit font-semibold py-3 px-10 rounded-full hover:bg-opacity-100 transition duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default ResortTestimonials;