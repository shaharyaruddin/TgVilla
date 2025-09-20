import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";

export const AirbnbBrandBig = () => {
  return (
    <div className="relative flex flex-col items-center rounded-md overflow-hidden w-52 lg:w-64 bg-transparent p-4">
      <div className="flex gap-2 items-start">
        <img
          src="assets/icon/gold-left.avif"
          alt="airbnb"
          width={40}
          height={40}
        />
        <p className="text-white text-5xl font-bold mb-2">5.0</p>
        <img
          src="assets/icon/gold-right.avif"
          alt="airbnb"
          width={40}
          height={40}
        />
      </div>
      <p className="text-white text-sm">Guest Favourite</p>
      <p className="text-white text-md text-center">
        This home is in the top 5% of eligible listings based on ratings,
        reviews, and reliability
      </p>
      <div className="flex gap-2 justify-between w-full items-end">
        <div className="flex flex-col">
          <p className="text-[#ff385c] font-bold">Airbnb.com</p>
          <p className="text-white text-xs">According to guests</p>
        </div>

        <div className="flex flex-col justify-center items-center w-12 h-12 bg-[#ff385c] rounded-md text-white">
          <p className="text-xl font-bold">5%</p>
          <p className="text-[8px]">Top</p>
        </div>
      </div>
      <BorderBeam duration={8} size={100} />
    </div>
  );
};

export const AirbnbBrandSmall = () => {
  return (
    <div className="relative flex flex-col gap-4 rounded-md overflow-hidden w-40 bg-transparent p-4">
      <div className="flex gap-2 justify-center">
        <img
          src="assets/icon/gold-left.avif"
          alt="airbnb"
          width={20}
          height={20}
        />
        <p className="text-white text-xl font-bold">5.0</p>
        <img
          src="assets/icon/gold-right.avif"
          alt="airbnb"
          width={20}
          height={20}
        />
      </div>
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <p className="text-white text-xs font-bold">Guest Favourite</p>
          <p className="text-[#ff385c] text-xs font-bold">Airbnb.com</p>
        </div>
        <div className="flex flex-col justify-center items-center w-10 h-10 bg-[#ff385c] rounded-md text-white">
          <p className="text-base font-bold">5%</p>
          <p className="text-[6px]">Top</p>
        </div>
      </div>
      <BorderBeam duration={8} size={100} />
    </div>
  );
};

export const AirbnbBrand = () => {
  return (
    <>
      <div className="lg:hidden">
        <AirbnbBrandSmall />
      </div>
      <div className="hidden lg:block">
        <AirbnbBrandBig />
      </div>
    </>
  );
};
