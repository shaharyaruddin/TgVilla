import React from "react";

const ResidenceSection = () => {
  return (
    <div className="h-full md:h-screen relative flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          loop
          muted
          playsInline
          autoPlay
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/residence-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Centered Text */}
      <h3 className="relative z-10 text-[12vw] uppercase font-[600] text-transparent bg-clip-text bg-[url(/assets/images/posters/text-residence.jpg)] text-center">
        tg residence
      </h3>
    </div>
  );
};

export default ResidenceSection;
