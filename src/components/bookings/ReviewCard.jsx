import React from "react";

const ReviewCard = ({ image, name, nights, villa }) => {
  return (
    <div className="relative min-h-[30rem] rounded-lg ">
      <div className="w-full  object-cover relative">
        <img src={image} alt={name} className="w-full min-h-[28rem] rounded-xl h-full object-cover" />
        <div className="w-fit min-h-6 bg-white/90 absolute bottom-2 left-3 items-center flex justify-center font-light text-sm text-yellow-700/90 rounded-lg px-2 py-2">Payment Verified</div>
      </div>
      <div className="flex flex-col w-full mt-2">
       <h2 className="font-cormorant text-black font-[600] text-2xl ">{name}</h2>
       <h3 className=" text-black/90 font-[500] text-lg mt-2">{nights} nights in {villa}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
