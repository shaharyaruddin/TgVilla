import IconSection from "@/components/Detail-2/IconSection";
import ImageSection from "@/components/Detail-2/ImageSection";
import PropertyDetail from "@/components/Detail-2/PropertyDetail";
import VillaDetails from "@/components/Detail-2/VillaDetails";
import TestimonialLoopSection from "@/components/home/testimonials/widgets/Testimonial/TestimonialLoopSection";
import AmenitiesSection from "@/components/resort/ResortAmenitiesSection";
import React from "react";

const page = () => {
  return (
    <>
      <ImageSection />
      <IconSection />
      <div className="bg-[#F4F4EA] w-full min-h-screen center-column max-width py-10 max-md:py-5">
        <TestimonialLoopSection />
      </div>
      <VillaDetails />
      <AmenitiesSection />
      <PropertyDetail />
    </>
  );
};

export default page;
