import HomeServices from "@/components/home/service/HomeServices";
import TgDetails from "@/components/home/tg-details/TgDetails";
import VillaSection from "@/components/home/welcome-villa/VillaSection";
import OurService from "@/components/residence-section/our-services/OurService";
import OurVision from "@/components/residence-section/our-vision/OurVision";
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
      <OurVision />
      <OurService/>
      {/* <ResidenceDetail /> */}
      {/* <WaterSection /> */}
      <WaterSectionNew />
      <ResidenceLife />
    </>
  );
};

export default page;
