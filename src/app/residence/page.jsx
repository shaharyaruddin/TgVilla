"use client";
import { usePathname } from "next/navigation";

import SearchSection from "@/components/home/search-section/SearchSection";
import OurService from "@/components/residence-section/our-services/OurService";
import OurVision from "@/components/residence-section/our-vision/OurVision";
import ResidenceBeach from "@/components/residence-section/ResidenceBeach";
import ResidenceLife from "@/components/residence-section/ResidenceLife";
import ResidenceSection from "@/components/residence-section/ResidenceSection";
import ResortBookingVillaThree from "@/components/resort/ResortBookingVillaThree";
import ResortBookingVillaTwo from "@/components/resort/ResortBookingVillaTwo";
import ResortFiveSection from "@/components/resort/ResortFiveSection";
import ResortFourthSection from "@/components/resort/ResortFourthSection";
import { useGsapCleanup } from "@/components/useGsapCleanup";

const Page = () => {
  const pathname = usePathname();
  return (
    <>
      <ResidenceSection key={pathname + "-section"} />
      <SearchSection key={pathname + "-search"} />
      <ResidenceBeach key={pathname + "-beach"} />
      <OurVision key={pathname + "-vision"} />
      <OurService key={pathname + "-service"} />
      {/* <ResidenceDetail /> */}
      {/* <WaterSection /> */}
      {/* <WaterSectionNew /> */}
      <ResortFourthSection
        key={pathname + "-fourth"}
        image="/assets/images/beach/newbeach5.jpg"
        heading="Apartment details at a Glance"
      />
      <ResortFiveSection key={pathname + "-five"} />
      <ResortBookingVillaTwo key={pathname + "-villa2"} />
      <ResortBookingVillaThree key={pathname + "-villa3"} />
      <ResidenceLife key={pathname + "-life"} />
    </>
  );
};

export default Page;
