
import React from 'react';

const ExperienceHarmony = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Video background */}
      <video
        src="/assets/videos/experience-harmony.mov"
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
        aria-label="Background video showcasing harmony"
      ></video>
      
      {/* Centered text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <h2
          className="text-5xl max-md:text-2xl max-w-xl text-center font-playfair text-white leading-tight whitespace-pre-line"
        >
          Stop everything,
          to experience harmony.
          Allow yourself to feel.
        </h2>
      </div>
    </div>
  );
};

export default ExperienceHarmony;
