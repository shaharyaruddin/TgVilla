import ResidenceBeach from "@/components/residence-section/ResidenceBeach";
import ResidenceDetail from "@/components/residence-section/ResidenceDetail";
import ResidenceLife from "@/components/residence-section/ResidenceLife";
import ResidenceSection from "@/components/residence-section/ResidenceSection";
import WaterSectionNew from "@/components/residence-section/water-section-new";
import WaterSection from "@/components/residence-section/WaterSection";
import ResortBookingVillaTwo from "@/components/resort/ResortBookingVillaTwo";
import React from "react";

const page = () => {
  return (
    <>
      <ResidenceSection />
      <ResidenceBeach />
      <ResidenceDetail />
      <WaterSection />
      {/* <WaterSectionNew/> */}
      <ResidenceLife />
    </>
  );
};

export default page;
