"use client";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

const FeelingsBalance = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on first render
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".video-container",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".video-container",
          start: "top 80%",
          end: "center center",
          scrub: 1,
          // markers: true
        },
      }
    );
  }, []);

  return (
    <div className="relative video-container">
      <video
        loop
        muted
        playsInline
        // {...(isMobile ? { autoPlay: true, muted: true } : { autoPlay: true })}
        autoPlay
        className="w-full h-auto"
      >
        <source src="/assets/videos/feelings-balance.mp4" type="video/mp4" />
      </video>

      {/* overlay text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-3 max-md:space-y-1 pointer-events-none">
        <h2 className="font-playfair text-6xl max-md:text-2xl text-nowrap">
          Feeling the balance
        </h2>
        <p className="max-md:text-sm">NATURAL HARMONY</p>
      </div>
    </div>
  );
};

export default FeelingsBalance;
