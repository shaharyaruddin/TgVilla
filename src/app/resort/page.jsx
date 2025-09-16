import Testimonials from "@/components/home/testimonials/Testimonials";
import GuestSection from "@/components/resort/GuestSection";
import AmenitiesSection from "@/components/resort/ResortAmenitiesSection";
import ResortBookingVillaThree from "@/components/resort/ResortBookingVillaThree";
import ResortBookingVillaTwo from "@/components/resort/ResortBookingVillaTwo";
import ResortButtonSection from "@/components/resort/ResortButtonSection";
import ResortFiveSection from "@/components/resort/ResortFiveSection";
import ResortFourthSection from "@/components/resort/ResortFourthSection";
import ResortSecondSection from "@/components/resort/ResortSecondSection";
import ResortTestimonials from "@/components/resort/ResortTestimonials";
import ResortThirdSection from "@/components/resort/ResortThirdSection";
import ResortTopSection from "@/components/resort/ResortTopSection";
import React from "react";

const Resort = () => {
  return (
    <div>
      <ResortTopSection />
      <ResortSecondSection />
      <ResortThirdSection />
      <ResortFourthSection />
      <ResortFiveSection />
      <ResortBookingVillaTwo />
      <ResortBookingVillaThree />
      <GuestSection />
      <ResortTestimonials
        bgImage="/assets/images/resort/section2/image-4.webp"
        showButton={true}
      />
      <AmenitiesSection />
      <ResortButtonSection />
    </div>
  );
};

export default Resort;
