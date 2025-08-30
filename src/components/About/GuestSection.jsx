import React from "react";

const GuestSection = () => {
  return (
    <div className="relative h-[36rem] bg-[url('/assets/about/poolwithchair.jpg')] bg-cover bg-center flex items-center text-white px-4">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl mx-auto">
        <div className="flex items-center w-full md:w-1/3 md:pr-8 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-cormorant font-semibold leading-tight">
            “Every guest will find their own personal haven of peace, a retreat
            that is uniquely.
          </h2>
        </div>

        <div className="relative w-full md:w-1/2 md:pl-8 flex justify-center md:justify-end">
          <img
            src="/assets/about/cloth.jpg"
            alt="clothes"
            className="w-40 h-36 md:w-52 md:h-48 mb-4 md:mb-0 md:absolute md:top-20 md:right-64 -rotate-12 animate-float"
          />
          <img
            src="/assets/about/glass.jpg"
            alt="glass"
            className="w-40 h-36 md:w-52 md:h-48 md:absolute md:-top-24 md:right-24 rotate-12 animate-float delay-500"
          />
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .delay-500 {
            animation-delay: 0.5s;
          }
        `}
      </style>
    </div>
  );
};

export default GuestSection;
