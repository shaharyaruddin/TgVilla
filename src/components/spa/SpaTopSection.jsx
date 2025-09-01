import React from "react";

const SpaTopSection = () => {
  return (
    <div className='relative w-full min-h-[70vh] max-md:min-h-[40vh] max-sm:min-h-[35vh] bg-[url("/assets/spa/spa-treatment-dark-wall.webp")] bg-center bg-cover bg-no-repeat'>
      <div className="absolute w-screen min-h-[70vh] max-md:min-h-[40vh] max-sm:min-h-[35vh]   text-white bg-black/40 flex flex-col justify-center items-center">
        <h3 className="text-[6vw] font-medium max-md:text-[7vw] max-md:text-center">
          A Haven of Peace & Beauty
        </h3>
        <p className="text-xl max-2xl:text-base max-w-[80%] text-center max-md:text-sm max-sm:text-xs max-md:max-w-[90%]">
          Reconnect with your inner calm through holistic spa rituals and
          botanical skincare
        </p>
      </div>
    </div>
  );
};

export default SpaTopSection;
