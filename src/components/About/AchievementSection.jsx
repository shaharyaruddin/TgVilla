"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AchievementSection = () => {
  const achievements = [
    { value: 20, sign: "+", label: "Years of experience" },
    { value: 12, sign: "+", label: "Countries Serving" },
    { value: 10, sign: "M", label: "Satisfied Guest" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 text-center">
        {achievements.map((item, index) => (
          <div key={index} className="py-6 px-4">
            <h3 className="text-6xl font-semibold text-[#6A3A1C] font-cormorant">
              {inView && (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  separator=","
                />
              )}
              <sup className="text-2xl md:text-3xl ml-1">{item.sign}</sup>
            </h3>
            <p className="mt-2 text-xl text-gray-700 font-cormorant">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
