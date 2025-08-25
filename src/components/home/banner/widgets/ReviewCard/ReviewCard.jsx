import { Star } from "lucide-react";
import React from "react";

const ReviewCard = ({ comment, heading, title, description, percent, outOf }) => {
  return (
    <div className="w-[25rem] max-md:w-[22rem]  rounded-2xl text-white min-h-[12rem] p-3 backdrop-blur-xl flex flex-col justify-between">
      {/* top */}
      <div className="flex justify-between items-center">
        <h4 className=" font-crimson-text uppercase font-bold">{title}</h4>
        {/* rating */}
        <div className="flex space-x-1">
          {Array.from({ length: 5 }).map((_, index) => {
            return <Star key={index} fill="#FFCD2A" size={18} stroke="0" />;
          })}
        </div>
      </div>
      {/* comment */}
      <div className="mt-5">
        <p className="text-sm italic">"{comment}"</p>
      </div>
      {/* bottom */}

      <div className="flex justify-between items-center">
        {/* left */}
        <div className="flex flex-col ">
          <h4 className="text-xl">{heading}</h4>
          <p className="capitalize text-sm">{description}</p>
        </div>
        {/* right */}
        <div className="border-2 border-white rounded-xl p-2 center-column">
          <h4 className="text-2xl font-bold">{percent}</h4>
          <p className="text-xs">{outOf}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
