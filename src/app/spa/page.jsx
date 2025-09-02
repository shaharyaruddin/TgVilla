import SpaCardGridSection from "@/components/spa/SpaCardGridSection";
import SpaLuxuryTreatments from "@/components/spa/SpaLuxuryTreatments";
import SpaSecondSection from "@/components/spa/SpaSecondSection";
import SpaTopSection from "@/components/spa/SpaTopSection";
import WhereLuxuryMeetsSerenity from "@/components/spa/WhereLuxuryMeetsSerenity";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <SpaTopSection />
      <SpaSecondSection />
      <SpaCardGridSection />
      {/* <WhereLuxuryMeetsSerenity/> */}
      <SpaLuxuryTreatments/>
    </div>
  );
};

export default page;
