import BedroomSection from "@/components/Detail-2/BedroomSection";
import DetailTopSection from "@/components/Detail-2/DetailTopSection";
import HouseRuleSection from "@/components/Detail-2/HouseRuleSection";
import IconSection from "@/components/Detail-2/IconSection";
import ImageSection from "@/components/Detail-2/ImageSection";
import PropertyDetail from "@/components/Detail-2/PropertyDetail";
import RoomSection from "@/components/Detail-2/RoomSection";
import VillaDetails from "@/components/Detail-2/VillaDetails";
import TestimonialLoopSection from "@/components/home/testimonials/widgets/Testimonial/TestimonialLoopSection";
import AmenitiesSection from "@/components/resort/ResortAmenitiesSection";
import React from "react";
import BannerSection from "@/components/Detail-2/BannerSection";
import BookingSection from "@/components/Detail-2/BookingSection";

const page = () => {
  return (
    <>
      <DetailTopSection />
      {/* <RoomSection /> */}
      <BannerSection />

      <BookingSection />

      <ImageSection />
      <IconSection />
      <div className="bg-[#F4F4EA] w-full min-h-screen center-column max-width py-10 max-md:py-5">
        <TestimonialLoopSection />
      </div>
      <VillaDetails />
      <BedroomSection />
      {/* <AmenitiesSection /> */}
      <PropertyDetail />
      <HouseRuleSection />
    </>
  );
};

export default page;
