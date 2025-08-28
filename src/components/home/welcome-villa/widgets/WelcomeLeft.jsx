"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

const WelcomeLeft = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".welcomeBgImage", {
      top: "53%",
      opacity:0,
      scaleX: 0.15,
      transformOrigin: "left",
      right: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".welcomeSection",
        start: "top center",
        end: "60% 70%",
        scrub: 2,
        // markers: true,
      },
    });
    gsap.from(".welcomeImage", {
      scaleX: 0.15,
      duration: 2,
      opacity:0,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ".welcomeSection",
        start: "top center",
        end: "60% 70%",
        scrub: 2,
        // markers: true
      },
    });
  }, []);

  return (
    <div className="w-full h-full p-10  px-16 relative max-[51.25em]:min-h-[20rem]! max-[51.25em]:p-0!">
      {/* background */}
      <div className="bg-[#9A9A9A] welcomeBgImage absolute w-[85%] h-[90%] top-[50%] -translate-y-1/2 right-8 max-lg:right-5 max-[51.25em]:hidden"></div>
      {/* image */}
      <img
        src="/assets/images/about-us.webp"
        alt="welcome-image"
        className="absolute w-[85%] welcomeImage  h-[90%] object-cover max-[51.25em]:h-full! max-[51.25em]:w-full! top-[53%] -translate-y-1/2 max-[51.25em]:-translate-y-0 right-0 max-[51.25em]:static!"
      />
    </div>
  );
};

export default WelcomeLeft;
