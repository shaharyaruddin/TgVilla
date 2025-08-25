import clsx from "clsx";
import React from "react";

const HomeSliderLeftVillasList = ({className}) => {
  return (
    <div className={clsx("w-full ml-5 max-md:ml-4 mt-10",className)}>
      <ul className="space-y-2 list-disc">
        <li className="capitalize text-lg max-md:text-base">ICONIC VILLA</li>
        <li className="capitalize text-lg max-md:text-base">OCEAN VILLAS</li>
        <li className="capitalize text-lg max-md:text-base">
          COLLECTION VILLAS
        </li>
        <li className="capitalize text-lg max-md:text-base">
          COLLECTION VILLAS
        </li>
        <li className="capitalize text-lg max-md:text-base">
          SEA LOUNGE VILLAS
        </li>
        <li className="capitalize text-lg max-md:text-base">RUSTIC VILLAS</li>
      </ul>
    </div>
  );
};

export default HomeSliderLeftVillasList;
