import React from "react";

import TopSection from "@/components/About/TopSection";
import WhoWeAre from "@/components/About/WhoWeAre";
import AchievementSection from "@/components/About/AchievementSection";
import AboutDetailSection from "@/components/About/AboutDetailSection";
import GuestSection from "@/components/About/GuestSection";
import BottomSection from "@/components/About/BottomSection";

const About = () => {
  return (
    <div>
      <TopSection />
      <WhoWeAre />
      <AchievementSection />
      <AboutDetailSection />
      <GuestSection />
      <BottomSection />
    </div>
  );
};

export default About;
