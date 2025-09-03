import Image from "next/image";
import React from "react";

const SpaServiceCard = ({ image, service, desc }) => {
  return (
    <div className="flex items-center ">
     <div className="relative min-w-50 max-md:max-w-1/2 max-sm:min-w-36 h-52 max-md:w-full max-md:h-32 overflow-hidden rounded-xl">
  <Image
    src={image}
    alt="spa"
    fill
    className="object-cover"
  />
</div>
      {/* content */}
      <div className="flex flex-col ml-3 space-y-4 max-md:ml-1 max-md:w-1/2">
        <h2 className="font-cormorant text-3xl max-md:text-xl font-[600]">{service}</h2>
        <p className="font-outfit max-md:text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default SpaServiceCard;
