"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import RollerHeading from "./widgets/RollerHeading";
import RollingBox from "./widgets/RollingBox";

const Roller = () => {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // New smooth header animation
    gsap.from(".headerAnimation h2", {
      y: 50, // Reduced initial offset for smoother start
      opacity: 0, // Fade in
      scale: 0.95, // Slight scale for subtle zoom effect
      duration: 1.2, // Slightly longer duration for smoothness
      stagger: 0.3, // Reduced stagger for faster sequence
      ease: "power3.out", // Smooth easing for natural flow
      scrollTrigger: {
        trigger: ".headerAnimation",
        start: "top 80%", // Start earlier for better visibility
        end: "bottom 20%", // Extended end for smoother scrub
        scrub: 0.5, // Smoother scrub value
        // markers: true // Uncomment for debugging
      }
    });

    // Original animation (commented out for reference)
    /*
    gsap.from(".headerAnimation h2", {
      y: 100, // Start 100px below
      opacity: 0, // Start invisible
      duration: 1, // Animation duration
      stagger: 2,
      ease: 'linear',
      scrollTrigger: {
        trigger: ".headerAnimation",
        start: "top 20%",
        end: "bottom center",
        scrub: 1,
        // markers: true
      }
    });
    */

    // Existing ScrollTrigger for .stick
    gsap.to(".stick", {
      scrollTrigger: {
        trigger: ".stick",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
        // markers: true
      },
    });
  }, []);

  return (
    <>
      {/* Header */}
      <div className="bg-[#E8E4D9] min-h-[15rem] headerAnimation pt-8 w-full center-column capitalize text-[5vw] pt-35 max-md:pt-10 leading-none">
        <h2 className="font-bold">Exclusive Services Within the</h2>
        <h2 className="font-playfair mt-3 italic text-[#D4A017]">TG Luxury Experience</h2>
      </div>
      {/* Section */}
      <div id="about" className="bg-[#E8E4D9] relative stick flex flex-col items-center justify-center max-md:justify-start h-screen">
         <RollerHeading />
        <RollingBox />
      </div>
    </>
  );
};

export default Roller;