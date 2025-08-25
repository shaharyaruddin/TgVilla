import React from "react";

const BannerLayerAfterAnimation = () => {
  return (
    <div className="center h-screen w-full   animation2 absolute">
      {/* tg logo */}
      <img
        src="/assets/logo/tg-villa-transparent-logo-2.png"
        alt="TG Villa Transparent Logo"
        className="absolute logoImage object-cover max-lg:hidden"
      />
      {/* circle */}
      <div
        className="absolute inset-0 z-10  circleImage2 max-lg:hidden"
        style={{
          WebkitMaskImage: `radial-gradient(circle at center, transparent 100%, black 81px)`,
          maskImage: `radial-gradient(circle at center, transparent 100%, black 81px)`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
};

export default BannerLayerAfterAnimation;
