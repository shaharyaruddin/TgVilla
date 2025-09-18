import SearchSection from "@/components/home/search-section/SearchSection";
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
import ResortBookingVillaThree from "@/components/resort/ResortBookingVillaThree";
import ResortBookingVillaTwo from "@/components/resort/ResortBookingVillaTwo";
import ResortFiveSection from "@/components/resort/ResortFiveSection";
import ResortFourthSection from "@/components/resort/ResortFourthSection";
import React from "react";

const page = () => {
  return (
    <>
      <ResidenceSection />
      <SearchSection />
      <ResidenceBeach />
      <OurVision />
      <OurService />
      {/* <ResidenceDetail /> */}
      {/* <WaterSection /> */}
      {/* <WaterSectionNew /> */}
      <ResortFourthSection
        image="/assets/images/beach/newbeach5.jpg"
        heading="Apartment details at a Glance"
      />

      <ResortFiveSection />
      <ResortBookingVillaTwo />
      <ResortBookingVillaThree />

      <ResidenceLife />
    </>
  );
};

export default page;
