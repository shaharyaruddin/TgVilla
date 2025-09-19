"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

const OurVisionLeft = () => {
  const containerRef = useRef(null);
  const pathname = usePathname(); // route change detect

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".welcomeBgImage1", {
        top: "53%",
        opacity: 0,
        scaleX: 0.15,
        transformOrigin: "left",
        right: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".welcomeSection1",
          start: "top center",
          end: "60% 70%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".welcomeImage1", {
        scaleX: 0.15,
        duration: 2,
        opacity: 0,
        transformOrigin: "left",
        scrollTrigger: {
          trigger: ".welcomeSection1",
          start: "top center",
          end: "60% 70%",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    // ensure proper refresh after route change
    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full p-10 px-16 relative welcomeSection1 max-[51.25em]:min-h-[20rem]! max-[51.25em]:p-0!"
    >
      {/* background */}
      <div className="bg-[#C8B29C] welcomeBgImage1 absolute w-[85%] h-[90%] top-[50%] -translate-y-1/2 right-8 max-lg:right-5 max-[51.25em]:hidden"></div>

      {/* image */}
      <img
        src="/assets/residence/8.jpg"
        alt="welcome-image"
        className="absolute w-[85%] welcomeImage1 h-[90%] object-cover max-[51.25em]:h-full! max-[51.25em]:w-full! top-[53%] -translate-y-1/2 max-[51.25em]:-translate-y-0 right-0 max-[51.25em]:static!"
      />
    </div>
  );
};

export default OurVisionLeft;
