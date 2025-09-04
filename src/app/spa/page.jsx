import TestimonialLoopSection from "@/components/home/testimonials/widgets/Testimonial/TestimonialLoopSection";
import ResortTestimonials from "@/components/resort/ResortTestimonials";
import SpaCardGridSection from "@/components/spa/SpaCardGridSection";
import SpaLuxuryTreatments from "@/components/spa/SpaLuxuryTreatments";
import SpaSecondSection from "@/components/spa/SpaSecondSection";
import SpaTopSection from "@/components/spa/SpaTopSection";
import SpaWhereExpertiseMeetsIndulgence from "@/components/spa/SpaWhereExpertiseMeetsIndulgence";
import WhereLuxuryMeetsSerenity from "@/components/spa/WhereLuxuryMeetsSerenity";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <SpaTopSection />
      <WhereLuxuryMeetsSerenity />
      <SpaSecondSection />
      <SpaCardGridSection />
      <SpaLuxuryTreatments />
      <SpaWhereExpertiseMeetsIndulgence />
      <div className=" w-full min-h-40 center-column max-width py-10 max-md:py-5">
     <ResortTestimonials />
      </div>
    </div>
  );
};

export default page;
