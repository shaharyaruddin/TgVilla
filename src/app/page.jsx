import Banner from "@/components/home/banner/Banner";
import BeachSection from "@/components/home/beach-section/BeachSection";
import BookingSection from "@/components/home/booking-section/BookingSection";
import ExperienceHarmony from "@/components/home/experience-harmony/ExperienceHarmony";
import FeelingsBalance from "@/components/home/feelings-balance/FeelingsBalance";
import HomeSlider from "@/components/home/home-slider/HomeSlider";
import ImageZoomAnimation from "@/components/home/image-zoom-animation/ImageZoomAnimation";
import HomePosters from "@/components/home/poster/HomePosters";
import PremiumAmenities from "@/components/home/premium-amenities/PremiumAmenities";
import Roller from "@/components/home/roller/Roller";
import SearchSection from "@/components/home/search-section/SearchSection";
import HomeServices from "@/components/home/service/HomeServices";
import Testimonials from "@/components/home/testimonials/Testimonials";
import TgDetails from "@/components/home/tg-details/TgDetails";
import VillaSection from "@/components/home/welcome-villa/VillaSection";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <SearchSection />
      <BookingSection />
      <VillaSection />
      <Roller />
      <HomeSlider />
      <TgDetails/>
      <HomeServices />
      <ImageZoomAnimation />
      <FeelingsBalance />
      <HomePosters />
      <BeachSection/>
      <Testimonials />
      <PremiumAmenities />
    </div>
  );
};

export default Home;
