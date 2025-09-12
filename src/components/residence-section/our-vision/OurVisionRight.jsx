"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import React from "react";
const OurVisionRight = () => {
 
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".welcomeRightSection", {
      scale: 0.5,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".welcomeSection",
        start: "top center",
        end: "60% 70%",
        scrub: 2,
        // markers: true,
      },
    });
  }, []);
  return (
    //OLD COLOR bg-[#F2F2F2]

    <div className="w-full h-full welcomeRightSection origin-bottom-right  flex items-center pr-10 max-lg:pr-6 max-[51.25em]:pr-0!">
      <div className="min-h-[35rem] max-xl:min-h-[25rem] max-[51.25em]:min-h-full! bg-[#F2EFE7] w-full center-column items-start! p-10 space-y-5 max-xl:p-6 max-lg:space-y-3">
        <h2 className="font-playfair text-5xl max-xl:text-4xl max-lg:text-3xl capitalize">
          tg residence
        </h2>
        <h4 className="font-cormorant text-xl font-medium italic max-lg:text-base">
          our vision
        </h4>
        <p className="text-[1.5rem] max-xl:text-lg max-lg:text-base ">
          To create the first boutique residence in Cyprus offering guests: The privacy of a luxury apartment. The comfort of a 5-star wellness suite. The freedom of self-contained living with optional à la carte services. Whether for a weekend escape, a work-from-abroad stay, or a romantic getaway, TG Residence delivers the ultimate balance between independence and indulgence.
        </p>
    
      </div>
    </div>
  );
}

export default OurVisionRight