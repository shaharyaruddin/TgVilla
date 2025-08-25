import React from "react";

const SlideLayout = ({ title, content, icon }) => {
  return (
    <div className="w-full h-full relative bg-[#e9ecf2]   flex items-center max-md:flex-col  border border-gray-300 shadow-xl shadow-[#F1E6D3]">
      {/* left */}
      <div className="flex h-full justify-between flex-col p-6 w-[70%] max-md:w-full max-md:p-0 max-md:px-2 max-md:py-5">
        <div>
          <div className="md:hidden flex justify-center ">
        <span className="ml-10 max-md:ml-0">
          <img src={icon} alt={icon} className="size-20" />
        </span>
      </div>
          <h3 className="font-playfair font-bold text-3xl max-md:text-2xl max-sm:text-xl text-black">
            {title}
          </h3>
          <p className="text-xl  max-md:absolute bottom-5 max-md:text-base max-sm:text-sm text-black">
            {content}
          </p>
        </div>
      </div>

      {/* right */}
      <div>
        <span className="hidden md:block ml-10 max-md:ml-0">
          <img src={icon} alt={icon} className="size-40" />
        </span>
      </div>
      {/* <span className='text-[13rem] font-bold  max-md:text-[25vw] max-sm:text-[35vw] '>{number}</span> */}
    </div>
  );
};

export default SlideLayout;
