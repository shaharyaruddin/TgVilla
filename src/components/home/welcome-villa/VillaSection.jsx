import React from "react";
import WelcomeLeft from "./widgets/WelcomeLeft";
import WelcomeRight from "./widgets/WelcomeRight";

const VillaSection = () => {
  return (
    <div className="bg-[#E8E4D9] grid grid-cols-2 welcomeSection max-width w-full max-lg:min-h-[30rem]  max-[51.25em]:grid-cols-1">
      {/* left */}
      <WelcomeLeft />
      {/* right */}
      <WelcomeRight />
    </div>
  );
};

export default VillaSection;
