import Image from "next/image";
import React from "react";

const SpaServiceCard = ({ image, service, desc }) => {
  return (
    <div className="flex items-center">
      <div className="max-md:px-2 max-md:size-full">
        <Image
          className="rounded-xl object-cover max-md:w-52 max-md:h-32"
          src={image}
          alt="spa"
          width={250}
          height={250}
        />
      </div>
      {/* content */}
      <div className="flex flex-col ml-3 space-y-4 max-md:ml-1">
        <h2 className="font-cormorant text-3xl max-md:text-2xl">{service}</h2>
        <p className="font-outfit max-md:text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default SpaServiceCard;
