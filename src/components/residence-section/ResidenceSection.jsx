import React from "react";

const ResidenceSection = () => {
  return (
    <div className="h-full md:h-screen ">
      <div className="relative video-container">
        <video
          loop
          muted
          playsInline
          // {...(isMobile ? { autoPlay: true, muted: true } : { autoPlay: true })}
          autoPlay
          className="w-full h-auto"
        >
          <source src="/assets/videos/residence-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default ResidenceSection;
