"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AchievementSection = () => {
  const achievements = [
    {
      value: 24,
      sign: "/7",
      label: "Personalized Support",
      desc: "Dedicated concierge service for every guest’s perfect stay.",
    },
    {
      value: 5,
      sign: "Star",
      label: "Guest Ratings",
      desc: "Consistently 5-Star Reviews Across All Platforms",
    },
    {
      value: 500,
      sign: "+",
      label: "Happy Guests Welcomed",
      desc: "Since our launch, hundreds of travelers have experienced TG luxury.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.3, // Trigger when 30% visible
  });

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 text-center">
        {achievements.map((item, index) => (
          <div key={index} className="py-6 px-6">
            {/* Value + Sign */}
            <h3 className="text-5xl font-bold text-[#6A3A1C] font-cormorant">
              {inView && (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2}
                  separator=","
                />
              )}
              <sup className="text-2xl ml-1">{item.sign}</sup>
            </h3>

            {/* Label */}
            <p className="mt-1 text-lg font-medium text-gray-900 font-cormorant">
              {item.label}
            </p>

            {/* Description */}
            <p className="mt-2 text-base font-medium text-gray-600 font-cormorant">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
