import { Star } from "lucide-react";
import React from "react";

const ResortTestimonialCard = ({
 rating, name, testimonial
}) => {
  return (
    <div className="bg-white bg-opacity-90 p-6 m-3 rounded-lg shadow-lg w-[24rem] max-md:w-[18rem] flex flex-col justify-between h-[15rem]">
      <div className="">
        <div className="flex items-center mb-3">
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} className="size-4 text-black fill-black" />
          ))}
        </div>
        <p className="text-gray-800 text-base mb-3 line-clamp-3">
          {testimonial}
        </p>
      </div>
      <div className="flex items-center">
        <div className="size-10 rounded-full mr-2 bg-gray-300 flex items-center justify-center text-gray-800 font-medium capitalize">
          {name[0]}
        </div>
        <span className="text-gray-900 ">{name}</span>
      </div>
    </div>
  );
};

export default ResortTestimonialCard;
