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
import ResortTestimonials from "@/components/resort/ResortTestimonials";
import Link from "next/link";

const page = () => {
  return (
    <>
      <DetailTopSection />
      {/* <RoomSection /> */}
      <BannerSection />
      <Link
        href="/bookings"
        className="relative px-6 py-3 rounded-2xl bg-gradient-to-r from-black via-gray-800 to-black text-white font-semibold text-base shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-gray-900 hover:to-black"
      >
        <span className="absolute inset-0 rounded-2xl  opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
        Book Now
      </Link>

      {/* <BookingSection /> */}

      <ImageSection />
      <IconSection />
      {/* <div className="bg-[#F4F4EA] w-full min-h-screen center-column max-width py-10 max-md:py-5">
        <TestimonialLoopSection />
      </div> */}

      <ResortTestimonials bgColor="#F4F4EA" showButton={false} />

      <VillaDetails />
      <BedroomSection />
      {/* <AmenitiesSection /> */}
      <PropertyDetail />
      <HouseRuleSection />
    </>
  );
};

export default page;
