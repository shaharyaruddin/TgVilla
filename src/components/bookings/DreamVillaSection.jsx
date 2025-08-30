import React from "react";
import BookingOverlayedContent from "./BookingOverlayedContent";

const DreamVillaSection = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <BookingOverlayedContent heading={"Dream Villa"} />
      <h2 className="font-cormorant text-3xl font-[600] w-[90%] max-md:w-[95%] max-md:text-3xl max-sm:text-2xl text-center mt-4 max-2xl:text-2xl">
        JOIN OVER 400 HAPPY GUESTS WHO'VE MADE UNFORFETTABLE MEMORIES WITH US
      </h2>
      <p className="font-cormorant text-xl font-[600] w-[80%] max-xl:w-[85%] text-center max-2xl:text-base">
        Step into a world where every detail is designed for your comfort. At TG
        Luxury Stay, our exclusive villas in Cyprus offer a seamless blend of
        elegance, tranquility, and personalized service. From private pools to
        breathtaking sea views, each stay is crafted to be unforgettable.
      </p>
      <div className="grid grid-cols-4  max-xl:grid-cols-2 w-[80%] max-xl:w-[85%] max-md:w-[95%] max-md:grid-cols-1 max-md:space-y-2 max-xl:text-base max-xl:mt-2 font-cormorant text-lg font-[600] text-center  mt-5">
        <p>✨Handpicked villas in Cyprus’s most stunning locations </p>
        <p>✨Sophisticated design and high-end amenities </p>
        <p>✨Personalized support and concierge services </p>
        <p>✨Smooth, secure, and flexible booking experience </p>
      </div>
      <h3 className="font-cormorant text-xl font-[600] mt-5 max-xl:mt-2 text-center max-md:text-lg">Trusted by discerning travelers worldwide — your dream villa is just one booking away.</h3>
    </div>
  );
};

export default DreamVillaSection;
